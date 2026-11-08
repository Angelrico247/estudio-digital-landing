import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Cada página del sitio lista una sola URL: las secciones viven como anclas dentro de
// "/" y de "/creative", y los sitemaps listan URLs, no fragmentos.
//
// lastModified son fechas fijas y reales (la del último cambio de contenido de cada página),
// no "ahora": si el sitemap cambia de fecha en cada despliegue, Google deja de confiar en ese
// dato. Actualiza la fecha de una página solo cuando cambie su contenido.
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-11-08", priority: 1 },
  { path: "/creative", lastModified: "2026-11-08", priority: 0.9 },
  { path: "/aviso-de-privacidad", lastModified: "2026-10-24", priority: 0.3 },
  { path: "/terminos", lastModified: "2026-10-24", priority: 0.3 },
  { path: "/accesibilidad", lastModified: "2026-11-08", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/creative" ? "monthly" : "yearly",
    priority,
  }));
}
