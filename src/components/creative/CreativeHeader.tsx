"use client";

import { useEffect, useState } from "react";
import { creativeNav } from "@/data/creative-config";

/** Header fijo y negro, como el de Seppo: logo a la izquierda, menú a la derecha. */
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black transition-shadow duration-300 motion-reduce:transition-none ${
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[77px] max-w-[1200px] items-center justify-between px-6">
        <a
          href="#inicio"
          aria-label="TWID Creative, ir al inicio"
          className="flex items-baseline gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink"
        >
          <span
            className="font-cr-heading text-xl font-extrabold tracking-[0.12em] text-white"
          >
            TWID
          </span>
          <span
            className="font-cr-body text-xs font-medium text-cr-accent"
          >
            Creative
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {creativeNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm font-cr-heading text-[13px] font-semibold tracking-wide text-white transition-colors hover:text-cr-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-cr-accent-ink px-6 py-3 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-cr-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
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
          className="flex h-11 w-11 items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cr-accent lg:hidden"
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
        className="border-t border-white/15 bg-black lg:hidden"
      >
        <nav aria-label="Principal (móvil)" className="mx-auto flex max-w-[1200px] flex-col px-6 py-4">
          {creativeNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/15 py-4 font-cr-heading text-sm font-semibold tracking-wide text-white last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
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
