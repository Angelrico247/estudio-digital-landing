import { site } from "./site";

/**
 * Configuración de contacto y enlaces de TWID Creative (/creative).
 * Todo lo que cambia con frecuencia vive aquí; los componentes no hardcodean URLs.
 */
export const creativeConfig = {
  /** Reutiliza el WhatsApp del sitio principal. Cámbialo aquí si Creative usa otro número. */
  whatsappNumber: site.whatsappNumber,
  email: site.email,
  location: site.location,

  /** Redes: déjalas vacías ("") y el footer oculta el link en lugar de mostrar uno roto. */
  instagramUrl: "",
  linkedinUrl: "",

  /** Landing de TWID Development (la otra submarca). Por ahora es la home actual. */
  developmentUrl: "/",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${creativeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const creativeNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Contacto", href: "#contacto" },
];
