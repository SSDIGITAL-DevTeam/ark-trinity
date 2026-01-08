import Image from "next/image";

interface PageHeroProps {
    title: string;
    image?: string;
    alt?: string;
}

export default function PageHero({ title, image, alt }: PageHeroProps) {
    return (
        <section className="relative bg-[#121212] py-30 md:py-52 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-red-900/60 via-red-800/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-red-700/40 via-red-600/20 to-transparent pointer-events-none" />

            {image && (
                <div className="absolute right-0 top-0 h-full w-full opacity-50 pointer-events-none">
                    <Image
                        src={image}
                        alt={alt || `Hero image for ${title}`}
                        fill
                        sizes="100vw"
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#121212] to-transparent" />
                </div>
            )}

            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {title}
                </h1>
            </div>
        </section>
    );
}

