import { creativeConfig } from "@/data/creative-config";
import CreativeContactForm from "./CreativeContactForm";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

export default function CreativeContact() {
  return (
    <section id="contacto" className="scroll-mt-[76px] bg-cr-card py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Contacto" title="¿Tienes una marca que contar?" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="max-w-md font-cr-body text-base leading-[1.9] text-cr-body sm:text-lg">
              Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas.
            </p>
            <ul className="mt-8 space-y-3 font-cr-body text-[15px] text-cr-body">
              <li>
                <a
                  href={`mailto:${creativeConfig.email}`}
                  className="text-cr-ink underline underline-offset-4 hover:text-cr-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink"
                >
                  {creativeConfig.email}
                </a>
              </li>
              <li className="text-cr-muted">{creativeConfig.location}</li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <CreativeContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
