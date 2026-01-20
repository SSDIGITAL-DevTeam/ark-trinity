"use client";

import { useEffect, useRef, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function MarketGrowthChart() {
    const chartRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const labels = ["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

    // Data with animation - start from 0 if not visible
    const animatedData = isVisible
        ? [400, 550, 700, 900, 1200, 1600, 2200, 2800, 3800, 4600, 5600]
        : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const animatedAIData = isVisible
        ? [80, 100, 120, 150, 180, 220, 280, 350, 420, 500, 600]
        : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const animatedSecurityData = isVisible
        ? [50, 60, 70, 85, 100, 120, 140, 165, 195, 230, 280]
        : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const data = {
        labels,
        datasets: [
            {
                label: "Digital Transformation (DX)",
                data: animatedData,
                borderColor: "#EF4444",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderWidth: 3,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: "#EF4444",
                pointBorderColor: "#EF4444",
            },
            {
                label: "AI Integration",
                data: animatedAIData,
                borderColor: "#67E8F9",
                backgroundColor: "rgba(103, 232, 249, 0.1)",
                borderWidth: 3,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: "#67E8F9",
                pointBorderColor: "#67E8F9",
            },
            {
                label: "Data Security",
                data: animatedSecurityData,
                borderColor: "#0EA5E9",
                backgroundColor: "rgba(14, 165, 233, 0.1)",
                borderWidth: 3,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: "#0EA5E9",
                pointBorderColor: "#0EA5E9",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: "easeOutQuart" as const,
        },
        plugins: {
            legend: {
                position: "top" as const,
                align: "center" as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                    font: {
                        size: 12,
                    },
                    color: "#374151",
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context: TooltipItem<"line">) {
                        const label = context.dataset.label ?? "";
                        return `${label}: $${context.parsed.y}B`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#374151",
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                beginAtZero: true,
                max: 6000,
                ticks: {
                    stepSize: 1000,
                    color: "#374151",
                    font: {
                        size: 12,
                    },
                    callback: function (value: string | number) {
                        return value;
                    },
                },
                title: {
                    display: true,
                    text: "USD Billions",
                    color: "#374151",
                    font: {
                        size: 12,
                        weight: "bold" as const,
                    },
                },
                grid: {
                    color: "#E5E7EB",
                },
            },
        },
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-error mb-4">
                        Global Market Growth Trajectories
                    </h2>
                </div>

                {/* Chart Container */}
                <div ref={chartRef} className="relative h-[400px] md:h-[500px] mb-8">
                    <Line options={options} data={data} />

                    {/* Annotation for "We are right here" */}
                    <div className="absolute md:left-[61%] left-[62%] md:top-[45%] top-[40%] transform -translate-x-1/2 text-center pointer-events-none">
                        <div className="text-sm text-gray-600 mb-1">We are right here at</div>
                        <div className="text-sm text-gray-600">this very moment</div>
                        <div className="text-2xl mt-1">👇</div>
                    </div>

                    {/* 5600B label */}
                    <div className="absolute right-4 top-8 text-error font-bold text-lg">
                        5600B
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center">
                    <p className="text-gray-700 text-base md:text-lg">
                        <strong className="text-error">We are here:</strong>{" "}
                        <span className="text-gray-600">
                            spending is accelerating exponentially while execution systems remain scarce.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
