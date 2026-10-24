import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/data/site";

export type LegalSection = { title: string; body: ReactNode };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-heading text-lg font-bold uppercase tracking-[0.1em]">
            {site.name}
          </Link>
          <Link href="/" className="text-sm text-secondary transition-colors hover:text-primary">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-secondary">Última actualización: {updated}</p>
        <div className="mt-8 space-y-4 leading-[1.8] text-secondary">{intro}</div>

        {sections.map((section, i) => (
          <section key={section.title} className="mt-12">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-[0.04em] text-foreground">
              {i + 1}. {section.title}
            </h2>
            <div className="mt-4 space-y-4 leading-[1.8] text-secondary">{section.body}</div>
          </section>
        ))}
      </main>
    </div>
  );
}
