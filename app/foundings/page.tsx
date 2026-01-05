import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = {
    title: "Founding - ARK Trinity",
    description: "Three Minds. One Architecture of Intelligence. Meet the founders of ARK Trinity.",
    openGraph: {
        title: "Founding - ARK Trinity | Three Minds",
        description: "Capital multiplies, Digital executes, AI flows. Meet the founders CKH, Robert, and Austin.",
        images: ["/images/founding-creed.png"],
    }
};

export default function FoundingPage() {
    return (
        <main>
            <PageHero
                title="FOUNDING"
                image="/images/building-skyward.png"
            />

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-error leading-tight mb-6">
                                Three Minds. One<br />Architecture of Intelligence.
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                The three pillars of ARK Trinity are personified by its founders — each embodying a force of
                                creation: Capital (Exponential), Digital (Execution), AI (Effortless).
                            </p>

                            <div className="rounded-lg overflow-hidden mb-6">
                                <Image
                                    src="/images/building-skyward.png"
                                    alt="Modern skyscraper architecture illustrating growth"
                                    width={500}
                                    height={350}
                                    className="w-full h-auto object-cover grayscale aspect-5/3"
                                />
                            </div>

                            <p className="text-black font-semibold text-lg leading-relaxed">
                                Capital multiplies, Digital executes, AI flows — together<br />
                                they form the living Trinity of ARK.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#F5F5F5] rounded-xl flex items-stretch relative overflow-hidden min-h-[140px]">
                                <div className="flex-1 p-6 pr-36 z-10">
                                    <h3 className="text-lg font-bold mb-1">
                                        <span className="text-error">CKH</span>
                                        <span className="text-black"> — Capital Leverage & Multiplier</span>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Designs fund structure and financial frameworks
                                        aligning profit with purpose.
                                    </p>
                                </div>
                                <div className="absolute right-0 bottom-0 h-full w-auto aspect-square">
                                    <Image
                                        src="/images/foundings/1.png"
                                        alt="CKH - Capital Leverage"
                                        width={200}
                                        height={266}
                                        className="h-full w-full object-cover object-top brightness-110"
                                    />
                                </div>
                            </div>

                            <div className="bg-[#F5F5F5] rounded-xl flex items-stretch relative overflow-hidden min-h-[140px]">
                                <div className="flex-1 p-6 pr-36 z-10">
                                    <h3 className="text-lg font-bold mb-1">
                                        <span className="text-error">Robert</span>
                                        <span className="text-black"> — Digital Transformation & Backbone</span>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Builds regional operational backbones that
                                        scale with precision.
                                    </p>
                                </div>
                                <div className="absolute right-0 bottom-0 h-full w-auto aspect-square">
                                    <Image
                                        src="/images/foundings/2.png"
                                        alt="Robert - Digital Transformation"
                                        width={200}
                                        height={266}
                                        className="h-full w-full object-cover object-top scale-x-[-1]"
                                    />
                                </div>
                            </div>

                            <div className="bg-[#F5F5F5] rounded-xl flex items-stretch relative overflow-hidden min-h-[140px]">
                                <div className="flex-1 p-6 pr-36 z-10">
                                    <h3 className="text-lg font-bold mb-1">
                                        <span className="text-error">Austin</span>
                                        <span className="text-black"> — AI Integration & Automation</span>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Creates automation frameworks and intelligent
                                        pipelines powering each pod.
                                    </p>
                                </div>
                                <div className="absolute right-0 bottom-0 h-full w-auto aspect-square">
                                    <Image
                                        src="/images/foundings/3.png"
                                        alt="Austin - AI Integration"
                                        width={200}
                                        height={266}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                            <Image
                                src="/images/founding-creed.png"
                                alt="Founding team discussing strategy"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-error mb-8">
                                The Founding Creed
                            </h2>
                            <div className="space-y-6 text-gray-800">
                                <p>
                                    <span className="font-bold">Capital is Exponential —</span> it multiplies value, transforming intention into structure and
                                    wealth with purpose.
                                </p>
                                <p>
                                    <span className="font-bold">Digital is Execution —</span> turning systems into motion with precision and discipline.
                                </p>
                                <p>
                                    <span className="font-bold">AI is Effortless —</span> flowing through creation like breath, making complexity simple.
                                </p>
                                <p>
                                    <span className="font-bold">Together they form the architecture of intelligent growth —</span> where intention becomes
                                    empire, and empire becomes<br />legacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-16">
                        The Journey of a Living Institution
                    </h2>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2023</h3>
                                <h4 className="font-bold text-black mb-2">Spark</h4>
                                <p className="text-gray-600 text-sm">Digital PA launched in Singapore</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2024</h3>
                                <h4 className="font-bold text-black mb-2">Validation</h4>
                                <p className="text-gray-600 text-sm">Regional expansion and profitability</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2025</h3>
                                <h4 className="font-bold text-black mb-2">Formation</h4>
                                <p className="text-gray-600 text-sm">ARK Trinity Holdings incorporated</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2026</h3>
                                <h4 className="font-bold text-black mb-2">MIF Phase</h4>
                                <p className="text-gray-600 text-sm">1 begins under VCC</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-3/4 mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2027</h3>
                                <h4 className="font-bold text-black mb-2">Threshold</h4>
                                <p className="text-gray-600 text-sm">$10M ARR portfolio + IPO readiness</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2030</h3>
                                <h4 className="font-bold text-black mb-2">Institutional Ascension</h4>
                                <p className="text-gray-600 text-sm">Cross-ASEAN holding status</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-error mb-2">2033</h3>
                                <h4 className="font-bold text-black mb-2">Dynasty Era</h4>
                                <p className="text-gray-600 text-sm">Global listing & legacy fund</p>
                            </div>
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
                                    &quot;Our timeline is not a race — it&apos;s an architecture. Every milestone is a pillar, every year a layer.&quot;
                                </p>
                                <div className="font-bold text-black text-xl">
                                    CKH
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -right-5">
                                <svg width="64" height="56" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 20C0 13.3333 1.66667 7.83333 5 3.5C8.33333 -0.833333 13.3333 -3.66667 20 -5L22 1C18 2.33333 15 4.33333 13 7C11 9.66667 10 12.6667 10 16H20V36H0V20ZM28 20C28 13.3333 29.6667 7.83333 33 3.5C36.3333 -0.833333 41.3333 -3.66667 48 -5L50 1C46 2.33333 43 4.33333 41 7C39 9.66667 38 12.6667 38 16H48V36H28V20Z" fill="#EF4444" />
                                </svg>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative h-[400px] w-full md:h-[500px] md:max-w-[500px]">
                                <Image
                                    src="/images/ceo-about.png"
                                    alt="CKH - Founder Quote"
                                    fill
                                    className="object-contain object-top relative md:pl-8"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
