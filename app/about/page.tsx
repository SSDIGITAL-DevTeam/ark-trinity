import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about ARK Trinity - Founded with Vision. Built with Discipline. Driven by Destiny.",
    openGraph: {
        title: "About ARK Trinity | Vision & Mission",
        description: "Founded with Vision. Built with Discipline. Driven by Destiny. Transforming AI innovation into permanent enterprises.",
        images: ["/images/about/embe-sublett-nxZDMUQhN4o-unsplash 1.png"],
    }
};

export default function AboutPage() {
    return (
        <main>
            <PageHero
                title="ABOUT US"
                image="/images/homepage/modern_asian_skyscraper_hd.png"
            />

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/images/about/abbe-sublett-nxZDMUQhN4o-unsplash 1.png"
                                    alt="Modern skyscraper representing ARK Trinity's robust foundation"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-full h-full bg-red-500/20 rounded-lg -z-10" />
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-error leading-tight mb-6">
                                Founded with Vision. Built with Discipline. Driven by Destiny.
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                ARK Trinity was born from a decade of building digital systems and studying wealth creation
                                patterns across cultures. Founded on the belief that intelligence, when structured and disciplined,
                                can outperform capital itself, the company merges AI, human systems, and conscious leadership
                                into one institutional ecosystem.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white pt-12 md:pt-16 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="relative flex flex-col md:flex-row items-center">

                        <div className="w-full md:w-1/2 flex flex-col justify-end relative z-10 pb-8 md:pb-0 mb-12">
                            <div className="bg-gray-100 rounded-lg p-5 md:p-6 relative inline-block">
                                <p className="text-gray-600 leading-relaxed mb-3">
                                    &quot;I&apos;ve seen how capital chases technology and how technology outruns consciousness. ARK
                                    Trinity is my answer — a bridge between all three.&quot;
                                </p>
                                <div className="font-bold text-black text-xl">
                                    CKH, Founder & Chief Architect
                                </div>
                            </div>

                            <div className="absolute bottom-0 right-5 lg:-bottom-5 lg:-right-5">
                                <svg width="64" height="56" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20C0 13.3333 1.66667 7.83333 5 3.5C8.33333 -0.833333 13.3333 -3.66667 20 -5L22 1C18 2.33333 15 4.33333 13 7C11 9.66667 10 12.6667 10 16H20V36H0V20ZM28 20C28 13.3333 29.6667 7.83333 33 3.5C36.3333 -0.833333 41.3333 -3.66667 48 -5L50 1C46 2.33333 43 4.33333 41 7C39 9.66667 38 12.6667 38 16H48V36H28V20Z" fill="#EF4444" />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative h-[400px] w-full md:h-[500px] md:max-w-[500px] rounded-lg overflow-hidden">
                                <Image
                                    src="/images/ceo-about.png"
                                    alt="CKH, Founder & Chief Architect of ARK Trinity"
                                    fill
                                    className="object-contain object-top relative md:pl-8"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-8">
                                Mission & Vision
                            </h2>

                            <div className="relative aspect-video bg-gray-300 rounded-lg overflow-hidden mb-8 shadow-md">
                                <Image
                                    src="/images/about/asian_collaborative_hands_hd.png"
                                    alt="Team collaboration for ARK Trinity mission"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="bg-white rounded-lg p-6 mb-4">
                                <h3 className="font-bold text-black text-lg mb-2">Mission</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To institutionalise intelligence — transforming AI innovation into profitable, purposeful, and
                                    permanent enterprises reshaping Southeast Asia.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg p-6">
                                <h3 className="font-bold text-black text-lg mb-2">Vision</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    By 2033, ARK Trinity becomes a global institution of intelligent capital — a network of AI-
                                    driven companies linked by shared data, shared value, and shared purpose.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                                Founding Story
                            </h2>

                            <div className="relative">
                                <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gray-300" />

                                <div className="space-y-6">
                                    <div className="flex gap-6">
                                        <div className="relative z-10">
                                            <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-error rounded-lg p-5 text-white">
                                            <div className="text-2xl font-bold mb-2">2023</div>
                                            <p className="text-sm leading-relaxed opacity-90">
                                                Digital PA proves automation can create self-scaling AI businesses.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="relative z-10">
                                            <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-error rounded-lg p-5 text-white">
                                            <div className="text-2xl font-bold mb-2">2025</div>
                                            <p className="text-sm leading-relaxed opacity-90">
                                                ARK Trinity Holdings incorporated to unify Digital (Execution),
                                                Capital (Expansion), and AI (Intelligence).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="relative z-10">
                                            <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-error rounded-lg p-5 text-white">
                                            <div className="text-2xl font-bold mb-2">2026</div>
                                            <p className="text-sm leading-relaxed opacity-90">
                                                Market Invasion Fund (MIF) launched under VCC master fund structure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] pb-16 md:pb-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                            Core Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            The principles that guide our architecture of intelligent growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Discipline */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                                <div className="w-4 h-4 bg-error rounded-full" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Discipline</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Rigorous adherence to data-driven strategies and structural precision.
                            </p>
                        </div>

                        {/* Integrity */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                                <div className="w-4 h-4 bg-error rounded-full" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Integrity</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Unwavering commitment to transparent, ethical, and sustainable value creation.
                            </p>
                        </div>

                        {/* Consciousness */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                                <div className="w-4 h-4 bg-error rounded-full" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Consciousness</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Awareness of our impact on society, economy, and the future of intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div>
                            <p className="text-error text-sm mb-6">
                                Digital builds revenue. Capital multiplies it. AI evolves it — this is how ARK Trinity turns
                                technology into empire and empire into legacy.
                            </p>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
                                Three Pillars. One Intelligent Engine. Infinite Scale.
                            </h2>

                            <p className="text-black text-sm leading-relaxed">
                                Digital PA creates revenue. ARK Capital amplifies scale. ARK AI Labs powers intelligence.
                                Together they form a living architecture — an engine of growth that learns, evolves, and
                                compounds across ASEAN.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="rounded-lg overflow-hidden">
                                <Image
                                    src="/images/about/modern_asian_tech_office_hd.png"
                                    alt="Modern office architecture symbolizing ARK Trinity growth"
                                    width={600}
                                    height={400}
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
