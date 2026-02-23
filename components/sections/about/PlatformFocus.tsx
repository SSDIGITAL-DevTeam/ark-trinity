import { Bot, Settings, Network, Expand, TrendingUp } from "lucide-react";

const PLATFORM_FOCUS_ITEMS = [
  {
    icon: Bot,
    title: "AI & Automations Ecosystem",
    description: "Developing scalable artificial intelligence models, automation infrastructure, and intelligent business ecosystems that redefine industries and enhance operational capabilities."
  },
  {
    icon: Settings,
    title: "Cyber \nSecurities",
    description: "Architecting resilient, multi-layered security frameworks, encryption protocols, and zero-trust architectures to safeguard critical data and digital assets against evolving threat landscapes."
  },
  {
    icon: Network,
    title: "Web3 & Blockchain Technologies",
    description: "Engineering decentralized applications (dApps), smart contracts, and next-generation blockchain networks that facilitate transparent, immutable, and borderless transactions."
  },
  {
    icon: Expand,
    title: "Business Aggregations",
    description: "Creating unified digital platforms and marketplaces that consolidate services, optimize supply chains, and foster collaborative environments for exponential growth."
  },
  {
    icon: TrendingUp,
    title: "Quantitative \nTradings",
    description: "Deploying sophisticated algorithmic trading models, high-frequency execution strategies, and data-driven market analyses to achieve superior risk-adjusted returns."
  }
];

export default function PlatformFocus() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-error max-w-5xl mx-auto leading-tight mb-8">
          A highly specialized portfolio focusing on the acquisition, incubation, and scaling of next-generation 
          technological enterprises.
        </h2>

        <div className="inline-block border-2 border-dashed border-gray-300 rounded-full px-6 py-2 mb-12">
          <span className="text-black font-semibold tracking-wider">STRUCTURED OPERATING MODELS</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-16">
          {PLATFORM_FOCUS_ITEMS.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="w-12 h-12 text-error mb-6" />
              <h3 className="font-bold text-black text-xl md:text-2xl text-center mb-4 leading-tight whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {PLATFORM_FOCUS_ITEMS.slice(3, 5).map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="w-12 h-12 text-error mb-6" />
              <h3 className="font-bold text-black text-xl md:text-2xl text-center mb-4 leading-tight whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
