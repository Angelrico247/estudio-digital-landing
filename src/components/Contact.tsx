import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import { MailIcon, PhoneIcon, LocationIcon } from "./ContactIcons";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5ZM17.75 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5213312345678",
    path: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.19-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.53 3.69-8.22 8.24-8.22 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.81c0 4.54-3.69 8.23-8.22 8.23Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.94 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.75 9.75h4.38V20H4.75Zm7 0h4.2v1.4h.06a4.6 4.6 0 0 1 4.14-2.28c4.43 0 5.25 2.92 5.25 6.71V20h-4.38v-4.68c0-1.12-.02-2.55-1.55-2.55-1.56 0-1.8 1.22-1.8 2.47V20h-4.38Z",
  },
];

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
                <PhoneIcon className="h-7 w-7 shrink-0" />
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-primary">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <LocationIcon className="h-7 w-7 shrink-0" />
                {site.location}
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-ink-secondary transition-colors hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
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
