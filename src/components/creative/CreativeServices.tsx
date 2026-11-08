import { services } from "@/data/site";
import CreativeHeading from "./CreativeHeading";
import CreativeQuoteButton from "./CreativeQuoteButton";
import Reveal from "./Reveal";

export default function CreativeServices() {
  return (
    <section id="servicios" className="scroll-mt-[77px] bg-black pb-24 lg:pb-32">
      <CreativeHeading eyebrow="Servicios" title="Lo que hacemos por tu marca" tone="dark" />

      <div className="mx-auto max-w-[1200px] px-6">
        <ul className="mt-16 grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.number}>
              <Reveal delay={(i % 3) * 100}>
                <span
                  aria-hidden
                  className="cr-outline block h-[110px] overflow-hidden font-cr-heading text-[170px] font-extrabold leading-[0.9]"
                >
                  {service.number}
                </span>
                <h3 className="mt-6 font-cr-heading text-[28px] font-bold leading-[1.15] text-white">
                  {service.title}
                </h3>
                <p className="mt-4 font-cr-body text-[15px] leading-[1.8] text-white/70">
                  {service.description}
                </p>
                <CreativeQuoteButton
                  type="servicio"
                  selection={service.title}
                  className="cr-dot mt-8 font-cr-heading text-xs focus-visible:outline-none"
                >
                  <span>Cotizar</span>
                </CreativeQuoteButton>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
