/** Skeleton de /creative: barra negra, hero oscuro alineado a la izquierda y bloques claros debajo. */
export default function Loading() {
  return (
    <div role="status" aria-label="Cargando" className="min-h-screen bg-white">
      <span className="sr-only">Cargando…</span>

      <div className="bg-black">
        <div className="mx-auto flex h-[77px] max-w-[1200px] items-center justify-between px-6">
          <div className="h-6 w-32 animate-pulse rounded bg-white/[0.22]" />
          <div className="hidden items-center gap-8 lg:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-3 w-16 animate-pulse rounded bg-white/[0.22]" />
            ))}
            <div className="h-11 w-28 animate-pulse rounded-full bg-white/[0.22]" />
          </div>
          <div className="h-8 w-8 animate-pulse rounded bg-white/[0.22] lg:hidden" />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pb-28 pt-24 sm:pt-32">
          <div className="h-3 w-44 animate-pulse rounded bg-white/[0.22]" />
          <div className="mt-8 h-14 w-full max-w-xl animate-pulse rounded bg-white/[0.22] sm:h-20" />
          <div className="mt-4 h-14 w-3/4 max-w-md animate-pulse rounded bg-white/[0.22] sm:h-20" />
          <div className="mt-8 h-4 w-full max-w-md animate-pulse rounded bg-white/[0.22]" />
          <div className="mt-3 h-4 w-2/3 max-w-sm animate-pulse rounded bg-white/[0.22]" />
          <div className="mt-10 flex gap-6">
            <div className="h-14 w-40 animate-pulse rounded-full bg-white/[0.22]" />
            <div className="h-14 w-36 animate-pulse rounded-full bg-white/[0.22]" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="h-12 w-72 animate-pulse rounded bg-cr-line" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 animate-pulse bg-cr-card" />
          ))}
        </div>
      </div>
    </div>
  );
}
