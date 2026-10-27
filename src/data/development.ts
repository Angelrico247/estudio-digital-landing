import type { HeroSlide } from "./site";

/**
 * Contenido de TWID Development (la landing en "/"): automatizaciones y sistemas a la medida.
 * Los proyectos están descritos en genérico a propósito: son el tipo de sistema que sabemos
 * construir, no clientes ni cifras.
 */

export const devNavLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const devHeroSlides: HeroSlide[] = [
  {
    id: "01",
    kicker: "TWID Development",
    heading: ["Sistemas", "A la Medida"],
    subtitle:
      "Construimos las herramientas que tu operación necesita: punto de venta, paneles, reportes e integraciones hechas para tu forma de trabajar.",
    imageSeed: "1522071820081-009f0129c71c",
    outlineSecondLine: true,
  },
  {
    id: "02",
    kicker: "TWID Development",
    heading: ["Automatiza", "Tu Operación"],
    subtitle:
      "Menos captura manual y menos hojas de cálculo: flujos que corren solos y datos que llegan a donde deben.",
    imageSeed: "1552581234-26160f608093",
  },
  {
    id: "03",
    kicker: "TWID Development",
    heading: ["Datos", "Que Se Entienden"],
    subtitle:
      "Reportes, dashboards y conexiones entre sistemas para decidir con información al día, no con corazonadas.",
    imageSeed: "1521737604893-d14cc237f11d",
  },
];

export type DevProject = {
  number: string;
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  stack?: string[];
  /** La primera tarjeta ocupa todo el ancho. */
  featured?: boolean;
};

export const devProjects: DevProject[] = [
  {
    number: "1",
    title: "Sistema POS y de gestión",
    kind: "Aplicación web completa",
    description:
      "Un solo sistema para vender y administrar el negocio: punto de venta, inventario de productos, clientes, empleados y nómina, ingresos y gastos, con un dashboard que muestra cómo va todo en tiempo real.",
    highlights: [
      "Punto de venta con carrito, métodos de pago y control de existencias",
      "Ingresos, gastos y nómina en un mismo lugar",
      "Dashboard con indicadores y reportes exportables a Excel",
      "Acceso con usuarios y sesión segura",
    ],
    stack: ["FastAPI", "PostgreSQL", "React", "TypeScript"],
    featured: true,
  },
  {
    number: "2",
    title: "Reportería automatizada",
    kind: "Datos y reportes",
    description:
      "Reportes que antes se armaban a mano ahora se generan y se entregan solos, con la información consolidada y lista para consultar o exportar.",
    highlights: ["Consolidación de datos de varias fuentes", "Entrega programada", "Exportación lista para usar"],
  },
  {
    number: "3",
    title: "Automatización en redes sociales",
    kind: "Automatización conversacional",
    description:
      "Flujos que atienden tus redes por ti: respuestas automáticas a mensajes de Instagram, agendado de citas en calendario y seguimiento de cada contacto, conectados a tus sistemas para no capturar dos veces.",
    highlights: [
      "Respuestas y flujos guiados en mensajes de Instagram",
      "Agendado de citas conectado a tu calendario",
      "Seguimiento y captura de datos automáticos",
    ],
  },
  {
    number: "4",
    title: "Integración entre sistemas",
    kind: "Integraciones y APIs",
    description:
      "Conexión de plataformas que no se hablaban entre sí, para que compartan información de forma automática y sin captura doble.",
    highlights: ["Sincronización de datos entre plataformas", "Menos errores de captura", "Procesos de principio a fin"],
  },
  {
    number: "5",
    title: "Plataforma interna de procesos",
    kind: "Aplicación web a la medida",
    description:
      "Una aplicación hecha para llevar un proceso interno completo: quién hace qué, en qué etapa va y qué sigue, con historial y estatus visibles.",
    highlights: ["Flujos y estatus por etapa", "Historial de cada movimiento", "Pensada para el equipo que la usa"],
  },
  {
    number: "6",
    title: "Control de inventario",
    kind: "Sistema de inventario",
    description:
      "Entradas, salidas y existencias en un solo lugar, con alertas y reportes para saber qué hay, qué falta y qué se mueve.",
    highlights: ["Entradas, salidas y existencias", "Alertas de faltantes", "Reportes de movimiento"],
  },
];

/** Opciones del cotizador y del formulario de contacto de Development. */
export const devQuoteOptions = [...devProjects.map((p) => p.title), "Otro / aún no lo sé"];

export const devServiceOptions = [
  "Automatización de procesos",
  "Sistema a la medida",
  "Reportes y dashboards",
  "Integración entre sistemas",
  "Automatización en redes sociales",
  "Otro",
];
