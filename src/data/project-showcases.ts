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
  /** Piezas verticales 9:16: historias destacadas, portadas de reel y plantillas de story. */
  stories?: ShowcaseWide[];
};

export const projectShowcases: Record<string, ProjectShowcase> = {
  "Dental Clinic": {
    posts: [
      { src: "/portfolio/dental/post-01-sonrie-con-brillo.9614f123.webp", alt: "Dental Clinic: publicación «Sonríe con brillo»" },
      { src: "/portfolio/dental/post-02-primera-valoracion-sin-costo.966d5442.webp", alt: "Dental Clinic: publicación «Primera valoración sin costo»" },
      { src: "/portfolio/dental/post-03-aqui-nadie-te-apura.3de28fb4.webp", alt: "Dental Clinic: publicación «Aquí nadie te apura»" },
      { src: "/portfolio/dental/post-04-testimonio.b861c9b9.webp", alt: "Dental Clinic: publicación «Testimonio»" },
      { src: "/portfolio/dental/post-05-blanqueamiento-desde-4-500.8e38bfb5.webp", alt: "Dental Clinic: publicación «Blanqueamiento desde $4,500»" },
      { src: "/portfolio/dental/post-06-presupuesto-cerrado-por-escrito.cf51879d.webp", alt: "Dental Clinic: publicación «Presupuesto cerrado por escrito»" },
      { src: "/portfolio/dental/post-07-cifras-y-resenas.b6798459.webp", alt: "Dental Clinic: publicación «Cifras y reseñas»" },
      { src: "/portfolio/dental/post-08-primera-visita-infantil-desde-450.29652aae.webp", alt: "Dental Clinic: publicación «Primera visita infantil desde $450»" },
      { src: "/portfolio/dental/post-09-ubicacion-y-horarios.b4002578.webp", alt: "Dental Clinic: publicación «Ubicación y horarios»" },
      { src: "/portfolio/dental/post-10-testimonio-tenia-miedo-al-dentista.3d852ea7.webp", alt: "Dental Clinic: publicación «Testimonio tenía miedo al dentista»" },
      { src: "/portfolio/dental/post-11-testimonio-primera-visita-de-su-hijo.056cdf12.webp", alt: "Dental Clinic: publicación «Testimonio primera visita de su hijo»" },
      { src: "/portfolio/dental/post-12-fin-de-ano-agenda-para-enero.f21baef8.webp", alt: "Dental Clinic: publicación «Fin de año agenda para enero»" },
      { src: "/portfolio/dental/post-13-aviso-de-cierre-por-vacaciones.5e50eaa4.webp", alt: "Dental Clinic: publicación «Aviso de cierre por vacaciones»" },
    ],
    carousels: [
      {
        title: "Cómo trabajamos",
        slides: [
          { src: "/portfolio/dental/c1-1-portada.7f23c8e0.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c1-2-valoracion.ba475341.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 2 (Valoración)" },
          { src: "/portfolio/dental/c1-3-plan-de-tratamiento.cd3dc72e.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 3 (Plan de tratamiento)" },
          { src: "/portfolio/dental/c1-4-tratamiento.272e8b4b.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 4 (Tratamiento)" },
          { src: "/portfolio/dental/c1-5-seguimiento.8d49dc4f.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 5 (Seguimiento)" },
        ],
      },
      {
        title: "Tecnología",
        slides: [
          { src: "/portfolio/dental/c2-1-portada.e29ddc2b.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c2-2-escaner-intraoral-3d.362da59d.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 2 (Escáner intraoral 3D)" },
          { src: "/portfolio/dental/c2-3-tomografia-de-haz-conico.b40e8d65.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 3 (Tomografía de haz cónico)" },
          { src: "/portfolio/dental/c2-4-diseno-digital-de-sonrisa.61b6364f.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 4 (Diseño digital de sonrisa)" },
          { src: "/portfolio/dental/c2-5-cierre.21b29ff8.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 5 (Cierre)" },
        ],
      },
      {
        title: "Planes",
        slides: [
          { src: "/portfolio/dental/c3-1-portada.7bc5c879.webp", alt: "Dental Clinic: carrusel «Planes», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c3-2-esencial.a0e760a7.webp", alt: "Dental Clinic: carrusel «Planes», lámina 2 (Esencial)" },
          { src: "/portfolio/dental/c3-3-familiar.94f1e54b.webp", alt: "Dental Clinic: carrusel «Planes», lámina 3 (Familiar)" },
          { src: "/portfolio/dental/c3-4-premium.3eb7aced.webp", alt: "Dental Clinic: carrusel «Planes», lámina 4 (Premium)" },
          { src: "/portfolio/dental/c3-5-cierre.8f8d038f.webp", alt: "Dental Clinic: carrusel «Planes», lámina 5 (Cierre)" },
        ],
      },
    ],
    stories: [
      { src: "/portfolio/dental/destacada-precios.dc7e5c34.webp", alt: "Dental Clinic: Historia destacada: Precios", width: 1080, height: 1920 },
      { src: "/portfolio/dental/destacada-primera-cita.953bddfc.webp", alt: "Dental Clinic: Historia destacada: Primera cita", width: 1080, height: 1920 },
      { src: "/portfolio/dental/destacada-resenas.31b1702f.webp", alt: "Dental Clinic: Historia destacada: Reseñas", width: 1080, height: 1920 },
      { src: "/portfolio/dental/destacada-ubicacion.0bdcaaaa.webp", alt: "Dental Clinic: Historia destacada: Ubicación", width: 1080, height: 1920 },
      { src: "/portfolio/dental/reel-cover-asi-es-el-escaner-3d.db0df0f5.webp", alt: "Dental Clinic: Portada de reel: Así es el escáner 3D", width: 1080, height: 1920 },
      { src: "/portfolio/dental/reel-cover-duele-le-preguntamos-al-doctor.0be75dfb.webp", alt: "Dental Clinic: Portada de reel: ¿Duele Le preguntamos al doctor", width: 1080, height: 1920 },
      { src: "/portfolio/dental/story-template-pregunta-con-sticker-de-respuestas.997fd623.webp", alt: "Dental Clinic: Plantilla de story: Pregunta con sticker de respuestas", width: 1080, height: 1920 },
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
      { src: "/portfolio/terra/post-01-tagline.edbf7527.webp", alt: "Terra Inmobiliaria: publicación «Tagline»" },
      { src: "/portfolio/terra/post-02-destacada-valle-real.92c7bb45.webp", alt: "Terra Inmobiliaria: publicación «Destacada Valle Real»" },
      { src: "/portfolio/terra/post-03-casa-puerta-de-hierro.2441b649.webp", alt: "Terra Inmobiliaria: publicación «Casa Puerta de Hierro»" },
      { src: "/portfolio/terra/post-04-loft-andares-en-renta.d3995e7a.webp", alt: "Terra Inmobiliaria: publicación «Loft Andares en renta»" },
      { src: "/portfolio/terra/post-05-explora-por-zona.ce996632.webp", alt: "Terra Inmobiliaria: publicación «Explora por zona»" },
      { src: "/portfolio/terra/post-06-terrenos-e-inversion.2565f59b.webp", alt: "Terra Inmobiliaria: publicación «Terrenos e inversión»" },
      { src: "/portfolio/terra/post-07-testimonio-paola-jimenez.83cf4222.webp", alt: "Terra Inmobiliaria: publicación «Testimonio Paola Jiménez»" },
      { src: "/portfolio/terra/post-08-casa-colomos-en-renta.3c0c74f7.webp", alt: "Terra Inmobiliaria: publicación «Casa Colomos en renta»" },
      { src: "/portfolio/terra/post-09-contacto.3ce2591c.webp", alt: "Terra Inmobiliaria: publicación «Contacto»" },
    ],
    carousels: [
      {
        title: "Cómo trabajamos",
        slides: [
          { src: "/portfolio/terra/c1-1-portada.ffb78dfd.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c1-2-asesoria.f90a25f2.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 2 (Asesoría)" },
          { src: "/portfolio/terra/c1-3-seleccion.fe368456.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 3 (Selección)" },
          { src: "/portfolio/terra/c1-4-cierre.19b24aa8.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 4 (Cierre)" },
        ],
      },
      {
        title: "Propiedades destacadas",
        slides: [
          { src: "/portfolio/terra/c2-1-portada.47c99ac0.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c2-2-valle-real.f15ab857.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 2 (Valle Real)" },
          { src: "/portfolio/terra/c2-3-puerta-de-hierro.e78d0289.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 3 (Puerta de Hierro)" },
          { src: "/portfolio/terra/c2-4-depto-andares.7559c417.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 4 (Depto Andares)" },
        ],
      },
      {
        title: "Por tipo de propiedad",
        slides: [
          { src: "/portfolio/terra/c3-1-portada.e9264296.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c3-2-casas.d6ef0298.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 2 (Casas)" },
          { src: "/portfolio/terra/c3-3-departamentos.181cdb7a.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 3 (Departamentos)" },
          { src: "/portfolio/terra/c3-4-terrenos.2f8d4cb3.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 4 (Terrenos)" },
        ],
      },
    ],
    mockups: [
      { src: "/portfolio/terra/mockup-1-perfil-y-feed-de-instagram.a9a44170.webp", alt: "Terra Inmobiliaria: mockup «Perfil y feed de Instagram»", width: 1800, height: 1177 },
      { src: "/portfolio/terra/mockup-2-carrusel-en-el-feed-4-slides.80657c1a.webp", alt: "Terra Inmobiliaria: mockup «Carrusel en el feed (4 slides)»", width: 1800, height: 1125 },
      { src: "/portfolio/terra/mockup-3-dispositivos-sobre-degradado-de-marca.f8d15298.webp", alt: "Terra Inmobiliaria: mockup «Dispositivos sobre degradado de marca»", width: 1800, height: 1125 },
      { src: "/portfolio/terra/mockup-4-feed-de-facebook.79b72182.webp", alt: "Terra Inmobiliaria: mockup «Feed de Facebook»", width: 1800, height: 1125 },
    ],
  },
};
