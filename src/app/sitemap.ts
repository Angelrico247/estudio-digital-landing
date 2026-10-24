import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Cada página del sitio lista una sola URL: las secciones viven como anclas dentro de
// "/" y de "/creative", y los sitemaps listan URLs, no fragmentos.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/creative`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
