import { site } from "./site";

/**
 * Configuración de contacto y enlaces de TWID Creative (/creative).
 * Todo lo que cambia con frecuencia vive aquí; los componentes no hardcodean URLs.
 */
export const creativeConfig = {
  email: site.email,
  location: site.location,

  /** Landing de TWID Development (la otra submarca). Por ahora es la home actual. */
  developmentUrl: "/",

  privacyUrl: "/aviso-de-privacidad",
  termsUrl: "/terminos",
};

export const creativeNav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Contacto", href: "#contacto" },
];
