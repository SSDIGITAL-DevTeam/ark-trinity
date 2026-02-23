import Image from "next/image";

export default function OutcomeFocus() {
  return (
    <section className="bg-white pb-16 md:pb-24 pt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1 max-w-lg">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-8">
              Each initiative is structured as a focused venture build with defined execution milestones.
            </p>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Our emphasis is operational performance, capital discipline, and long-term value creation.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden flex justify-end">
            <Image
              src="/images/mif/image 38.png"
              alt="Business professional reviewing charts"
              width={500}
              height={350}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full max-w-[500px] h-auto object-cover rounded-2xl shadow-lg border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
