import { portfolio } from "@/data/site";
import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-section py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Portafolio" title="Nuestros Proyectos" />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolio.map((project, i) => (
            <FadeIn key={project.name} delay={i * 100}>
              <PortfolioCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
