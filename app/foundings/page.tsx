import Image from "next/image";
import { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import PrinciplesSection from "@/components/sections/foundings/PrinciplesSection";
import BioSection from "@/components/sections/foundings/BioSection";
import BoardStructureSection from "@/components/sections/foundings/BoardStructureSection";
import ClaritySection from "@/components/sections/foundings/ClaritySection";

export const metadata: Metadata = {
  title: "Founding - ARK Trinity",

  description:
    "Three Minds. One Architecture of Intelligence. Meet the founders of ARK Trinity.",
  openGraph: {
    title: "Founding - ARK Trinity | Three Minds",
    description:
      "Capital multiplies, Digital executes, AI flows. Meet the founders of ARK Trinity.",
    images: ["/images/founding-creed.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founding - ARK Trinity | Three Minds",
    description:
      "Capital multiplies, Digital executes, AI flows. Meet the founders of ARK Trinity.",
    images: ["/images/founding-creed.png"],
  },
};

export default function FoundingPage() {
  return (
    <main>
      <PageHero
        title="BOARD"
        image="/images/building-skyward.png"
        subtitle={
          <span>
            ARK Trinity is governed by leaders who do not merely hold titles —
            each carries{" "}
            <b>explicit responsibility for a core pillar of the organisation</b>
            . This structure ensures clarity of accountability, disciplined
            execution, and long-term resilience.
          </span>
        }
      />

      {/* Principles Section */}
      <PrinciplesSection />

      {/* Board of Committee Header */}
      <section className="bg-[#F5F5F5] pt-16 md:pt-24 pb-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-error uppercase tracking-wide">
            BOARD OF COMMITTEE
          </h2>
        </div>
      </section>

      {/* Chan Wai Sun */}
      <BioSection
        name="Chan Wai Sun"
        subtitle="Founder & Managing Director – Capital Consciousness"
        imageSrc="/images/foundings/1.png"
        imageRight={false}
        contentReorder={true}
        bio={
          <>
            <p>
              Chan Wai Sun is the{" "}
              <span className="font-bold">
                architect of capital consciousness
              </span>{" "}
              at ARK Trinity.
            </p>
            <p>
              With over{" "}
              <span className="font-bold">
                18 years as an owner-operator and investor
              </span>
              , his experience spans{" "}
              <span className="font-bold">
                education, wellness, digital services, AI platforms, and
                land-backed investments
              </span>
              . He founded ARK Trinity as a{" "}
              <span className="font-bold">structured holding company</span>, not
              a single-product venture.
            </p>
          </>
        }
        roleTitle="Role at ARK Trinity"
        roleContent={
          <>
            <p className="mb-6">
              Chan Wai Sun defines{" "}
              <b>
                capital allocation strategy, investment governance, and exit
                architecture
              </b>
              , ensuring that capital is used consciously — purposefully,
              responsibly, and sustainably.
            </p>
            <p className="font-bold italic">
              He is the reason capital at ARK Trinity is treated with
              consciousness, not convenience.
            </p>
          </>
        }
        detailTitle="Capital consciousness under his leadership means:"
        detailContent={
          <>
            <ol className="list-decimal pl-5 space-y-1 mb-6">
              <li>capital is deployed with intent and accountability</li>
              <li>
                returns are generated through real economic activity, not
                speculation
              </li>
              <li>
                every investment preserves long-term optionality and downside
                protection.
              </li>
            </ol>
            <p className="font-bold text-lg mb-2">
              Every invested capital raised is governed by three questions:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Does it create real value?</li>
              <li>Does it strengthen the system?</li>
              <li>Does it preserve capital dignity over time?</li>
            </ol>
          </>
        }
      />

      {/* Austin Chua */}
      <BioSection
        name="Austin Chua"
        subtitle="Founder & Director – AI Authentic Intelligence"
        imageSrc="/images/foundings/2.png"
        imageRight={true}
        contentReorder={true}
        bio={
          <p>
            Austin Chua is the{" "}
            <span className="font-bold">
              guardian of AI authentic intelligence
            </span>{" "}
            within ARK Trinity.
          </p>
        }
        roleTitle="Role at ARK Trinity"
        roleContent={
          <>
            <p className="mb-6">
              Austin oversees{" "}
              <b>execution, operational scalability, and AI deployment</b>,
              ensuring intelligence generated by the platform is{" "}
              <b>commercially useful, reliable, and outcome-driven.</b>
            </p>
            <p className="font-bold italic">
              He is the reason ARK Trinity&apos;s AI is authentic — practical,
              trusted, and economically relevant.
            </p>
          </>
        }
        detailTitle="As a founder-operator, he ensures that AI is:"
        detailContent={
          <>
            <ol className="list-decimal pl-5 space-y-1 mb-6">
              <li>applied to solve real operational problems</li>
              <li>embedded into daily workflows, not isolated experiments</li>
              <li>
                measured by efficiency gains, decision quality, and margin
                impact
              </li>
            </ol>
            <p className="font-bold text-lg mb-2">
              Under his leadership, AI systems are designed to be:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>explainable</li>
              <li>auditable</li>
              <li>trusted by operators and management alike</li>
            </ol>
          </>
        }
      />

      {/* Robert Tan */}
      <BioSection
        name="Robert Tan"
        subtitle="Founder & Chief Technology Advisor – Digital Discipline"
        imageSrc="/images/foundings/3.png"
        imageRight={false}
        contentReorder={true}
        bio={
          <>
            <p>
              Robert Tan brings{" "}
              <span className="font-bold">
                over 30 years of technology leadership experience
              </span>
              , spanning enterprise IT, digital infrastructure, innovation
              incubation, and blockchain-enabled transformation across Southeast
              Asia.
            </p>
            <p>
              He is the{" "}
              <span className="font-bold">co-founder of Taranium</span>,
              recognised as{" "}
              <span className="font-bold">
                Indonesia&apos;s first blockchain technology written in Bahasa
                Indonesia
              </span>
              , significantly lowering adoption barriers for enterprise and
              developer ecosystems.
            </p>
          </>
        }
        roleTitle="Role at ARK Trinity"
        roleContent={
          <>
            <p className="mb-4">
              Robert enforces <b>digital discipline</b>, ensuring that:
            </p>
            <ol className="list-decimal pl-5 space-y-1 mb-6">
              <li>systems remain secure and scalable</li>
              <li>innovation does not compromise governance</li>
              <li>growth does not create technical or operational debt.</li>
            </ol>
            <p className="font-bold italic">
              He is the reason ARK Trinity scales digitally without losing
              control.
            </p>
          </>
        }
        detailTitle="His career focus has been on:"
        detailContent={
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              translating complex technology into deployable business systems
            </li>
            <li>enforcing architectural discipline</li>
            <li>preventing scale-induced fragility.</li>
          </ol>
        }
      />

      {/* Board of Advisors Header */}
      <section className="bg-[#F5F5F5] pt-16 md:pt-24 pb-4 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-error uppercase tracking-wide">
            BOARD OF ADVISORS
          </h2>
        </div>
      </section>

      {/* Lim How Teck */}
      <BioSection
        name="Lim How Teck"
        subtitle=""
        imageSrc="/images/foundings/lim-how-teck.png"
        imageRight={true}
        contentReorder={true}
        bio={
          <>
            <p>
              Lim How Teck is a veteran global executive with over{" "}
              <span className="font-bold">
                four decades of leadership experience
              </span>{" "}
              across shipping, logistics, finance, capital markets, and
              large-scale corporate restructuring.
            </p>
            <p>
              He previously served as{" "}
              <span className="font-bold">
                Group CFO, Group COO, Executive Director, and Deputy CEO of
                Neptune Orient Lines (NOL Group)
              </span>
              , where he helped steer one of Asia&apos;s most critical shipping
              enterprises through{" "}
              <span className="font-bold">five full industry cycles</span>.
            </p>
          </>
        }
        roleTitle="Role at ARK Trinity"
        roleContent={
          <>
            <p>
              As Advisor, Mr Lim provides{" "}
              <span className="font-bold">
                board-level oversight on capital discipline, governance, risk
                management, and scalability
              </span>
              , ensuring that growth remains institution-grade and resilient
              across cycles.
            </p>
          </>
        }
        detailTitle="During his tenure:"
        detailContent={
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              NOL&apos;s net gearing was reduced from{" "}
              <span className="font-bold">16.0 to as low as 0.1</span>
            </li>
            <li>
              The group executed major acquisitions and divestments exceeding{" "}
              <span className="font-bold">USD 2.3 billion</span> in aggregate
              value
            </li>
            <li>
              NOL reversed a{" "}
              <span className="font-bold">USD 330 million loss (2002)</span>{" "}
              into:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  <span className="font-bold">
                    USD 429 million profit (2003)
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    USD 943 million profit (2004)
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    USD 804 million profit (2005)
                  </span>
                </li>
              </ul>
            </li>
            <li>
              Group revenue peaked at approximately USD 7.3 billion annually
            </li>
          </ol>
        }
        bottomContent={
          <p>
            Mr Lim has since served as{" "}
            <span className="font-bold">Chairman, Director, or Advisor</span> to
            numerous public and private organisations, including infrastructure,
            security, education, energy, and financial institutions. He was
            awarded the <b>Public Service Medal (PBM)</b> in{" "}
            <span className="font-bold">1999</span> and the{" "}
            <span className="font-bold">Public Service Star (BBM)</span> in{" "}
            <span className="font-bold">2014</span>.
          </p>
        }
      />

      {/* Why This Board Structure Works */}
      <BoardStructureSection />

      {/* Clarity Section */}
      <ClaritySection />

      <section className="bg-white py-16 md:py-24 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
              <Image
                src="/images/founding-creed.png"
                alt="Founding team discussing strategy"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-error mb-8">
                The Founding Creed
              </h2>
              <div className="space-y-6 text-gray-800">
                <p>
                  <span className="font-bold">Capital is Exponential —</span> it
                  multiplies value, transforming intention into structure and
                  wealth with purpose.
                </p>
                <p>
                  <span className="font-bold">Digital is Execution —</span>{" "}
                  turning systems into motion with precision and discipline.
                </p>
                <p>
                  <span className="font-bold">AI is Effortless —</span> flowing
                  through creation like breath, making complexity simple.
                </p>
                <p>
                  <span className="font-bold">
                    Together they form the architecture of intelligent growth —
                  </span>{" "}
                  where intention becomes empire, and empire becomes
                  <br />
                  legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 pt-0 hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 -mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-16">
            The Journey of a Living Institution
          </h2>

          <div className="relative flex flex-col md:flex-row items-center border-t border-gray-100 pt-16">
            <div className="w-full md:w-1/2 flex flex-col justify-end relative z-10 pb-8 md:pb-0 mb-12">
              <div className="bg-gray-100 rounded-lg p-5 md:p-6 relative inline-block">
                <p className="text-gray-600 leading-relaxed mb-3 text-pretty">
                  &quot;Our timeline is not a race — it&apos;s an architecture.
                  Every milestone is a pillar, every year a layer.&quot;
                </p>
                <div className="font-bold text-black text-xl">CKH</div>
              </div>

              <div className="absolute -bottom-5 -right-5">
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
              <div className="relative h-[400px] w-full md:h-[500px] md:max-w-[500px]">
                <Image
                  src="/images/ceo-about.png"
                  alt="CKH - Founder Quote"
                  fill
                  className="object-contain object-top relative md:pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
