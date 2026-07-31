import Image from "next/image";
import { imageUrl, type PortfolioProject } from "@/data/site";

export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  const Wrapper = project.url ? "a" : "div";

  return (
    <Wrapper
      {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative block aspect-[4/3] overflow-hidden rounded-md"
    >
      <Image
        src={project.image ?? imageUrl(project.imageSeed, 900, 675)}
        alt={`${project.name} — ${project.category}`}
        fill
        className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-[400ms] group-hover:opacity-0" />
      <div className="absolute inset-0 bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-70" />

      <div className="absolute bottom-0 left-0 p-8 transition-transform duration-[400ms] group-hover:-translate-y-2.5">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-colors duration-[400ms] group-hover:text-foreground">
          {project.category}
        </p>
        <h3 className="mt-2 font-impact text-3xl uppercase leading-none text-foreground">{project.name}</h3>
      </div>
    </Wrapper>
  );
}
