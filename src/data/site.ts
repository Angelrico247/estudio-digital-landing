// Contenido centralizado del sitio. Edita aquí textos, cifras e imágenes.

/** Genera una URL de imagen de Unsplash a partir del ID de la foto, recortada al tamaño pedido. */
export function imageUrl(photoId: string, width: number, height: number) {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
}

export const site = {
  name: "Two Worlds In Design",
  tagline: "Estudio de Soluciones Digitales",
  email: "twoworldsindesign@gmail.com",
  whatsappNumber: "5213312345678",
  location: "Guadalajara, Jalisco, México",
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export type HeroSlide = {
  id: string;
  kicker: string;
  heading: [string, string];
  subtitle: string;
  imageSeed: string;
  /** Segunda línea del heading con efecto de contorno (solo el slide "Soluciones Creativas"). */
  outlineSecondLine?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "01",
    kicker: "Two Worlds In Design",
    heading: ["Soluciones", "Creativas"],
    subtitle:
      "Diseño y tecnología a la medida para marcas que quieren destacar en un mercado digital saturado.",
    imageSeed: "1522071820081-009f0129c71c",
    outlineSecondLine: true,
  },
  {
    id: "02",
    kicker: "Estudio de Soluciones Digitales",
    heading: ["Experiencia", "Digital"],
    subtitle:
      "Desarrollo web con funcionalidad real, gestión de redes sociales y publicidad digital para hacer crecer tu negocio.",
    imageSeed: "1552581234-26160f608093",
  },
  {
    id: "03",
    kicker: "Resultados Medibles",
    heading: ["Estrategia", "Que Convierte"],
    subtitle:
      "Campañas de publicidad digital y sitios web optimizados para generar leads reales, no solo visitas.",
    imageSeed: "1521737604893-d14cc237f11d",
  },
];

export type ServiceIconName = "megaphone" | "target" | "palette" | "code" | "video" | "automation";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    number: "1",
    title: "Automatización",
    description:
      "Automatiza tu página web, webapp o Instagram con flujos inteligentes. Próximamente disponible para todas tus redes sociales.",
    icon: "automation",
  },
  {
    number: "2",
    title: "Gestión de Redes Sociales",
    description:
      "Estrategia, creación de contenido y gestión diaria de tus redes para mantener tu marca activa y relevante.",
    icon: "megaphone",
  },
  {
    number: "3",
    title: "Publicidad Digital",
    description:
      "Campañas en Meta Ads y Google Ads optimizadas para generar leads reales y retorno de inversión medible.",
    icon: "target",
  },
  {
    number: "4",
    title: "Diseño de Contenido",
    description:
      "Diseño visual para redes sociales, branding e identidad de marca que se distingue de tu competencia.",
    icon: "palette",
  },
  {
    number: "5",
    title: "Desarrollo Web",
    description:
      "Sitios web con funcionalidad real: catálogos, sistemas de citas, integración CRM. Código a la medida, no templates.",
    icon: "code",
  },
  {
    number: "6",
    title: "Producción de Video",
    description: "Reels, videos cortos y contenido audiovisual optimizado para engagement y conversión.",
    icon: "video",
  },
];

export type PortfolioProject = {
  name: string;
  category: string;
  imageSeed: string;
  url?: string;
  image?: string;
  /** "concepto" = proyecto de muestra del nicho; "cliente" = trabajo entregado a un cliente real. */
  kind: "concepto" | "cliente";
};

export const portfolio: PortfolioProject[] = [
  {
    name: "Tertulia GDL",
    category: "Catering",
    imageSeed: "1498050108023-c5249f4df085",
    url: "https://angelrico247.github.io/tertulia_catering/",
    image: "/portfolio-tertulia.png",
    kind: "concepto",
  },
  {
    name: "Lalo",
    category: "Marca Personal",
    imageSeed: "1552664730-d307ca884978",
    url: "https://angelrico247.github.io/portafolio-lalo/",
    image: "/portfolio-lalo.jpeg",
    kind: "concepto",
  },
  {
    name: "Dental Clinic",
    category: "Dental",
    imageSeed: "1497215728101-856f4ea42174",
    url: "https://dentaldemo-steel.vercel.app",
    image: "/portfolio-dental.png",
    kind: "concepto",
  },
  {
    name: "MovIng",
    category: "Mudanzas",
    imageSeed: "1517694712202-14dd9538aa97",
    url: "https://angelrico247.github.io/moving/",
    image: "/portfolio-moving.jpeg",
    kind: "concepto",
  },
  {
    name: "Terra Inmobiliaria",
    category: "Inmobiliaria",
    imageSeed: "1600585154340-be6161a56a0c",
    url: "https://real-statedemo.vercel.app",
    image: "/portfolio-realstate.png",
    kind: "concepto",
  },
  {
    name: "VOLUME",
    category: "Interiorismo",
    imageSeed: "1618221195710-dd6b41faaea6",
    url: "https://volume-interiores.vercel.app",
    image: "/portfolio-volume.png",
    kind: "concepto",
  },
];

