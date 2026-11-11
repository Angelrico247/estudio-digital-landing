/**
 * Material de redes de los proyectos concepto: publicaciones y carruseles que se muestran en el
 * modal de /creative. Las imágenes viven en public/portfolio/<proyecto>/ (WebP 1080×1350).
 * La clave es el nombre del proyecto tal como aparece en `portfolio` (src/data/site.ts).
 */

export type ShowcaseImage = { src: string; alt: string };

export type ShowcaseWide = ShowcaseImage & { width: number; height: number };

export type ShowcaseCarousel = { title: string; slides: ShowcaseImage[] };

export type ProjectShowcase = {
  posts: ShowcaseImage[];
  carousels: ShowcaseCarousel[];
  /** Mockups horizontales (feed y dispositivos). */
  mockups?: ShowcaseWide[];
};

export const projectShowcases: Record<string, ProjectShowcase> = {
  "Dental Clinic": {
    posts: [
      { src: "/portfolio/dental/post-01-sonrie-con-brillo.webp", alt: "Dental Clinic: publicación «Sonríe con brillo»" },
      { src: "/portfolio/dental/post-02-primera-valoracion.webp", alt: "Dental Clinic: publicación «Primera valoración»" },
      { src: "/portfolio/dental/post-03-aqui-nadie-te-apura.webp", alt: "Dental Clinic: publicación «Aquí nadie te apura»" },
      { src: "/portfolio/dental/post-04-testimonio-ortodoncia.webp", alt: "Dental Clinic: publicación «Testimonio ortodoncia»" },
      { src: "/portfolio/dental/post-05-blanqueamiento.webp", alt: "Dental Clinic: publicación «Blanqueamiento»" },
      { src: "/portfolio/dental/post-06-presupuesto-cerrado.webp", alt: "Dental Clinic: publicación «Presupuesto cerrado»" },
      { src: "/portfolio/dental/post-07-cifras.webp", alt: "Dental Clinic: publicación «Cifras»" },
      { src: "/portfolio/dental/post-08-visita-infantil.webp", alt: "Dental Clinic: publicación «Visita infantil»" },
      { src: "/portfolio/dental/post-09-ubicacion-y-horarios.webp", alt: "Dental Clinic: publicación «Ubicación y horarios»" },
    ],
    carousels: [
      {
        title: "Cómo trabajamos",
        slides: [
          { src: "/portfolio/dental/c1-1-portada.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c1-2-valoracion.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 2 (Valoración)" },
          { src: "/portfolio/dental/c1-3-plan-de-tratamiento.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 3 (Plan de tratamiento)" },
          { src: "/portfolio/dental/c1-4-tratamiento.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 4 (Tratamiento)" },
          { src: "/portfolio/dental/c1-5-seguimiento.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 5 (Seguimiento)" },
        ],
      },
      {
        title: "Tecnología",
        slides: [
          { src: "/portfolio/dental/c2-1-portada.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c2-2-escaner-intraoral-3d.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 2 (Escáner intraoral 3D)" },
          { src: "/portfolio/dental/c2-3-tomografia-de-haz-conico.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 3 (Tomografía de haz cónico)" },
          { src: "/portfolio/dental/c2-4-diseno-digital-de-sonrisa.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 4 (Diseño digital de sonrisa)" },
          { src: "/portfolio/dental/c2-5-cierre.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 5 (Cierre)" },
        ],
      },
      {
        title: "Planes",
        slides: [
          { src: "/portfolio/dental/c3-1-portada.webp", alt: "Dental Clinic: carrusel «Planes», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c3-2-esencial.webp", alt: "Dental Clinic: carrusel «Planes», lámina 2 (Esencial)" },
          { src: "/portfolio/dental/c3-3-familiar.webp", alt: "Dental Clinic: carrusel «Planes», lámina 3 (Familiar)" },
          { src: "/portfolio/dental/c3-4-premium.webp", alt: "Dental Clinic: carrusel «Planes», lámina 4 (Premium)" },
          { src: "/portfolio/dental/c3-5-cierre.webp", alt: "Dental Clinic: carrusel «Planes», lámina 5 (Cierre)" },
        ],
      },
    ],
  },
  "VOLUME": {
    posts: [
      { src: "/portfolio/volume/post-01-presentacion.webp", alt: "VOLUME: publicación «Presentación»" },
      { src: "/portfolio/volume/post-02-cifras.webp", alt: "VOLUME: publicación «Cifras»" },
      { src: "/portfolio/volume/post-03-frase.webp", alt: "VOLUME: publicación «Frase»" },
      { src: "/portfolio/volume/post-04-el-estudio.webp", alt: "VOLUME: publicación «El estudio»" },
      { src: "/portfolio/volume/post-05-recomendacion.webp", alt: "VOLUME: publicación «Recomendación»" },
      { src: "/portfolio/volume/post-06-del-boceto-a-las-llaves.webp", alt: "VOLUME: publicación «Del boceto a las llaves»" },
      { src: "/portfolio/volume/post-07-exteriores.webp", alt: "VOLUME: publicación «Exteriores»" },
      { src: "/portfolio/volume/post-08-planeacion.webp", alt: "VOLUME: publicación «Planeación»" },
      { src: "/portfolio/volume/post-09-contacto.webp", alt: "VOLUME: publicación «Contacto»" },
    ],
    carousels: [
      {
        title: "Servicios",
        slides: [
          { src: "/portfolio/volume/c1-1-portada.webp", alt: "VOLUME: carrusel «Servicios», lámina 1 (Portada)" },
          { src: "/portfolio/volume/c1-2-lamina-2.webp", alt: "VOLUME: carrusel «Servicios», lámina 2 (Lámina 2)" },
          { src: "/portfolio/volume/c1-3-lamina-3.webp", alt: "VOLUME: carrusel «Servicios», lámina 3 (Lámina 3)" },
          { src: "/portfolio/volume/c1-4-lamina-4.webp", alt: "VOLUME: carrusel «Servicios», lámina 4 (Lámina 4)" },
          { src: "/portfolio/volume/c1-5-cierre.webp", alt: "VOLUME: carrusel «Servicios», lámina 5 (Cierre)" },
        ],
      },
      {
        title: "Proyectos",
        slides: [
          { src: "/portfolio/volume/c2-1-portada.webp", alt: "VOLUME: carrusel «Proyectos», lámina 1 (Portada)" },
          { src: "/portfolio/volume/c2-2-casa-providencia.webp", alt: "VOLUME: carrusel «Proyectos», lámina 2 (Casa Providencia)" },
          { src: "/portfolio/volume/c2-3-loft-americana.webp", alt: "VOLUME: carrusel «Proyectos», lámina 3 (Loft Americana)" },
          { src: "/portfolio/volume/c2-4-oficinas-zapopan.webp", alt: "VOLUME: carrusel «Proyectos», lámina 4 (Oficinas Zapopan)" },
          { src: "/portfolio/volume/c2-5-cierre.webp", alt: "VOLUME: carrusel «Proyectos», lámina 5 (Cierre)" },
        ],
      },
      {
        title: "Materiales",
        slides: [
          { src: "/portfolio/volume/c3-1-portada.webp", alt: "VOLUME: carrusel «Materiales», lámina 1 (Portada)" },
          { src: "/portfolio/volume/c3-2-madera.webp", alt: "VOLUME: carrusel «Materiales», lámina 2 (Madera)" },
          { src: "/portfolio/volume/c3-3-piedra.webp", alt: "VOLUME: carrusel «Materiales», lámina 3 (Piedra)" },
          { src: "/portfolio/volume/c3-4-textiles.webp", alt: "VOLUME: carrusel «Materiales», lámina 4 (Textiles)" },
          { src: "/portfolio/volume/c3-5-cierre.webp", alt: "VOLUME: carrusel «Materiales», lámina 5 (Cierre)" },
        ],
      },
    ],
  },
  "Terra Inmobiliaria": {
    posts: [
      { src: "/portfolio/terra/post-01-tagline.webp", alt: "Terra Inmobiliaria: publicación «Tagline»" },
      { src: "/portfolio/terra/post-02-destacada-valle-real.webp", alt: "Terra Inmobiliaria: publicación «Destacada Valle Real»" },
      { src: "/portfolio/terra/post-03-casa-puerta-de-hierro.webp", alt: "Terra Inmobiliaria: publicación «Casa Puerta de Hierro»" },
      { src: "/portfolio/terra/post-04-loft-andares-en-renta.webp", alt: "Terra Inmobiliaria: publicación «Loft Andares en renta»" },
      { src: "/portfolio/terra/post-05-explora-por-zona.webp", alt: "Terra Inmobiliaria: publicación «Explora por zona»" },
      { src: "/portfolio/terra/post-06-terrenos-e-inversion.webp", alt: "Terra Inmobiliaria: publicación «Terrenos e inversión»" },
      { src: "/portfolio/terra/post-07-testimonio-paola-jimenez.webp", alt: "Terra Inmobiliaria: publicación «Testimonio Paola Jiménez»" },
      { src: "/portfolio/terra/post-08-casa-colomos-en-renta.webp", alt: "Terra Inmobiliaria: publicación «Casa Colomos en renta»" },
      { src: "/portfolio/terra/post-09-contacto.webp", alt: "Terra Inmobiliaria: publicación «Contacto»" },
    ],
    carousels: [
      {
        title: "Cómo trabajamos",
        slides: [
          { src: "/portfolio/terra/c1-1-portada.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c1-2-asesoria.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 2 (Asesoría)" },
          { src: "/portfolio/terra/c1-3-seleccion.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 3 (Selección)" },
          { src: "/portfolio/terra/c1-4-cierre.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 4 (Cierre)" },
        ],
      },
      {
        title: "Propiedades destacadas",
        slides: [
          { src: "/portfolio/terra/c2-1-portada.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c2-2-valle-real.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 2 (Valle Real)" },
          { src: "/portfolio/terra/c2-3-puerta-de-hierro.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 3 (Puerta de Hierro)" },
          { src: "/portfolio/terra/c2-4-depto-andares.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 4 (Depto Andares)" },
        ],
      },
      {
        title: "Por tipo de propiedad",
        slides: [
          { src: "/portfolio/terra/c3-1-portada.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c3-2-casas.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 2 (Casas)" },
          { src: "/portfolio/terra/c3-3-departamentos.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 3 (Departamentos)" },
          { src: "/portfolio/terra/c3-4-terrenos.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 4 (Terrenos)" },
        ],
      },
    ],
    mockups: [
      { src: "/portfolio/terra/mockup-1-perfil-y-feed-de-instagram.webp", alt: "Terra Inmobiliaria: mockup «Perfil y feed de Instagram»", width: 1800, height: 1177 },
      { src: "/portfolio/terra/mockup-2-carrusel-en-el-feed-4-slides.webp", alt: "Terra Inmobiliaria: mockup «Carrusel en el feed (4 slides)»", width: 1800, height: 1125 },
      { src: "/portfolio/terra/mockup-3-dispositivos-sobre-degradado-de-marca.webp", alt: "Terra Inmobiliaria: mockup «Dispositivos sobre degradado de marca»", width: 1800, height: 1125 },
      { src: "/portfolio/terra/mockup-4-feed-de-facebook.webp", alt: "Terra Inmobiliaria: mockup «Feed de Facebook»", width: 1800, height: 1125 },
    ],
  },
};
