"use client";

import { useEffect, useState } from "react";
import { creativeNav, whatsappLink } from "@/data/creative-config";

const QUOTE_MESSAGE = "Hola, buen día. Me gustaría cotizar un proyecto con TWID Creative.";

/**
 * Header fijo. Sobre el hero (oscuro) va transparente con texto blanco; al hacer
 * scroll, o al abrir el menú móvil, pasa a fondo blanco con texto oscuro.
 */
export default function CreativeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 motion-reduce:transition-none ${
        solid ? "border-b border-cr-line bg-white" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6">
        <a
          href="#inicio"
          aria-label="TWID Creative, ir al inicio"
          className="flex items-baseline gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink"
        >
          <span
            className={`font-cr-heading text-xl font-extrabold tracking-[0.12em] transition-colors motion-reduce:transition-none ${
              solid ? "text-cr-ink" : "text-white"
            }`}
          >
            TWID
          </span>
          <span
            className={`font-cr-body text-xs font-medium transition-colors motion-reduce:transition-none ${
              solid ? "text-cr-muted" : "text-white/80"
            }`}
          >
            Creative
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {creativeNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-sm font-cr-heading text-[13px] font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink motion-reduce:transition-none ${
                solid ? "text-cr-ink hover:text-cr-accent-ink" : "text-white hover:text-white/70"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink(QUOTE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cr-accent-ink px-6 py-3 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cr-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink motion-reduce:transition-none"
          >
            Cotizar
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="creative-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cr-accent-ink motion-reduce:transition-none lg:hidden ${
            solid ? "text-cr-ink" : "text-white"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden>
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="creative-mobile-menu"
        hidden={!menuOpen}
        className="border-t border-cr-line bg-white lg:hidden"
      >
        <nav aria-label="Principal (móvil)" className="mx-auto flex max-w-[1200px] flex-col px-6 py-4">
          {creativeNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-cr-line py-4 font-cr-heading text-sm font-semibold uppercase tracking-wide text-cr-ink last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink(QUOTE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-full bg-cr-accent-ink px-6 py-3.5 text-center font-cr-heading text-sm font-semibold uppercase tracking-wide text-white"
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
}
