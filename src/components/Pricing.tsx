import { pricingPlans } from "@/data/site";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section id="precios" className="bg-paper-card py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Precios" title="Nuestros Paquetes" variant="flag" tone="light" />
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-[1100px] gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 100} className="h-full">
              <PricingCard plan={plan} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
