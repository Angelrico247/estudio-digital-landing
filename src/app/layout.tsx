import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed, Anton } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
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

export const metadata: Metadata = {
  title: "Two Worlds In Design — Estudio de Soluciones Digitales",
  description:
    "Desarrollo web con funcionalidad real, gestión de redes sociales y publicidad digital para hacer crecer tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${barlowCondensed.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark font-sans text-secondary">
        <CustomCursor />
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
