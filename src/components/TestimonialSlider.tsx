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
    <div className="relative mx-auto max-w-[700px]">
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Testimonio anterior"
          onClick={prev}
          className="text-2xl text-secondary transition-colors hover:text-primary"
        >
          ←
        </button>

        <div className="relative flex-1 px-6 text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 font-heading text-8xl font-black text-primary opacity-30"
          >
            &ldquo;
          </span>

          <p className="relative pt-10 text-xl italic leading-[1.8] text-secondary">
            {testimonial.quote}
          </p>

          <div
            className="border-gradient-brand relative mx-auto mt-8 h-16 w-16 overflow-hidden rounded-full"
            style={{ ["--gb-width" as string]: "2px" }}
          >
            <Image
              src={imageUrl(testimonial.imageSeed, 128, 128)}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <p className="mt-4 text-base font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-primary">{testimonial.role}</p>
        </div>

        <button
          type="button"
          aria-label="Siguiente testimonio"
          onClick={next}
          className="text-2xl text-secondary transition-colors hover:text-primary"
        >
          →
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-3">
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
