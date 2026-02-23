import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import { Bot, Settings, Network, Expand, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ARK Trinity - Founded with Vision. Built with Discipline. Driven by Destiny.",
  openGraph: {
    title: "About ARK Trinity | Vision & Mission",
    description:
      "Founded with Vision. Built with Discipline. Driven by Destiny. Transforming AI innovation into permanent enterprises.",
    images: ["/images/about/abbe-sublett-nxZDMUQhN4o-unsplash 1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ARK Trinity | Vision & Mission",
    description:
      "Founded with Vision. Built with Discipline. Driven by Destiny.",
    images: ["/images/about/abbe-sublett-nxZDMUQhN4o-unsplash 1.png"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="ABOUT"
        image="/images/homepage/modern_asian_skyscraper_hd.png"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-error max-w-5xl mx-auto leading-tight mb-8">
            ARK Trinity is a privately initiated venture development platform focused on accelerating AI-enabled business transformation across selected industries.
          </h2>

          <p className="text-md text-gray-700 mb-12">
            We design structured operating models that integrate:
          </p>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            <div className="bg-[#F5F5F5] p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px]">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5001 62.5C36.676 62.5 35.8704 62.7444 35.1852 63.2022C34.5 63.66 33.9659 64.3108 33.6506 65.0721C33.3352 65.8335 33.2527 66.6713 33.4135 67.4795C33.5742 68.2878 33.9711 69.0302 34.5538 69.6129C35.1365 70.1957 35.879 70.5925 36.6872 70.7533C37.4955 70.914 38.3332 70.8315 39.0946 70.5161C39.856 70.2008 40.5067 69.6667 40.9645 68.9815C41.4224 68.2963 41.6667 67.4907 41.6667 66.6666C41.6667 65.5616 41.2278 64.5018 40.4464 63.7204C39.665 62.939 38.6051 62.5 37.5001 62.5ZM8.33341 58.3333C7.22835 58.3333 6.16854 58.7723 5.38714 59.5537C4.60573 60.3351 4.16675 61.3949 4.16675 62.5V70.8333C4.16675 71.9384 4.60573 72.9982 5.38714 73.7796C6.16854 74.561 7.22835 75 8.33341 75C9.43848 75 10.4983 74.561 11.2797 73.7796C12.0611 72.9982 12.5001 71.9384 12.5001 70.8333V62.5C12.5001 61.3949 12.0611 60.3351 11.2797 59.5537C10.4983 58.7723 9.43848 58.3333 8.33341 58.3333ZM91.6667 58.3333C90.5617 58.3333 89.5019 58.7723 88.7205 59.5537C87.9391 60.3351 87.5001 61.3949 87.5001 62.5V70.8333C87.5001 71.9384 87.9391 72.9982 88.7205 73.7796C89.5019 74.561 90.5617 75 91.6667 75C92.7718 75 93.8316 74.561 94.613 73.7796C95.3944 72.9982 95.8334 71.9384 95.8334 70.8333V62.5C95.8334 61.3949 95.3944 60.3351 94.613 59.5537C93.8316 58.7723 92.7718 58.3333 91.6667 58.3333ZM70.8334 29.1666H54.1667V23.8333C55.4262 23.1062 56.4735 22.0621 57.2045 20.8049C57.9354 19.5476 58.3246 18.1209 58.3334 16.6666C58.3334 14.4565 57.4554 12.3369 55.8926 10.7741C54.3298 9.21129 52.2102 8.33331 50.0001 8.33331C47.7899 8.33331 45.6703 9.21129 44.1075 10.7741C42.5447 12.3369 41.6667 14.4565 41.6667 16.6666C41.6755 18.1209 42.0647 19.5476 42.7957 20.8049C43.5267 22.0621 44.5739 23.1062 45.8334 23.8333V29.1666H29.1667C25.8515 29.1666 22.6721 30.4836 20.3279 32.8278C17.9837 35.172 16.6667 38.3514 16.6667 41.6666V79.1666C16.6667 82.4819 17.9837 85.6613 20.3279 88.0055C22.6721 90.3497 25.8515 91.6666 29.1667 91.6667H70.8334C74.1486 91.6666 77.328 90.3497 79.6722 88.0055C82.0165 85.6613 83.3334 82.4819 83.3334 79.1666V41.6666C83.3334 38.3514 82.0165 35.172 79.6722 32.8278C77.328 30.4836 74.1486 29.1666 70.8334 29.1666ZM57.1667 37.5L55.0834 45.8333H44.9167L42.8334 37.5H57.1667ZM75.0001 79.1666C75.0001 80.2717 74.5611 81.3315 73.7797 82.1129C72.9983 82.8943 71.9385 83.3333 70.8334 83.3333H29.1667C28.0617 83.3333 27.0019 82.8943 26.2205 82.1129C25.4391 81.3315 25.0001 80.2717 25.0001 79.1666V41.6666C25.0001 40.5616 25.4391 39.5018 26.2205 38.7204C27.0019 37.939 28.0617 37.5 29.1667 37.5H34.2501L37.5001 51C37.7282 51.9245 38.2661 52.7429 39.0242 53.3191C39.7823 53.8953 40.7149 54.1944 41.6667 54.1666H58.3334C59.2852 54.1944 60.2178 53.8953 60.9759 53.3191C61.7341 52.7429 62.2719 51.9245 62.5001 51L65.7501 37.5H70.8334C71.9385 37.5 72.9983 37.939 73.7797 38.7204C74.5611 39.5018 75.0001 40.5616 75.0001 41.6666V79.1666ZM62.5001 62.5C61.676 62.5 60.8704 62.7444 60.1852 63.2022C59.5 63.66 58.9659 64.3108 58.6506 65.0721C58.3352 65.8335 58.2527 66.6713 58.4135 67.4795C58.5742 68.2878 58.9711 69.0302 59.5538 69.6129C60.1365 70.1957 60.8789 70.5925 61.6872 70.7533C62.4955 70.914 63.3332 70.8315 64.0946 70.5161C64.856 70.2008 65.5067 69.6667 65.9645 68.9815C66.4224 68.2963 66.6667 67.4907 66.6667 66.6666C66.6667 65.5616 66.2278 64.5018 65.4464 63.7204C64.665 62.939 63.6051 62.5 62.5001 62.5Z" fill="#FF3541"/>
</svg>
              <h3 className="font-bold text-black text-lg mt-3">AI Automation</h3>
            </div>
            
            <div className="bg-[#F5F5F5] p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px]">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.7499 33.3333C42.1084 33.3333 40.4829 33.6566 38.9664 34.2848C37.4498 34.913 36.0718 35.8337 34.9111 36.9945C33.7503 38.1552 32.8296 39.5332 32.2014 41.0498C31.5732 42.5663 31.2499 44.1918 31.2499 45.8333C31.2499 47.4748 31.5732 49.1003 32.2014 50.6169C32.8296 52.1334 33.7503 53.5114 34.9111 54.6721C36.0718 55.8329 37.4498 56.7536 38.9664 57.3818C40.4829 58.01 42.1084 58.3333 43.7499 58.3333C47.0651 58.3333 50.2445 57.0164 52.5888 54.6721C54.933 52.3279 56.2499 49.1485 56.2499 45.8333C56.2499 42.5181 54.933 39.3387 52.5888 36.9945C50.2445 34.6503 47.0651 33.3333 43.7499 33.3333ZM37.4999 45.8333C37.4999 44.1757 38.1584 42.586 39.3305 41.4139C40.5026 40.2418 42.0923 39.5833 43.7499 39.5833C45.4075 39.5833 46.9972 40.2418 48.1693 41.4139C49.3414 42.586 49.9999 44.1757 49.9999 45.8333C49.9999 47.4909 49.3414 49.0806 48.1693 50.2527C46.9972 51.4248 45.4075 52.0833 43.7499 52.0833C42.0923 52.0833 40.5026 51.4248 39.3305 50.2527C38.1584 49.0806 37.4999 47.4909 37.4999 45.8333ZM8.33325 30.2083C8.33325 27.7219 9.32097 25.3373 11.0791 23.5792C12.8373 21.821 15.2218 20.8333 17.7083 20.8333H69.7916C71.0227 20.8333 72.2418 21.0758 73.3792 21.5469C74.5167 22.0181 75.5502 22.7086 76.4207 23.5792C77.2913 24.4497 77.9818 25.4832 78.453 26.6207C78.9241 27.7581 79.1666 28.9772 79.1666 30.2083V46.5583C77.1185 46.0746 75.021 45.8313 72.9166 45.8333V39.5833H69.7916C67.3052 39.5833 64.9206 38.5956 63.1625 36.8374C61.4043 35.0793 60.4166 32.6947 60.4166 30.2083V27.0833H27.0833V30.2083C27.0833 31.4395 26.8408 32.6585 26.3696 33.796C25.8985 34.9334 25.2079 35.9669 24.3374 36.8374C23.4668 37.708 22.4333 38.3985 21.2959 38.8697C20.1585 39.3408 18.9394 39.5833 17.7083 39.5833H14.5833V52.0833H17.7083C20.1947 52.0833 22.5792 53.071 24.3374 54.8292C26.0955 56.5873 27.0833 58.9719 27.0833 61.4583V64.5833H47.1374C46.4958 66.575 46.0749 68.6666 45.9124 70.8333H17.7083C15.2218 70.8333 12.8373 69.8456 11.0791 68.0874C9.32097 66.3293 8.33325 63.9447 8.33325 61.4583V30.2083ZM18.3374 77.0833H46.1541C46.4874 79.2625 47.0833 81.3583 47.9083 83.3333H29.1666C26.9717 83.334 24.8154 82.7567 22.9144 81.6596C21.0134 80.5625 19.4348 78.9841 18.3374 77.0833ZM85.4166 48.8833C87.7031 50.0754 89.8077 51.5879 91.6666 53.375V41.6666C91.6673 39.4718 91.09 37.3154 89.9929 35.4145C88.8957 33.5135 87.3174 31.9349 85.4166 30.8375V48.8833ZM17.7083 27.0833C16.8794 27.0833 16.0846 27.4126 15.4985 27.9986C14.9125 28.5847 14.5833 29.3795 14.5833 30.2083V33.3333H17.7083C18.5371 33.3333 19.3319 33.0041 19.918 32.418C20.504 31.832 20.8333 31.0371 20.8333 30.2083V27.0833H17.7083ZM72.9166 33.3333V30.2083C72.9166 29.3795 72.5873 28.5847 72.0013 27.9986C71.4152 27.4126 70.6204 27.0833 69.7916 27.0833H66.6666V30.2083C66.6666 31.9333 68.0666 33.3333 69.7916 33.3333H72.9166ZM14.5833 61.4583C14.5833 63.1833 15.9833 64.5833 17.7083 64.5833H20.8333V61.4583C20.8333 60.6295 20.504 59.8347 19.918 59.2486C19.3319 58.6626 18.5371 58.3333 17.7083 58.3333H14.5833V61.4583ZM59.4916 58.2333C59.8025 59.3106 59.8928 60.4395 59.7571 61.5525C59.6215 62.6655 59.2626 63.7396 58.702 64.7106C58.1414 65.6817 57.3906 66.5296 56.4946 67.2036C55.5986 67.8776 54.5758 68.3639 53.4874 68.6333L51.0541 69.2333C50.6616 71.7298 50.67 74.2729 51.0791 76.7666L53.3291 77.3083C54.4273 77.5729 55.4603 78.0579 56.3653 78.7341C57.2703 79.4102 58.0283 80.2633 58.5934 81.2414C59.1585 82.2196 59.5188 83.3024 59.6524 84.4242C59.7861 85.5459 59.6902 86.6831 59.3707 87.7666L58.5916 90.3958C60.4249 92.0041 62.5082 93.3083 64.7749 94.2375L66.8333 92.075C67.6117 91.2561 68.5485 90.6042 69.5868 90.1587C70.625 89.7132 71.743 89.4834 72.8728 89.4834C74.0026 89.4834 75.1206 89.7132 76.1589 90.1587C77.1971 90.6042 78.134 91.2561 78.9124 92.075L80.9874 94.2625C83.2428 93.3438 85.3307 92.0584 87.1666 90.4583L86.3416 87.6C86.0307 86.5227 85.9403 85.3938 86.076 84.2808C86.2117 83.1678 86.5706 82.0937 87.1312 81.1226C87.6917 80.1516 88.4425 79.3037 89.3385 78.6297C90.2346 77.9557 91.2574 77.4694 92.3457 77.2L94.7791 76.6C95.1716 74.1035 95.1632 71.5604 94.7541 69.0666L92.5041 68.525C91.4058 68.2604 90.3728 67.7754 89.4679 67.0992C88.5629 66.4231 87.8048 65.57 87.2397 64.5919C86.6747 63.6137 86.3144 62.5308 86.1807 61.4091C86.0471 60.2874 86.1429 59.1502 86.4624 58.0666L87.2416 55.4416C85.4072 53.8279 83.3177 52.5297 81.0583 51.6L79.0041 53.7583C78.2256 54.5778 77.2885 55.2303 76.2499 55.6762C75.2112 56.1221 74.0927 56.3521 72.9624 56.3521C71.8321 56.3521 70.7136 56.1221 69.675 55.6762C68.6363 55.2303 67.6993 54.5778 66.9208 53.7583L64.8457 51.5708C62.5906 52.4882 60.5028 53.7722 58.6666 55.3708L59.4916 58.2333ZM72.9166 79.1666C69.5832 79.1666 66.8749 76.3666 66.8749 72.9166C66.8749 69.4666 69.5832 66.6666 72.9166 66.6666C76.2499 66.6666 78.9583 69.4666 78.9583 72.9166C78.9583 76.3666 76.2499 79.1666 72.9166 79.1666Z" fill="#FF3541"/>
</svg>

              <h3 className="font-bold text-black text-lg text-center mt-3">Revenue System<br/>Engineering</h3>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px]">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4168 68.7499C60.4168 71.5126 59.3194 74.1621 57.3659 76.1156C55.4124 78.0691 52.7628 79.1666 50.0002 79.1666C47.2375 79.1666 44.588 78.0691 42.6345 76.1156C40.681 74.1621 39.5835 71.5126 39.5835 68.7499C39.5835 65.9873 40.681 63.3377 42.6345 61.3842C44.588 59.4307 47.2375 58.3333 50.0002 58.3333C52.7628 58.3333 55.4124 59.4307 57.3659 61.3842C59.3194 63.3377 60.4168 65.9873 60.4168 68.7499ZM42.8585 8.33325H57.1418C65.7918 8.33325 66.6668 12.1874 66.6668 18.7499C66.6668 25.3124 65.7877 29.1666 57.1418 29.1666H42.8585C34.2085 29.1666 33.3335 25.3124 33.3335 18.7499C33.3335 12.1874 34.2127 8.33325 42.8585 8.33325Z" stroke="#FF3541" stroke-width="6.25"/>
<path d="M16.6665 54.1666C17.6998 47.4041 21.854 45.8333 33.2832 45.8333H66.729C78.1582 45.8333 82.2998 47.4041 83.3332 54.1666" stroke="#FF3541" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.3335 62.5C8.3335 58.5708 8.3335 56.6083 9.55433 55.3875C10.7752 54.1666 12.7377 54.1666 16.6668 54.1666C20.596 54.1666 22.5585 54.1666 23.7793 55.3875C25.0002 56.6083 25.0002 58.5708 25.0002 62.5C25.0002 66.4291 25.0002 68.3916 23.7793 69.6125C22.5585 70.8333 20.596 70.8333 16.6668 70.8333C12.7377 70.8333 10.7752 70.8333 9.55433 69.6125C8.3335 68.3916 8.3335 66.4291 8.3335 62.5ZM75.0002 62.5C75.0002 58.5708 75.0002 56.6083 76.221 55.3875C77.4418 54.1666 79.4043 54.1666 83.3335 54.1666C87.2627 54.1666 89.2252 54.1666 90.446 55.3875C91.6668 56.6083 91.6668 58.5708 91.6668 62.5C91.6668 66.4291 91.6668 68.3916 90.446 69.6125C89.2252 70.8333 87.2627 70.8333 83.3335 70.8333C79.4043 70.8333 77.4418 70.8333 76.221 69.6125C75.0002 68.3916 75.0002 66.4291 75.0002 62.5Z" stroke="#FF3541" stroke-width="6.25"/>
<path d="M50 29.1666V58.3333M50 79.1666V91.6666" stroke="#FF3541" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <h3 className="font-bold text-black text-lg mt-3">Digital Infrastructure</h3>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-6">
            <div className="bg-[#F5F5F5] p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px]">
              <svg width="80" height="80" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.6719 64.0687L64.0687 59.6719L87.9375 83.5406V62.8125H94.2188V94.2188H62.8125V87.9375H83.5406L59.6719 64.0687ZM40.8281 64.0687L36.4313 59.6719L12.5625 83.5406V62.8125H6.28125V94.2188H37.6875V87.9375H16.9594L40.8281 64.0687ZM53.3906 50.25H47.1094V18.2156L32.6625 32.6625L28.2656 28.2656L50.25 6.28125L72.2344 28.2656L67.8375 32.6625L53.3906 18.2156V50.25Z" fill="#FF3541"/>
</svg>

              <h3 className="font-bold text-black text-lg text-center mt-3">Operational<br/>Scalability</h3>
            </div>
            
            <div className="bg-[#F5F5F5] p-8 rounded-xl flex flex-col items-center flex-1 min-w-[280px] max-w-[320px]">
              <svg width="80" height="80" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.4375 25.25H94.6875V50.5H88.375V36.0503L59.9688 64.4072L47.3438 51.7822L12.625 86.5503V88.375H94.6875V94.6875H6.3125V6.3125H12.625V77.5747L47.3438 42.9053L59.9688 55.5303L83.8872 31.5625H69.4375V25.25Z" fill="#FF3541"/>
</svg>

              <h3 className="font-bold text-black text-lg text-center mt-3">Regional Market<br/>Expansion</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

              <div className="bg-white rounded-lg p-6 mb-4">
                <h3 className="font-bold text-black text-lg mb-2">Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                  To build, own, and scale AI-enabled operating businesses by
                  unifying capital, digital transformation, and automation into
                  a single execution architecture.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
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
                  <div className="flex gap-6">
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 bg-error rounded-lg p-5 text-white">
                      <div className="text-2xl font-bold mb-2">2023</div>
                      <p className="text-sm leading-relaxed opacity-90 text-pretty">
                        The Brand, Digital Personal Assistant, established to
                        serve fragmented communications, overlapping works and
                        inefficiencies works delivered by digital agencies.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 bg-error rounded-lg p-5 text-white">
                      <div className="text-2xl font-bold mb-2">2024</div>
                      <p className="text-sm leading-relaxed opacity-90 text-pretty">
                        Rolling out of “Digital Marketing Assistant”
                        (CMO-in-a-box) to replace a full-fledged digital and AI
                        specialists with the cost of 1 headcount and 1
                        point-of-contact communication.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 bg-error rounded-lg p-5 text-white">
                      <div className="text-2xl font-bold mb-2">2025</div>
                      <p className="text-sm leading-relaxed opacity-90 text-pretty">
                        Established Ark Trinity Holding,{" "}
                        <b>
                          an AI-native holding institution that uses digital
                          transformation and automation to multiply revenue,
                          customers, and values across scalable businesses.
                          Provide a “leads to appointments” AI empowered
                          communication that linked with omnichannel integration
                          in Play/App store.
                        </b>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex-1 bg-error rounded-lg p-5 text-white">
                      <div className="text-2xl font-bold mb-2">2026</div>
                      <p className="text-sm leading-relaxed opacity-90 text-pretty">
                        Develop an AI operating system that linked AI-powered
                        business functions such as AI HR , AI FINANCE, AI
                        MARKETING & SALES to be a true Digital PA to all
                        businesses that are moving towards fast-scaling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty hidden">
              The principles that guide our architecture of intelligent growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discipline */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-error rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Capital Consciousness
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                We deploy capital responsibly to strengthen businesses, create
                durable value, and support long-term human and economic
                progress.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-error rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Authentic Intelligence (AI)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                We build and deploy AI with integrity. As automation scales,
                authenticity, accountability, and truth in intelligence become
                increasingly rare — and increasingly essential.
              </p>
            </div>

            {/* Consciousness */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-error rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Digital Discipline
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                We enforce strong digital foundations and operational integrity,
                enabling businesses to scale, execute, and monetise efficiently
                without compromising fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ARK TRINITY Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-6xl font-bold text-error text-center mb-16">
            WHY ARK TRINITY
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                ARK Trinity is built to scale revenue, not stories.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We are a{" "}
                <span className="font-bold text-black">
                  Singapore-based, AI-native holding company
                </span>
                , co-founded and operated across international markets, designed
                from day one to convert capital into{" "}
                <span className="font-bold text-black">
                  measurable revenue growth, customer expansion, and rising
                  profit.
                </span>
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/about/section-2.png"
                alt="Modern skyscraper representing ARK Trinity"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-center text-md md:text-lg text-gray-800 mb-8 max-w-4xl mx-auto">
            <span className="font-bold text-black">
              Positioned at the Core of Modern Enterprise Infrastructure
            </span>{" "}
            ARK Trinity sits at the{" "}
            <span className="font-bold text-black">
              strategic intersection of data security, digital transformation,
              and AI automation.
            </span>
          </p>
          <p className="text-center text-md text-gray-600 mb-12 max-w-3xl mx-auto">
            This is where modern businesses either scale — or break. By
            operating at this midpoint, we ensure that:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 19.2833L50.0188 8.33325L87.5 19.2833V41.7374C87.4985 53.2448 83.8768 64.4601 77.1476 73.7949C70.4185 83.1298 60.9231 90.111 50.0062 93.7499C39.0853 90.1126 29.586 83.1307 22.8544 73.7936C16.1227 64.4565 12.5002 53.2377 12.5 41.727V19.2833Z"
                    stroke="#FF3541"
                    strokeWidth="6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.25 47.9167L45.8333 62.5L70.8333 37.5"
                    stroke="#FF3541"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-black mb-2">
                Data remains protected and compliant
              </h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.5916 30.7417C48.7291 29.6917 49.2999 29.1667 49.9999 29.1667C50.6999 29.1667 51.2707 29.6917 52.4082 30.7417L54.3499 32.5334C54.9457 33.0876 55.2457 33.3626 55.6249 33.4792C56.0082 33.5959 56.4166 33.5417 57.2416 33.4292L59.9166 33.0709C61.4832 32.8584 62.2707 32.7542 62.8332 33.1459C63.404 33.5376 63.5415 34.2834 63.8124 35.7709L64.279 38.3084C64.4249 39.0917 64.4957 39.4792 64.7332 39.7917C64.9666 40.1001 65.3332 40.2834 66.0665 40.6584L68.4541 41.8668C69.8541 42.5751 70.5541 42.9251 70.7707 43.5626C70.9874 44.2001 70.6374 44.8751 69.9415 46.2334L68.7582 48.5501C68.3916 49.2584 68.2082 49.6167 68.2082 50.0001C68.2082 50.3834 68.3916 50.7376 68.7582 51.4501L69.9415 53.7668C70.6374 55.1251 70.9832 55.8043 70.7707 56.4376C70.5541 57.0751 69.8541 57.4293 68.4541 58.1376L66.0665 59.3459C65.3332 59.7168 64.9666 59.9001 64.7332 60.2084C64.4957 60.5209 64.4249 60.9084 64.279 61.6917L63.8124 64.2293C63.5415 65.7168 63.4041 66.4626 62.8374 66.8543C62.2707 67.2459 61.4832 67.1417 59.9166 66.9292L57.2416 66.5709C56.4207 66.4584 56.0082 66.4043 55.6249 66.5209C55.2457 66.6376 54.9457 66.9167 54.3499 67.4667L52.4082 69.2584C51.2707 70.3084 50.6999 70.8334 49.9999 70.8334C49.2999 70.8334 48.7291 70.3084 47.5916 69.2584L45.6499 67.4667C45.0541 66.9126 44.754 66.6376 44.3749 66.5209C43.9915 66.4043 43.5832 66.4584 42.7582 66.5709L40.0832 66.9292C38.5166 67.1417 37.7291 67.2459 37.1666 66.8543C36.5957 66.4626 36.4582 65.7168 36.1874 64.2293L35.7207 61.6917C35.5749 60.9126 35.5041 60.5209 35.2707 60.2126C35.0332 59.9001 34.6666 59.7126 33.9332 59.3417L31.5457 58.1334C30.1457 57.4251 29.4457 57.0751 29.2291 56.4376C29.0124 55.8001 29.3624 55.1251 30.0582 53.7668L31.2416 51.4501C31.6082 50.7417 31.7916 50.3834 31.7916 50.0001C31.7916 49.6167 31.6082 49.2626 31.2416 48.5501L30.0582 46.2334C29.3624 44.8751 29.0166 44.1959 29.2291 43.5626C29.4457 42.9251 30.1457 42.5709 31.5457 41.8626L33.9332 40.6542C34.6666 40.2834 35.0332 40.1001 35.2666 39.7917C35.5041 39.4792 35.5749 39.0917 35.7207 38.3084L36.1874 35.7709C36.4582 34.2834 36.5957 33.5376 37.1624 33.1459C37.7291 32.7542 38.5166 32.8584 40.0832 33.0709L42.7582 33.4292C43.5791 33.5417 43.9915 33.5959 44.3749 33.4792C44.754 33.3626 45.0541 33.0876 45.6499 32.5334L47.5916 30.7417Z"
                    stroke="#FF3541"
                    strokeWidth="6"
                  />
                  <path
                    d="M27.0125 15.2416C26.2545 14.4051 25.3344 13.7313 24.3081 13.2611C23.2819 12.7908 22.1707 12.5341 21.0422 12.5063C19.9137 12.4785 18.7912 12.6803 17.743 13.0994C16.6949 13.5185 15.7428 14.1463 14.9445 14.9445C14.1463 15.7428 13.5185 16.6949 13.0994 17.743C12.6803 18.7912 12.4785 19.9137 12.5063 21.0422C12.5341 22.1707 12.7908 23.2819 13.2611 24.3081C13.7313 25.3344 14.4051 26.2545 15.2416 27.0125M27.0125 15.2416C28.4488 16.8269 29.2205 18.9037 29.1679 21.0422C29.1152 23.1807 28.2422 25.217 26.7296 26.7296C25.217 28.2422 23.1807 29.1152 21.0422 29.1679C18.9037 29.2205 16.8269 28.4488 15.2416 27.0125M27.0125 15.2416C33.8261 10.7225 41.8239 8.31901 50 8.33332C73.0125 8.33332 91.6666 26.9875 91.6666 50C91.6806 58.1472 89.2937 66.118 84.8041 72.9166M15.2416 27.0125C10.7225 33.8261 8.31901 41.8239 8.33332 50C8.33332 73.0125 26.9875 91.6666 50 91.6666C58.1761 91.681 66.1738 89.2774 72.9875 84.7583M72.9875 84.7583C74.4705 86.3971 76.5438 87.3797 78.7512 87.4899C80.9587 87.6001 83.1195 86.8288 84.7583 85.3458C86.3971 83.8628 87.3797 81.7895 87.4899 79.5821C87.6001 77.3746 86.8288 75.2138 85.3458 73.575C84.6115 72.7635 83.7246 72.1046 82.7356 71.636C81.7467 71.1673 80.6751 70.898 79.5821 70.8434C78.4891 70.7889 77.396 70.9501 76.3653 71.318C75.3346 71.6859 74.3864 72.2532 73.575 72.9875C72.7635 73.7218 72.1046 74.6087 71.636 75.5977C71.1673 76.5866 70.898 77.6582 70.8434 78.7512C70.7332 80.9587 71.5045 83.1195 72.9875 84.7583Z"
                    stroke="#FF3541"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-black mb-2">
                Digital systems are fully integrated end-to-end
              </h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 27.288C4 26.4022 4.55967 25.6233 5.426 25.3484C9.27467 24.0655 14.442 23.1491 15.753 18.6207L17.4013 13.3975C17.938 11.5342 20.7747 11.5342 21.3113 13.3975L23.0133 18.7047C23.7953 21.0415 25.6967 22.9276 28.012 23.7065L33.2637 25.3484C35.1343 25.8753 35.1343 28.7084 33.2637 29.2353C31.002 30.0753 26.5323 30.9 24.9147 32.8244C23.0133 34.428 22.124 38.9029 21.3113 41.1251C21.1779 41.5313 20.9211 41.8862 20.5764 42.1406C20.2316 42.3951 19.816 42.5366 19.387 42.5455C18.9565 42.545 18.5368 42.411 18.1864 42.1618C17.836 41.9127 17.5723 41.561 17.432 41.1556L15.6687 35.9324C15.2703 34.7688 14.611 33.7109 13.7409 32.8389C12.8708 31.967 11.8127 31.3039 10.647 30.9L5.426 29.2353C5.01328 29.1007 4.6535 28.8403 4.39758 28.4908C4.14167 28.1413 4.00258 27.7205 4 27.288ZM9.82667 42.7745C8.02572 43.2389 6.45542 44.339 5.40788 45.8703C4.36033 47.4016 3.90687 49.2597 4.13185 51.099C4.35682 52.9384 5.24491 54.6337 6.63091 55.8697C8.01692 57.1057 9.80647 57.7981 11.6667 57.8182V87.6764C11.6667 92.2735 15.408 96 20.0233 96H79.9767C82.193 96 84.3185 95.123 85.8857 93.5621C87.4529 92.0011 88.3333 89.8839 88.3333 87.6764V57.8182C90.3667 57.8182 92.3167 57.0136 93.7545 55.5815C95.1923 54.1494 96 52.2071 96 50.1818C96 48.1565 95.1923 46.2142 93.7545 44.7821C92.3167 43.35 90.3667 42.5455 88.3333 42.5455V35.5964C88.3333 33.3888 87.4529 31.2716 85.8857 29.7107C84.3185 28.1497 82.193 27.2727 79.9767 27.2727H57.6667V19.98C57.6667 18.8762 57.2264 17.8176 56.4429 17.0372C55.6593 16.2567 54.5965 15.8182 53.4883 15.8182H46.5117C45.4035 15.8182 44.3407 16.2567 43.5571 17.0372C42.7735 17.8176 42.3333 18.8762 42.3333 19.98V27.2956C42.3333 29.8538 41.2293 32.9084 38.6993 34.9091H79.969C80.3523 34.9091 80.6667 35.2145 80.6667 35.5964V87.6764C80.6667 88.0582 80.36 88.3636 79.9767 88.3636H20.0233C19.8403 88.3636 19.6648 88.2912 19.5354 88.1623C19.406 88.0334 19.3333 87.8586 19.3333 87.6764V50.1818H19.318C15.8833 50.1818 11.59 48.2269 10.0873 43.5687L9.82667 42.7745ZM61.5 73.0909H38.5V80.7273H61.5V73.0909ZM42.3333 57.8182C42.3333 59.8435 41.5256 61.7858 40.0878 63.2179C38.65 64.65 36.7 65.4545 34.6667 65.4545C32.6333 65.4545 30.6833 64.65 29.2455 63.2179C27.8077 61.7858 27 59.8435 27 57.8182C27 55.7929 27.8077 53.8506 29.2455 52.4185C30.6833 50.9864 32.6333 50.1818 34.6667 50.1818C36.7 50.1818 38.65 50.9864 40.0878 52.4185C41.5256 53.8506 42.3333 55.7929 42.3333 57.8182ZM73 57.8182C73 59.8435 72.1923 61.7858 70.7545 63.2179C69.3167 64.65 67.3667 65.4545 65.3333 65.4545C63.3 65.4545 61.35 64.65 59.9122 63.2179C58.4744 61.7858 57.6667 59.8435 57.6667 57.8182C57.6667 55.7929 58.4744 53.8506 59.9122 52.4185C61.35 50.9864 63.3 50.1818 65.3333 50.1818C67.3667 50.1818 69.3167 50.9864 70.7545 52.4185C72.1923 53.8506 73 55.7929 73 57.8182Z"
                    fill="#FF3541"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-black mb-2">
                AI automation enhances decisions, execution, and margins without
                compromising control.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Built for Revenue + Clear Exit Design Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
                Built for Revenue, Not Fundraising
              </h2>
              <p className="text-gray-800 text-sm leading-relaxed mb-4">
                Every fund raised has a single mandate:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mb-6">
                <li>increase revenue,</li>
                <li>expand the customer base, and</li>
                <li>grow absolute profit.</li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                Capital at ARK Trinity is deployed into <b>operating systems</b>
                , not experiments.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/about/section-3.png"
                alt="Business planning and revenue focus"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about/section-4.png"
                alt="Partnership and investor relations"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-error mb-6">
                Clear Exit Design for Every Investor Class
              </h2>
              <p className="text-gray-800 text-sm leading-relaxed mb-4">
                ARK Trinity is structured with defined exit pathways for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Retail investors,</li>
                <li>Strategic investors, and</li>
                <li>Institutional capital.</li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                Liquidity planning is built into the structure — through cash
                flow, secondary exits, acquisitions, and public-market outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Moat Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-4">
            An Exceptionally Wide Economic Moat
          </h2>
          <p className="text-center text-gray-800 text-sm mb-12 max-w-3xl mx-auto">
            We cover one of the{" "}
            <span className="font-bold">widest and most defensible scopes</span>{" "}
            in the digital economy:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.0833 66.6668H16.6667C15.5616 66.6668 14.5018 66.2278 13.7204 65.4464C12.939 64.665 12.5 63.6052 12.5 62.5001V20.8334C12.5 19.7283 12.939 18.6685 13.7204 17.8871C14.5018 17.1057 15.5616 16.6667 16.6667 16.6667H83.3333C84.4384 16.6667 85.4982 17.1057 86.2796 17.8871C87.061 18.6685 87.5 19.7283 87.5 20.8334V54.1668M29.1667 83.3334H45.8333M37.5 66.6668V83.3334M83.3333 87.5001L91.6667 79.1668L83.3333 70.8334M70.8333 70.8334L62.5 79.1668L70.8333 87.5001"
                    stroke="#FF3541"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black text-lg">
                Full digital services
              </h3>
            </div>
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M86.3041 33.8666L85.2791 36.2249C85.1189 36.609 84.8487 36.937 84.5024 37.1677C84.1561 37.3985 83.7493 37.5216 83.3333 37.5216C82.9172 37.5216 82.5104 37.3985 82.1641 37.1677C81.8178 36.937 81.5476 36.609 81.3874 36.2249L80.3624 33.8666C78.5602 29.6946 75.2598 26.3496 71.1124 24.4916L67.9499 23.0791C67.5662 22.9026 67.2412 22.6198 67.0134 22.2642C66.7856 21.9086 66.6645 21.4952 66.6645 21.0729C66.6645 20.6505 66.7856 20.2371 67.0134 19.8815C67.2412 19.5259 67.5662 19.2431 67.9499 19.0666L70.9374 17.7374C75.1891 15.8265 78.546 12.3578 80.3166 8.04578L81.3707 5.49995C81.5256 5.10559 81.7956 4.76702 82.1457 4.52838C82.4958 4.28975 82.9096 4.16211 83.3333 4.16211C83.7569 4.16211 84.1708 4.28975 84.5208 4.52838C84.8709 4.76702 85.1409 5.10559 85.2958 5.49995L86.3499 8.04161C88.1186 12.3544 91.474 15.8247 95.7249 17.7374L98.7166 19.0708C99.0991 19.2478 99.423 19.5305 99.6499 19.8857C99.8769 20.2408 99.9975 20.6535 99.9975 21.0749C99.9975 21.4964 99.8769 21.9091 99.6499 22.2642C99.423 22.6194 99.0991 22.9021 98.7166 23.0791L95.5499 24.4874C91.4033 26.3473 88.1044 29.6938 86.3041 33.8666ZM8.33325 16.6666C8.33325 15.5615 8.77224 14.5017 9.55364 13.7203C10.335 12.9389 11.3948 12.4999 12.4999 12.4999H58.3333V20.8333H16.6666V79.1666H83.3333V45.8333H91.6666V83.3333C91.6666 84.4383 91.2276 85.4982 90.4462 86.2796C89.6648 87.061 88.605 87.4999 87.4999 87.4999H12.4999C11.3948 87.4999 10.335 87.061 9.55364 86.2796C8.77224 85.4982 8.33325 84.4383 8.33325 83.3333V16.6666ZM29.1666 54.1666H37.4999V70.8333H29.1666V54.1666ZM45.8333 29.1666H54.1666V70.8333H45.8333V29.1666ZM62.4999 41.6666H70.8332V70.8333H62.4999V41.6666Z"
                    fill="#FF3541"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black text-lg">
                AI-integrated business tools
              </h3>
            </div>
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M86.3041 33.8666L85.2791 36.2249C85.1189 36.609 84.8487 36.937 84.5024 37.1677C84.1561 37.3985 83.7493 37.5216 83.3333 37.5216C82.9172 37.5216 82.5104 37.3985 82.1641 37.1677C81.8178 36.937 81.5476 36.609 81.3874 36.2249L80.3624 33.8666C78.5602 29.6946 75.2598 26.3496 71.1124 24.4916L67.9499 23.0791C67.5662 22.9026 67.2412 22.6198 67.0134 22.2642C66.7856 21.9086 66.6645 21.4952 66.6645 21.0729C66.6645 20.6505 66.7856 20.2371 67.0134 19.8815C67.2412 19.5259 67.5662 19.2431 67.9499 19.0666L70.9374 17.7374C75.1891 15.8265 78.546 12.3578 80.3166 8.04578L81.3707 5.49995C81.5256 5.10559 81.7956 4.76702 82.1457 4.52838C82.4958 4.28975 82.9096 4.16211 83.3333 4.16211C83.7569 4.16211 84.1708 4.28975 84.5208 4.52838C84.8709 4.76702 85.1409 5.10559 85.2958 5.49995L86.3499 8.04161C88.1186 12.3544 91.474 15.8247 95.7249 17.7374L98.7166 19.0708C99.0991 19.2478 99.423 19.5305 99.6499 19.8857C99.8769 20.2408 99.9975 20.6535 99.9975 21.0749C99.9975 21.4964 99.8769 21.9091 99.6499 22.2642C99.423 22.6194 99.0991 22.9021 98.7166 23.0791L95.5499 24.4874C91.4033 26.3473 88.1044 29.6938 86.3041 33.8666ZM8.33325 16.6666C8.33325 15.5615 8.77224 14.5017 9.55364 13.7203C10.335 12.9389 11.3948 12.4999 12.4999 12.4999H58.3333V20.8333H16.6666V79.1666H83.3333V45.8333H91.6666V83.3333C91.6666 84.4383 91.2276 85.4982 90.4462 86.2796C89.6648 87.061 88.605 87.4999 87.4999 87.4999H12.4999C11.3948 87.4999 10.335 87.061 9.55364 86.2796C8.77224 85.4982 8.33325 84.4383 8.33325 83.3333V16.6666ZM29.1666 54.1666H37.4999V70.8333H29.1666V54.1666ZM45.8333 29.1666H54.1666V70.8333H45.8333V29.1666ZM62.4999 41.6666H70.8332V70.8333H62.4999V41.6666Z"
                    fill="#FF3541"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black text-lg">
                Automation, analytics, and execution layers
              </h3>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto">
            This creates{" "}
            <span className="font-bold text-black">
              multiple recurring revenue streams
            </span>
            , deep client lock-in, and cross-platform defensibility.
          </p>
        </div>
      </section>

      {/* One AI Dashboard Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-4">
            One AI Dashboard for the Modern Business
          </h2>
          <p className="text-center text-gray-800 text-sm mb-12 max-w-3xl mx-auto">
            ARK Trinity is developing an{" "}
            <span className="font-bold">all-in-one AI dashboard</span> that
            enables businesses to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-error text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.5 62.5H93.75V68.75H62.5V62.5ZM62.5 75H93.75V81.25H62.5V75ZM62.5 87.5H93.75V93.75H62.5V87.5ZM50 62.5C48.348 62.5385 46.7053 62.2415 45.1713 61.6269C43.6373 61.0124 42.244 60.093 41.0755 58.9245C39.907 57.756 38.9877 56.3627 38.3731 54.8287C37.7585 53.2947 37.4615 51.6521 37.5 50C37.4615 48.348 37.7585 46.7053 38.3731 45.1713C38.9877 43.6373 39.907 42.244 41.0755 41.0755C42.244 39.907 43.6373 38.9877 45.1713 38.3731C46.7053 37.7585 48.348 37.4615 50 37.5C51.6521 37.4615 53.2947 37.7585 54.8287 38.3731C56.3627 38.9877 57.756 39.907 58.9245 41.0755C60.093 42.244 61.0124 43.6373 61.6269 45.1713C62.2415 46.7053 62.5385 48.348 62.5 50H68.75C68.75 46.2916 67.6503 42.6665 65.5901 39.5831C63.5298 36.4996 60.6014 34.0964 57.1753 32.6773C53.7492 31.2581 49.9792 30.8868 46.3421 31.6103C42.7049 32.3338 39.364 34.1195 36.7418 36.7418C34.1195 39.364 32.3338 42.7049 31.6103 46.3421C30.8868 49.9792 31.2581 53.7492 32.6773 57.1753C34.0964 60.6014 36.4996 63.5298 39.5831 65.5901C42.6665 67.6503 46.2916 68.75 50 68.75V62.5Z"
                    fill="white"
                  />
                  <path
                    d="M91.5781 34.5125L84.2031 21.7375C83.4808 20.4852 82.3467 19.5221 80.994 19.0121C79.6413 18.5022 78.1536 18.4769 76.7844 18.9406L69.1781 21.5156C67.8675 20.6327 66.4976 19.8413 65.0782 19.1469L63.5031 11.2719C63.2193 9.85561 62.4537 8.58138 61.3365 7.66584C60.2193 6.75031 58.8195 6.25001 57.375 6.25H42.625C41.1802 6.25015 39.78 6.7509 38.6627 7.66705C37.5454 8.5832 36.7801 9.85816 36.4969 11.275L34.9219 19.1469C33.4868 19.8343 32.1012 20.6206 30.775 21.5L23.2125 18.9406C21.8441 18.4785 20.3579 18.5046 19.0065 19.0145C17.6552 19.5244 16.5221 20.4866 15.8 21.7375L8.42503 34.5125C7.70256 35.7634 7.43571 37.226 7.66987 38.6514C7.90403 40.0769 8.62473 41.3772 9.7094 42.3312L15.7438 47.6344C15.6907 48.4219 15.625 49.2031 15.625 50C15.625 50.8063 15.6542 51.6042 15.7125 52.3938L9.71253 57.6688C8.62684 58.622 7.90494 59.9219 7.66964 61.3474C7.43434 62.7729 7.70017 64.2359 8.4219 65.4875L15.7969 78.2625C16.5192 79.5148 17.6533 80.4779 19.006 80.9879C20.3587 81.4978 21.8464 81.5231 23.2157 81.0594L30.8219 78.4844C32.1324 79.3683 33.5023 80.1608 34.9219 80.8563L36.4938 88.725C36.7771 90.1424 37.5429 91.4177 38.6608 92.3339C39.7787 93.2502 41.1796 93.7506 42.625 93.75H50V87.5H42.625L40.4063 76.4062C37.3371 75.2658 34.488 73.6039 31.9844 71.4938L21.2125 75.1375L13.8375 62.3625L22.3532 54.8781C21.7688 51.6466 21.7614 48.3372 22.3313 45.1031L13.8375 37.6344L21.2125 24.8625L31.9219 28.4875C34.442 26.3726 37.3137 24.7162 40.4063 23.5938L42.625 12.5H57.375L59.5938 23.5938C62.6629 24.7342 65.5121 26.3961 68.0156 28.5062L78.7875 24.8625L86.1625 37.6375L77.4188 45.3L81.5375 50L90.2875 42.3312C91.3732 41.378 92.0951 40.0781 92.3304 38.6526C92.5657 37.2271 92.2999 35.7641 91.5781 34.5125Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Manage operations</h3>
            </div>
            <div className="bg-error text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.0001 70.8332C47.7899 70.8332 45.6703 69.9552 44.1075 68.3924C42.5447 66.8296 41.6667 64.71 41.6667 62.4998C41.6667 57.8748 45.3751 54.1665 50.0001 54.1665C52.2102 54.1665 54.3298 55.0445 55.8926 56.6073C57.4554 58.1701 58.3334 60.2897 58.3334 62.4998C58.3334 64.71 57.4554 66.8296 55.8926 68.3924C54.3298 69.9552 52.2102 70.8332 50.0001 70.8332ZM75.0001 83.3332V41.6665H25.0001V83.3332H75.0001ZM75.0001 33.3332C77.2102 33.3332 79.3298 34.2111 80.8926 35.7739C82.4554 37.3368 83.3334 39.4564 83.3334 41.6665V83.3332C83.3334 85.5433 82.4554 87.6629 80.8926 89.2257C79.3298 90.7885 77.2102 91.6665 75.0001 91.6665H25.0001C22.7899 91.6665 20.6703 90.7885 19.1075 89.2257C17.5447 87.6629 16.6667 85.5433 16.6667 83.3332V41.6665C16.6667 37.0415 20.3751 33.3332 25.0001 33.3332H29.1667V24.9998C29.1667 19.4745 31.3617 14.1755 35.2687 10.2684C39.1757 6.36144 44.4747 4.1665 50.0001 4.1665C52.736 4.1665 55.445 4.70537 57.9726 5.75235C60.5003 6.79932 62.7969 8.33389 64.7315 10.2684C66.666 12.203 68.2006 14.4996 69.2476 17.0273C70.2945 19.5549 70.8334 22.264 70.8334 24.9998V33.3332H75.0001ZM50.0001 12.4998C46.6849 12.4998 43.5054 13.8168 41.1612 16.161C38.817 18.5052 37.5001 21.6846 37.5001 24.9998V33.3332H62.5001V24.9998C62.5001 21.6846 61.1831 18.5052 58.8389 16.161C56.4947 13.8168 53.3153 12.4998 50.0001 12.4998Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Secure and govern data</h3>
            </div>
            <div className="bg-error text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1571_343)">
                    <path
                      d="M68.75 56.25H100V87.5H68.75V75H48.4375L28.125 95.3125L4.6875 71.875L25 51.5625V31.25H12.5V0H43.75V31.25H31.25V51.5625L48.4375 68.75H68.75V56.25ZM18.75 6.25V25H37.5V6.25H18.75ZM28.125 85.9375L42.1875 71.875L28.125 57.8125L14.0625 71.875L28.125 85.9375ZM93.75 81.25V62.5H75V81.25H93.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1571_343">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Automate workflows</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-error text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1571_346)">
                    <path
                      d="M89.0625 13.1251C87.988 12.43 86.7593 12.0094 85.4842 11.9005C84.2091 11.7915 82.9268 11.9974 81.75 12.5001L43.1875 27.6876C42.2755 28.0622 41.2985 28.2534 40.3125 28.2501H15.625C13.553 28.2501 11.5659 29.0732 10.1007 30.5383C8.6356 32.0034 7.8125 33.9906 7.8125 36.0626V36.6876H0V55.4376H7.8125V56.2501C7.86146 58.2894 8.70612 60.2287 10.166 61.6535C11.6258 63.0784 13.5851 63.8757 15.625 63.8751L25 83.7501C25.6348 85.0885 26.6342 86.2207 27.8835 87.0167C29.1328 87.8127 30.5812 88.2402 32.0625 88.2501H36C38.0612 88.2336 40.0323 87.4032 41.4839 85.9399C42.9356 84.4765 43.7501 82.4988 43.75 80.4376V64.6251L81.75 79.8126C82.6859 80.1802 83.682 80.371 84.6875 80.3751C86.2476 80.3464 87.7665 79.869 89.0625 79.0001C90.0905 78.306 90.9384 77.3771 91.5362 76.2903C92.1339 75.2035 92.4643 73.9899 92.5 72.7501V19.5626C92.4943 18.2908 92.1782 17.0396 91.5791 15.9178C90.9801 14.7959 90.1162 13.8373 89.0625 13.1251ZM35.9375 36.0626V56.2501H15.625V36.0626H35.9375ZM35.9375 80.4376H32L24.3125 63.8751H35.9375V80.4376ZM46.0625 57.1876C45.3203 56.8086 44.5466 56.495 43.75 56.2501V35.6251C44.5387 35.4611 45.3123 35.2311 46.0625 34.9376L84.6875 19.5626V72.5626L46.0625 57.1876ZM92.6875 38.2501V53.8751C94.7595 53.8751 96.7466 53.052 98.2118 51.5868C99.6769 50.1217 100.5 48.1346 100.5 46.0626C100.5 43.9906 99.6769 42.0034 98.2118 40.5383C96.7466 39.0732 94.7595 38.2501 92.6875 38.2501Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1571_346">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Optimize sales and marketing
              </h3>
            </div>
            <div className="bg-error text-white p-8 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1571_349)">
                    <path
                      d="M8.33325 33.3332C8.33325 27.8078 10.5282 22.5088 14.4352 18.6018C18.3422 14.6948 23.6412 12.4998 29.1666 12.4998H54.1666C55.2717 12.4998 56.3315 12.9388 57.1129 13.7202C57.8943 14.5016 58.3333 15.5614 58.3333 16.6665C58.3333 17.7716 57.8943 18.8314 57.1129 19.6128C56.3315 20.3942 55.2717 20.8332 54.1666 20.8332H29.1666C25.8514 20.8332 22.672 22.1501 20.3278 24.4943C17.9835 26.8385 16.6666 30.018 16.6666 33.3332V79.1665H70.8332C74.1485 79.1665 77.3279 77.8495 79.6721 75.5053C82.0163 73.1611 83.3333 69.9817 83.3333 66.6665V49.9998C83.3333 48.8948 83.7722 47.835 84.5536 47.0536C85.335 46.2722 86.3948 45.8332 87.4999 45.8332C88.605 45.8332 89.6648 46.2722 90.4462 47.0536C91.2276 47.835 91.6666 48.8948 91.6666 49.9998V66.6665C91.6666 72.1919 89.4716 77.4909 85.5646 81.3979C81.6576 85.3049 76.3586 87.4998 70.8332 87.4998H12.4999C11.3948 87.4998 10.335 87.0609 9.55364 86.2795C8.77224 85.4981 8.33325 84.4382 8.33325 83.3332V33.3332ZM33.3333 54.1665V45.8332C33.3333 44.7281 33.7722 43.6683 34.5536 42.8869C35.335 42.1055 36.3948 41.6665 37.4999 41.6665C38.605 41.6665 39.6648 42.1055 40.4462 42.8869C41.2276 43.6683 41.6666 44.7281 41.6666 45.8332V54.1665C41.6666 55.2716 41.2276 56.3314 40.4462 57.1128C39.6648 57.8942 38.605 58.3332 37.4999 58.3332C36.3948 58.3332 35.335 57.8942 34.5536 57.1128C33.7722 56.3314 33.3333 55.2716 33.3333 54.1665ZM58.3333 54.1665V45.8332C58.3333 44.7281 58.7722 43.6683 59.5536 42.8869C60.335 42.1055 61.3948 41.6665 62.4999 41.6665C63.605 41.6665 64.6648 42.1055 65.4462 42.8869C66.2276 43.6683 66.6666 44.7281 66.6666 45.8332V54.1665C66.6666 55.2716 66.2276 56.3314 65.4462 57.1128C64.6648 57.8942 63.605 58.3332 62.4999 58.3332C61.3948 58.3332 60.335 57.8942 59.5536 57.1128C58.7722 56.3314 58.3333 55.2716 58.3333 54.1665ZM83.3333 4.16651C84.2024 4.16685 85.0497 4.43898 85.7565 4.94479C86.4633 5.45061 86.9942 6.16478 87.2749 6.98734L87.8166 8.56234C89.0666 12.2248 91.9416 15.104 95.6082 16.354L97.1791 16.8915C98.0007 17.1731 98.7139 17.7043 99.2187 18.4111C99.7236 19.1178 99.995 19.9646 99.995 20.8332C99.995 21.7017 99.7236 22.5486 99.2187 23.2553C98.7139 23.962 98.0007 24.4933 97.1791 24.7748L95.6041 25.3165C91.9416 26.5665 89.0624 29.4415 87.8124 33.1082L87.2749 34.679C86.9934 35.5007 86.4621 36.2138 85.7554 36.7187C85.0486 37.2236 84.2018 37.495 83.3333 37.495C82.4647 37.495 81.6179 37.2236 80.9111 36.7187C80.2044 36.2138 79.6731 35.5007 79.3916 34.679L78.8499 33.104C78.2328 31.2963 77.2097 29.654 75.859 28.3033C74.5083 26.9526 72.866 25.9294 71.0583 25.3123L69.4874 24.7748C68.6658 24.4933 67.9526 23.962 67.4478 23.2553C66.9429 22.5486 66.6714 21.7017 66.6714 20.8332C66.6714 19.9646 66.9429 19.1178 67.4478 18.4111C67.9526 17.7043 68.6658 17.1731 69.4874 16.8915L71.0624 16.3498C74.7249 15.0998 77.6041 12.2248 78.8541 8.55817L79.3916 6.98734L79.6499 6.37901C80.005 5.7104 80.5354 5.15116 81.1844 4.76135C81.8333 4.37154 82.5762 4.1659 83.3333 4.16651ZM83.3333 17.4832C82.3476 18.7236 81.2237 19.8475 79.9832 20.8332C81.2305 21.8193 82.3471 22.9346 83.3333 24.179C84.3221 22.9373 85.4374 21.8221 86.6791 20.8332C85.4401 19.8473 84.3176 18.7234 83.3333 17.4832Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1571_349">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Make real-time, AI-assisted decisions
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-error text-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                One interface. One system.
                <br />
                One operational command centre
              </h3>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/about/section-5.png"
                alt="AI Dashboard Interface"
                width={500}
                height={300}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leading AI-Native + Governed by Operators Section */}
      <section className="bg-linear-to-b from-gray-900 to-black text-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/about/section-6.png"
                alt="AI-Native Technology"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading AI-Native Holding Company in Asia-Pacific
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We are not retrofitting AI into legacy models.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                ARK Trinity is{" "}
                <span className="font-bold text-white">
                  AI-native by design
                </span>
                , positioning us as a leading AI holding platform across
                Asia-Pacific — one of the fastest-growing digital economies
                globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white text-black py-14 md:py-18">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-4">
            Governed by Operators, Not Theorists
          </h2>
          <p className="text-center text-gray-800 text-sm mb-12 max-w-3xl mx-auto">
            Our board and advisors bring{" "}
            <span className="font-bold">
              deep operational and structural expertise
            </span>
            , guiding:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F5F5] p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-error"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black">Scalable execution</h3>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-error"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black">
                Profit-margin optimisation
              </h3>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-error"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black">
                Legal and regulatory resilience
              </h3>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-error"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-black">
                Disciplined financial leverage
              </h3>
            </div>
          </div>

          <p className="text-center text-gray-800 text-sm font-semibold">
            Growth is engineered to be{" "}
            <span className="font-bold text-black">
              controlled, compliant, and sustainable.
            </span>
          </p>
        </div>
      </div>

      {/* Final Red Banner */}
      <section className="bg-error py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-36 h-36 shrink-0">
              <svg
                viewBox="0 0 197 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M98.4992 36.9373C98.4992 31.4949 96.3371 26.2753 92.4887 22.4269C88.6403 18.5785 83.4208 16.4165 77.9783 16.4165C72.5359 16.4165 67.3163 18.5785 63.4679 22.4269C59.6195 26.2753 57.4575 31.4949 57.4575 36.9373C53.0919 36.937 48.8046 38.0972 45.035 40.2991C41.2654 42.5011 38.1489 45.6656 36.0048 49.4684C33.8608 53.2713 32.7662 57.5757 32.8333 61.9408C32.9004 66.3059 34.1268 70.5747 36.3867 74.3099C30.7684 75.3955 25.7033 78.4031 22.0611 82.8165C18.4189 87.2299 16.4268 92.7735 16.4268 98.4957C16.4268 104.218 18.4189 109.762 22.0611 114.175C25.7033 118.588 30.7684 121.596 36.3867 122.682C34.1247 126.417 32.8966 130.687 32.8284 135.053C32.7603 139.419 33.8544 143.725 35.9987 147.529C38.143 151.333 41.2604 154.499 45.0312 156.701C48.802 158.904 53.0906 160.064 57.4575 160.062C57.4575 165.505 59.6195 170.724 63.4679 174.573C67.3163 178.421 72.5359 180.583 77.9783 180.583C83.4208 180.583 88.6403 178.421 92.4887 174.573C96.3371 170.724 98.4992 165.505 98.4992 160.062M98.4992 160.062C98.4992 165.505 100.661 170.724 104.51 174.573C108.358 178.421 113.578 180.583 119.02 180.583C124.462 180.583 129.682 178.421 133.53 174.573C137.379 170.724 139.541 165.505 139.541 160.062C143.908 160.064 148.196 158.904 151.967 156.701C155.738 154.499 158.855 151.333 161 147.529C163.144 143.725 164.238 139.419 164.17 135.053C164.102 130.687 162.874 126.417 160.612 122.682C166.23 121.596 171.295 118.588 174.937 114.175C178.579 109.762 180.572 104.218 180.572 98.4957C180.572 92.7735 178.579 87.2299 174.937 82.8165C171.295 78.4031 166.23 75.3955 160.612 74.3099C162.872 70.5747 164.098 66.3059 164.165 61.9408C164.232 57.5757 163.138 53.2713 160.993 49.4684C158.849 45.6656 155.733 42.5011 151.963 40.2991C148.194 38.0972 143.906 36.937 139.541 36.9373C139.541 31.4949 137.379 26.2753 133.53 22.4269C129.682 18.5785 124.462 16.4165 119.02 16.4165C113.578 16.4165 108.358 18.5785 104.51 22.4269C100.661 26.2753 98.4992 31.4949 98.4992 36.9373"
                  stroke="white"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M86.0807 57.4585V73.711M57.4583 86.1877H74.3018M123.314 86.1877H140.157M123.314 110.599H140.157M57.4583 110.607H74.3018M86.0807 123.289V139.542M110.911 123.289V139.542M110.829 57.4585V73.711M82.5101 122.863H115.105C117.282 122.863 119.37 121.998 120.91 120.458C122.449 118.919 123.314 116.831 123.314 114.654V81.9193C123.314 79.7423 122.449 77.6545 120.91 76.1152C119.37 74.5758 117.282 73.711 115.105 73.711H82.5101C80.3331 73.711 78.2453 74.5758 76.7059 76.1152C75.1666 77.6545 74.3018 79.7423 74.3018 81.9193V114.654C74.3018 116.831 75.1666 118.919 76.7059 120.458C78.2453 121.998 80.3331 122.863 82.5101 122.863Z"
                  stroke="white"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1 text-white">
              <p className="text-xl md:text-3xl font-bold leading-relaxed pl-20">
                ARK Trinity secures data, transforms businesses, and automates
                growth — with AI at the core and structure as the advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about/abbe-sublett-nxZDMUQhN4o-unsplash 1.png"
                  alt="Modern skyscraper representing ARK Trinity's robust foundation"
                  width={500}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-red-500/20 rounded-lg -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-error leading-tight mb-6">
                Founded with Vision. Built with Discipline. Driven by Destiny.
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-pretty">
                ARK Trinity was born from a decade of building digital systems
                and studying wealth creation patterns across cultures. Founded
                on the belief that intelligence, when structured and
                disciplined, can outperform capital itself, the company merges
                AI, human systems, and conscious leadership into one
                institutional ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-12 md:pt-16 overflow-hidden hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative flex flex-col md:flex-row items-center -mb-12">
            <div className="w-full md:w-1/2 flex flex-col justify-end relative z-10 pb-8 md:pb-0 mb-12">
              <div className="bg-gray-100 rounded-lg p-5 md:p-6 relative inline-block">
                <p className="text-gray-600 leading-relaxed mb-3 text-pretty">
                  &quot;I&apos;ve seen how capital chases technology and how
                  technology outruns consciousness. ARK Trinity is my answer — a
                  bridge between all three.&quot;
                </p>
                <div className="font-bold text-black text-xl">
                  CKH, Founder & Chief Architect
                </div>
              </div>

              <div className="absolute bottom-0 right-5 lg:-bottom-5 lg:-right-5">
                <svg
                  width="64"
                  height="56"
                  viewBox="0 0 48 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20C0 13.3333 1.66667 7.83333 5 3.5C8.33333 -0.833333 13.3333 -3.66667 20 -5L22 1C18 2.33333 15 4.33333 13 7C11 9.66667 10 12.6667 10 16H20V36H0V20ZM28 20C28 13.3333 29.6667 7.83333 33 3.5C36.3333 -0.833333 41.3333 -3.66667 48 -5L50 1C46 2.33333 43 4.33333 41 7C39 9.66667 38 12.6667 38 16H48V36H28V20Z"
                    fill="#EF4444"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative h-[400px] w-full md:h-[500px] md:max-w-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/ceo-about.png"
                  alt="CKH, Founder & Chief Architect of ARK Trinity"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top relative md:pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-error text-sm mb-6 text-pretty">
                Digital builds revenue. Capital multiplies it. AI evolves it —
                this is how ARK Trinity turns technology into empire and empire
                into legacy.
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
                Three Pillars. One Intelligent Engine. Infinite Scale.
              </h2>

              <p className="text-black text-sm leading-relaxed text-pretty">
                Digital PA creates revenue. ARK Capital amplifies scale. ARK AI
                Labs powers intelligence. Together they form a living
                architecture — an engine of growth that learns, evolves, and
                compounds across ASEAN.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/about/modern_asian_tech_office_hd.png"
                  alt="Modern office architecture symbolizing ARK Trinity growth"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
