import Image from "next/image";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FadeIn className="relative min-h-[420px] lg:min-h-[720px]">
          <Image
            src="/men-editing-video-footage-on-computer-in-office-2026-04-13-02-50-09-utc.jpg"
            alt="Equipo del estudio"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-dark/20" />
          <span className="tab-flag absolute left-0 top-0 font-heading text-xs font-semibold uppercase tracking-[0.2em]">
            Sobre Nosotros
          </span>
        </FadeIn>

        <FadeIn delay={100} className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-0">
          <SectionHeading
            eyebrow="Sobre Nosotros"
            title="Mantenemos tu Marca Viva"
            align="left"
            size="medium"
            tone="light"
          />
          <p className="mt-6 max-w-lg text-lg leading-[1.7] text-ink-secondary">
            Two Worlds In Design (TWID) es un estudio chico que trabaja con marcas y negocios que
            quieren mostrarse, conectar con su gente y mantenerse activos en sus canales digitales.
            El estudio se encarga del recorrido completo: estrategia, diseño, desarrollo y el sitio
            publicado y funcionando 24/7.
          </p>

          <a
            href="#contacto"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-dark py-2 pl-2 pr-6 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
            Conoce Más
          </a>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-md border border-hairline bg-paper-card p-5">
              <p className="font-heading text-sm font-bold uppercase text-ink">A la medida</p>
              <p className="mt-2 text-sm leading-[1.5] text-ink-secondary">
                Nada de templates. Código propio para cada marca.
              </p>
            </div>
            <div className="rounded-md bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] p-5">
              <p className="font-heading text-sm font-bold uppercase text-white">Sin adivinar</p>
              <p className="mt-2 text-sm leading-[1.5] text-white/85">
                Se ajusta sobre métricas reales, no corazonadas.
              </p>
            </div>
            <div className="relative hidden overflow-hidden rounded-md sm:block">
              <Image
                src="/home-office-desk-work-station-with-computers-keyb-2026-03-16-04-35-42-utc.jpg"
                alt="Trabajo en el estudio"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
