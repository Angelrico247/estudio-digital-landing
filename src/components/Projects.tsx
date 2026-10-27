"use client";

import type { MouseEvent } from "react";
import { devProjects, type DevProject } from "@/data/development";
import { useQuoteModal } from "./QuoteModalContext";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

function handleSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}

function ProjectCard({ project }: { project: DevProject }) {
  const { open } = useQuoteModal();
  const { featured } = project;

  return (
    <div
      onMouseMove={handleSpotlight}
      className="spotlight-border relative h-full overflow-hidden rounded-md border border-line bg-card p-8 sm:p-10 lg:p-12"
    >
      <div className={featured ? "grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16" : ""}>
        <div>
          <span
            aria-hidden
            className="text-outline relative z-10 block font-heading text-[120px] font-black leading-[0.8] lg:text-[160px]"
          >
            {project.number.padStart(2, "0")}
          </span>

          <p className="relative z-10 mt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {project.kind}
          </p>
          <h3
            className={`relative z-10 mt-3 font-heading font-bold uppercase leading-[1.05] text-foreground ${
              featured ? "text-4xl sm:text-5xl" : "text-3xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="relative z-10 mt-5 text-base leading-[1.7] text-secondary lg:text-lg">
            {project.description}
          </p>
        </div>

        <div className={`relative z-10 ${featured ? "flex flex-col justify-end" : "mt-8"}`}>
          <ul className="space-y-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-foreground/90">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)]"
                />
                {item}
              </li>
            ))}
          </ul>

          {project.stack && (
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologías">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={() => open({ type: "servicio", selection: project.title })}
            className="btn-dot relative z-10 mt-8 w-fit font-heading text-xs font-semibold uppercase tracking-[0.1em]"
          >
            <span>Quiero algo así</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative bg-dark py-20 lg:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-[1300px] w-[1300px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-70 mix-blend-screen"
        style={{ backgroundImage: "url(/glow-purple.png)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Lo que construimos" title="Proyectos" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-[1.7] text-secondary">
            Automatizaciones y sistemas hechos a la medida. Estos son los tipos de proyecto que
            sabemos construir de punta a punta.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {devProjects.map((project, i) => (
            <FadeIn key={project.number} delay={(i % 2) * 100} className={project.featured ? "lg:col-span-2" : ""}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
