"use client";

import { useState } from "react";
import { pricingAccordionCategories } from "@/data/site";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
      className={`h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
        open ? "rotate-180 text-cr-accent-ink" : "text-cr-muted"
      }`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function CreativePricingDetails() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="desglose" className="scroll-mt-[76px] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Desglose completo" title="Catálogo de servicios" />
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-cr-line border-y border-cr-line">
            {pricingAccordionCategories.map((category, i) => {
              const isOpen = openIndex === i;
              const panelId = `cr-accordion-panel-${i}`;
              const buttonId = `cr-accordion-button-${i}`;

              return (
                <div key={category.title}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left font-cr-heading text-base font-semibold uppercase tracking-wide text-cr-ink transition-colors hover:text-cr-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cr-accent-ink motion-reduce:transition-none sm:text-lg"
                    >
                      <span>{category.title}</span>
                      <span className="flex items-center gap-3">
                        <ChevronDown open={isOpen} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="pb-6"
                  >
                    {category.items && (
                      <ul className="grid gap-4 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <li key={item.name} className="bg-cr-card p-5">
                            <h4 className="font-cr-heading text-[15px] font-bold uppercase tracking-tight text-cr-ink">
                              {item.name}
                            </h4>
                            <p className="mt-2 font-cr-body text-sm leading-[1.7] text-cr-muted">
                              {item.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {category.note && (
                      <p className="mt-4 font-cr-body text-[13px] italic leading-[1.7] text-cr-muted">
                        {category.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
