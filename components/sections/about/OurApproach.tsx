import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/homepage/modern_asian_skyscraper_hd.png"
              alt="Modern Asian Skyscraper representing corporate foundation"
              width={600}
              height={400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover rounded-2xl grayscale"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Approach</h3>
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              We employ a proprietary operational framework that transforms innovative models into 
              structured, highly cash-generative systems. Our ecosystem is built on strict governance, 
              quantifiable metrics, and unwavering capital discipline.
            </p>
            <div className="bg-gray-50 border-l-4 border-error p-6 rounded-r-xl shadow-sm">
              <p className="text-gray-800 text-sm leading-relaxed italic">
                <strong>Important Notice:</strong> ARK Trinity operates as a private holding entity and venture builder. 
                We are not a licensed fund manager, and we do not solicit public investments. All engagements are strictly 
                business-to-business (B2B) or involve accredited private stakeholders by invitation only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
