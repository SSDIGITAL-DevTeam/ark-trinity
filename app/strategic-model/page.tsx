import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import { Download, ArrowRight, ArrowDown } from "lucide-react";
import {
  DollarIcon,
  AISystemIcon,
  MoneyBuildingIcon,
  LoopIcon,
  EquityIcon,
} from "@/components/icons/mif-icons";
import AIRevenuePod from "@/components/sections/mif/AIRevenuePod";
import OutcomeFocus from "@/components/sections/mif/OutcomeFocus";
import StrategicParticipation from "@/components/sections/mif/StrategicParticipation";
import FocusAreas from "@/components/sections/mif/FocusAreas";
import HowEngagementWorks from "@/components/sections/mif/HowEngagementWorks";


export const metadata: Metadata = {
  title: "Strategic Model",
  description:
    "The Strategic Model — Where Capital Becomes Intelligent. A strategic capital engine for AI-powered growth.",
  openGraph: {
    title: "Strategic Model | ARK Trinity",
    description:
      "A strategic capital engine that converts investment capital into replicable digital assets across Southeast Asia.",
    images: ["/images/mif/asian_business_tech_meeting_hd.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Model | ARK Trinity",
    description:
      "A strategic capital engine that converts investment capital into replicable digital assets.",
    images: ["/images/mif/asian_business_tech_meeting_hd.png"],
  },
};

export default function MIFPage() {
  return (
    <main>
      <PageHero
        title="STRATEGIC MODEL"
        image="/images/business-signing.png"
        // subtitle="MIF is ARK Trinity’s capital deployment engine — designed to scale winning team of executors that give us the customers with growing recurring revenues."
      />

      {/* AI Revenue Pod Framework Section */}
      <AIRevenuePod />

      {/* Outcome & Focus Section */}
      <OutcomeFocus />

      {/* Strategic Participation Section */}
      <StrategicParticipation />

      {/* Our Current Focus Areas Section */}
      <FocusAreas />

      {/* How Engagement Works Section */}
      <HowEngagementWorks />

      <section className="bg-white py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/mif/asian_business_tech_meeting_hd.png"
                  alt="Professional signing business documents for MIF"
                  width={500}
                  height={350}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-error leading-tight mb-6">
                The Market Invasion Fund — Where Capital Becomes The Multiplier.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 text-pretty">
                The Market Invasion Fund (MIF) is a strategic capital engine
                that converts investment capital into replicable digital assets.
                Each SGD 300K block funds the creation of a Digital Al Business
                Engine by Digital PA, which lets ARK Trinity Investors gain
                valuation equity via ARK Trinity and secures their interest via
                Investor Management by ARK Capital.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn btn-error text-white rounded-full px-6"
                >
                  Request Investor Access
                </Link>
                <button className="hidden btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6">
                  <Download className="w-4 h-4 mr-2" />
                  Download MIF Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-white py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Protection Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Protection Principles
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    has a{" "}
                    <strong className="text-black">33 months runway</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    has a reserve of{" "}
                    <strong className="text-black">$100k</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    is invested to winning executors who delivered{" "}
                    <strong className="text-black">$1mil ARR</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Participation Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Participation Principles
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    participates directly in{" "}
                    <strong className="text-black">
                      operating sales performance
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    participates directly in exposure that is tied to{" "}
                    <strong className="text-black">
                      REAL businesses and people
                    </strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Performance Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Performance Principles
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every new invested{" "}
                    <strong className="text-black">$300k</strong> only
                    reinvested in winning team of executors that hit{" "}
                    <strong className="text-black">$1mil ARR</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every new invested{" "}
                    <strong className="text-black">$300k</strong> only
                    reinvested in delivering the service with{" "}
                    <strong className="text-black">
                      AI automation and data analysis
                    </strong>{" "}
                    to save cost
                  </span>
                </li>
              </ul>
            </div>

            {/* Profit Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Profit Principle
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every <strong className="text-black">$1mil ARR</strong>{" "}
                    achieved will{" "}
                    <strong className="text-black">raise valuation</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every <strong className="text-black">$1mil ARR</strong>{" "}
                    achieved have a chance for{" "}
                    <strong className="text-black">dividend sharing</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-error text-center mb-16">
            Milestones
          </h2>

          <div className="relative md:pt-0 pt-4">
            <div
              className="absolute hidden md:block h-0.5 bg-gray-300 z-0 left-0 right-0"
              style={{ top: "14px" }}
            />
            {/* Mobile Vertical Connecting Line */}
            <div className="absolute md:hidden w-0.5 bg-gray-300 z-0 left-[13px] top-4 bottom-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-7 h-7 bg-white border-3 md:border-4 border-error rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-error rounded-full" />
                  </div>
                  <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-1 md:h-10 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="bg-white rounded-lg p-5 md:mt-15 z-10 relative">
                  <h3 className="text-lg font-bold text-black mb-1">2027</h3>
                  <p className="text-gray-500 text-sm text-pretty">IPO ready</p>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-7 h-7 bg-white border-3 md:border-4 border-error rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-error rounded-full" />
                  </div>
                  <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-1 md:h-10 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="bg-white rounded-lg p-5 md:mt-15 z-10 relative">
                  <h3 className="text-lg font-bold text-black mb-1">2031</h3>
                  <p className="text-gray-500 text-sm text-pretty">IPO</p>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-7 h-7 bg-white border-3 md:border-4 border-error rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-error rounded-full" />
                  </div>
                  <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-1 md:h-10 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="bg-white rounded-lg p-5 md:mt-15 z-10 relative">
                  <h3 className="text-lg font-bold text-black mb-1">2033</h3>
                  <p className="text-gray-500 text-sm text-pretty">FINTECH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/contact"
              className="btn btn-error text-white rounded-full px-8"
            >
              Request Strategic Engagement
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 overflow-hidden hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1a0a0a] via-[#3d1515] to-[#5a1c1c]" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="hidden md:flex items-start justify-between">
            <div className="flex flex-col items-center text-white flex-1">
              <DollarIcon className="w-12 h-10 mb-3" />
              <span className="text-base font-medium">USD 300K</span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <AISystemIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">
                Replicable Sales System
              </span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <MoneyBuildingIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">$1M ARR</span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <LoopIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">Profit Loop</span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <EquityIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">Increase Valuation</span>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center space-y-8 text-center">
            <div className="flex flex-col items-center text-white">
              <DollarIcon className="w-14 h-12 mb-2" />
              <span className="text-base font-medium">USD 300K</span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <AISystemIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">
                Replicable Sales System
              </span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <MoneyBuildingIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">$1M ARR</span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <LoopIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">Profit Loop</span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <EquityIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">Increase Valuation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Benefits Section */}
      <section className="bg-white py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-error text-center mb-12">
            Illustrative Outcome Scenarios
          </h2>

          {/* Benefits Cards with Watermark */}
          <div className="relative">
            {/* ILLUSTRATIVE Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <span className="text-8xl md:text-9xl font-bold text-gray-200/50 select-none tracking-widest rotate-[-65deg] md:rotate-0">
                ILLUSTRATIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">~1%</h3>
                <p className="text-gray-600 text-sm">
                  Monthly return on your investment
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">2 – 5×</h3>
                <p className="text-gray-600 text-sm">Return pre-IPO</p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">5 – 20×</h3>
                <p className="text-gray-600 text-sm">Return post-IPO</p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Phase 2</h3>
                <p className="text-gray-600 text-sm">
                  Secondary listing benefits priority
                </p>
              </div>
            </div>
          </div>

          {/* Outcome Scenarios Description */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 relative overflow-hidden">
              <h3 className="text-lg font-bold text-black mb-4">
                Illustrative Outcome Scenarios (Non-Binding)
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-pretty">
                The following figures represent illustrative, high-level outcome
                scenarios derived from internal modelling, historical execution
                references, and long-term institutional planning assumptions.
                They are presented solely to provide directional context and do
                not represent guarantees, forecasts, or offers of return.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Illustrative monthly distribution scenario:</strong>{" "}
                    ~1% per month (subject to cash flow availability and
                    structure design)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>
                      Illustrative pre-IPO value multiple scenario:
                    </strong>{" "}
                    2–5× (dependent on execution, timing, and market conditions)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>
                      Illustrative post-IPO value multiple scenario:
                    </strong>{" "}
                    5–20× (highly variable and market-dependent)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Phase 2 consideration:</strong> Indicative priority
                    consideration for secondary listing participation, subject
                    to eligibility and definitive agreements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="bg-[#121212] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-error mb-4">
              Important Notice
            </h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>
                The scenarios above are illustrative and non-binding only and do
                not constitute an offer, solicitation, promise, or guarantee of
                any return or outcome.
              </p>
              <p>
                Actual results may differ materially and may include partial or
                total loss of capital.
              </p>
              <p>
                Any participation, if any, is conducted on a private, selective,
                and non-public basis, subject to definitive legal documentation
                and applicable regulations.
              </p>
              <p className="font-semibold text-gray-300">
                Nothing herein constitutes investment, legal, tax, or financial
                advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Board of Committee */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-error mb-2">
                Board of Committee
              </h2>
              <p className="text-gray-500 text-sm italic mb-8">
                Capabilities first. Titles second.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Chan Wai Sun</h4>
                  <p className="text-error text-sm">Chairman (Capital)</p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Robert Tan</h4>
                  <p className="text-error text-sm">Vice Chairman (Digital)</p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Austin Chua</h4>
                  <p className="text-error text-sm">Managing Director (AI)</p>
                </div>
              </div>
            </div>

            {/* Board of Advisors */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-error mb-2">
                Board of Advisors
              </h2>
              <p className="text-gray-500 text-sm italic mb-8">
                Achievement first. Appointment second.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Lim How Teck</h4>
                  <p className="text-gray-600 text-sm">
                    Connecting us to the right resources
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Bryan Ang</h4>
                  <p className="text-gray-600 text-sm">Automating sales</p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Isabel Wong</h4>
                  <p className="text-gray-600 text-sm">
                    Making affiliates/internet marketing like a piece of cake
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
