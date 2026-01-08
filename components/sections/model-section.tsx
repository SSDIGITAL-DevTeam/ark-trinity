"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
    title: string;
    description: string;
}

const slides: SlideData[] = [
    {
        title: "The Growth Engine:",
        description: "machines through Digital PA. Predictable MRR + scalable operations + replicable data-driven models.",
    },
    {
        title: "ARK Capital Model:",
        description: "Capital discipline through structured revenue-backed architecture to multiply intelligent digital assets across Southeast Asia.",
    },
    {
        title: "ARK AI Labs Model:",
        description: "Each USD 300K capital block builds an autonomous AI digital pod engineered to achieve $1M annual recurring revenue.",
    },
];

interface TrinityArrowProps {
    isActive: boolean;
    label: string;
    style?: React.CSSProperties;
    flipped?: boolean;
    onClick: () => void;
}


const TrinityArrow = ({ isActive, label, style, flipped, className, onClick }: TrinityArrowProps & { className?: string }) => {
    return (
        <div
            onClick={onClick}
            className={`absolute cursor-pointer select-none transition-all duration-500 ${flipped ? "-scale-y-100 -scale-x-100 hover:-scale-y-105 hover:-scale-x-105" : "hover:scale-105"} ${className}`}
            style={style}
        >
            <svg
                width="292"
                height="87"
                viewBox="0 0 292 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
            >
                <path
                    d="M241.181 0H54.5659L0 86.7598H291.382L241.181 0Z"
                    className="transition-all duration-500"
                    fill={isActive ? "#FF4D4D" : "#121212"}
                />
                <text
                    x="50%"
                    y="50%"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={`pointer-events-none select-none uppercase tracking-wider transition-transform duration-500 ${flipped ? "-scale-x-100 -scale-y-100" : ""}`}
                    style={{ transformOrigin: "center", transformBox: "fill-box" }}
                >
                    {label}
                </text>
            </svg>
        </div>
    );
};

const ModelSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, [activeSlide]);

    return (
        <section className="bg-white pb-24 pt-14 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-12">

                    {/* Left Side: Content & Slider Controls - Takes more space */}
                    <div className="w-full lg:w-3/5 space-y-5 md:space-y-10 order-2 lg:order-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FF4D4D]">
                            Ark Trinity Model
                        </h2>

                        <div className="bg-[#F5F5F5] p-8 md:p-12 rounded-[32px] min-h-[200px] flex flex-col justify-center transition-all duration-500 border border-gray-100">
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                                {slides[activeSlide].title}
                            </h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                {slides[activeSlide].description}
                            </p>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous slide"
                                className="btn btn-circle bg-black hover:bg-gray-800 text-white border-none shadow-md"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next slide"
                                className="btn btn-circle btn-error text-white border-none shadow-lg"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Trinity Shape - Fixed size, locked */}
                    <div className="w-full lg:w-2/5 flex items-center justify-center order-1 lg:order-2">
                        <div className="relative -ml-10 md:ml-0 w-[320px] h-[320px] md:w-[380px] md:h-[360px] shrink-0 transform scale-[0.6] sm:scale-90 md:scale-100 origin-center">

                            {/* ARK Digital - Top Left, rotated -60deg pointing up-right */}
                            <TrinityArrow
                                isActive={activeSlide === 0}
                                label="ARK Digital"
                                onClick={() => setActiveSlide(0)}
                                flipped={true}
                                className="bottom-40 left-12 absolute"
                                style={{
                                    transform: 'rotate(-60deg) scale(0.85)',
                                    transformOrigin: 'center center',
                                }}
                            />

                            {/* ARK Capital - Right side, rotated 60deg pointing down-right */}
                            <TrinityArrow
                                isActive={activeSlide === 1}
                                label="ARK Capital"
                                onClick={() => setActiveSlide(1)}
                                flipped={true}
                                className="bottom-8 -right-30 md:-right-16 absolute"
                                style={{
                                    transform: 'rotate(60deg) scale(0.85)',
                                    transformOrigin: 'center center',
                                }}
                            />

                            {/* ARK AI Labs - Bottom, horizontal (0deg) */}
                            <TrinityArrow
                                isActive={activeSlide === 2}
                                label="ARK AI Labs"
                                onClick={() => setActiveSlide(2)}
                                className="bottom-3 left-12 absolute"
                                style={{
                                    left: '-16px',
                                    transform: 'rotate(0deg) scale(0.85)',
                                }}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ModelSection;
