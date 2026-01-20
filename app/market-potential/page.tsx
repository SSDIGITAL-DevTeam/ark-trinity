import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import MarketGrowthChart from "@/components/charts/market-growth-chart";

export const metadata: Metadata = {
    title: "Market Potential",
    description: "Structural demand driving the next decade of enterprise transformation.",
    openGraph: {
        title: "Market Potential | ARK Trinity",
        description: "Structural demand driving the next decade of enterprise transformation.",
        images: ["/images/homepage/modern_asian_skyscraper_hd.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Market Potential | ARK Trinity",
        description: "Structural demand driving the next decade of enterprise transformation.",
        images: ["/images/homepage/modern_asian_skyscraper_hd.png"],
    },
};

export default function MarketPotentialPage() {
    return (
        <main>
            <PageHero
                title="MARKET POTENTIAL"
                subtitle="Structural demand driving the next decade of enterprise transformation"
                image="/images/market-potential/page-header.png"
            />

            {/* Digital Transformation (DX) Section */}
            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/market-potential/section-1.png"
                                    alt="Digital Transformation - Hands typing on laptop"
                                    width={800}
                                    height={560}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
                                Digital Transformation (DX)
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                Global DX spending is scaling from approximately <strong className="text-black">US$880B</strong> toward <strong className="text-black">US$4.6T by 2030</strong>, driven by enterprise modernisation and cloud-native operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artificial Intelligence (AI) Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Content */}
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
                                Artificial Intelligence (AI)
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                AI adoption is compounding across business functions, with global markets projected to exceed <strong className="text-black">US$1.8T by 2030</strong> as AI shifts from tools to embedded execution.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative order-1 md:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/market-potential/section-2.png"
                                    alt="Artificial Intelligence - Robot hand reaching human hand"
                                    width={800}
                                    height={560}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ASEAN Opportunity Section */}
            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/market-potential/section-3.png"
                                    alt="ASEAN Opportunity - Growth chart over Southeast Asia"
                                    width={800}
                                    height={560}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
                                ASEAN Opportunity
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                Southeast Asia represents one of the fastest-digitising yet under-automated regions, with DX spending expanding from <strong className="text-black">~US$102B</strong> toward <strong className="text-black">~US$295B by 2030</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Security & Infrastructure Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Content */}
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
                                Data Security & Infrastructure
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                As automation scales, data security becomes foundational, expanding alongside digital and AI adoption across regulated and cross-border operations.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative order-1 md:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/market-potential/section-4.png"
                                    alt="Data Security & Infrastructure - Cyber security concept"
                                    width={800}
                                    height={560}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compounding Demand Section */}
            <section className="relative bg-[#121212] overflow-hidden">
                {/* Red gradient on right side */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-red-900/60 via-red-800/30 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[300px] md:min-h-[350px]">
                        {/* Content */}
                        <div className="py-16 md:py-24">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                This is not a single market —<br />
                                <span className="font-normal text-gray-300">it is a compounding demand environment.</span>
                            </h2>
                        </div>

                        {/* Image - positioned at bottom */}
                        <div className="relative flex justify-center md:justify-end items-end">
                            <Image
                                src="/images/market-potential/section-5.png"
                                alt="Compounding growth visualization with gold coins and upward arrow"
                                width={800}
                                height={560}
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Now Section */}
            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-error mb-4">
                            WHY NOW
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            The inflection point between spending and execution
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/market-potential/section-6.png"
                                    alt="AI robot hand representing technological advancement"
                                    width={800}
                                    height={560}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-pretty">
                                For more than a decade, digital and AI spending <strong className="text-black">expanded steadily.</strong>
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                Today, adoption is accelerating faster than organisational capability, creating a widening execution gap between intent and outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Market Growth Chart */}
            <MarketGrowthChart />

            {/* Why ARK Trinity Section */}
            <section className="bg-[#F5F5F5] py-16 md:py-24 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-6 italic">
                                Why ARK Trinity
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-pretty">
                                ARK Trinity is positioned at this exact moment — where capital is available, transformation is mandatory, and integrated execution has become the limiting factor.
                            </p>
                        </div>

                        {/* Image with Logo */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/market-potential/section-7.png"
                                    alt="Business professional with ARK Trinity logo"
                                    width={800}
                                    height={560}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
