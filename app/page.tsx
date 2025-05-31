import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StrategySection } from "@/components/strategy-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <StrategySection />
    </main>
  );
}
