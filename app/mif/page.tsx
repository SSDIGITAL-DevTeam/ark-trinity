import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import { Download } from "lucide-react";
import { DollarIcon, AISystemIcon, MoneyBuildingIcon, LoopIcon, EquityIcon } from "@/components/icons/mif-icons";

export const metadata: Metadata = {
    title: "Market Invasion Fund (MIF)",
    description: "The Market Invasion Fund — Where Capital Becomes Intelligent. A strategic capital engine for AI-powered growth.",
    openGraph: {
        title: "Market Invasion Fund (MIF) | ARK Trinity",
        description: "A strategic capital engine that converts investment capital into replicable digital assets across Southeast Asia.",
        images: ["/images/mif/elsa-olofsson-5fiN4kVgj44-unsplash 1.png"],
    }
};

export default function MIFPage() {
    return (
        <main>
            <PageHero
                title="MARKET INVASION FUND"
                image="/images/business-signing.png"
            />

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                        <div className="relative">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/images/mif/elsa-olofsson-5fiN4kVgj44-unsplash 1.png"
                                    alt="Professional signing business documents for MIF"
                                    width={500}
                                    height={350}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-error leading-tight mb-6">
                                The Market Invasion Fund — Where Capital Becomes Intelligent.
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                The Market Invasion Fund (MIF) is a strategic capital engine that converts investment capital
                                into replicable digital assets. Each SGD 300K block funds the creation of a Digital Al Business Engine by
                                Digital PA, which lets ARK Trinity Investors gain valuation equity via ARK Trinity and secures their interest via
                                Investor Management by ARK Capital.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="btn btn-error text-white rounded-full px-6">
                                    Request Investor Access
                                </button>
                                <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download MIF Brief
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-error text-center mb-12">
                        Updated Investor Terms:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold text-black mb-2">1% monthly coupon<br />(12% p.a.)</h3>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold text-black mb-2">2x capital<br />redemption after 12-18 months</h3>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold text-black mb-2">5x IPO / Pre-IPO equity<br />option at valuation cap SGD 50M</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold text-black mb-2">Allocation: 70% pods, 20% AI IP,<br />10% governance & reserves</h3>
                        </div>

                        <div className="bg-white rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold text-black mb-2">MIF operates under Singapore VCC,<br />with regional feeder funds pooling local capital</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-10 md:py-14 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#1a0a0a] via-[#3d1515] to-[#5a1c1c]" />

                <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
                    <div className="hidden md:flex items-start justify-between">
                        <div className="flex flex-col items-center text-white flex-1">
                            <DollarIcon className="w-12 h-10 mb-3" />
                            <span className="text-base font-medium">USD 300K</span>
                        </div>

                        <span className="text-white/80 text-2xl mt-2">→</span>

                        <div className="flex flex-col items-center text-white flex-1">
                            <AISystemIcon className="w-12 h-12 mb-3" />
                            <span className="text-base font-medium">AI System</span>
                        </div>

                        <span className="text-white/80 text-2xl mt-2">→</span>

                        <div className="flex flex-col items-center text-white flex-1">
                            <MoneyBuildingIcon className="w-12 h-12 mb-3" />
                            <span className="text-base font-medium">$1M ARR</span>
                        </div>

                        <span className="text-white/80 text-2xl mt-2">→</span>

                        <div className="flex flex-col items-center text-white flex-1">
                            <LoopIcon className="w-12 h-12 mb-3" />
                            <span className="text-base font-medium">Profit Loop</span>
                        </div>

                        <span className="text-white/80 text-2xl mt-2">→</span>

                        <div className="flex flex-col items-center text-white flex-1">
                            <EquityIcon className="w-12 h-12 mb-3" />
                            <span className="text-base font-medium">Equity Conversion</span>
                        </div>
                    </div>

                    <div className="md:hidden flex flex-wrap justify-center gap-x-8 gap-y-8 text-center">
                        <div className="flex flex-col items-center text-white w-[40%]">
                            <DollarIcon className="w-8 h-6 mb-1" />
                            <span className="text-xs">USD 300K</span>
                        </div>
                        <div className="flex flex-col items-center text-white w-[40%]">
                            <AISystemIcon className="w-8 h-8 mb-1" />
                            <span className="text-xs">AI System</span>
                        </div>
                        <div className="flex flex-col items-center text-white w-[40%]">
                            <MoneyBuildingIcon className="w-8 h-8 mb-1" />
                            <span className="text-xs">$1M ARR</span>
                        </div>
                        <div className="flex flex-col items-center text-white w-[40%]">
                            <LoopIcon className="w-8 h-8 mb-1" />
                            <span className="text-xs">Profit Loop</span>
                        </div>
                        <div className="flex flex-col items-center text-white w-[40%]">
                            <EquityIcon className="w-8 h-8 mb-1" />
                            <span className="text-xs">Equity Conversion</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F5F5F5] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-error text-center mb-16">
                        Milestones
                    </h2>

                    <div className="relative md:pt-0 pt-4">
                        <div className="absolute hidden md:block h-0.5 bg-gray-300 z-0 left-0 right-0" style={{ top: '14px' }} />
                        {/* Mobile Vertical Connecting Line */}
                        <div className="absolute md:hidden w-0.5 bg-gray-300 z-0 left-[13px] top-4 bottom-0" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="relative pl-10 md:pl-0">
                                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                    <div className="w-7 h-7 bg-white border-3 border-error rounded-full flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-error rounded-full" />
                                    </div>
                                    <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-0.5 md:h-5 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                                </div>
                                <div className="bg-white rounded-lg p-5 md:mt-10 z-10 relative">
                                    <h3 className="text-lg font-bold text-black mb-1">2027</h3>
                                    <p className="text-gray-500 text-sm">First portfolio units IPO-ready</p>
                                </div>
                            </div>

                            <div className="relative pl-10 md:pl-0">
                                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                    <div className="w-7 h-7 bg-white border-3 border-error rounded-full flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-error rounded-full" />
                                    </div>
                                    <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-0.5 md:h-5 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                                </div>
                                <div className="bg-white rounded-lg p-5 md:mt-10 z-10 relative">
                                    <h3 className="text-lg font-bold text-black mb-1">2031</h3>
                                    <p className="text-gray-500 text-sm">Institutional buyout</p>
                                </div>
                            </div>

                            <div className="relative pl-10 md:pl-0">
                                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                    <div className="w-7 h-7 bg-white border-3 border-error rounded-full flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-error rounded-full" />
                                    </div>
                                    <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-0.5 md:h-5 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                                </div>
                                <div className="bg-white rounded-lg p-5 md:mt-10 z-10 relative">
                                    <h3 className="text-lg font-bold text-black mb-1">2033</h3>
                                    <p className="text-gray-500 text-sm">Global AI expansion</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <button className="btn btn-error text-white rounded-full px-8">
                            Join MIF
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
