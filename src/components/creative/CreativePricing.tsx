import { pricingPlans } from "@/data/site";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

export default function CreativePricing() {
  return (
    <section id="paquetes" className="scroll-mt-[77px] bg-white pb-24 pt-0 lg:pb-32">
      <CreativeHeading eyebrow="Paquetes" title="Gestión de redes sociales" />

      <div className="mx-auto max-w-[1200px] px-6">

        <ul className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <li key={plan.name} className="h-full">
              <Reveal delay={i * 100} className="h-full">
                <div
                  className={`relative flex h-full flex-col bg-white p-9 lg:p-10 ${
                    plan.featured ? "border border-cr-ink shadow-[0_0_0_1px_var(--cr-ink)]" : "border border-cr-ink/70"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-cr-accent-ink px-4 py-1 font-cr-heading text-[11px] font-semibold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  )}

                  <span
                    aria-hidden
                    className="cr-outline-dark pointer-events-none absolute right-6 top-6 font-cr-heading text-[96px] font-extrabold leading-[0.8]"
                  >
                    {plan.number}
                  </span>

                  <h3 className="font-cr-heading text-3xl font-extrabold leading-tight tracking-tight text-cr-ink">
                    {plan.name}
                  </h3>

                  <span aria-hidden className="my-6 block h-px w-full bg-cr-line" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) =>
                      typeof feature === "string" ? (
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
                      ) : (
                        <li
                          key={feature.note}
                          className="!-mt-1 pl-7 font-cr-body text-[13px] italic leading-snug text-cr-muted"
                        >
                          ({feature.note})
                        </li>
                      )
                    )}
                  </ul>

                  <a
                    href="#contacto"
                    data-interest={`Paquete ${plan.name}`}
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
