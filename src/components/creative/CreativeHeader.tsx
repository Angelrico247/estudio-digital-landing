"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { creativeConfig, creativeNav } from "@/data/creative-config";
import { useQuoteModal } from "@/components/QuoteModalContext";

/**
 * Header fijo, como el de Seppo: logo a la izquierda, menú a la derecha. Sobre el hero es
 * transparente; al salir del hero (o al abrir el menú móvil) pasa a negro sólido.
 */
export default function CreativeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openQuote } = useQuoteModal();

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("inicio");
      const heroEnd = hero ? hero.offsetHeight - 77 : 24;
      setScrolled(window.scrollY > heroEnd);
    }
    onScroll();
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 motion-reduce:transition-none ${
        scrolled || menuOpen ? "border-white/15 bg-black" : "border-white/25 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[77px] max-w-[1200px] items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
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

        <nav aria-label="Principal" className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {creativeNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm font-cr-heading text-[13px] font-semibold tracking-wide text-white transition-colors hover:text-cr-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
          {/* Hasta xl el link a Development va con el menú; desde xl pasa a la derecha, junto a Cotizar. */}
          <Link
            href={creativeConfig.developmentUrl}
            className="rounded-sm font-cr-heading text-[13px] font-semibold tracking-wide text-cr-accent transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent motion-reduce:transition-none xl:hidden"
          >
            TWID Development →
          </Link>
        </nav>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <Link
            href={creativeConfig.developmentUrl}
            className="hidden rounded-sm font-cr-heading text-[13px] font-semibold tracking-wide text-cr-accent transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent motion-reduce:transition-none xl:block"
          >
            TWID Development →
          </Link>
          <button
            type="button"
            onClick={() => openQuote({ brand: "creative" })}
            className="rounded-full bg-cr-accent-ink px-6 py-3 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-cr-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            Cotizar
          </button>
        </div>

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
          <Link
            href={creativeConfig.developmentUrl}
            className="border-b border-white/15 py-4 font-cr-heading text-sm font-semibold tracking-wide text-cr-accent"
          >
            TWID Development →
          </Link>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openQuote({ brand: "creative" });
            }}
            className="mt-3 rounded-full bg-cr-accent-ink px-6 py-3.5 text-center font-cr-heading text-sm font-semibold uppercase tracking-wide text-white"
          >
            Cotizar
          </button>
        </nav>
      </div>
    </header>
  );
}
