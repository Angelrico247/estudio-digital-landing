"use client";

import type { MouseEvent } from "react";
import type { PricingPlan } from "@/data/site";
import { useQuoteModal } from "./QuoteModalContext";

function handleSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const { open } = useQuoteModal();

  return (
    <div
      onMouseMove={handleSpotlight}
      className={`spotlight-border relative flex h-full flex-col overflow-hidden rounded-md border border-line bg-card p-9 lg:p-12 ${plan.featured ? "lg:scale-[1.02]" : ""}`}
    >
      {plan.featured && (
        <span className="font-heading absolute right-0 top-0 rounded-bl-md rounded-tr-md bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
          Popular
        </span>
      )}

      <span className="text-outline font-heading text-[100px] font-black leading-[0.8]">
        {plan.number.padStart(2, "0")}
      </span>

      <h3 className="mt-4 font-heading text-xl font-bold uppercase text-foreground">{plan.name}</h3>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-heading text-4xl font-extrabold text-foreground">
          {plan.priceRange}
        </span>
      </div>
      <span className="text-sm text-secondary">MXN / mes</span>

      <div className="my-6 h-px w-full bg-line" />

      <ul className="flex-1 space-y-0">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[15px] leading-[2.2] text-secondary">
            <span className="text-primary">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => open({ type: "paquete", selection: plan.name })}
        className="btn-fill font-heading mt-8 w-full rounded-md border py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground"
      >
        <span className="btn-fill-content">Cotizar Paquete</span>
      </button>
    </div>
  );
}
