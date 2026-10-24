import { pricingPlans } from "@/data/site";
import { whatsappLink } from "@/data/creative-config";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

export default function CreativePricing() {
  return (
    <section id="paquetes" className="scroll-mt-[76px] bg-cr-card py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Paquetes" title="Gestión de redes sociales" />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <li key={plan.name} className="h-full">
              <Reveal delay={i * 100} className="h-full">
                <div
                  className={`relative flex h-full flex-col bg-white p-9 lg:p-10 ${
                    plan.featured ? "border border-cr-ink shadow-[0_0_0_1px_var(--cr-ink)]" : "border border-cr-line"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-cr-accent-ink px-4 py-1 font-cr-heading text-[11px] font-semibold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  )}

                  <span
                    aria-hidden
                    className="font-cr-heading text-6xl font-extrabold leading-[0.8] text-cr-line"
                  >
                    {plan.number.padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 font-cr-heading text-4xl font-extrabold uppercase leading-tight tracking-tight text-cr-ink">
                    {plan.name}
                  </h3>

                  <span aria-hidden className="my-6 block h-px w-full bg-cr-line" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 font-cr-body text-[15px] leading-relaxed text-cr-body">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          className="mt-1 h-4 w-4 shrink-0 text-cr-accent-ink"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5 9-10" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(
                      `Hola, buen día. Me interesa el paquete ${plan.name} de TWID Creative. ¿Me ayudan a cotizar?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-9 rounded-full px-8 py-3.5 text-center font-cr-heading text-[13px] font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink motion-reduce:transition-none ${
                      plan.featured
                        ? "bg-cr-ink text-white hover:bg-cr-accent-ink"
                        : "border border-cr-ink text-cr-ink hover:bg-cr-ink hover:text-white"
                    }`}
                  >
                    Cotizar paquete
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
