import Image from "next/image";
import { Maximize2, Settings, Users, ThumbsUp, TrendingUp } from "lucide-react";

const REVENUE_POD_STEPS = [
  {
    icon: Maximize2,
    text: "Identify scalable industry segments"
  },
  {
    icon: Settings,
    text: "Engineer AI-enabled revenue systems"
  },
  {
    icon: Users,
    text: "Deploy lean operational teams"
  },
  {
    icon: ThumbsUp,
    text: "Optimize capital efficiency"
  },
  {
    icon: TrendingUp,
    text: "Scale regionally through automation"
  }
];

export default function AIRevenuePod() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/mif/image 37.png"
              alt="Working on AI analytics on a tablet"
              width={600}
              height={400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
              The AI Revenue Pod Framework™
            </h2>
            <p className="text-black font-bold text-base md:text-lg mb-8 leading-relaxed">
              ARK Trinity deploys a structured operating framework designed to:
            </p>
            
            <ul className="space-y-6">
              {REVENUE_POD_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-error/30">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg font-medium">{step.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
