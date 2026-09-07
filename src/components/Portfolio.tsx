import { portfolio } from "@/data/site";
import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Portafolio" title="Nuestros Proyectos" variant="flag" tone="light" />
        </FadeIn>

        <div className="mt-16 flex flex-col gap-6">
          {portfolio.map((project, i) => (
            <FadeIn key={project.name} delay={i * 80}>
              <PortfolioCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
