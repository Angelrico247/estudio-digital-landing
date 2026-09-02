import { site, localSeo, seoServices } from "@/data/site";

/**
 * Datos estructurados (JSON-LD) para búsqueda local.
 *
 * `ProfessionalService` es un subtipo de `LocalBusiness`: le dice a Google que
 * esto es un negocio con una zona de servicio, no solo un sitio web. Es lo que
 * habilita aparecer en resultados locales para consultas como
 * "estudio de diseño web en Guadalajara".
 *
 * Los campos de contacto solo se incluyen si tienen un valor real. Un teléfono
 * o una red social inventados generan datos inconsistentes con el perfil de
 * Google Business, y eso resta en vez de sumar.
 */
export default function StructuredData() {
  const businessId = `${site.url}/#business`;

  const business = {
    "@type": "ProfessionalService",
    "@id": businessId,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    email: site.email,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logo.png`,
    priceRange: localSeo.priceRange,
    currenciesAccepted: "MXN",
    address: {
      "@type": "PostalAddress",
      addressLocality: localSeo.city,
      addressRegion: localSeo.region,
      addressCountry: localSeo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: localSeo.geo.lat,
      longitude: localSeo.geo.lng,
    },
    areaServed: localSeo.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: localSeo.openingHours.days,
        opens: localSeo.openingHours.opens,
        closes: localSeo.openingHours.closes,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Servicios de ${site.name}`,
      itemListElement: seoServices.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
    // Solo se emiten cuando existen datos reales.
    ...(localSeo.phone ? { telephone: localSeo.phone } : {}),
    ...(localSeo.socials.length > 0 ? { sameAs: localSeo.socials } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "es-MX",
    publisher: { "@id": businessId },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [business, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