export type Milestone = {
  value: number;
  suffix: string;
  label: string;
};

export const milestones: Milestone[] = [
  { value: 4, suffix: "+", label: "Proyectos Entregados" },
  { value: 10, suffix: "+", label: "Tecnologías Dominadas" },
  { value: 100, suffix: "%", label: "Código a la Medida" },
  { value: 48, suffix: "", label: "Horas de Respuesta" },
];

export type PricingPlan = {
  number: string;
  name: string;
  priceRange: string;
  featured: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    number: "1",
    name: "Básico",
    priceRange: "$6,000 - $8,000",
    featured: false,
    features: [
      "2 redes sociales",
      "12 posts al mes",
      "Calendario de contenido",
      "Reporte mensual básico",
    ],
  },
  {
    number: "2",
    name: "Pro",
    priceRange: "$12,000 - $15,000",
    featured: true,
    features: [
      "Todo lo del Básico",
      "Gestión de Meta Ads",
      "Gestión de Google Ads",
      "Segmentación y remarketing",
      "Reporte con métricas reales",
    ],
  },
  {
    number: "3",
    name: "Premium",
    priceRange: "$20,000 - $28,000",
    featured: false,
    features: [
      "Todo lo del Pro",
      "Sitio web con funcionalidad real",
      "Mantenimiento web mensual",
      "Atención prioritaria",
      "Desarrollo a la medida",
    ],
  },
];

export type PricingAccordionItem = {
  name: string;
  price: string;
  description: string;
};

export type PricingAccordionCategory = {
  title: string;
  items?: PricingAccordionItem[];
  note?: string;
  comingSoon?: boolean;
};

