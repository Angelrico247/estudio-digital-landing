"use client";

import { useCallback, useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import type { PortfolioProject } from "@/data/site";
import { projectShowcases, type ShowcaseImage } from "@/data/project-showcases";
import { useDialogFocus } from "@/components/useDialogFocus";

type Viewer = { title: string; images: ShowcaseImage[]; index: number };
type TabId = "posts" | "carousels" | "stories" | "mockups";

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
  const [tab, setTab] = useState<TabId>("posts");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const tabs: { id: TabId; label: string; count: number }[] = showcase
    ? [
        { id: "posts" as const, label: "Publicaciones", count: showcase.posts.length },
        { id: "carousels" as const, label: "Carruseles", count: showcase.carousels.length },
        ...(showcase.stories ? [{ id: "stories" as const, label: "Stories", count: showcase.stories.length }] : []),
        ...(showcase.mockups ? [{ id: "mockups" as const, label: "Mockups", count: showcase.mockups.length }] : []),
      ]
    : [];

  function onTabKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    const i = tabs.findIndex((t) => t.id === tab);
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setTab(tabs[next].id);
    tabRefs.current[tabs[next].id]?.focus();
  }

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
            <div className="px-6 pb-14 pt-8 sm:px-10 sm:pt-10">
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
                <div>
                  <p className="font-cr-body text-[13px] font-medium uppercase tracking-[0.2em] text-cr-accent">
                    {project.category}
                  </p>
                  <h2 id={titleId} className="mt-3 font-cr-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                    {project.name}
                  </h2>
                  {showcase && (
                    <p className="mt-4 font-cr-body text-[15px] leading-relaxed text-white/75">
                      Proyecto concepto con su sitio web y material para redes:{" "}
                      {showcase.posts.length} publicaciones, {showcase.carousels.length} carruseles
                      {showcase.stories ? " y piezas para stories" : ""}.
                    </p>
                  )}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-8 flex items-center justify-between gap-6 border border-white/20 px-6 py-5 transition-colors hover:border-cr-accent"
                    >
                      <span className="min-w-0">
                        <span className="block font-cr-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                          Ver el sitio demo
                        </span>
                        <span className="mt-1 block truncate font-cr-heading text-lg font-bold underline decoration-cr-accent decoration-2 underline-offset-[6px] sm:text-xl">
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
                </div>

                <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image ?? ""}
                    alt={`Mockup del sitio de ${project.name}`}
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {showcase && (
                <div className="mt-14">
                  <div
                    role="tablist"
                    aria-label="Material del proyecto"
                    onKeyDown={onTabKeyDown}
                    className="-mx-6 flex overflow-x-auto border-b border-white/15 px-6 sm:mx-0 sm:px-0"
                  >
                    {tabs.map((t) => {
                      const selected = t.id === tab;
                      return (
                        <button
                          key={t.id}
                          ref={(el) => {
                            tabRefs.current[t.id] = el;
                          }}
                          type="button"
                          role="tab"
                          id={`${titleId}-tab-${t.id}`}
                          aria-selected={selected}
                          aria-controls={`${titleId}-panel-${t.id}`}
                          tabIndex={selected ? 0 : -1}
                          onClick={() => setTab(t.id)}
                          className={`-mb-px shrink-0 border-b-2 px-4 py-3 font-cr-heading text-[13px] font-semibold uppercase tracking-wide transition-colors motion-reduce:transition-none sm:px-6 ${
                            selected
                              ? "border-cr-accent text-white"
                              : "border-transparent text-white/60 hover:text-white"
                          }`}
                        >
                          {t.label}
                          <span className="ml-2 text-cr-accent">{t.count}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div
                    role="tabpanel"
                    id={`${titleId}-panel-${tab}`}
                    aria-labelledby={`${titleId}-tab-${tab}`}
                    tabIndex={0}
                    className="pt-8 outline-none focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    {tab === "posts" && (
                      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
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
                                sizes="(min-width: 1024px) 210px, (min-width: 640px) 30vw, 45vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                              />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}

                    {tab === "carousels" && (
                      <div className="space-y-12">
                        {showcase.carousels.map((carousel) => (
                          <section key={carousel.title} aria-label={`Carrusel: ${carousel.title}`}>
                            <div className="flex items-baseline justify-between gap-4">
                              <h3 className="font-cr-heading text-xl font-extrabold tracking-tight sm:text-2xl">
                                {carousel.title}
                              </h3>
                              <span className="shrink-0 font-cr-body text-sm text-white/70">
                                {carousel.slides.length} láminas
                              </span>
                            </div>
                            <ul
                              style={{ "--n": carousel.slides.length } as CSSProperties}
                              className="-mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-3 sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
                            >
                              {carousel.slides.map((slide, i) => (
                                <li key={slide.src} className="w-[58%] shrink-0 snap-start sm:w-[220px] lg:w-auto">
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
                                      sizes="(min-width: 1024px) 190px, (min-width: 640px) 220px, 58vw"
                                      className="object-cover"
                                    />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    )}

                    {tab === "stories" && showcase.stories && (
                      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
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
                    )}

                    {tab === "mockups" && showcase.mockups && (
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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
                    )}
                  </div>
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
