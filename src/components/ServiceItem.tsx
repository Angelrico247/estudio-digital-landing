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
      className="spotlight-border relative h-full w-full overflow-hidden rounded-md border border-line bg-card p-8 py-10"
    >
      <span
        aria-hidden
        className="text-outline relative z-10 block font-heading text-[110px] font-black leading-[0.8]"
      >
        {service.number.padStart(2, "0")}
      </span>

      <div className="relative z-10 mt-4 flex items-center gap-3">
        <Icon className="h-8 w-8 shrink-0 text-primary" />
        <h3 className="font-heading text-[22px] font-bold uppercase text-foreground">{service.title}</h3>
      </div>
      <p className="relative z-10 mt-3 text-[15px] leading-[1.6] text-secondary">{service.description}</p>

      <button
        type="button"
        onClick={() => open({ type: "servicio", selection: service.title })}
        className="btn-dot relative z-10 mt-6 font-heading text-xs font-semibold uppercase tracking-[0.1em]"
      >
        <span>Cotizar Servicio</span>
      </button>
    </div>
  );
}
