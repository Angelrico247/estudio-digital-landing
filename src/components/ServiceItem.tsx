"use client";

import type { MouseEvent } from "react";
import type { Service } from "@/data/site";
import { useQuoteModal } from "./QuoteModalContext";
import {
  AutomationIcon,
  BillboardIcon,
  LikeContentIcon,
  SocialMediaIcon,
  VideoMarketingIcon,
  WebsiteIcon,
} from "./ServiceIcons";

const icons = {
  megaphone: SocialMediaIcon,
  target: BillboardIcon,
  palette: LikeContentIcon,
  code: WebsiteIcon,
  video: VideoMarketingIcon,
  automation: AutomationIcon,
};

function handleSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

export default function ServiceItem({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const { open } = useQuoteModal();

  return (
    <div
      onMouseMove={handleSpotlight}
      className="spotlight-border relative h-full w-full overflow-hidden rounded-md border border-line bg-card p-8 py-12"
    >
      <Icon className="relative z-10 h-14 w-14 text-primary" />

      <h3 className="relative z-10 mt-6 font-heading text-[22px] font-bold uppercase text-foreground">
        {service.title}
      </h3>
      <p className="relative z-10 mt-3 text-[15px] leading-[1.6] text-secondary">{service.description}</p>

      <button
        type="button"
        onClick={() => open({ type: "servicio", selection: service.title })}
        className="relative z-10 mt-5 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-primary transition-colors hover:text-foreground"
      >
        Cotizar Servicio →
      </button>

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[15px] right-[10px] font-heading text-[130px] font-black leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-border)]"
      >
        {service.number}
      </span>
    </div>
  );
}
