import Image from "next/image";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

// Las etapas salen del propio texto de "Sobre nosotros": el recorrido completo de una marca.
const stages = [
  { title: "Estrategia", caption: "Partimos de tu negocio" },
  { title: "Diseño", caption: "Una línea visual clara" },
  { title: "Desarrollo", caption: "Código a la medida" },
  { title: "Publicado 24/7", caption: "Siempre funcionando" },
];

export default function CreativeAbout() {
  return (
    <section id="nosotros" className="scroll-mt-[77px] bg-white pb-24 lg:pb-32">
      <CreativeHeading eyebrow="Nosotros" title="Mantenemos tu marca viva" />

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-cr-body text-[13px] font-medium uppercase tracking-[0.2em] text-cr-muted">
              Quiénes somos
            </p>
            <p className="mt-6 font-cr-body text-base leading-[1.9] text-cr-body sm:text-lg">
              Two Worlds In Design (TWID) es un estudio chico que trabaja con marcas y negocios que
              quieren mostrarse, conectar con su gente y mantenerse activos en sus canales digitales.
              El estudio se encarga del recorrido completo de tu marca, y tú te enfocas en lo más
              importante: tus clientes. Nosotros, en mantenerla viva.
            </p>
            <a
              href="#proyectos"
              className="mt-10 inline-block rounded-full bg-cr-accent-ink px-9 py-4 font-cr-heading text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-cr-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink motion-reduce:transition-none"
            >
              Ver proyectos
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative pb-16 pr-10 sm:pr-16">
              <div className="relative aspect-[4/5] overflow-hidden bg-cr-card">
                <Image
                  src="/studio-video-editing.jpg"
                  alt="Persona editando video en una computadora"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 aspect-square w-1/2 overflow-hidden border-8 border-white bg-cr-card">
                <Image
                  src="/studio-workstation.jpg"
                  alt="Escritorio de trabajo con computadoras y teclado"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-14 border-t border-cr-line pt-14 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <li key={stage.title}>
                <span
                  aria-hidden
                  className="cr-outline-dark block h-[56px] overflow-hidden font-cr-heading text-[84px] font-extrabold leading-[0.9]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong className="mt-5 block font-cr-heading text-xl font-bold text-cr-ink">{stage.title}</strong>
                <span className="mt-1 block font-cr-body text-sm text-cr-muted">{stage.caption}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
