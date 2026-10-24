import { testimonials } from "@/data/site";
import TestimonialSlider from "./TestimonialSlider";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section
      className="relative bg-dark py-20 lg:py-[120px]"
      style={{
        backgroundImage:
          "url(/studio-workstation.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-dark/90" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Testimonios" title="Lo Que Dicen Nuestros Clientes" />
        </FadeIn>

        <FadeIn delay={100} className="mt-16">
          <TestimonialSlider testimonials={testimonials} />
        </FadeIn>
      </div>
    </section>
  );
}
