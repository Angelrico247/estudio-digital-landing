"use client";

import { site } from "@/data/site";
import { useQuoteModal } from "./QuoteModalContext";
import FadeIn from "./FadeIn";

export default function CTASection() {
  const { open } = useQuoteModal();

  return (
    <section className="relative overflow-hidden bg-dark py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/cta-banner.png)" }}
      />
      {/* Misma capa que el hero, para que el texto no compita con el neón */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/65" />
      <FadeIn className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          ¿Listo para empezar?
        </span>
        <h2 className="mt-6 font-impact text-4xl uppercase leading-[0.95] text-white sm:text-6xl">
          Hablemos de tu Proyecto
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Agenda una llamada sin compromiso y platiquemos cómo hacer crecer tu negocio.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => open()}
            className="btn-fill font-heading rounded-md border px-9 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white"
          >
            <span className="btn-fill-content">Cotiza tu Proyecto</span>
          </button>
          <a
            href="#contacto"
            className="btn-fill font-heading rounded-md border px-9 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white"
          >
            <span className="btn-fill-content">Agenda una Llamada</span>
          </a>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill font-heading rounded-md border px-9 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white"
          >
            <span className="btn-fill-content">WhatsApp Directo</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
