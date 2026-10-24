import Image from "next/image";
import { imageUrl, portfolio } from "@/data/site";
import CreativeHeading from "./CreativeHeading";
import Reveal from "./Reveal";

export default function CreativeProjects() {
  return (
    <section id="proyectos" className="scroll-mt-[76px] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <CreativeHeading eyebrow="Portafolio" title="Nuestros proyectos" />
        </Reveal>

        <ul className="mt-16 flex flex-col gap-6">
          {portfolio.map((project, i) => {
            const reversed = i % 2 === 1;
            const Wrapper = project.url ? "a" : "div";

            return (
              <li key={project.name}>
                <Reveal>
                  <Wrapper
                    {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group grid grid-cols-1 overflow-hidden bg-cr-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink lg:grid-cols-2"
                  >
                    <div
                      className={`flex flex-col justify-between gap-12 p-8 sm:p-12 lg:p-14 ${
                        reversed ? "lg:order-2" : ""
                      }`}
                    >
                      <div>
                        <span className="inline-block rounded-full border border-cr-line bg-white px-3.5 py-1 font-cr-body text-[11px] font-medium uppercase tracking-[0.15em] text-cr-muted">
                          {project.kind === "cliente" ? "Cliente" : "Concepto"}
                        </span>
                        <p className="mt-6 font-cr-body text-[13px] font-medium text-cr-accent-ink">
                          {project.category}
                        </p>
                        <h3 className="mt-2 font-cr-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-cr-ink sm:text-4xl">
                          {project.name}
                        </h3>
                      </div>

                      <div className="flex items-end justify-between">
                        <span
                          aria-hidden
                          className="font-cr-heading text-7xl font-extrabold leading-[0.8] text-cr-line sm:text-8xl"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {project.url && (
                          <span
                            aria-hidden
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cr-accent-ink text-white transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
                          >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                            </svg>
                          </span>
                        )}
                      </div>
                      {project.url && <span className="sr-only">Visitar el sitio (se abre en una pestaña nueva)</span>}
                    </div>

                    <div
                      className={`relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[360px] ${
                        reversed ? "lg:order-1" : ""
                      }`}
                    >
                      <Image
                        src={project.image ?? imageUrl(project.imageSeed, 900, 675)}
                        alt={`${project.name} — ${project.category}`}
                        fill
                        sizes="(min-width: 1200px) 588px, (min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[600ms] group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                  </Wrapper>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
