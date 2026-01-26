import { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle?: string | ReactNode;
    image?: string;
    alt?: string;
}

export default function PageHero({ title, subtitle, image, alt }: PageHeroProps) {
    return (
        <section className="relative bg-[#121212] py-30 md:py-52 overflow-hidden">
            {/* Left radial gradient - smooth circular */}
            <div
                className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[80%] h-[150%] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(153, 27, 27, 0.6) 0%, rgba(127, 29, 29, 0.3) 40%, transparent 70%)"
                }}
            />

            {/* Bottom-left radial gradient */}
            <div
                className="absolute -left-1/4 -bottom-1/4 w-[60%] h-[80%] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(185, 28, 28, 0.4) 0%, rgba(153, 27, 27, 0.2) 40%, transparent 70%)"
                }}
            />

            {/* Top-right radial gradient - smooth circular */}
            <div
                className="absolute -right-1/4 -top-1/4 w-[60%] h-[80%] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(153, 27, 27, 0.5) 0%, rgba(127, 29, 29, 0.25) 40%, transparent 70%)"
                }}
            />

            {image && (
                <div className="absolute right-0 top-0 h-full w-full opacity-50 pointer-events-none">
                    <Image
                        src={image}
                        alt={alt || `Hero image for ${title}`}
                        fill
                        sizes="100vw"
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#121212] to-transparent" />
                </div>
            )}

            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}

