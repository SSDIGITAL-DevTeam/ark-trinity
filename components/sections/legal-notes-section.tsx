import Image from "next/image";

const LegalNotesSection = () => {
    return (
        <section className="bg-black relative overflow-hidden">
            {/* Red gradient on left side */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-red-900/80 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20">

                    {/* Left: Image */}
                    <div className="relative z-10">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 max-w-sm md:max-w-md">
                            <Image
                                src="/images/legalnotes.png"
                                alt="Legal document signing"
                                width={400}
                                height={280}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                            Legal Notes
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            All agreements governed by Singapore law and resolved under SIAC arbitration. Regional
                            feeders comply with local regulations but follow Master Fund arbitration for cross-border
                            matters. All projections are targets and may vary with market conditions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LegalNotesSection;

