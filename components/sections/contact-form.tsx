"use client";

import { useState, FormEvent } from "react";
import CountrySelect from "@/components/ui/country-select";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [countryCode, setCountryCode] = useState("+65");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // Get honeypot value
        const formData = new FormData(e.currentTarget);
        const honeypot = formData.get("website") as string;

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    countryCode,
                    phone,
                    message,
                    honeypot,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            // Reset form
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (error) {
            setStatus("error");
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An unexpected error occurred. Please try again.");
            }
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn btn-error text-white"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from users */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                aria-hidden="true"
            />

            {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-red-700 font-medium">Failed to send message</p>
                        <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                </div>
            )}

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    disabled={status === "loading"}
                    className="input input-bordered w-full focus:input-error disabled:opacity-50"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@emailaddress.com"
                    required
                    disabled={status === "loading"}
                    className="input input-bordered w-full focus:input-error disabled:opacity-50"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Contact Number</label>
                <div className="flex gap-3">
                    <CountrySelect
                        value={countryCode}
                        onChange={setCountryCode}
                    />
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0000 0000"
                        required
                        disabled={status === "loading"}
                        className="input input-bordered w-full focus:input-error disabled:opacity-50"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">How Can We Help?</label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let us know how we can help with your project"
                    required
                    minLength={10}
                    maxLength={5000}
                    disabled={status === "loading"}
                    className="textarea textarea-bordered w-full focus:textarea-error resize-none text-base disabled:opacity-50"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-error w-full text-white text-lg font-bold disabled:opacity-70"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                    </>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
}
