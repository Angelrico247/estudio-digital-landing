"use client";

import { useState } from "react";
import Image from "next/image";
import { imageUrl, type Testimonial } from "@/data/site";

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <div className="relative mx-auto max-w-[700px] rounded-md bg-card p-10 sm:p-12">
      <svg
        aria-hidden
        viewBox="0 0 64 40"
        className="h-9 w-14"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
      >
        <path d="M2 38V20a12 12 0 0 1 12-12h6v14H14v16H2Z" />
        <path d="M34 38V20a12 12 0 0 1 12-12h6v14H46v16H34Z" />
      </svg>

      <p className="relative mt-6 text-xl leading-[1.8] text-secondary">{testimonial.quote}</p>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="border-gradient-brand relative h-12 w-12 overflow-hidden rounded-full"
            style={{ ["--gb-width" as string]: "2px" }}
          >
            <Image
              src={imageUrl(testimonial.imageSeed, 96, 96)}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs uppercase tracking-[0.1em] text-primary">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Siguiente testimonio"
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Ir al testimonio de ${t.name}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index
                ? "bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)]"
                : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
