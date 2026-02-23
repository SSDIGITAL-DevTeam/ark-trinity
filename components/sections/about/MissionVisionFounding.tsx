import Image from "next/image";

const FOUNDING_STORY_STEPS = [
  {
    year: "2023",
    description: "The Brand, Digital Personal Assistant, established to serve fragmented communications, overlapping works and inefficiencies works delivered by digital agencies."
  },
  {
    year: "2024",
    description: "Rolling out of “Digital Marketing Assistant” (CMO-in-a-box) to replace a full-fledged digital and AI specialists with the cost of 1 headcount and 1 point-of-contact communication."
  },
  {
    year: "2025",
    description: "Established Ark Trinity Holding, an AI-native holding institution that uses digital transformation and automation to multiply revenue, customers, and values across scalable businesses. Provide a “leads to appointments” AI empowered communication that linked with omnichannel integration in Play/App store.",
    highlight: true
  },
  {
    year: "2026",
    description: "Develop an AI operating system that linked AI-powered business functions such as AI HR, AI FINANCE, AI MARKETING & SALES to be a true Digital PA to all businesses that are moving towards fast-scaling."
  }
];

export default function MissionVisionFounding() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-error mb-8">
              Mission | Vision
            </h2>

            <div className="relative aspect-video bg-gray-300 rounded-lg overflow-hidden mb-8 shadow-md">
              <Image
                src="/images/about/asian_collaborative_hands_hd.png"
                alt="Team collaboration for ARK Trinity mission"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="bg-white rounded-lg p-6 mb-4 shadow-sm border border-gray-100">
              <h3 className="font-bold text-black text-lg mb-2">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                To build, own, and scale AI-enabled operating businesses by
                unifying capital, digital transformation, and automation into
                a single execution architecture.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-black text-lg mb-2">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                To become a publicly listed AI holding institution that
                compounds revenue, customers, and long-term value across
                scalable businesses in Southeast Asia and beyond.
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
                {FOUNDING_STORY_STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 bg-error rounded-lg p-5 text-white shadow-sm">
                      <div className="text-2xl font-bold mb-2">{step.year}</div>
                      <p className={`text-sm leading-relaxed text-pretty ${step.highlight ? '' : 'opacity-90'}`}>
                        {step.highlight ? <b>{step.description}</b> : step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
