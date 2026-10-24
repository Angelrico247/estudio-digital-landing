import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import { MailIcon, LocationIcon } from "./ContactIcons";

export default function Contact() {
  return (
    <section id="contacto" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading eyebrow="Contacto" title="Escríbenos" align="left" variant="flag" tone="light" />
            <p className="mt-6 max-w-md text-lg leading-[1.7] text-ink-secondary">
              Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas.
            </p>

            <div className="mt-8 space-y-4 text-ink-secondary">
              <p className="flex items-center gap-3">
                <MailIcon className="h-7 w-7 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <LocationIcon className="h-7 w-7 shrink-0" />
                {site.location}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
