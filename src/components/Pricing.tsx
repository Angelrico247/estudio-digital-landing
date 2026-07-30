import { pricingPlans } from "@/data/site";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section id="precios" className="relative bg-dark py-20 lg:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-full h-[1700px] w-[1700px] translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-70 mix-blend-screen blur-[8px]"
        style={{ backgroundImage: "url(/glow-blue.png)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Precios" title="Nuestros Paquetes" />
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
