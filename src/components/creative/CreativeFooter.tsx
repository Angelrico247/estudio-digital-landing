import { creativeConfig } from "@/data/creative-config";

export default function CreativeFooter() {
  const socials = [
    { label: "Instagram", href: creativeConfig.instagramUrl },
    { label: "LinkedIn", href: creativeConfig.linkedinUrl },
  ].filter((social) => social.href);

  return (
    <footer className="bg-cr-ink text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-cr-body text-[13px] font-medium uppercase tracking-[0.2em] text-white/70">
              El otro mundo de TWID
            </span>
            <p className="mt-4 font-cr-heading text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
              ¿Necesitas un sistema
              <br />a la medida?
            </p>
          </div>

          <a
            href={creativeConfig.developmentUrl}
            className="w-fit rounded-full bg-white px-9 py-4 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-cr-ink transition-colors hover:bg-cr-accent-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            Ir a TWID Development →
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 font-cr-body text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TWID — Two Worlds In Design · Guadalajara</p>

          {socials.length > 0 && (
            <ul className="flex gap-6">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
