import Image from "next/image";
import { imageUrl, portfolio } from "@/data/site";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

// Mosaico tipo Seppo. En celular los proyectos van apilados, uno por fila y a todo el ancho;
// en tablet, de dos en dos; desde lg es el mosaico de cuatro columnas con mosaicos de 1 y 2
// columnas de ancho. El último ocupa toda la fila para que el mosaico cierre sin huecos.
const layout = [
  { item: "lg:col-span-2", aspect: "sm:aspect-square lg:aspect-[2/1]" },
  { item: "", aspect: "sm:aspect-square lg:aspect-square" },
  { item: "", aspect: "sm:aspect-square lg:aspect-square" },
  { item: "", aspect: "sm:aspect-square lg:aspect-square" },
  { item: "", aspect: "sm:aspect-square lg:aspect-square" },
  { item: "lg:col-span-2", aspect: "sm:aspect-square lg:aspect-[2/1]" },
  { item: "sm:col-span-2 lg:col-span-4", aspect: "sm:aspect-[2/1] lg:aspect-[16/5]" },
];

export default function CreativeProjects() {
  return (
    <section id="proyectos" className="scroll-mt-[77px] bg-white pb-0">
      <CreativeHeading eyebrow="Proyectos" title="Ideas que ya viven en pantalla" />

      <Reveal>
        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((project, i) => {
            const Wrapper = project.url ? "a" : "div";
            const tile = layout[i] ?? { item: "", aspect: "sm:aspect-square lg:aspect-square" };

            return (
              <li key={project.name} className={tile.item}>
                <Wrapper
                  {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group relative block aspect-[4/3] w-full overflow-hidden bg-black focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-cr-accent ${tile.aspect}`}
                >
                  <Image
                    src={project.image ?? imageUrl(project.imageSeed, 900, 675)}
                    alt={`${project.name} — ${project.category}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-[600ms] group-hover:scale-105 motion-reduce:transition-none"
                  />

                  <span
                    className="absolute inset-x-0 bottom-0 bg-black/80 p-4 transition-opacity duration-300 sm:p-5 lg:inset-0 lg:flex lg:flex-col lg:justify-end lg:bg-black/75 lg:p-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100 motion-reduce:transition-none"
                  >
                    <span className="block font-cr-body text-[11px] font-medium uppercase tracking-[0.15em] text-cr-accent">
                      {project.category} · {project.kind === "cliente" ? "Cliente" : "Proyecto concepto"}
                    </span>
                    <span className="mt-1 block font-cr-heading text-lg font-bold text-white sm:text-2xl">
                      {project.name}
                    </span>
                  </span>
                  {project.url && <span className="sr-only">Visitar el sitio (se abre en una pestaña nueva)</span>}
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
