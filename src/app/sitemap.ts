import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// El sitio es de una sola página: todas las secciones viven en "/" como anclas,
// y los sitemaps listan URLs, no fragmentos.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
