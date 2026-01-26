import Image from "next/image";
import { ReactNode } from "react";

interface BioSectionProps {
  name: string;
  subtitle: ReactNode;
  bio: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imageRight?: boolean;
  roleTitle: string;
  roleContent: ReactNode;
  detailTitle?: string;
  detailContent?: ReactNode;
  bottomContent?: ReactNode;
  contentReorder?: boolean;
}

export default function BioSection({
  name,
  subtitle,
  bio,
  imageSrc,
  imageAlt,
  imageRight = true,
  roleTitle,
  roleContent,
  detailTitle,
  detailContent,
  bottomContent,
  contentReorder = false,
}: BioSectionProps) {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 border-b border-gray-200 last:border-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Introduction & Image Row */}
        <div
          className={`flex flex-col ${imageRight ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center lg:items-start mb-16`}
        >
          {/* Text Content */}
          <div className="flex-1 lg:py-8">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {name}
            </h3>
            <h4 className="text-xl md:text-2xl font-bold text-error mb-8">
              {subtitle}
            </h4>

            <div className="text-gray-900 leading-relaxed space-y-6 md:text-lg">
              {bio}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-5/12 shrink-0">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 lg:aspect-5/4 bg-error">
              <Image
                src={imageSrc}
                alt={imageAlt || name}
                fill
                quality={100}
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Role & Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Role Card */}
          <div
            className={`bg-white p-8 md:p-12 rounded-3xl ${contentReorder ? "order-2 md:order-1" : ""}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-error mb-6">
              {roleTitle}
            </h3>
            <div className="text-gray-800 leading-relaxed text-lg">
              {roleContent}
            </div>
          </div>

          {/* Details Card */}
          {(detailTitle || detailContent) && (
            <div className="bg-white p-8 md:p-12 rounded-3xl ">
              {detailTitle && (
                <h3 className="text-lg font-bold text-black mb-4">
                  {detailTitle}
                </h3>
              )}
              <div className="text-gray-800 leading-relaxed text-base space-y-2">
                {detailContent}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Content (optional) */}
        {bottomContent && (
          <div className="mt-6 bg-white p-8 md:p-12 rounded-3xl ">
            <div className="text-gray-800 leading-relaxed text-lg">
              {bottomContent}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
