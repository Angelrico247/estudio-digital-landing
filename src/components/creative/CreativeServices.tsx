import type { CSSProperties } from "react";
import { services } from "@/data/site";
import {
  AutomationIcon,
  BillboardIcon,
  LikeContentIcon,
  SocialMediaIcon,
  VideoMarketingIcon,
  WebsiteIcon,
} from "@/components/ServiceIcons";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

const icons = {
  megaphone: SocialMediaIcon,
  target: BillboardIcon,
  palette: LikeContentIcon,
  code: WebsiteIcon,
  video: VideoMarketingIcon,
  automation: AutomationIcon,
};

// Los íconos de la landing oscura se pintan con un degradado violeta→azul a partir de estas
// dos variables; aquí se las apuntamos al acento de Creative para que queden de un solo color.
const iconTint = {
  "--color-primary": "var(--cr-accent)",
  "--color-secondary-blue": "var(--cr-accent)",
} as CSSProperties;

export default function CreativeServices() {
  return (
    <section id="servicios" className="scroll-mt-[76px] bg-cr-card py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Qué hacemos" title="Nuestros servicios" />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.number}>
                <Reveal delay={(i % 3) * 100} className="flex gap-6">
                  <span aria-hidden style={iconTint} className="mt-1 shrink-0">
                    <Icon className="h-12 w-12" />
                  </span>
                  <div>
                    <h3 className="font-cr-heading text-lg font-semibold text-cr-ink">{service.title}</h3>
                    <p className="mt-3 font-cr-body text-[15px] leading-[1.9] text-cr-muted">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
