export default function ClosingBanner() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative mx-auto max-w-5xl px-4 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/closing-banner.png"
          alt="Two Worlds In Design"
          className="relative w-full scale-110 sm:scale-125"
        />

        <div
          aria-hidden
          className="animate-drift-orb-a pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-[65%] -translate-y-1/2 bg-contain bg-center bg-no-repeat opacity-90 mix-blend-screen blur-[4px] sm:h-[600px] sm:w-[600px]"
          style={{ backgroundImage: "url(/glow-purple.png)" }}
        />
        <div
          aria-hidden
          className="animate-drift-orb-b pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-[35%] -translate-y-1/2 bg-contain bg-center bg-no-repeat opacity-90 mix-blend-screen blur-[4px] sm:h-[600px] sm:w-[600px]"
          style={{ backgroundImage: "url(/glow-blue.png)" }}
        />
      </div>
    </section>
  );
}
