import { pricingAccordionCategories } from "@/data/site";
import PricingAccordion from "./PricingAccordion";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function PricingDetails() {
  return (
    <section id="servicios-precios" className="bg-paper py-20 lg:py-[120px]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Desglose Completo" title="Servicios y Precios" tone="light" />
        </FadeIn>

        <FadeIn delay={100} className="mt-16">
          <PricingAccordion categories={pricingAccordionCategories} />
        </FadeIn>
      </div>
    </section>
  );
}
