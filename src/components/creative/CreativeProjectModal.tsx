"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { PortfolioProject } from "@/data/site";
import { projectShowcases, type ShowcaseImage } from "@/data/project-showcases";
import { useDialogFocus } from "@/components/useDialogFocus";

type Viewer = { title: string; images: ShowcaseImage[]; index: number };

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

/**
 * Ficha de un proyecto concepto: el mockup del sitio, el material de redes (publicaciones y
 * carruseles) y un enlace al sitio demo. Cada imagen de redes se abre grande con flechas.
 */
export default function CreativeProjectModal({
  project,
  onClose,
}: {
  project: PortfolioProject;
  onClose: () => void;
}) {
  const showcase = projectShowcases[project.name];
  const dialogRef = useRef<HTMLDivElement>(null);
  const viewerCloseRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const [viewer, setViewer] = useState<Viewer | null>(null);

  useDialogFocus(true, dialogRef);

  const openViewer = useCallback((title: string, images: ShowcaseImage[], index: number) => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setViewer({ title, images, index });
  }, []);

  const closeViewer = useCallback(() => {
    setViewer(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const step = useCallback((delta: number) => {
    setViewer((v) => (v ? { ...v, index: (v.index + delta + v.images.length) % v.images.length } : v));
  }, []);

  // Escape cierra primero la imagen grande y luego la ficha; las flechas pasan de imagen.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (viewer) closeViewer();
        else onClose();
      }
      if (viewer && e.key === "ArrowLeft") step(-1);
      if (viewer && e.key === "ArrowRight") step(1);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [viewer, closeViewer, onClose, step]);

  // Mismo bloqueo de scroll que los demás modales (iOS Safari ignora overflow:hidden en el body).
  useEffect(() => {
    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Al abrir la imagen grande el foco entra a su botón de cerrar.
  useEffect(() => {
    if (viewer) viewerCloseRef.current?.focus();
  }, [viewer === null]); // eslint-disable-line react-hooks/exhaustive-deps

  const thumb =
    "group relative block aspect-[4/5] w-full overflow-hidden bg-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-4";

  return (
    <div className="fixed inset-0 z-[60] flex items-stretch justify-center sm:items-center sm:p-6">
      <div aria-hidden onClick={onClose} className="absolute inset-0 bg-black/85" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden border-white/15 bg-black text-white outline-none sm:h-auto sm:max-h-[92dvh] sm:border"
      >
        <div inert={viewer !== null} className="flex min-h-0 flex-1 flex-col">
          <div className="flex shrink-0 items-center justify-between border-b border-white/15">
            <span className="cr-flag font-cr-heading text-[13px] font-semibold uppercase tracking-[0.2em]">
              Proyecto concepto
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="mr-3 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:text-cr-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden>
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="px-6 pb-14 pt-10 sm:px-10">
              <p className="font-cr-body text-[13px] font-medium uppercase tracking-[0.2em] text-cr-accent">
                {project.category}
              </p>
              <h2 id={titleId} className="mt-3 font-cr-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                {project.name}
              </h2>

              <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={project.image ?? ""}
                  alt={`Mockup del sitio de ${project.name}`}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover object-top"
                />
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-center justify-between gap-6 border border-white/20 px-6 py-5 transition-colors hover:border-cr-accent sm:px-8"
                >
                  <span className="min-w-0">
                    <span className="block font-cr-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                      Ver el sitio demo
                    </span>
                    <span className="mt-1 block truncate font-cr-heading text-lg font-bold underline decoration-cr-accent decoration-2 underline-offset-[6px] sm:text-2xl">
                      {hostOf(project.url)}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cr-accent-ink text-white transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
                  >
                    <ArrowIcon />
                  </span>
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
              )}

              {showcase && (
                <div className="mt-16 space-y-16">
                  <section aria-labelledby={`${titleId}-posts`}>
                    <h3 id={`${titleId}-posts`} className="font-cr-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                      Publicaciones para redes
                    </h3>
                    <p className="mt-2 font-cr-body text-sm text-white/70">Instagram y Facebook · 4:5</p>
                    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                      {showcase.posts.map((post, i) => (
                        <li key={post.src}>
                          <button
                            type="button"
                            className={thumb}
                            aria-label={`Ampliar: ${post.alt}`}
                            onClick={() => openViewer("Publicaciones", showcase.posts, i)}
                          >
                            <Image
                              src={post.src}
                              alt=""
                              fill
                              sizes="(min-width: 1024px) 280px, 45vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {showcase.carousels.map((carousel) => (
                    <section key={carousel.title} aria-label={`Carrusel: ${carousel.title}`}>
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-cr-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                          Carrusel · {carousel.title}
                        </h3>
                        <span className="shrink-0 font-cr-body text-sm text-white/70">
                          {carousel.slides.length} láminas
                        </span>
                      </div>
                      <ul className="-mx-6 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-3 sm:-mx-10 sm:gap-4 sm:px-10">
                        {carousel.slides.map((slide, i) => (
                          <li key={slide.src} className="w-[58%] shrink-0 snap-start sm:w-[220px]">
                            <button
                              type="button"
                              className={thumb}
                              aria-label={`Ampliar: ${slide.alt}`}
                              onClick={() => openViewer(`Carrusel · ${carousel.title}`, carousel.slides, i)}
                            >
                              <Image
                                src={slide.src}
                                alt=""
                                fill
                                sizes="(min-width: 640px) 220px, 58vw"
                                className="object-cover"
                              />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}

                  {showcase.stories && (
                    <section aria-labelledby={`${titleId}-stories`}>
                      <h3 id={`${titleId}-stories`} className="font-cr-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                        Stories, destacadas y reels
                      </h3>
                      <p className="mt-2 font-cr-body text-sm text-white/70">Formato vertical · 9:16</p>
                      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                        {showcase.stories.map((story, i) => (
                          <li key={story.src}>
                            <button
                              type="button"
                              className="group relative block aspect-[9/16] w-full overflow-hidden bg-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-4"
                              aria-label={`Ampliar: ${story.alt}`}
                              onClick={() => openViewer("Stories", showcase.stories ?? [], i)}
                            >
                              <Image
                                src={story.src}
                                alt=""
                                fill
                                sizes="(min-width: 640px) 210px, 45vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                              />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {showcase.mockups && (
                    <section aria-labelledby={`${titleId}-mockups`}>
                      <h3 id={`${titleId}-mockups`} className="font-cr-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                        Mockups
                      </h3>
                      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                        {showcase.mockups.map((mockup, i) => (
                          <li key={mockup.src}>
                            <button
                              type="button"
                              className="group relative block w-full overflow-hidden bg-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-4"
                              style={{ aspectRatio: `${mockup.width} / ${mockup.height}` }}
                              aria-label={`Ampliar: ${mockup.alt}`}
                              onClick={() => openViewer("Mockups", showcase.mockups ?? [], i)}
                            >
                              <Image
                                src={mockup.src}
                                alt=""
                                fill
                                sizes="(min-width: 640px) 430px, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                              />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {viewer && (
          <div className="absolute inset-0 z-10 flex flex-col bg-black" role="group" aria-label={viewer.title}>
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/15 px-4 py-2 sm:px-6">
              <p className="font-cr-body text-sm text-white/80" aria-live="polite">
                {viewer.title} · {viewer.index + 1} de {viewer.images.length}
              </p>
              <button
                ref={viewerCloseRef}
                type="button"
                onClick={closeViewer}
                className="rounded-full border border-white/40 px-5 py-2 font-cr-heading text-[12px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                Volver
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                key={viewer.images[viewer.index].src}
                src={viewer.images[viewer.index].src}
                alt={viewer.images[viewer.index].alt}
                fill
                sizes="100vw"
                className="object-contain p-3 sm:p-6"
              />
              {viewer.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Imagen anterior"
                    onClick={() => step(-1)}
                    className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Imagen siguiente"
                    onClick={() => step(1)}
                    className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
