import { portfolio } from "@/data/site";
import PortfolioCard from "./PortfolioCard";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

/**
 * Cuadrícula de 4 columnas × 2 filas, todas las celdas de la misma altura.
 * Los dos proyectos anchos quedan en esquinas opuestas:
 *
 *   fila A:  [ 1 · 1 ][ 2 ][ 3 ]
 *   fila B:  [ 4 ][ 5 ][ 6 · 6 ]
 */
const SPAN_CLASSES = [
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Portafolio" title="Nuestros Proyectos" variant="flag" tone="light" />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-4 sm:auto-rows-[240px]">
          {portfolio.map((project, i) => (
            <FadeIn
              key={project.name}
              delay={i * 100}
              className={SPAN_CLASSES[i % SPAN_CLASSES.length]}
            >
              <PortfolioCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
