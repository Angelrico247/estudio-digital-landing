import { services } from "@/data/site";
import ServiceItem from "./ServiceItem";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <section id="servicios" className="relative bg-dark py-20 lg:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full h-[1700px] w-[1700px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-70 mix-blend-screen blur-[8px]"
        style={{ backgroundImage: "url(/glow-purple.png)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Qué Hacemos" title="Nuestros Servicios" />
        </FadeIn>

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {services.map((service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 100}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)]"
            >
              <ServiceItem service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
