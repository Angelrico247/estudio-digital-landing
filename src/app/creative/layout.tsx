import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { site } from "@/data/site";

// Poppins: títulos, navegación y botones (trazo redondeado y "gordito", como Kyata).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Roboto: párrafos y etiquetas pequeñas.
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = "TWID Creative — Branding, redes sociales y sitios web en Guadalajara";
const description =
  "TWID Creative es el lado de diseño de Two Worlds In Design: branding, gestión de redes sociales, publicidad digital y sitios web para marcas en Guadalajara.";
const url = `${site.url}/creative`;

export const metadata: Metadata = {
  // "absolute" evita que el template del layout raíz le agregue " | Two Worlds In Design".
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TWID Creative" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`creative ${poppins.variable} ${roboto.variable} flex-1 bg-white font-cr-body text-cr-body`}
    >
      {children}
    </div>
  );
}
