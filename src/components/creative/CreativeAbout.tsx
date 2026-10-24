import Image from "next/image";
import { heroSlides, imageUrl } from "@/data/site";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

const tiles = [
  {
    src: "/men-editing-video-footage-on-computer-in-office-2026-04-13-02-50-09-utc.jpg",
    alt: "Equipo del estudio editando video en la oficina",
  },
  {
    src: "/home-office-desk-work-station-with-computers-keyb-2026-03-16-04-35-42-utc.jpg",
    alt: "Escritorio de trabajo con computadoras en el estudio",
  },
  {
    src: imageUrl(heroSlides[1].imageSeed, 740, 740),
    alt: "Personas colaborando en una sesión de trabajo",
  },
];

// Las etapas salen del propio texto de "Sobre nosotros": el recorrido completo de una marca.
const stages = [
  { title: "Estrategia", caption: "Partimos de tu negocio" },
  { title: "Diseño", caption: "Una línea visual clara" },
  { title: "Desarrollo", caption: "Código a la medida" },
  { title: "Publicado 24/7", caption: "Siempre funcionando" },
];

export default function CreativeAbout() {
  return (
    <section id="nosotros" className="scroll-mt-[76px] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Sobre nosotros" title="Mantenemos tu marca viva" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal key={tile.src} delay={i * 100}>
              <div className="relative aspect-[4/3] overflow-hidden bg-cr-card sm:aspect-square">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1200px) 384px, (min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <p className="font-cr-body text-base leading-[1.9] text-cr-body sm:text-lg">
            Two Worlds In Design (TWID) es un estudio chico que trabaja con marcas y negocios que
            quieren mostrarse, conectar con su gente y mantenerse activos en sus canales digitales.
            El estudio se encarga del recorrido completo de tu marca, y tú te enfocas en lo más
            importante: tus clientes. Nosotros, en mantenerla viva.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <ul className="grid grid-cols-2 bg-cr-card lg:grid-cols-4">
            {stages.map((stage) => (
              <li
                key={stage.title}
                className="border-cr-line px-4 py-9 text-center odd:border-r lg:border-r lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
              >
                <strong className="block font-cr-heading text-xl font-bold text-cr-ink sm:text-2xl">
                  {stage.title}
                </strong>
                <span className="mt-1 block font-cr-body text-sm text-cr-muted">{stage.caption}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
