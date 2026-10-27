import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed, Anton } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
import { ScheduleCallProvider } from "@/components/ScheduleCallContext";
import StructuredData from "@/components/StructuredData";
import { site, localSeo } from "@/data/site";
import "./globals.css";

// DM Sans: texto de párrafo en todas las secciones.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Barlow Condensed: títulos, etiquetas y botones en todas las secciones (excepto el Hero).
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Anton: heading y botones del Hero — trazo condensado y ultra grueso, estilo Impact.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const devDescription =
  "Automatizaciones y sistemas a la medida en Guadalajara: punto de venta, reportes, integraciones y automatización de redes sociales para que tu operación corra con menos trabajo manual.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Automatización y Sistemas a la Medida en ${localSeo.city}`,
    template: `%s | ${site.name}`,
  },
  description: devDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    `automatización de procesos ${localSeo.city}`,
    `sistemas a la medida ${localSeo.city}`,
    `desarrollo de software ${localSeo.city}`,
    `sistema punto de venta ${localSeo.city}`,
    `automatización de redes sociales ${localSeo.region}`,
    "reportes y dashboards",
    "integración de sistemas",
    site.shortName,
  ],
  // www redirige al apex, así que el canónico siempre apunta al apex.
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Automatización y Sistemas a la Medida en ${localSeo.city}`,
    description: devDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline} en ${localSeo.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Automatización y Sistemas a la Medida en ${localSeo.city}`,
    description: devDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${dmSans.variable} ${barlowCondensed.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark font-sans text-secondary">
        <StructuredData />
        <CustomCursor />
        <QuoteModalProvider>
          <ScheduleCallProvider>{children}</ScheduleCallProvider>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
