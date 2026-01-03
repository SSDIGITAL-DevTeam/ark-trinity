import Image from "next/image";
import Link from "next/link";

const PillarsSection = () => {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative rounded-[40px] overflow-hidden aspect-4/3">
                        <Image
                            src="/images/homepage/phil-desforges-ow1mML1sOi0-unsplash 1.png"
                            alt="Modern architecture representing growth and structure"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold text-[#FF4D4D] leading-tight mb-8">
                        The Trinity That Builds Empires of Intelligence
                    </h2>

                    <p className="text-[#333333] text-[16px] md:text-[18px] leading-relaxed mb-10 font-normal">
                        Every ARK enterprise rests on three interlocking pillars — Digital, Capital, and AI — forming a self-reinforcing ecosystem where innovation, funding, and automation compound one another.
                    </p>

                    <Link href="/about" className="btn btn-lg btn-error text-white border-none rounded-full px-12 h-[60px] text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;
