/**
 * Skeleton de la landing de Development (y de las páginas legales): se muestra mientras
 * la ruta se carga, con la misma silueta del hero para que no haya salto al aparecer.
 */
export default function Loading() {
  return (
    <div role="status" aria-label="Cargando" className="min-h-screen bg-dark">
      <span className="sr-only">Cargando…</span>

      <div className="flex h-20 items-center justify-between border-b border-line px-6 lg:px-8">
        <div className="h-8 w-28 animate-pulse rounded bg-white/[0.16]" />
        <div className="hidden items-center gap-10 md:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-3 w-16 animate-pulse rounded bg-white/[0.16]" />
          ))}
          <div className="h-11 w-44 animate-pulse rounded-md bg-white/[0.16]" />
        </div>
        <div className="h-8 w-8 animate-pulse rounded bg-white/[0.16] md:hidden" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-32 text-center sm:pt-40">
        <div className="h-3 w-48 animate-pulse rounded bg-white/[0.16]" />
        <div className="mt-8 h-16 w-full max-w-xl animate-pulse rounded bg-white/[0.16] sm:h-20" />
        <div className="mt-4 h-12 w-4/5 max-w-lg animate-pulse rounded bg-white/[0.16] sm:h-16" />
        <div className="mt-8 h-4 w-full max-w-md animate-pulse rounded bg-white/[0.16]" />
        <div className="mt-3 h-4 w-3/4 max-w-sm animate-pulse rounded bg-white/[0.16]" />
        <div className="mt-10 flex gap-6">
          <div className="h-14 w-40 animate-pulse rounded-md bg-white/[0.16]" />
          <div className="h-14 w-32 animate-pulse rounded-full bg-white/[0.16]" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 lg:grid-cols-2 lg:px-8">
        <div className="h-64 animate-pulse rounded-md bg-white/[0.09] lg:col-span-2" />
        <div className="h-56 animate-pulse rounded-md bg-white/[0.09]" />
        <div className="h-56 animate-pulse rounded-md bg-white/[0.09]" />
      </div>
    </div>
  );
}
