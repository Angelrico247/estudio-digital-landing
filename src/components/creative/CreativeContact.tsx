import { creativeConfig, whatsappLink } from "@/data/creative-config";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

export default function CreativeContact() {
  return (
    <section id="contacto" className="scroll-mt-[76px] bg-cr-card py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Contacto" title="¿Tienes una marca que contar?" />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-xl text-center">
          <p className="font-cr-body text-base leading-[1.9] text-cr-body sm:text-lg">
            Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink("Hola, buen día. Quiero platicar sobre un proyecto con TWID Creative.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cr-ink px-9 py-4 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cr-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink motion-reduce:transition-none"
            >
              Platiquemos por WhatsApp
            </a>
            <a
              href={`mailto:${creativeConfig.email}`}
              className="rounded-full border border-cr-ink px-9 py-4 font-cr-heading text-[13px] font-semibold tracking-wide text-cr-ink transition-colors hover:bg-cr-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink motion-reduce:transition-none"
            >
              {creativeConfig.email}
            </a>
          </div>

          <p className="mt-8 font-cr-body text-sm text-cr-muted">{creativeConfig.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