export const pricingAccordionCategories: PricingAccordionCategory[] = [
  {
    title: "Desarrollo Web",
    items: [
      {
        name: "Landing simple",
        price: "$8,000 – $12,000 MXN (pago único)",
        description: "1 página, diseño responsive, formulario de contacto, optimización SEO básica.",
      },
      {
        name: "Sitio corporativo",
        price: "$15,000 – $25,000 MXN (pago único)",
        description: "Múltiples secciones (Inicio, Nosotros, Servicios, Contacto), diseño responsive, SEO on-page.",
      },
      {
        name: "Catálogo funcional",
        price: "$22,000 – $28,000 MXN (pago único)",
        description: "Todo lo de sitio corporativo + sistema de catálogo/productos con filtros y buscador básico.",
      },
      {
        name: "Funcionalidad custom (agenda, CRM, buscador)",
        price: "$30,000 – $80,000+ MXN (pago único)",
        description:
          "Desarrollo a medida con base de datos, integración de agenda/CRM propio, funcionalidad avanzada según necesidad del cliente.",
      },
    ],
  },
  {
    title: "Gestión de Redes Sociales",
    items: [
      {
        name: "Básico",
        price: "$6,000 – $8,000 MXN/mes",
        description: "2 redes sociales, 12 publicaciones/mes, calendario de contenido, reporte básico mensual.",
      },
      {
        name: "Pro",
        price: "$12,000 – $15,000 MXN/mes",
        description:
          "Todo lo de Básico + gestión de campañas en Meta/Google Ads (presupuesto de pauta corre por cuenta del cliente, aparte).",
      },
      {
        name: "Premium",
        price: "$20,000 – $28,000 MXN/mes",
        description:
          "Todo lo de Pro + sitio web con funcionalidad real (agenda, integración CRM) + mantenimiento web mensual + atención prioritaria.",
      },
    ],
  },
  {
    title: "Creación de Contenido y Assets",
    items: [
      {
        name: "Paquete contenido",
        price: "$3,500 – $5,500 MXN/mes",
        description: "12 diseños/mes para redes sociales (sin gestión de publicación, solo diseño).",
      },
      {
        name: "Paquete extendido",
        price: "$6,000 – $9,000 MXN/mes",
        description: "20-24 diseños/mes para redes sociales.",
      },
    ],
  },
  {
    title: "Gestión de Pautas Publicitarias",
    items: [
      {
        name: "Fee de gestión",
        price: "$2,500 – $4,500 MXN/mes",
        description: "Configuración, optimización y reporte de campañas en Meta/Google Ads.",
      },
    ],
    note: "El presupuesto de los anuncios (pago directo a Meta/Google Ads) corre por cuenta del cliente. Este fee cubre solo la gestión y optimización de las campañas.",
  },
  {
    title: "Automatización IA — Web",
    items: [
      {
        name: "Cotizador IA",
        price: "Setup $8,000 – $12,000 MXN + $800 – $1,500 MXN/mes",
        description:
          "Formulario en la web, IA redacta mensaje personalizado, link de WhatsApp prellenado, panel simple de leads capturados.",
      },
      {
        name: "Agenda Inteligente + Dashboard",
        price: "Setup $18,000 – $28,000 MXN + $2,500 – $4,000 MXN/mes",
        description:
          "Todo lo del Cotizador + calendario real conectado, dashboard administrativo completo, recordatorios automáticos.",
      },
      {
        name: "Asistente WhatsApp 24/7",
        price: "Setup $40,000 – $65,000 MXN + $5,000 – $9,000 MXN/mes",
        description:
          "API oficial de WhatsApp Business, bot conversacional que responde y agenda solo, sin intervención humana.",
      },
    ],
  },
  {
    title: "Automatización IA — Redes Sociales",
    items: [
      {
        name: "Respondedor IA (DMs + Comentarios)",
        price: "Setup $10,000 – $15,000 MXN + $1,500 – $2,500 MXN/mes",
        description: "Respuestas automáticas en DMs de Instagram/Facebook, trigger de comentario a DM automático.",
      },
      {
        name: "Agenda Light",
        price: "Setup $15,000 – $22,000 MXN + $2,000 – $3,000 MXN/mes",
        description: "Agendado desde Instagram conectado a calendario, registro de leads, dashboard con métricas vía Looker Studio.",
      },
    ],
  },
  {
    title: "Reportería y Automatización Interna",
    items: [
      {
        name: "Reporte automatizado (1 fuente)",
        price: "$25,000 – $35,000 MXN + $3,000 – $5,000 MXN/mes",
        description:
          "Conexión a tu base de datos o sistema, con las reglas de negocio de tu operación. El reporte se genera y se envía solo, validado contra los números que ya manejas.",
      },
      {
        name: "Dashboard multi-fuente con roles",
        price: "$40,000 – $70,000 MXN + $8,000 – $12,000 MXN/mes",
        description:
          "Varias fuentes de datos en un solo tablero, con permisos por área o por puesto. Actualización automática, sin concentrar información a mano.",
      },
      {
        name: "Alertas y resúmenes automáticos",
        price: "Desde $20,000 MXN",
        description:
          "Avisos cuando un indicador se sale de rango y resúmenes periódicos enviados por correo o WhatsApp.",
      },
    ],
  },
  {
    title: "Reels",
    comingSoon: true,
  },
  {
    title: "Branding",
    comingSoon: true,
  },
];

export const skills = ["React", "Next.js", ".NET", "Python", "Figma", "Meta Ads", "Google Ads"];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imageSeed: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Entregaron el sitio a tiempo y con funcionalidad que ninguna otra agencia nos había ofrecido antes. El catálogo con filtros cambió por completo cómo mostramos nuestras propiedades.",
    name: "Roberto Salinas",
    role: "Director, Inmobiliaria GDL",
    imageSeed: "1519085360753-af0119f7cbe7",
  },
  {
    quote:
      "Desde que gestionan nuestras redes y campañas, las citas agendadas se duplicaron. El sistema de reservas que desarrollaron nos ahorra horas de trabajo cada semana.",
    name: "Daniela Torres",
    role: "Fundadora, Clínica Dental XYZ",
    imageSeed: "1573496359142-b8d87734a5a2",
  },
  {
    quote:
      "Buscábamos un equipo que entendiera de código, no solo de diseño. La integración con nuestro CRM funcionó perfecto desde el primer día.",
    name: "Andrés Villarreal",
    role: "CEO, Startup Tech",
    imageSeed: "1560250097-0b93528c311a",
  },
];

export const serviceOptions = [
  "Redes Sociales",
  "Publicidad Digital",
  "Desarrollo Web",
  "Branding",
  "Otro",
];

export const niches = [
  "Restaurantes y Catering",
  "Inmobiliaria",
  "Salud y Dental",
  "Belleza y Bienestar",
  "Mudanzas y Logística",
  "Retail y Tienda",
  "Servicios Profesionales",
  "Marca Personal",
  "Otro",
];
