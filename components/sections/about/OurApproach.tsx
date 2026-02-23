import Image from "next/image";

export default function OurApproach() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse md:flex-row">
          <div>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-6">
              Our approach combines execution capability with ecosystem alignment, enabling sustainable and measurable growth across venture initiatives.
            </p>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              ARK Trinity operates independently and is not a licensed fund manager or collective investment scheme.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/about/lianhao-qu-g3l_uPaRz7A-unsplash 1.png"
              alt="Architecture view looking up at a skyscraper"
              width={600}
              height={400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
