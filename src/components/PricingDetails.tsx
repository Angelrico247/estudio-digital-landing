import { pricingAccordionCategories } from "@/data/site";
import PricingAccordion from "./PricingAccordion";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function PricingDetails() {
  return (
    <section id="servicios-precios" className="relative bg-section py-20 lg:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[1300px] w-[1300px] translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-70 mix-blend-screen"
        style={{ backgroundImage: "url(/glow-blue.png)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Desglose Completo" title="Servicios y Precios" />
        </FadeIn>

        <FadeIn delay={100} className="mt-16">
          <PricingAccordion categories={pricingAccordionCategories} />
        </FadeIn>
      </div>
    </section>
  );
}
