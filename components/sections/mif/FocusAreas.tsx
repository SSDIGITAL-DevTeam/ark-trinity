import Image from "next/image";
import { Bot, CircleDollarSign, Boxes, Share2, Cpu } from "lucide-react";

export default function FocusAreas() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-12">
          Our Current Focus Areas
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md hover:shadow-lg transition-shadow">
            <Bot className="w-16 h-16 text-white mb-6 stroke-[1.5]" />
            <h3 className="font-bold text-white text-lg text-center">AI-Driven<br/>Business Automation</h3>
          </div>
          
          <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md hover:shadow-lg transition-shadow">
            <CircleDollarSign className="w-16 h-16 text-white mb-6 stroke-[1.5]" />
            <h3 className="font-bold text-white text-lg text-center">Digital Sales &<br/>Revenue Systems</h3>
          </div>

          <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md hover:shadow-lg transition-shadow">
            <Boxes className="w-16 h-16 text-white mb-6 stroke-[1.5]" />
            <h3 className="font-bold text-white text-lg text-center">Blockchain Infrastructure<br/>Integration</h3>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md hover:shadow-lg transition-shadow">
            <Share2 className="w-16 h-16 text-white mb-6 stroke-[1.5]" />
            <h3 className="font-bold text-white text-lg text-center">Regional SME Digital<br/>Transformation</h3>
          </div>
          
          <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md hover:shadow-lg transition-shadow">
            <Cpu className="w-16 h-16 text-white mb-6 stroke-[1.5]" />
            <h3 className="font-bold text-white text-lg text-center">AI Operating Systems<br/>for Emerging Markets</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/mif/image 40.png"
              alt="AI integration concept graphic"
              width={600}
              height={400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-8 font-medium">
              We believe Southeast Asia presents a generational opportunity in AI adoption across traditional industries.
            </p>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              ARK Trinity&apos;s objective is to architect scalable operating platforms positioned for long-term structural growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
