"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import Image from "next/image";
import { heroSlides, imageUrl } from "@/data/site";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const AUTOPLAY_MS = 8000;
const SWIPE_THRESHOLD = 48;

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d={direction === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>
  );
}

/**
 * Hero con las mismas diapositivas de la landing, en el estilo Kyata:
 * título centrado en Poppins extra-gruesa, mayúsculas, botones píldora.
 * Las diapositivas van apiladas (sin saltos de altura) y todo el texto está en el HTML.
 */
export default function CreativeHero() {
  const [index, setIndex] = useState(0);
  const [hoverOrFocus, setHoverOrFocus] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const total = heroSlides.length;
  const goTo = useCallback((i: number) => setIndex((i + total) % total), [total]);

  const autoplayOn = !reducedMotion && !hoverOrFocus && !userPaused;

  useEffect(() => {
    if (!autoplayOn) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, autoplayOn, total]);

  function onKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  }

  function onTouchStart(e: TouchEvent<HTMLElement>) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: TouchEvent<HTMLElement>) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    goTo(dx < 0 ? index + 1 : index - 1);
  }

  const arrowClasses =
    "absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-cr-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:flex";

  return (
    <section
      id="inicio"
      aria-roledescription="carrusel"
      aria-label="Proyectos y servicios destacados"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHoverOrFocus(true)}
      onMouseLeave={() => setHoverOrFocus(false)}
      onFocus={() => setHoverOrFocus(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHoverOrFocus(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-black"
    >
      {/* El título grande cambia con cada diapositiva; este h1 es el estable para SEO y lectores de pantalla. */}
      <h1 className="sr-only">TWID Creative — Branding, redes sociales y sitios web en Guadalajara</h1>

      {heroSlides.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${total}`}
            aria-hidden={!active}
            inert={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={imageUrl(slide.imageSeed, 1920, 1080)}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex h-full items-center justify-center px-6 pb-16 pt-[76px] text-center">
              <div
                className={`mx-auto max-w-4xl transition-transform duration-1000 ease-out motion-reduce:transition-none ${
                  active ? "translate-y-0" : "translate-y-3"
                }`}
              >
                <span className="inline-flex items-center gap-2 font-cr-body text-[13px] font-medium uppercase tracking-[0.2em] text-white/85">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cr-accent" />
                  {slide.kicker}
                </span>

                <p className="mt-6 font-cr-heading text-[2.5rem] font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="block">{slide.heading[0]}</span>
                  <span className="block">{slide.heading[1]}</span>
                </p>

                <p className="mx-auto mt-6 max-w-xl font-cr-body text-base leading-relaxed text-white/90 sm:text-lg">
                  {slide.subtitle}
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#nosotros"
                    className="rounded-full bg-cr-accent-ink px-9 py-4 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-cr-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    Conoce más
                  </a>
                  <a
                    href="#proyectos"
                    className="rounded-full border border-white px-9 py-4 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-cr-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    Ver proyectos
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        aria-label="Diapositiva anterior"
        onClick={() => goTo(index - 1)}
        className={`left-6 ${arrowClasses}`}
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        aria-label="Diapositiva siguiente"
        onClick={() => goTo(index + 1)}
        className={`right-6 ${arrowClasses}`}
      >
        <Chevron direction="right" />
      </button>

      <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ir a la diapositiva ${i + 1} de ${total}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goTo(i)}
            className="group flex h-7 w-7 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span
              className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                i === index ? "w-7 bg-white" : "w-2.5 bg-white/50 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}

        {!reducedMotion && (
          <button
            type="button"
            aria-label={userPaused ? "Reanudar rotación automática" : "Pausar rotación automática"}
            onClick={() => setUserPaused((paused) => !paused)}
            className="ml-3 flex h-7 w-7 items-center justify-center rounded-full text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
              {userPaused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h4v14H7zM13 5h4v14h-4z" />}
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
