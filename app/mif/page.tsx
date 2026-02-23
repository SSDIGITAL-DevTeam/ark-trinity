import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import { Download, ArrowRight, ArrowDown, Maximize2, Settings, Users, ThumbsUp, TrendingUp, User, LineChart, Target, Globe, Bot, CircleDollarSign, Boxes, Share2, Cpu } from "lucide-react";
import {
  DollarIcon,
  AISystemIcon,
  MoneyBuildingIcon,
  LoopIcon,
  EquityIcon,
} from "@/components/icons/mif-icons";

export const metadata: Metadata = {
  title: "Strategic Model",
  description:
    "The Strategic Model — Where Capital Becomes Intelligent. A strategic capital engine for AI-powered growth.",
  openGraph: {
    title: "Strategic Model | ARK Trinity",
    description:
      "A strategic capital engine that converts investment capital into replicable digital assets across Southeast Asia.",
    images: ["/images/mif/asian_business_tech_meeting_hd.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Model | ARK Trinity",
    description:
      "A strategic capital engine that converts investment capital into replicable digital assets.",
    images: ["/images/mif/asian_business_tech_meeting_hd.png"],
  },
};

export default function MIFPage() {
  return (
    <main>
      <PageHero
        title="STRATEGIC MODEL"
        image="/images/business-signing.png"
        // subtitle="MIF is ARK Trinity’s capital deployment engine — designed to scale winning team of executors that give us the customers with growing recurring revenues."
      />

      {/* AI Revenue Pod Framework Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden">
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
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-error/30">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg">Identify scalable industry segments</span>
                </li>
                
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-error/30">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg">Engineer AI-enabled revenue systems</span>
                </li>
                
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-error/30">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg">Deploy lean operational teams</span>
                </li>
                
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-error/30">
                    <ThumbsUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg">Optimize capital efficiency</span>
                </li>
                
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center shrink-0 shadow-sm shadow-error/30">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg">Scale regionally through automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome & Focus Section */}
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
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Participation Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-6">
            Strategic Participation
          </h2>
          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16 text-base md:text-lg">
            ARK Trinity is currently engaging with a limited number of experienced strategic stakeholders who are interested in participating in early-stage AI-enabled venture development.
          </p>

          <h3 className="text-center font-bold text-black mb-8 text-lg">
            Participation discussions are:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 flex items-center">
              <span className="text-4xl md:text-5xl font-bold text-error mr-4">01</span>
              <span className="font-bold text-black leading-tight text-sm">Conducted privately</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex items-center">
              <span className="text-4xl md:text-5xl font-bold text-error mr-4">02</span>
              <span className="font-bold text-black leading-tight text-sm">Structured via<br/>formal documentation</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex items-center">
              <span className="text-4xl md:text-5xl font-bold text-error mr-4">03</span>
              <span className="font-bold text-black leading-tight text-sm">Subject to<br/>eligibility review</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex items-center">
              <span className="text-4xl md:text-5xl font-bold text-error mr-4">04</span>
              <span className="font-bold text-black leading-tight text-sm">Not publicly offered</span>
            </div>
          </div>

          <h3 className="text-center font-bold text-black mb-8 text-lg">
            We value partners who bring:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 flex items-center gap-4">
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5003 27.0832C38.4834 27.0832 43.3337 22.2329 43.3337 16.2498C43.3337 10.2668 38.4834 5.4165 32.5003 5.4165C26.5172 5.4165 21.667 10.2668 21.667 16.2498C21.667 22.2329 26.5172 27.0832 32.5003 27.0832Z" stroke="#FF3541" stroke-width="5.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.875 59.5835C56.875 46.1217 45.9618 35.2085 32.5 35.2085C19.0382 35.2085 8.125 46.1217 8.125 59.5835" stroke="#FF3541" stroke-width="5.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.4997 59.5835L37.9163 52.8127L32.4997 35.2085L27.083 52.8127L32.4997 59.5835Z" stroke="#FF3541" stroke-width="5.41667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <span className="font-bold text-black leading-tight text-sm">Entrepreneurial<br/>experience</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex items-center gap-4">
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.8752 21.6667C52.9481 21.6667 50.7543 25.5667 51.6481 28.4647L42.0335 38.1063C41.221 37.8626 40.0293 37.8626 39.2168 38.1063L32.3106 31.2001C33.2314 28.3022 31.0377 24.3751 27.0835 24.3751C23.1564 24.3751 20.9356 28.2751 21.8564 31.2001L9.50641 43.523C6.6085 42.6292 2.7085 44.823 2.7085 48.7501C2.7085 51.7292 5.146 54.1667 8.12516 54.1667C12.0522 54.1667 14.246 50.2667 13.3522 47.3688L25.6752 35.0188C26.4877 35.2626 27.6793 35.2626 28.4918 35.0188L35.3981 41.9251C34.4772 44.823 36.671 48.7501 40.6252 48.7501C44.5522 48.7501 46.7731 44.8501 45.8522 41.9251L55.4939 32.3105C58.3918 33.2042 62.2918 31.0105 62.2918 27.0834C62.2918 24.1042 59.8543 21.6667 56.8752 21.6667Z" fill="#FF3541"/>
<path d="M40.6252 24.375L43.171 18.7688L48.7502 16.25L43.171 13.7313L40.6252 8.125L38.1335 13.7313L32.5002 16.25L38.1335 18.7688L40.6252 24.375ZM9.47933 29.7917L10.8335 24.375L16.2502 23.0208L10.8335 21.6667L9.47933 16.25L8.12516 21.6667L2.7085 23.0208L8.12516 24.375L9.47933 29.7917Z" fill="#FF3541"/>
</svg>

              <span className="font-bold text-black leading-tight text-sm">Strategic insight</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex items-center gap-4">
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.771 22.173C7.05266 16.4855 7.89495 12.9376 10.4191 10.4189C12.9379 7.89471 16.4858 7.05242 22.1733 6.77075M58.2293 22.173C57.9477 16.4855 57.1054 12.9376 54.5812 10.4189C52.0625 7.89471 48.5145 7.05242 42.827 6.77075M42.827 58.2291C48.5145 57.9474 52.0625 57.1051 54.5812 54.581C57.1054 52.0622 57.9477 48.5143 58.2293 42.8268M22.1733 58.2291C16.4858 57.9474 12.9379 57.1051 10.4191 54.581C7.89495 52.0622 7.05266 48.5143 6.771 42.8268" stroke="#FF3541" stroke-width="4.0625" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.1783 30.6528C53.8364 31.4762 54.1668 31.8905 54.1668 32.4999C54.1668 33.1093 53.8364 33.5237 53.1783 34.347C50.2181 38.052 42.6591 46.0416 32.5002 46.0416C22.3412 46.0416 14.7822 38.052 11.822 34.347C11.1639 33.5237 10.8335 33.1093 10.8335 32.4999C10.8335 31.8905 11.1639 31.4762 11.822 30.6528C14.7822 26.9478 22.3412 18.9583 32.5002 18.9583C42.6591 18.9583 50.2181 26.9478 53.1783 30.6528Z" stroke="#FF3541" stroke-width="4.0625"/>
<path d="M37.9168 32.4999C37.9168 31.0633 37.3461 29.6856 36.3303 28.6698C35.3145 27.6539 33.9368 27.0833 32.5002 27.0833C31.0636 27.0833 29.6858 27.6539 28.67 28.6698C27.6542 29.6856 27.0835 31.0633 27.0835 32.4999C27.0835 33.9365 27.6542 35.3143 28.67 36.3301C29.6858 37.3459 31.0636 37.9166 32.5002 37.9166C33.9368 37.9166 35.3145 37.3459 36.3303 36.3301C37.3461 35.3143 37.9168 33.9365 37.9168 32.4999Z" stroke="#FF3541" stroke-width="4.0625"/>
</svg>

              <span className="font-bold text-black leading-tight text-sm">Long-term<br/>perspective</span>
            </div>
            <div className="bg-white rounded-xl p-6 flex items-center gap-4">
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.3175 44.4268C50.7287 42.8367 48.8722 41.5389 46.8332 40.5928C49.7087 38.2632 51.5431 34.7085 51.5431 30.7222C51.5431 23.689 45.6779 17.919 38.6447 18.0269C31.7194 18.1348 26.1398 23.7779 26.1398 30.7222C26.1398 34.7085 27.9806 38.2632 30.8498 40.5928C28.8103 41.5382 26.9537 42.8361 25.3654 44.4268C21.8996 47.8989 19.9318 52.482 19.8048 57.3697C19.8032 57.4374 19.815 57.5048 19.8398 57.5679C19.8646 57.631 19.9017 57.6885 19.949 57.737C19.9963 57.7855 20.0529 57.824 20.1154 57.8503C20.1778 57.8766 20.2449 57.8902 20.3127 57.8902H23.8673C24.1403 57.8902 24.3688 57.6743 24.3752 57.4014C24.4958 53.7197 25.9875 50.273 28.609 47.6577C29.9506 46.3091 31.5462 45.2399 33.3037 44.5121C35.0612 43.7842 36.9456 43.4122 38.8478 43.4175C42.7135 43.4175 46.3507 44.9219 49.0866 47.6577C51.7018 50.273 53.1935 53.7197 53.3205 57.4014C53.3268 57.6743 53.5553 57.8902 53.8283 57.8902H57.383C57.4507 57.8902 57.5178 57.8766 57.5803 57.8503C57.6427 57.824 57.6993 57.7855 57.7466 57.737C57.7939 57.6885 57.8311 57.631 57.8558 57.5679C57.8806 57.5048 57.8925 57.4374 57.8908 57.3697C57.7638 52.482 55.7961 47.8989 52.3175 44.4268ZM38.8478 38.8472C36.6769 38.8472 34.633 38.003 33.1032 36.4668C32.3355 35.7051 31.729 34.7966 31.32 33.7955C30.9111 32.7943 30.708 31.721 30.7228 30.6397C30.7419 28.5576 31.5734 26.5454 33.027 25.0537C34.5505 23.4922 36.5881 22.6226 38.7653 22.5972C40.9172 22.5781 43.0055 23.416 44.5417 24.9204C46.1159 26.4629 46.9792 28.5259 46.9792 30.7222C46.9792 32.8931 46.1349 34.9307 44.5988 36.4668C43.8451 37.2241 42.9488 37.8244 41.9617 38.2329C40.9745 38.6415 39.9162 38.8503 38.8478 38.8472ZM22.9469 32.398C22.8898 31.8457 22.8581 31.2871 22.8581 30.7222C22.8581 29.7129 22.9533 28.729 23.131 27.7705C23.1755 27.542 23.0548 27.3072 22.8454 27.2119C21.9821 26.8247 21.1886 26.2915 20.5031 25.6187C19.6953 24.8354 19.0596 23.8924 18.6367 22.8497C18.2137 21.8071 18.0127 20.6877 18.0465 19.563C18.1037 17.5254 18.9225 15.5894 20.3507 14.1294C21.9186 12.5235 24.026 11.6475 26.2668 11.6729C28.2917 11.6919 30.2467 12.4727 31.7257 13.8565C32.2272 14.3262 32.6589 14.8467 33.0207 15.4053C33.1476 15.6021 33.3952 15.6846 33.611 15.6084C34.7282 15.2212 35.9088 14.9483 37.1213 14.8213C37.4767 14.7832 37.6798 14.4024 37.5212 14.085C35.4582 10.0034 31.2433 7.18508 26.3683 7.10891C19.3288 7.001 13.4635 12.771 13.4635 19.7979C13.4635 23.7842 15.298 27.3389 18.1735 29.6685C16.1549 30.6016 14.2951 31.8902 12.6828 33.5025C9.20426 36.9746 7.23649 41.5576 7.10953 46.4517C7.10784 46.5194 7.11972 46.5868 7.14448 46.6499C7.16924 46.713 7.20638 46.7705 7.2537 46.819C7.30103 46.8675 7.35758 46.906 7.42004 46.9324C7.48249 46.9587 7.54958 46.9722 7.61735 46.9722H11.1784C11.4513 46.9722 11.6798 46.7564 11.6862 46.4834C11.8068 42.8018 13.2985 39.355 15.9201 36.7398C17.7863 34.8736 20.0714 33.5786 22.5661 32.9502C22.8136 32.8867 22.9787 32.6519 22.9469 32.398Z" fill="#FF3541"/>
</svg>

              <span className="font-bold text-black leading-tight text-sm">Regional<br/>network access</span>
            </div>
          </div>

          <p className="text-center text-gray-700 text-sm md:text-base">
            Engagement is by invitation or private inquiry only.
          </p>
        </div>
      </section>

      {/* Our Current Focus Areas Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-12">
            Our Current Focus Areas
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81.2502 19.9291V31.9624L91.6668 37.9749V62.0291L81.246 68.0457L81.2502 80.0749L60.4168 92.1041L50.0002 86.0832L39.5835 92.0999L18.7502 80.0707V68.0416L8.3335 62.0332L8.33766 37.9707L18.7502 31.9582V19.9332L39.5835 7.90407L49.996 13.9207L60.421 7.8999L81.2502 19.9291ZM54.1668 21.1374V29.1666H45.8335V21.1374L39.5835 17.5291L27.0793 24.7416V36.7707L16.6668 42.7832V57.2207L27.0835 63.2374V75.2666L39.5835 82.4832L45.8335 78.8707V70.8332H54.1668V78.8749L60.4168 82.4832L72.9168 75.2624V63.2374L83.3335 57.2166V42.7916L72.9127 36.7707L72.9168 24.7416L60.421 17.5249L54.1668 21.1374ZM59.4377 54.8332C59.5158 54.6374 59.6508 54.4694 59.8254 54.3511C59.9999 54.2328 60.206 54.1696 60.4168 54.1696C60.6277 54.1696 60.8337 54.2328 61.0083 54.3511C61.1828 54.4694 61.3179 54.6374 61.396 54.8332L61.9252 56.1041C62.8252 58.2749 64.5043 60.0124 66.6127 60.9499L68.1085 61.6166C68.2986 61.7056 68.4594 61.8469 68.572 62.024C68.6847 62.2011 68.7445 62.4067 68.7445 62.6166C68.7445 62.8265 68.6847 63.032 68.572 63.2091C68.4594 63.3862 68.2986 63.5276 68.1085 63.6166L66.5252 64.3249C64.4668 65.2416 62.8168 66.9082 61.9002 69.0082L61.3877 70.1874C61.3069 70.3782 61.1718 70.5409 60.9992 70.6553C60.8265 70.7698 60.624 70.8308 60.4168 70.8308C60.2097 70.8308 60.0072 70.7698 59.8345 70.6553C59.6618 70.5409 59.5267 70.3782 59.446 70.1874L58.9335 69.0124C58.0324 66.9264 56.3822 65.2539 54.3085 64.3249L52.7252 63.6166C52.5351 63.5276 52.3743 63.3862 52.2616 63.2091C52.149 63.032 52.0892 62.8265 52.0892 62.6166C52.0892 62.4067 52.149 62.2011 52.2616 62.024C52.3743 61.8469 52.5351 61.7056 52.7252 61.6166L54.221 60.9499C56.3473 59.9958 58.0255 58.2609 58.9085 56.1041L59.4377 54.8332ZM39.9502 32.4166C40.0878 32.0739 40.3249 31.7803 40.6308 31.5735C40.9367 31.3667 41.2976 31.2562 41.6668 31.2562C42.0361 31.2562 42.3969 31.3667 42.7029 31.5735C43.0088 31.7803 43.2458 32.0739 43.3835 32.4166L44.3085 34.6416C45.8532 38.417 48.7885 41.4552 52.5085 43.1291L55.1252 44.2874C56.6252 44.9541 56.6252 47.1332 55.1252 47.7999L52.3543 49.0332C48.7279 50.6632 45.8428 53.5914 44.2668 57.2416L43.3668 59.2999C43.227 59.6355 42.9909 59.9222 42.6884 60.1239C42.3859 60.3256 42.0304 60.4332 41.6668 60.4332C41.3032 60.4332 40.9478 60.3256 40.6453 60.1239C40.3427 59.9222 40.1067 59.6355 39.9668 59.2999L39.0668 57.2374C37.4908 53.5872 34.6057 50.659 30.9793 49.0291L28.2085 47.7999C27.8727 47.6454 27.5882 47.3978 27.3888 47.0865C27.1895 46.7752 27.0835 46.4133 27.0835 46.0437C27.0835 45.674 27.1895 45.3121 27.3888 45.0008C27.5882 44.6895 27.8727 44.442 28.2085 44.2874L30.821 43.1291C34.5441 41.4569 37.4826 38.4185 39.0293 34.6416L39.9502 32.4166Z" fill="white"/>
</svg>

              <h3 className="font-bold text-white text-lg text-center">AI-Driven<br/>Business Automation</h3>
            </div>
            
            <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45 30C42.3478 30 39.8043 31.0536 37.9289 32.9289C36.0536 34.8043 35 37.3478 35 40C35 42.6522 36.0536 45.1957 37.9289 47.0711C39.8043 48.9464 42.3478 50 45 50C47.6522 50 50.1957 48.9464 52.0711 47.0711C53.9464 45.1957 55 42.6522 55 40C55 37.3478 53.9464 34.8043 52.0711 32.9289C50.1957 31.0536 47.6522 30 45 30ZM40 40C40 38.6739 40.5268 37.4021 41.4645 36.4645C42.4021 35.5268 43.6739 35 45 35C46.3261 35 47.5979 35.5268 48.5355 36.4645C49.4732 37.4021 50 38.6739 50 40C50 41.3261 49.4732 42.5979 48.5355 43.5355C47.5979 44.4732 46.3261 45 45 45C43.6739 45 42.4021 44.4732 41.4645 43.5355C40.5268 42.5979 40 41.3261 40 40ZM10 22.5C10 20.5109 10.7902 18.6032 12.1967 17.1967C13.6032 15.7902 15.5109 15 17.5 15H72.5C74.4891 15 76.3968 15.7902 77.8033 17.1967C79.2098 18.6032 80 20.5109 80 22.5V40H75V35H70C67.3478 35 64.8043 33.9464 62.9289 32.0711C61.0536 30.1957 60 27.6522 60 25V20H30V25C30 27.6522 28.9464 30.1957 27.0711 32.0711C25.1957 33.9464 22.6522 35 20 35H15V45H20C22.6522 45 25.1957 46.0536 27.0711 47.9289C28.9464 49.8043 30 52.3478 30 55V60H55V65H17.5C15.5109 65 13.6032 64.2098 12.1967 62.8033C10.7902 61.3968 10 59.4891 10 57.5V22.5ZM17.5 20C16.837 20 16.2011 20.2634 15.7322 20.7322C15.2634 21.2011 15 21.837 15 22.5V30H20C21.3261 30 22.5979 29.4732 23.5355 28.5355C24.4732 27.5979 25 26.3261 25 25V20H17.5ZM72.5 20H65V25C65 26.3261 65.5268 27.5979 66.4645 28.5355C67.4021 29.4732 68.6739 30 70 30H75V22.5C75 21.837 74.7366 21.2011 74.2678 20.7322C73.7989 20.2634 73.163 20 72.5 20ZM17.5 60H25V55C25 53.6739 24.4732 52.4021 23.5355 51.4645C22.5979 50.5268 21.3261 50 20 50H15V57.5C15 58.163 15.2634 58.7989 15.7322 59.2678C16.2011 59.7366 16.837 60 17.5 60ZM85 40V25.425C86.4629 25.9422 87.7294 26.9004 88.6249 28.1675C89.5204 29.4347 90.0008 30.9484 90 32.5V40H85ZM55 70V75H27.5C25.9484 75.0008 24.4347 74.5204 23.1675 73.6249C21.9004 72.7294 20.9422 71.4629 20.425 70H55ZM67.5 45C65.5109 45 63.6032 45.7902 62.1967 47.1967C60.7902 48.6032 60 50.5109 60 52.5V87.5C60 89.4891 60.7902 91.3968 62.1967 92.8033C63.6032 94.2098 65.5109 95 67.5 95H87.5C89.4891 95 91.3968 94.2098 92.8033 92.8033C94.2098 91.3968 95 89.4891 95 87.5V52.5C95 50.5109 94.2098 48.6032 92.8033 47.1967C91.3968 45.7902 89.4891 45 87.5 45H67.5ZM67.5 65H72.5C73.163 65 73.7989 65.2634 74.2678 65.7322C74.7366 66.2011 75 66.837 75 67.5C75 68.163 74.7366 68.7989 74.2678 69.2678C73.7989 69.7366 73.163 70 72.5 70H67.5C66.837 70 66.2011 69.7366 65.7322 69.2678C65.2634 68.7989 65 68.163 65 67.5C65 66.837 65.2634 66.2011 65.7322 65.7322C66.2011 65.2634 66.837 65 67.5 65ZM82.5 65H87.5C88.163 65 88.7989 65.2634 89.2678 65.7322C89.7366 66.2011 90 66.837 90 67.5C90 68.163 89.7366 68.7989 89.2678 69.2678C88.7989 69.7366 88.163 70 87.5 70H82.5C81.837 70 81.2011 69.7366 80.7322 69.2678C80.2634 68.7989 80 68.163 80 67.5C80 66.837 80.2634 66.2011 80.7322 65.7322C81.2011 65.2634 81.837 65 82.5 65ZM67.5 75H72.5C73.163 75 73.7989 75.2634 74.2678 75.7322C74.7366 76.2011 75 76.837 75 77.5C75 78.163 74.7366 78.7989 74.2678 79.2678C73.7989 79.7366 73.163 80 72.5 80H67.5C66.837 80 66.2011 79.7366 65.7322 79.2678C65.2634 78.7989 65 78.163 65 77.5C65 76.837 65.2634 76.2011 65.7322 75.7322C66.2011 75.2634 66.837 75 67.5 75ZM82.5 75H87.5C88.163 75 88.7989 75.2634 89.2678 75.7322C89.7366 76.2011 90 76.837 90 77.5C90 78.163 89.7366 78.7989 89.2678 79.2678C88.7989 79.7366 88.163 80 87.5 80H82.5C81.837 80 81.2011 79.7366 80.7322 79.2678C80.2634 78.7989 80 78.163 80 77.5C80 76.837 80.2634 76.2011 80.7322 75.7322C81.2011 75.2634 81.837 75 82.5 75ZM67.5 85H72.5C73.163 85 73.7989 85.2634 74.2678 85.7322C74.7366 86.2011 75 86.837 75 87.5C75 88.163 74.7366 88.7989 74.2678 89.2678C73.7989 89.7366 73.163 90 72.5 90H67.5C66.837 90 66.2011 89.7366 65.7322 89.2678C65.2634 88.7989 65 88.163 65 87.5C65 86.837 65.2634 86.2011 65.7322 85.7322C66.2011 85.2634 66.837 85 67.5 85ZM82.5 85H87.5C88.163 85 88.7989 85.2634 89.2678 85.7322C89.7366 86.2011 90 86.837 90 87.5C90 88.163 89.7366 88.7989 89.2678 89.2678C88.7989 89.7366 88.163 90 87.5 90H82.5C81.837 90 81.2011 89.7366 80.7322 89.2678C80.2634 88.7989 80 88.163 80 87.5C80 86.837 80.2634 86.2011 80.7322 85.7322C81.2011 85.2634 81.837 85 82.5 85ZM65 52.5C65 51.837 65.2634 51.2011 65.7322 50.7322C66.2011 50.2634 66.837 50 67.5 50H87.5C88.163 50 88.7989 50.2634 89.2678 50.7322C89.7366 51.2011 90 51.837 90 52.5V57.5C90 58.163 89.7366 58.7989 89.2678 59.2678C88.7989 59.7366 88.163 60 87.5 60H67.5C66.837 60 66.2011 59.7366 65.7322 59.2678C65.2634 58.7989 65 58.163 65 57.5V52.5Z" fill="white"/>
</svg>

              <h3 className="font-bold text-white text-lg text-center">Digital Sales &<br/>Revenue Systems</h3>
            </div>

            <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9168 41.6666C23.4252 41.6666 23.9002 41.4291 24.846 40.9583L32.4502 37.1749C35.8168 35.4958 37.5002 34.6583 37.5002 33.3333V16.6666M22.9168 41.6666C22.4085 41.6666 21.9335 41.4291 20.9877 40.9583L13.3835 37.1749C10.0168 35.4958 8.3335 34.6583 8.3335 33.3333V16.6666M22.9168 41.6666V24.9999M37.5002 16.6666C37.5002 15.3416 35.8168 14.4999 32.4502 12.8249L24.846 9.04159C23.9002 8.57075 23.4293 8.33325 22.9168 8.33325C22.4085 8.33325 21.9335 8.57075 20.9877 9.04159L13.3835 12.8249C10.0168 14.5041 8.3335 15.3416 8.3335 16.6666M37.5002 16.6666C37.5002 17.9916 35.8168 18.8333 32.4502 20.5083L24.846 24.2916C23.9002 24.7624 23.4293 24.9999 22.9168 24.9999M8.3335 16.6666C8.3335 17.9916 10.0168 18.8333 13.3835 20.5083L20.9877 24.2916C21.9335 24.7624 22.4043 24.9999 22.9168 24.9999M77.0835 41.6666C77.5918 41.6666 78.0668 41.4291 79.0127 40.9583L86.6168 37.1749C89.9835 35.4958 91.6668 34.6583 91.6668 33.3333V16.6666M77.0835 41.6666C76.5752 41.6666 76.1002 41.4291 75.1543 40.9583L67.5502 37.1749C64.1835 35.4958 62.5002 34.6583 62.5002 33.3333V16.6666M77.0835 41.6666V24.9999M91.6668 16.6666C91.6668 15.3416 89.9835 14.4999 86.6168 12.8249L79.0127 9.04159C78.0668 8.57075 77.596 8.33325 77.0835 8.33325C76.5752 8.33325 76.1002 8.57075 75.1543 9.04159L67.5502 12.8249C64.1835 14.5041 62.5002 15.3416 62.5002 16.6666M91.6668 16.6666C91.6668 17.9916 89.9835 18.8333 86.6168 20.5083L79.0127 24.2916C78.0668 24.7624 77.596 24.9999 77.0835 24.9999M62.5002 16.6666C62.5002 17.9916 64.1835 18.8333 67.5502 20.5083L75.1543 24.2916C76.1002 24.7624 76.571 24.9999 77.0835 24.9999" stroke="white" stroke-width="6.375" stroke-linejoin="round"/>
<path d="M47.9168 25H52.0835M8.3335 50V64.5833C8.3335 70.4333 8.3335 73.3625 9.73766 75.4625C10.3458 76.3728 11.1274 77.1544 12.0377 77.7625C14.1377 79.1667 17.0668 79.1667 22.9168 79.1667M91.6668 50V64.5833C91.6668 70.4333 91.6668 73.3625 90.2627 75.4625C89.6545 76.3728 88.873 77.1544 87.9627 77.7625C85.8627 79.1667 82.9335 79.1667 77.0835 79.1667" stroke="white" stroke-width="6.375" stroke-linecap="round"/>
<path d="M50.0003 91.6666C50.5087 91.6666 50.9837 91.4333 51.9295 90.9583L59.5337 87.1749C62.9003 85.4999 64.5837 84.6583 64.5837 83.3333V66.6666M50.0003 91.6666C49.492 91.6666 49.017 91.4333 48.0712 90.9583L40.467 87.1749C37.1003 85.4999 35.417 84.6583 35.417 83.3333V66.6666M50.0003 91.6666V74.9999M64.5837 66.6666C64.5837 65.3416 62.9003 64.4999 59.5337 62.8249L51.9295 59.0416C50.9837 58.5666 50.5128 58.3333 50.0003 58.3333C49.492 58.3333 49.017 58.5666 48.0712 59.0416L40.467 62.8249C37.1003 64.4999 35.417 65.3416 35.417 66.6666M64.5837 66.6666C64.5837 67.9916 62.9003 68.8333 59.5337 70.5083L51.9295 74.2916C50.9837 74.7666 50.5128 74.9999 50.0003 74.9999M35.417 66.6666C35.417 67.9916 37.1003 68.8333 40.467 70.5083L48.0712 74.2916C49.017 74.7666 49.4878 74.9999 50.0003 74.9999" stroke="white" stroke-width="6.375" stroke-linejoin="round"/>
</svg>

              <h3 className="font-bold text-white text-lg text-center">Blockchain Infrastructure<br/>Integration</h3>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.574 42.8562C36.4636 42.8562 42.8594 36.4604 42.8594 28.5708C42.8594 20.6812 36.4636 14.2854 28.574 14.2854C20.6844 14.2854 14.2886 20.6812 14.2886 28.5708C14.2886 36.4604 20.6844 42.8562 28.574 42.8562Z" stroke="white" stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71.4285 85.7132C79.3181 85.7132 85.7139 79.3174 85.7139 71.4278C85.7139 63.5381 79.3181 57.1423 71.4285 57.1423C63.5389 57.1423 57.1431 63.5381 57.1431 71.4278C57.1431 79.3174 63.5389 85.7132 71.4285 85.7132Z" stroke="white" stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M50.0021 91.6668C26.9896 91.6668 8.33545 73.0127 8.33545 50.0002L22.225 56.9439M50.0021 8.3335C73.0146 8.3335 91.6688 26.9877 91.6688 50.0002L77.7792 43.0564" stroke="white" stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <h3 className="font-bold text-white text-lg text-center">Regional SME Digital<br/>Transformation</h3>
            </div>
            
            <div className="bg-error p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px] shadow-md">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.0002 83.3333C65.7127 83.3333 73.571 83.3333 78.4502 78.4499C83.3335 73.5708 83.3335 65.7124 83.3335 49.9999M50.0002 83.3333C34.2877 83.3333 26.4293 83.3333 21.5502 78.4499C16.671 73.5666 16.6668 65.7124 16.6668 49.9999M50.0002 83.3333V91.6666M16.6668 49.9999C16.6668 34.2874 16.6668 26.4291 21.5502 21.5499C26.4335 16.6708 34.2877 16.6666 50.0002 16.6666M16.6668 49.9999H8.3335M50.0002 16.6666C65.7127 16.6666 73.571 16.6666 78.4502 21.5499C83.3293 26.4333 83.3335 34.2874 83.3335 49.9999M50.0002 16.6666V8.33325M83.3335 49.9999H91.6668M33.3335 8.33325V16.6666M66.6668 8.33325V16.6666M33.3335 83.3333V91.6666M66.6668 83.3333V91.6666M91.6668 66.6666H83.3335M16.6668 33.3333H8.3335M16.6668 66.6666H8.3335M91.6668 33.3333H83.3335" stroke="white" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M47.8332 32.758C47.9962 32.3145 48.2913 31.9317 48.6788 31.6613C49.0663 31.3908 49.5274 31.2458 49.9999 31.2458C50.4724 31.2458 50.9335 31.3908 51.321 31.6613C51.7084 31.9317 52.0036 32.3145 52.1665 32.758L55.4999 41.7705C55.9665 43.033 56.9665 44.033 58.229 44.4996L67.2415 47.833C67.685 47.9959 68.0678 48.2911 68.3383 48.6786C68.6087 49.066 68.7537 49.5271 68.7537 49.9996C68.7537 50.4721 68.6087 50.9332 68.3383 51.3207C68.0678 51.7082 67.685 52.0033 67.2415 52.1663L58.229 55.4996C57.603 55.7287 57.0345 56.0916 56.5632 56.5629C56.0918 57.0343 55.729 57.6028 55.4999 58.2288L52.1665 67.2413C52.0036 67.6848 51.7084 68.0676 51.321 68.338C50.9335 68.6084 50.4724 68.7534 49.9999 68.7534C49.5274 68.7534 49.0663 68.6084 48.6788 68.338C48.2913 68.0676 47.9962 67.6848 47.8332 67.2413L44.4999 58.2288C44.2708 57.6028 43.9079 57.0343 43.4366 56.5629C42.9652 56.0916 42.3967 55.7287 41.7707 55.4996L32.7582 52.1663C32.3147 52.0033 31.9319 51.7082 31.6615 51.3207C31.3911 50.9332 31.2461 50.4721 31.2461 49.9996C31.2461 49.5271 31.3911 49.066 31.6615 48.6786C31.9319 48.2911 32.3147 47.9959 32.7582 47.833L41.7707 44.4996C42.3953 44.2681 42.9626 43.9044 43.4336 43.4333C43.9046 42.9623 44.2684 42.3951 44.4999 41.7705L47.8332 32.758Z" stroke="white" stroke-width="6.25"/>
</svg>

              <h3 className="font-bold text-white text-lg text-center">AI Operating Systems<br/>for Emerging Markets</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
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
                ARK Trinity's objective is to architect scalable operating platforms positioned for long-term structural growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Engagement Works Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-12">
            How Engagement Works
          </h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-6">
            <div className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[260px] max-w-[320px]">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">01</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight">Private introductory<br/>discussion</span>
            </div>
            <div className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[260px] max-w-[320px]">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">02</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight">Strategic alignment<br/>review</span>
            </div>
            <div className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[260px] max-w-[320px]">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">03</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight">Confidential information<br/>sharing</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[280px] max-w-[340px]">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">04</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight">Structured documentation<br/>(where applicable)</span>
            </div>
            <div className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[280px] max-w-[340px]">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">05</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight">Long-term collaboration<br/>framework</span>
            </div>
          </div>

          <p className="text-center text-gray-700 text-sm md:text-base">
            All engagements are conducted on a strictly private and non-public basis.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/mif/asian_business_tech_meeting_hd.png"
                  alt="Professional signing business documents for MIF"
                  width={500}
                  height={350}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-error leading-tight mb-6">
                The Market Invasion Fund — Where Capital Becomes The Multiplier.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 text-pretty">
                The Market Invasion Fund (MIF) is a strategic capital engine
                that converts investment capital into replicable digital assets.
                Each SGD 300K block funds the creation of a Digital Al Business
                Engine by Digital PA, which lets ARK Trinity Investors gain
                valuation equity via ARK Trinity and secures their interest via
                Investor Management by ARK Capital.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn btn-error text-white rounded-full px-6"
                >
                  Request Investor Access
                </Link>
                <button className="hidden btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6">
                  <Download className="w-4 h-4 mr-2" />
                  Download MIF Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Protection Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Protection Principles
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    has a{" "}
                    <strong className="text-black">33 months runway</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    has a reserve of{" "}
                    <strong className="text-black">$100k</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    is invested to winning executors who delivered{" "}
                    <strong className="text-black">$1mil ARR</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Participation Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Participation Principles
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    participates directly in{" "}
                    <strong className="text-black">
                      operating sales performance
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every invested <strong className="text-black">$300k</strong>{" "}
                    participates directly in exposure that is tied to{" "}
                    <strong className="text-black">
                      REAL businesses and people
                    </strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Performance Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Performance Principles
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every new invested{" "}
                    <strong className="text-black">$300k</strong> only
                    reinvested in winning team of executors that hit{" "}
                    <strong className="text-black">$1mil ARR</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every new invested{" "}
                    <strong className="text-black">$300k</strong> only
                    reinvested in delivering the service with{" "}
                    <strong className="text-black">
                      AI automation and data analysis
                    </strong>{" "}
                    to save cost
                  </span>
                </li>
              </ul>
            </div>

            {/* Profit Principles */}
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-error">
                  Profit Principle
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every <strong className="text-black">$1mil ARR</strong>{" "}
                    achieved will{" "}
                    <strong className="text-black">raise valuation</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    Every <strong className="text-black">$1mil ARR</strong>{" "}
                    achieved have a chance for{" "}
                    <strong className="text-black">dividend sharing</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-error text-center mb-16">
            Milestones
          </h2>

          <div className="relative md:pt-0 pt-4">
            <div
              className="absolute hidden md:block h-0.5 bg-gray-300 z-0 left-0 right-0"
              style={{ top: "14px" }}
            />
            {/* Mobile Vertical Connecting Line */}
            <div className="absolute md:hidden w-0.5 bg-gray-300 z-0 left-[13px] top-4 bottom-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-7 h-7 bg-white border-3 md:border-4 border-error rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-error rounded-full" />
                  </div>
                  <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-1 md:h-10 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="bg-white rounded-lg p-5 md:mt-15 z-10 relative">
                  <h3 className="text-lg font-bold text-black mb-1">2027</h3>
                  <p className="text-gray-500 text-sm text-pretty">IPO ready</p>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-7 h-7 bg-white border-3 md:border-4 border-error rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-error rounded-full" />
                  </div>
                  <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-1 md:h-10 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="bg-white rounded-lg p-5 md:mt-15 z-10 relative">
                  <h3 className="text-lg font-bold text-black mb-1">2031</h3>
                  <p className="text-gray-500 text-sm text-pretty">IPO</p>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-5 md:top-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-7 h-7 bg-white border-3 md:border-4 border-error rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-error rounded-full" />
                  </div>
                  <div className="absolute bg-error w-3 h-0.5 top-3.5 left-7 md:w-1 md:h-10 md:top-7 md:left-1/2 md:-translate-x-1/2" />
                </div>
                <div className="bg-white rounded-lg p-5 md:mt-15 z-10 relative">
                  <h3 className="text-lg font-bold text-black mb-1">2033</h3>
                  <p className="text-gray-500 text-sm text-pretty">FINTECH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/contact"
              className="btn btn-error text-white rounded-full px-8"
            >
              Request Strategic Engagement
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1a0a0a] via-[#3d1515] to-[#5a1c1c]" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="hidden md:flex items-start justify-between">
            <div className="flex flex-col items-center text-white flex-1">
              <DollarIcon className="w-12 h-10 mb-3" />
              <span className="text-base font-medium">USD 300K</span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <AISystemIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">
                Replicable Sales System
              </span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <MoneyBuildingIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">$1M ARR</span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <LoopIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">Profit Loop</span>
            </div>

            <ArrowRight className="text-white/80 w-8 h-8 mt-4" />

            <div className="flex flex-col items-center text-white flex-1">
              <EquityIcon className="w-12 h-12 mb-3" />
              <span className="text-base font-medium">Increase Valuation</span>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center space-y-8 text-center">
            <div className="flex flex-col items-center text-white">
              <DollarIcon className="w-14 h-12 mb-2" />
              <span className="text-base font-medium">USD 300K</span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <AISystemIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">
                Replicable Sales System
              </span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <MoneyBuildingIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">$1M ARR</span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <LoopIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">Profit Loop</span>
            </div>

            <ArrowDown className="text-white/80 w-8 h-8" />

            <div className="flex flex-col items-center text-white">
              <EquityIcon className="w-14 h-14 mb-2" />
              <span className="text-base font-medium">Increase Valuation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-error text-center mb-12">
            Illustrative Outcome Scenarios
          </h2>

          {/* Benefits Cards with Watermark */}
          <div className="relative">
            {/* ILLUSTRATIVE Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <span className="text-8xl md:text-9xl font-bold text-gray-200/50 select-none tracking-widest rotate-[-65deg] md:rotate-0">
                ILLUSTRATIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">~1%</h3>
                <p className="text-gray-600 text-sm">
                  Monthly return on your investment
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">2 – 5×</h3>
                <p className="text-gray-600 text-sm">Return pre-IPO</p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">5 – 20×</h3>
                <p className="text-gray-600 text-sm">Return post-IPO</p>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Phase 2</h3>
                <p className="text-gray-600 text-sm">
                  Secondary listing benefits priority
                </p>
              </div>
            </div>
          </div>

          {/* Outcome Scenarios Description */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 relative overflow-hidden">
              <h3 className="text-lg font-bold text-black mb-4">
                Illustrative Outcome Scenarios (Non-Binding)
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-pretty">
                The following figures represent illustrative, high-level outcome
                scenarios derived from internal modelling, historical execution
                references, and long-term institutional planning assumptions.
                They are presented solely to provide directional context and do
                not represent guarantees, forecasts, or offers of return.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Illustrative monthly distribution scenario:</strong>{" "}
                    ~1% per month (subject to cash flow availability and
                    structure design)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>
                      Illustrative pre-IPO value multiple scenario:
                    </strong>{" "}
                    2–5× (dependent on execution, timing, and market conditions)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>
                      Illustrative post-IPO value multiple scenario:
                    </strong>{" "}
                    5–20× (highly variable and market-dependent)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-error rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Phase 2 consideration:</strong> Indicative priority
                    consideration for secondary listing participation, subject
                    to eligibility and definitive agreements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="bg-[#121212] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-error mb-4">
              Important Notice
            </h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>
                The scenarios above are illustrative and non-binding only and do
                not constitute an offer, solicitation, promise, or guarantee of
                any return or outcome.
              </p>
              <p>
                Actual results may differ materially and may include partial or
                total loss of capital.
              </p>
              <p>
                Any participation, if any, is conducted on a private, selective,
                and non-public basis, subject to definitive legal documentation
                and applicable regulations.
              </p>
              <p className="font-semibold text-gray-300">
                Nothing herein constitutes investment, legal, tax, or financial
                advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Board of Committee */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-error mb-2">
                Board of Committee
              </h2>
              <p className="text-gray-500 text-sm italic mb-8">
                Capabilities first. Titles second.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Chan Wai Sun</h4>
                  <p className="text-error text-sm">Chairman (Capital)</p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Robert Tan</h4>
                  <p className="text-error text-sm">Vice Chairman (Digital)</p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Austin Chua</h4>
                  <p className="text-error text-sm">Managing Director (AI)</p>
                </div>
              </div>
            </div>

            {/* Board of Advisors */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-error mb-2">
                Board of Advisors
              </h2>
              <p className="text-gray-500 text-sm italic mb-8">
                Achievement first. Appointment second.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Lim How Teck</h4>
                  <p className="text-gray-600 text-sm">
                    Connecting us to the right resources
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Bryan Ang</h4>
                  <p className="text-gray-600 text-sm">Automating sales</p>
                </div>
                <div className="bg-white rounded-lg p-5">
                  <h4 className="font-bold text-black">Isabel Wong</h4>
                  <p className="text-gray-600 text-sm">
                    Making affiliates/internet marketing like a piece of cake
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
