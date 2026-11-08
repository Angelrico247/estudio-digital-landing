import Reveal from "./Reveal";

type CreativeHeadingProps = {
  eyebrow: string;
  title: string;
  /** "dark" = texto claro sobre fondo negro; "light" = texto oscuro sobre blanco. */
  tone?: "dark" | "light";
};

/**
 * Encabezado de sección estilo Seppo. Va como primer hijo de la <section>, fuera del
 * contenedor: la bandera diagonal queda pegada al borde izquierdo de la pantalla y el
 * título grande va debajo, alineado con el contenido.
 */
export default function CreativeHeading({ eyebrow, title, tone = "light" }: CreativeHeadingProps) {
  return (
    <header>
      <div>
        <span className="cr-flag font-cr-heading text-[13px] font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2
            className={`mt-14 max-w-3xl font-cr-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl ${
              tone === "dark" ? "text-white" : "text-cr-ink"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      </div>
    </header>
  );
}
