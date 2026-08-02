"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { useScheduleCall } from "./ScheduleCallContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openScheduleCall } = useScheduleCall();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-dark/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#inicio" aria-label={site.name} className="flex items-center">
          {/* Los aros van encima para que su trazo cruce por la mitad del guion morado */}
          <Image
            src="/twid-circles.webp"
            alt={site.name}
            width={929}
            height={587}
            priority
            className="relative z-10 h-8 w-auto sm:h-9"
          />
          <Image
            src="/twid-wordmark.webp"
            alt=""
            width={135}
            height={45}
            priority
            unoptimized
            className="-ml-1.5 h-[18px] w-auto sm:-ml-[7px] sm:h-5"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium uppercase tracking-[0.15em] text-secondary transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openScheduleCall}
          className="btn-fill font-heading hidden rounded-md border px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground md:inline-block"
        >
          <span className="btn-fill-content">Agenda una Llamada</span>
        </button>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
          <span className="h-px w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark md:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-8 text-3xl leading-none text-foreground"
          >
            ×
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-lg font-medium uppercase tracking-[0.15em] text-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openScheduleCall();
              }}
              className="btn-fill font-heading mt-4 rounded-md border px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-foreground"
            >
              <span className="btn-fill-content">Agenda una Llamada</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
