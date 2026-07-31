import Image from "next/image";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="relative bg-paper py-20 lg:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full h-[1700px] w-[1700px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-70 mix-blend-screen blur-[8px]"
        style={{ backgroundImage: "url(/glow-purple.png)" }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn className="order-2 lg:order-2">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-md lg:ml-auto">
            <Image
              src="/men-editing-video-footage-on-computer-in-office-2026-04-13-02-50-09-utc.jpg"
              alt="Equipo del estudio"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 90vw"
            />
            <span className="tab-flag absolute left-0 top-0 font-heading text-xs font-semibold uppercase tracking-[0.2em]">
              Sobre Nosotros
            </span>
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1"
              style={{ background: "linear-gradient(82.3deg, var(--color-primary) 10.8%, var(--color-secondary-blue) 94.3%)" }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={100} className="order-1 lg:order-1">
          <SectionHeading
            eyebrow="Sobre Nosotros"
            title="Mantenemos tu Marca Viva"
            align="left"
            size="medium"
            tone="light"
          />
          <p className="mt-6 text-lg leading-[1.7] text-ink-secondary">
            TWID es un estudio chico que trabaja con marcas y negocios que tienen algo bueno y
            necesitan que se note.
          </p>
          <p className="mt-4 text-lg leading-[1.7] text-ink-secondary">
            Si tienes un negocio o trabajas por tu cuenta, sabes que lo que más vale es tu tiempo.
            Y mantener una marca viva —publicar, actualizar, cuidar cómo se ve— se come mucho de
            ese tiempo. Ese peso es el que TWID te quita.
          </p>
          <p className="mt-4 text-lg leading-[1.7] text-ink-secondary">
            El estudio se encarga del recorrido completo: la estrategia, el diseño, el desarrollo
            y el sitio publicado y funcionando 24/7. Después llegan las métricas de lo que sí
            está funcionando y lo que no, y se ajusta sobre eso. Aquí no se adivina.
          </p>
          <p className="mt-4 text-lg leading-[1.7] text-ink-secondary">
            Da igual si tu marca es nueva o si ya llevas camino andado: TWID arranca desde cero o
            desde donde estés, con todo lo que necesitas para empezar y todo lo que necesitas
            para crecer.
          </p>
          <p className="mt-4 text-lg leading-[1.7] text-ink-secondary">
            Tú te enfocas en lo más importante: tus clientes. Nosotros, en mantener tu marca
            viva.
          </p>

        </FadeIn>
      </div>
    </section>
  );
}
