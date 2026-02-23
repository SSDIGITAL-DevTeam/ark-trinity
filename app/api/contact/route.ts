import { NextRequest, NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

// In-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        return forwarded.split(",")[0].trim();
    }
    const realIP = request.headers.get("x-real-ip");
    if (realIP) {
        return realIP;
    }
    return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const record = rateLimitStore.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
        return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return { allowed: false, remaining: 0 };
    }

    record.count++;
    return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

interface ContactFormData {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    message: string;
    honeypot?: string; // Hidden field - should be empty
}

export async function POST(request: NextRequest) {
    try {
        const clientIP = getClientIP(request);

        // Check rate limit
        const rateLimit = checkRateLimit(clientIP);
        if (!rateLimit.allowed) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body: ContactFormData = await request.json();
        const { name, email, countryCode, phone, message, honeypot } = body;

        // Honeypot check - if filled, it's likely a bot
        if (honeypot) {
            // Silently fail for bots
            return NextResponse.json({ success: true });
        }

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.length < 10) {
            return NextResponse.json(
                { error: "Message must be at least 10 characters long." },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { error: "Message must be less than 5000 characters." },
                { status: 400 }
            );
        }

        // Check environment variables
        const brevoApiKey = process.env.BREVO_API_KEY;
        const adminEmail = process.env.ADMIN_EMAIL;
        const senderEmail = process.env.SENDER_EMAIL || "noreply@arktrinity.com.sg";
        const senderName = process.env.SENDER_NAME || "ARK Trinity";

        if (!brevoApiKey || !adminEmail) {
            console.error("Missing Brevo configuration environment variables");
            return NextResponse.json(
                { error: "Server configuration error. Please try again later." },
                { status: 500 }
            );
        }

        // Initialize Brevo API
        const brevo = new BrevoClient({
            apiKey: brevoApiKey,
        });

        // Format phone number
        const fullPhone = `${countryCode} ${phone}`;

        // Build and send email message via Brevo
        await brevo.transactionalEmails.sendTransacEmail({
            subject: `New Contact Form Submission from ${name}`,
            sender: { name: senderName, email: senderEmail },
            to: [{ email: adminEmail, name: "Admin" }],
            replyTo: { email: email, name: name },
            htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">
                            <a href="mailto:${email}" style="color: #dc2626;">${email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullPhone}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px;">
                    <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
                </div>
                <p style="margin-top: 30px; color: #666; font-size: 12px; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was sent from the ARK Trinity contact form.
                </p>
            </div>
        `,
            textContent: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${fullPhone}

Message:
${message}

---
This email was sent from the ARK Trinity contact form.
        `
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An error occurred while sending your message. Please try again later." },
            { status: 500 }
        );
    }
}
