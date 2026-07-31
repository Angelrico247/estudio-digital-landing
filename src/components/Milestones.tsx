import { milestones } from "@/data/site";
import MilestoneCounter from "./MilestoneCounter";
import FadeIn from "./FadeIn";

export default function Milestones() {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: "url(/home-office-desk-work-station-with-computers-keyb-2026-03-16-04-35-42-utc.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-dark/85" />

      <div className="relative mx-auto grid max-w-[1100px] grid-cols-2 gap-12 px-6 lg:grid-cols-4 lg:px-8">
        {milestones.map((milestone, i) => (
          <FadeIn key={milestone.label} delay={i * 100} className="text-center">
            <div className="font-impact text-5xl text-primary sm:text-6xl">
              <MilestoneCounter value={milestone.value} />
              <span className="font-normal">{milestone.suffix}</span>
            </div>
            <div className="mx-auto mt-4 h-[3px] w-10 bg-[linear-gradient(82.3deg,var(--color-primary)_10.8%,var(--color-secondary-blue)_94.3%)]" />
            <p className="font-heading text-sm font-medium uppercase tracking-[0.15em] text-secondary">
              {milestone.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
