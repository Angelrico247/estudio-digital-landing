type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  size?: "large" | "medium";
  variant?: "text" | "flag";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  size = "large",
  variant = "text",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {variant === "flag" ? (
        <span
          className={`tab-flag font-heading text-sm font-semibold uppercase tracking-[0.2em] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {eyebrow}
        </span>
      ) : (
        <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-6 font-impact uppercase leading-[0.95] ${isLight ? "text-ink" : "text-foreground"} ${
          size === "large" ? "text-4xl sm:text-6xl lg:text-7xl" : "text-3xl sm:text-5xl"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-6 h-[3px] w-[60px] bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)] ${isCenter ? "mx-auto" : ""}`}
      />
    </div>
  );
}
