type CreativeHeadingProps = {
  eyebrow: string;
  title: string;
  as?: "h2" | "h3";
};

/** Encabezado de sección estilo Kyata: eyebrow en acento, título en mayúsculas
 * extra-gruesas y un divisor corto con muesca. */
export default function CreativeHeading({ eyebrow, title, as: Tag = "h2" }: CreativeHeadingProps) {
  return (
    <header className="text-center">
      <span className="font-cr-body text-[13px] font-medium tracking-wide text-cr-accent-ink">
        {eyebrow}
      </span>
      <Tag className="mt-3 font-cr-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-cr-ink sm:text-4xl">
        {title}
      </Tag>
      <span aria-hidden className="cr-divider" />
    </header>
  );
}
