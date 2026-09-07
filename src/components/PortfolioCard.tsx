import Image from "next/image";
import { imageUrl, type PortfolioProject } from "@/data/site";

export default function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const reversed = index % 2 === 1;
  const Wrapper = project.url ? "a" : "div";

  return (
    <Wrapper
      {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group grid grid-cols-1 overflow-hidden rounded-md bg-dark lg:grid-cols-2"
    >
      <div
        className={`relative flex flex-col justify-between gap-10 p-8 sm:p-12 lg:p-14 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <div>
          <span className="tab-flag font-heading text-[11px] font-semibold uppercase tracking-[0.15em]">
            {project.kind === "cliente" ? "Cliente" : "Concepto"}
          </span>
          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            {project.category}
          </p>
          <h3 className="mt-2 font-impact text-3xl uppercase leading-none text-foreground sm:text-4xl">
            {project.name}
          </h3>
        </div>

        <div className="flex items-end justify-between">
          <span className="text-outline-lg font-impact text-[90px] leading-[0.7] sm:text-[130px]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {project.url && (
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] transition-transform duration-300 group-hover:rotate-45">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          )}
        </div>
      </div>

      <div className={`relative aspect-[16/10] lg:aspect-auto ${reversed ? "lg:order-1" : ""}`}>
        <Image
          src={project.image ?? imageUrl(project.imageSeed, 900, 675)}
          alt={`${project.name} — ${project.category}`}
          fill
          className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </Wrapper>
  );
}
