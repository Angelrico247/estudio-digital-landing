"use client";

import { useState } from "react";
import type { PricingAccordionCategory } from "@/data/site";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function PricingAccordion({ categories }: { categories: PricingAccordionCategory[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {categories.map((category, i) => {
        const isOpen = openIndex === i;
        const panelId = `pricing-accordion-panel-${i}`;
        const buttonId = `pricing-accordion-button-${i}`;

        return (
          <div key={category.title}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-primary"
              >
                <span className="font-heading text-lg font-semibold uppercase tracking-[0.05em] text-foreground">
                  {category.title}
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  {category.comingSoon && (
                    <span className="rounded-full border border-primary/40 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                      Próximamente
                    </span>
                  )}
                  <ChevronDownIcon
                    className={`h-5 w-5 text-secondary transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                {category.items && (
                  <div className="grid gap-4 pb-6 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <div key={item.name} className="rounded-md border border-line bg-card p-5">
                        <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.02em] text-foreground">
                          {item.name}
                        </h4>
                        <strong className="mt-1 block bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] bg-clip-text font-heading text-sm font-semibold text-transparent">
                          {item.price}
                        </strong>
                        <p className="mt-2 text-[13px] leading-[1.6] text-secondary">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {category.note && (
                  <p className="pb-6 text-[13px] italic leading-[1.6] text-secondary/80">{category.note}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
