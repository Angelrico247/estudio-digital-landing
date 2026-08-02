"use client";

import { useCallback, useEffect, useState } from "react";
import { heroSlides, imageUrl } from "@/data/site";
import FadeIn from "./FadeIn";

const AUTOPLAY_MS = 6000;

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index]);

  const activeSlide = heroSlides[index];

  return (
    <section id="inicio" className="relative h-screen overflow-hidden bg-dark">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${imageUrl(slide.imageSeed, 1920, 1080)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative flex h-screen items-center">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />

        <div
          className="pointer-events-none absolute left-6 top-24 hidden h-16 w-16 border-l-2 border-t-2 opacity-60 sm:block lg:left-[10%]"
          style={{ borderImage: "linear-gradient(82.3deg, var(--color-primary) 10.8%, var(--color-secondary-blue) 94.3%) 1" }}
        />
        <div
          className="pointer-events-none absolute bottom-32 right-6 hidden h-16 w-16 border-b-2 border-r-2 opacity-60 sm:block lg:right-[10%]"
          style={{ borderImage: "linear-gradient(82.3deg, var(--color-primary) 10.8%, var(--color-secondary-blue) 94.3%) 1" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)]" />
              {activeSlide.kicker}
              <span className="h-px w-8 bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)]" />
            </span>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="mt-6 font-impact uppercase leading-[0.95] tracking-wide text-foreground">
              <span className="block text-5xl font-impact  text-white sm:text-7xl lg:text-8xl">
                {activeSlide.heading[0]}
              </span>
              <span
                className={`block text-4xl font-impact font-black sm:text-6xl lg:text-7xl ${
                  activeSlide.outlineSecondLine ? "text-outline" : "text-white"
                }`}
              >
                {activeSlide.heading[1]}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="mx-auto mt-6 max-w-[560px] text-lg text-secondary">{activeSlide.subtitle}</p>
          </FadeIn>

          <FadeIn delay={360}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              <a
                href="#servicios"
                className="btn-fill font-impact  rounded-md border px-10 py-5 text-sm font-black uppercase text-foreground"
              >
                <span className="btn-fill-content">Conoce Más</span>
              </a>
              <a
                href="#portafolio"
                className="btn-dot font-impact text-sm font-black uppercase tracking-wide text-foreground"
              >
                <span>Ver Portafolio</span>
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={480}
          className="absolute inset-x-0 bottom-10 z-10 flex items-center justify-center gap-6"
        >
          <button
            type="button"
            aria-label="Diapositiva anterior"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <ChevronIcon className="h-4 w-4 rotate-180" />
          </button>

          <div className="flex items-center gap-5">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir a la diapositiva ${slide.id}`}
                onClick={() => goTo(i)}
                className="group flex flex-col items-center gap-2"
              >
                <span
                  className={`font-mono text-xs tracking-[0.2em] transition-colors duration-300 ${
                    i === index ? "text-primary" : "text-secondary group-hover:text-foreground"
                  }`}
                >
                  {slide.id}
                </span>
                <span className="h-px w-8 overflow-hidden bg-line">
                  {i === index && (
                    <span
                      key={index}
                      className="block h-full bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] animate-slide-progress"
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Siguiente diapositiva"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
