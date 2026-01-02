import Hero from "@/components/sections/hero";
import HoldingSection from "@/components/sections/holding-section";
import PillarsSection from "@/components/sections/pillars-section";
import ModelSection from "@/components/sections/model-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <HoldingSection />
      <PillarsSection />
      <ModelSection />
    </main>
  );
}
