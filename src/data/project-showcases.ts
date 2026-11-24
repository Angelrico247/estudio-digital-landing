/**
 * Material de redes de los proyectos concepto: publicaciones, carruseles, stories y mockups que se
 * muestran en el modal de /creative. Cada proyecto es una lista de secciones (una pestaña por
 * sección). Las imágenes viven en public/portfolio/<proyecto>/ (WebP; el nombre lleva un hash del
 * contenido para que ningún caché sirva una versión vieja al reemplazar una imagen).
 * La clave es el nombre del proyecto tal como aparece en `portfolio` (src/data/site.ts).
 */

export type ShowcaseImage = { src: string; alt: string; width?: number; height?: number };

export type ShowcaseCarousel = { title: string; slides: ShowcaseImage[] };

export type ShowcaseSection =
  | {
      id: string;
      label: string;
      kind: "grid";
      /** Proporción de cada miniatura: publicación 4:5, story 9:16 o mockup horizontal (usa width/height). */
      ratio: "post" | "story" | "wide";
      images: ShowcaseImage[];
    }
  | { id: string; label: string; kind: "carousels"; carousels: ShowcaseCarousel[] };

export type ProjectShowcase = { sections: ShowcaseSection[] };

export const projectShowcases: Record<string, ProjectShowcase> = {
  "Dental Clinic": {
    sections: [
      { id: "posts", label: "Publicaciones", kind: "grid", ratio: "post", images: [
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
      ] },
      { id: "carousels", label: "Carruseles", kind: "carousels", carousels: [
        { title: "Cómo trabajamos", slides: [
          { src: "/portfolio/dental/c1-1-portada.7f23c8e0.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c1-2-valoracion.ba475341.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 2 (Valoración)" },
          { src: "/portfolio/dental/c1-3-plan-de-tratamiento.cd3dc72e.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 3 (Plan de tratamiento)" },
          { src: "/portfolio/dental/c1-4-tratamiento.272e8b4b.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 4 (Tratamiento)" },
          { src: "/portfolio/dental/c1-5-seguimiento.8d49dc4f.webp", alt: "Dental Clinic: carrusel «Cómo trabajamos», lámina 5 (Seguimiento)" },
        ] },
        { title: "Tecnología", slides: [
          { src: "/portfolio/dental/c2-1-portada.e29ddc2b.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c2-2-escaner-intraoral-3d.362da59d.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 2 (Escáner intraoral 3D)" },
          { src: "/portfolio/dental/c2-3-tomografia-de-haz-conico.b40e8d65.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 3 (Tomografía de haz cónico)" },
          { src: "/portfolio/dental/c2-4-diseno-digital-de-sonrisa.61b6364f.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 4 (Diseño digital de sonrisa)" },
          { src: "/portfolio/dental/c2-5-cierre.21b29ff8.webp", alt: "Dental Clinic: carrusel «Tecnología», lámina 5 (Cierre)" },
        ] },
        { title: "Planes", slides: [
          { src: "/portfolio/dental/c3-1-portada.7bc5c879.webp", alt: "Dental Clinic: carrusel «Planes», lámina 1 (Portada)" },
          { src: "/portfolio/dental/c3-2-esencial.a0e760a7.webp", alt: "Dental Clinic: carrusel «Planes», lámina 2 (Esencial)" },
          { src: "/portfolio/dental/c3-3-familiar.94f1e54b.webp", alt: "Dental Clinic: carrusel «Planes», lámina 3 (Familiar)" },
          { src: "/portfolio/dental/c3-4-premium.3eb7aced.webp", alt: "Dental Clinic: carrusel «Planes», lámina 4 (Premium)" },
          { src: "/portfolio/dental/c3-5-cierre.8f8d038f.webp", alt: "Dental Clinic: carrusel «Planes», lámina 5 (Cierre)" },
        ] },
      ] },
      { id: "stories", label: "Stories", kind: "grid", ratio: "story", images: [
        { src: "/portfolio/dental/destacada-precios.dc7e5c34.webp", alt: "Dental Clinic: Historia destacada: Precios", width: 1080, height: 1920 },
        { src: "/portfolio/dental/destacada-primera-cita.953bddfc.webp", alt: "Dental Clinic: Historia destacada: Primera cita", width: 1080, height: 1920 },
        { src: "/portfolio/dental/destacada-resenas.31b1702f.webp", alt: "Dental Clinic: Historia destacada: Reseñas", width: 1080, height: 1920 },
        { src: "/portfolio/dental/destacada-ubicacion.0bdcaaaa.webp", alt: "Dental Clinic: Historia destacada: Ubicación", width: 1080, height: 1920 },
        { src: "/portfolio/dental/reel-cover-asi-es-el-escaner-3d.db0df0f5.webp", alt: "Dental Clinic: Portada de reel: Así es el escáner 3D", width: 1080, height: 1920 },
        { src: "/portfolio/dental/reel-cover-duele-le-preguntamos-al-doctor.0be75dfb.webp", alt: "Dental Clinic: Portada de reel: ¿Duele Le preguntamos al doctor", width: 1080, height: 1920 },
        { src: "/portfolio/dental/story-template-pregunta-con-sticker-de-respuestas.997fd623.webp", alt: "Dental Clinic: Plantilla de story: Pregunta con sticker de respuestas", width: 1080, height: 1920 },
      ] },
    ],
  },
  "VOLUME": {
    sections: [
      { id: "posts", label: "Publicaciones", kind: "grid", ratio: "post", images: [
        { src: "/portfolio/volume/post-01-presentacion.webp", alt: "VOLUME: publicación «Presentación»" },
        { src: "/portfolio/volume/post-02-cifras.webp", alt: "VOLUME: publicación «Cifras»" },
        { src: "/portfolio/volume/post-03-frase.webp", alt: "VOLUME: publicación «Frase»" },
        { src: "/portfolio/volume/post-04-el-estudio.webp", alt: "VOLUME: publicación «El estudio»" },
        { src: "/portfolio/volume/post-05-recomendacion.webp", alt: "VOLUME: publicación «Recomendación»" },
        { src: "/portfolio/volume/post-06-del-boceto-a-las-llaves.webp", alt: "VOLUME: publicación «Del boceto a las llaves»" },
        { src: "/portfolio/volume/post-07-exteriores.webp", alt: "VOLUME: publicación «Exteriores»" },
        { src: "/portfolio/volume/post-08-planeacion.webp", alt: "VOLUME: publicación «Planeación»" },
        { src: "/portfolio/volume/post-09-contacto.webp", alt: "VOLUME: publicación «Contacto»" },
      ] },
      { id: "carousels", label: "Carruseles", kind: "carousels", carousels: [
        { title: "Servicios", slides: [
          { src: "/portfolio/volume/c1-1-portada.webp", alt: "VOLUME: carrusel «Servicios», lámina 1 (Portada)" },
          { src: "/portfolio/volume/c1-2-lamina-2.webp", alt: "VOLUME: carrusel «Servicios», lámina 2 (Lámina 2)" },
          { src: "/portfolio/volume/c1-3-lamina-3.webp", alt: "VOLUME: carrusel «Servicios», lámina 3 (Lámina 3)" },
          { src: "/portfolio/volume/c1-4-lamina-4.webp", alt: "VOLUME: carrusel «Servicios», lámina 4 (Lámina 4)" },
          { src: "/portfolio/volume/c1-5-cierre.webp", alt: "VOLUME: carrusel «Servicios», lámina 5 (Cierre)" },
        ] },
        { title: "Proyectos", slides: [
          { src: "/portfolio/volume/c2-1-portada.webp", alt: "VOLUME: carrusel «Proyectos», lámina 1 (Portada)" },
          { src: "/portfolio/volume/c2-2-casa-providencia.webp", alt: "VOLUME: carrusel «Proyectos», lámina 2 (Casa Providencia)" },
          { src: "/portfolio/volume/c2-3-loft-americana.webp", alt: "VOLUME: carrusel «Proyectos», lámina 3 (Loft Americana)" },
          { src: "/portfolio/volume/c2-4-oficinas-zapopan.webp", alt: "VOLUME: carrusel «Proyectos», lámina 4 (Oficinas Zapopan)" },
          { src: "/portfolio/volume/c2-5-cierre.webp", alt: "VOLUME: carrusel «Proyectos», lámina 5 (Cierre)" },
        ] },
        { title: "Materiales", slides: [
          { src: "/portfolio/volume/c3-1-portada.webp", alt: "VOLUME: carrusel «Materiales», lámina 1 (Portada)" },
          { src: "/portfolio/volume/c3-2-madera.webp", alt: "VOLUME: carrusel «Materiales», lámina 2 (Madera)" },
          { src: "/portfolio/volume/c3-3-piedra.webp", alt: "VOLUME: carrusel «Materiales», lámina 3 (Piedra)" },
          { src: "/portfolio/volume/c3-4-textiles.webp", alt: "VOLUME: carrusel «Materiales», lámina 4 (Textiles)" },
          { src: "/portfolio/volume/c3-5-cierre.webp", alt: "VOLUME: carrusel «Materiales», lámina 5 (Cierre)" },
        ] },
      ] },
    ],
  },
  "Terra Inmobiliaria": {
    sections: [
      { id: "redondeados", label: "Marcos redondeados", kind: "grid", ratio: "post", images: [
        { src: "/portfolio/terra/r1-depto-andares-marco-redondeado.3699cf5a.webp", alt: "Terra Inmobiliaria: publicación «Depto Andares (marco redondeado)»" },
        { src: "/portfolio/terra/r2-valle-real-diagonal-suave.15d0dbaa.webp", alt: "Terra Inmobiliaria: publicación «Valle Real (diagonal suave)»" },
        { src: "/portfolio/terra/r3-puerta-de-hierro-foto-desfasada.3b4fbe28.webp", alt: "Terra Inmobiliaria: publicación «Puerta de Hierro (foto desfasada)»" },
        { src: "/portfolio/terra/r4-agenda-tu-visita-tarjetas.4396dbfc.webp", alt: "Terra Inmobiliaria: publicación «Agenda tu visita (tarjetas)»" },
        { src: "/portfolio/terra/r5-loft-andares-diagonal-inversa.1c369be3.webp", alt: "Terra Inmobiliaria: publicación «Loft Andares (diagonal inversa)»" },
        { src: "/portfolio/terra/r6-explora-por-zona-bloque-redondeado.7fe7d535.webp", alt: "Terra Inmobiliaria: publicación «Explora por zona (bloque redondeado)»" },
      ] },
      { id: "esquinas", label: "Esquinas redondeadas", kind: "grid", ratio: "post", images: [
        { src: "/portfolio/terra/s01-tagline.4b7ceeb8.webp", alt: "Terra Inmobiliaria: publicación «Tagline» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s02-destacada-valle-real.46527a5a.webp", alt: "Terra Inmobiliaria: publicación «Destacada Valle Real» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s03-casa-puerta-de-hierro.8fd16a98.webp", alt: "Terra Inmobiliaria: publicación «Casa Puerta de Hierro» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s04-loft-andares-en-renta.99be29aa.webp", alt: "Terra Inmobiliaria: publicación «Loft Andares en renta» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s05-explora-por-zona.98ad45d9.webp", alt: "Terra Inmobiliaria: publicación «Explora por zona» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s06-terrenos-e-inversion.84bdafa1.webp", alt: "Terra Inmobiliaria: publicación «Terrenos e inversión» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s07-testimonio-paola-jimenez.93971040.webp", alt: "Terra Inmobiliaria: publicación «Testimonio Paola Jiménez» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s08-casa-colomos-en-renta.eb8f93c0.webp", alt: "Terra Inmobiliaria: publicación «Casa Colomos en renta» (esquinas redondeadas)" },
        { src: "/portfolio/terra/s09-contacto.fdfee4b7.webp", alt: "Terra Inmobiliaria: publicación «Contacto» (esquinas redondeadas)" },
      ] },
      { id: "clasicas", label: "Clásicas", kind: "grid", ratio: "post", images: [
        { src: "/portfolio/terra/post-01-tagline.edbf7527.webp", alt: "Terra Inmobiliaria: publicación «Tagline»" },
        { src: "/portfolio/terra/post-02-destacada-valle-real.92c7bb45.webp", alt: "Terra Inmobiliaria: publicación «Destacada Valle Real»" },
        { src: "/portfolio/terra/post-03-casa-puerta-de-hierro.2441b649.webp", alt: "Terra Inmobiliaria: publicación «Casa Puerta de Hierro»" },
        { src: "/portfolio/terra/post-04-loft-andares-en-renta.d3995e7a.webp", alt: "Terra Inmobiliaria: publicación «Loft Andares en renta»" },
        { src: "/portfolio/terra/post-05-explora-por-zona.ce996632.webp", alt: "Terra Inmobiliaria: publicación «Explora por zona»" },
        { src: "/portfolio/terra/post-06-terrenos-e-inversion.2565f59b.webp", alt: "Terra Inmobiliaria: publicación «Terrenos e inversión»" },
        { src: "/portfolio/terra/post-07-testimonio-paola-jimenez.83cf4222.webp", alt: "Terra Inmobiliaria: publicación «Testimonio Paola Jiménez»" },
        { src: "/portfolio/terra/post-08-casa-colomos-en-renta.3c0c74f7.webp", alt: "Terra Inmobiliaria: publicación «Casa Colomos en renta»" },
        { src: "/portfolio/terra/post-09-contacto.3ce2591c.webp", alt: "Terra Inmobiliaria: publicación «Contacto»" },
      ] },
      { id: "diagonales", label: "Cortes diagonales", kind: "grid", ratio: "post", images: [
        { src: "/portfolio/terra/b1-casa-moderna-marco-desfasado.82bf2a0f.webp", alt: "Terra Inmobiliaria: publicación «Casa moderna (marco desfasado)»" },
        { src: "/portfolio/terra/b2-loft-andares-corte-diagonal.90c18340.webp", alt: "Terra Inmobiliaria: publicación «Loft Andares (corte diagonal)»" },
        { src: "/portfolio/terra/b3-valle-real-foto-desfasada.3faf6b1d.webp", alt: "Terra Inmobiliaria: publicación «Valle Real (foto desfasada)»" },
        { src: "/portfolio/terra/b4-agenda-tu-visita-panel-y-dato.2769f00b.webp", alt: "Terra Inmobiliaria: publicación «Agenda tu visita (panel y dato)»" },
        { src: "/portfolio/terra/b5-colomos-corte-diagonal-inverso.e7f47556.webp", alt: "Terra Inmobiliaria: publicación «Colomos (corte diagonal inverso)»" },
        { src: "/portfolio/terra/b6-tu-proxima-propiedad-bloque-de-marca.72dc6a79.webp", alt: "Terra Inmobiliaria: publicación «Tu próxima propiedad (bloque de marca)»" },
      ] },
      { id: "carousels", label: "Carruseles", kind: "carousels", carousels: [
        { title: "Cómo trabajamos · esquinas redondeadas", slides: [
          { src: "/portfolio/terra/sc1-1-portada.07656253.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos» con esquinas redondeadas, lámina 1 (Portada)" },
          { src: "/portfolio/terra/sc1-2-asesoria.696d51c4.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos» con esquinas redondeadas, lámina 2 (Asesoría)" },
          { src: "/portfolio/terra/sc1-3-seleccion.a0658a9c.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos» con esquinas redondeadas, lámina 3 (Selección)" },
          { src: "/portfolio/terra/sc1-4-cierre.c23f63df.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos» con esquinas redondeadas, lámina 4 (Cierre)" },
        ] },
        { title: "Propiedades destacadas · esquinas redondeadas", slides: [
          { src: "/portfolio/terra/sc2-1-portada.5833d349.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas» con esquinas redondeadas, lámina 1 (Portada)" },
          { src: "/portfolio/terra/sc2-2-valle-real.3c7843cb.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas» con esquinas redondeadas, lámina 2 (Valle Real)" },
          { src: "/portfolio/terra/sc2-3-puerta-de-hierro.9cac6b5d.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas» con esquinas redondeadas, lámina 3 (Puerta de Hierro)" },
          { src: "/portfolio/terra/sc2-4-depto-andares.6ef60de0.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas» con esquinas redondeadas, lámina 4 (Depto Andares)" },
        ] },
        { title: "Por tipo de propiedad · esquinas redondeadas", slides: [
          { src: "/portfolio/terra/sc3-1-portada.efeeef0a.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad» con esquinas redondeadas, lámina 1 (Portada)" },
          { src: "/portfolio/terra/sc3-2-casas.4ec7839d.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad» con esquinas redondeadas, lámina 2 (Casas)" },
          { src: "/portfolio/terra/sc3-3-departamentos.e7e5c8b3.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad» con esquinas redondeadas, lámina 3 (Departamentos)" },
          { src: "/portfolio/terra/sc3-4-terrenos.34b24a33.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad» con esquinas redondeadas, lámina 4 (Terrenos)" },
        ] },
        { title: "Cómo trabajamos · clásico", slides: [
          { src: "/portfolio/terra/c1-1-portada.ffb78dfd.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c1-2-asesoria.f90a25f2.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 2 (Asesoría)" },
          { src: "/portfolio/terra/c1-3-seleccion.fe368456.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 3 (Selección)" },
          { src: "/portfolio/terra/c1-4-cierre.19b24aa8.webp", alt: "Terra Inmobiliaria: carrusel «Cómo trabajamos», lámina 4 (Cierre)" },
        ] },
        { title: "Propiedades destacadas · clásico", slides: [
          { src: "/portfolio/terra/c2-1-portada.47c99ac0.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c2-2-valle-real.f15ab857.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 2 (Valle Real)" },
          { src: "/portfolio/terra/c2-3-puerta-de-hierro.e78d0289.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 3 (Puerta de Hierro)" },
          { src: "/portfolio/terra/c2-4-depto-andares.7559c417.webp", alt: "Terra Inmobiliaria: carrusel «Propiedades destacadas», lámina 4 (Depto Andares)" },
        ] },
        { title: "Por tipo de propiedad · clásico", slides: [
          { src: "/portfolio/terra/c3-1-portada.e9264296.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 1 (Portada)" },
          { src: "/portfolio/terra/c3-2-casas.d6ef0298.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 2 (Casas)" },
          { src: "/portfolio/terra/c3-3-departamentos.181cdb7a.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 3 (Departamentos)" },
          { src: "/portfolio/terra/c3-4-terrenos.2f8d4cb3.webp", alt: "Terra Inmobiliaria: carrusel «Por tipo de propiedad», lámina 4 (Terrenos)" },
        ] },
      ] },
      { id: "mockups", label: "Mockups", kind: "grid", ratio: "wide", images: [
        { src: "/portfolio/terra/mockup-1-perfil-y-feed-de-instagram.a9a44170.webp", alt: "Terra Inmobiliaria: mockup «Perfil y feed de Instagram»", width: 1800, height: 1177 },
        { src: "/portfolio/terra/mockup-2-carrusel-en-el-feed-4-slides.80657c1a.webp", alt: "Terra Inmobiliaria: mockup «Carrusel en el feed (4 slides)»", width: 1800, height: 1125 },
        { src: "/portfolio/terra/mockup-3-dispositivos-sobre-degradado-de-marca.f8d15298.webp", alt: "Terra Inmobiliaria: mockup «Dispositivos sobre degradado de marca»", width: 1800, height: 1125 },
        { src: "/portfolio/terra/mockup-4-feed-de-facebook.79b72182.webp", alt: "Terra Inmobiliaria: mockup «Feed de Facebook»", width: 1800, height: 1125 },
      ] },
    ],
  },
  "Tertulia GDL": {
    sections: [
      { id: "posts", label: "Publicaciones", kind: "grid", ratio: "post", images: [
        { src: "/portfolio/tertulia/post-01-hero.bb139c6d.webp", alt: "Tertulia GDL: publicación «Hero»" },
        { src: "/portfolio/tertulia/post-02-fuego-y-brasa.288b3ffe.webp", alt: "Tertulia GDL: publicación «Fuego & Brasa»" },
        { src: "/portfolio/tertulia/post-03-conversacion.31bc82cb.webp", alt: "Tertulia GDL: publicación «Conversación»" },
        { src: "/portfolio/tertulia/post-04-desde-350.32032618.webp", alt: "Tertulia GDL: publicación «Desde $350»" },
        { src: "/portfolio/tertulia/post-05-mixologia-de-autor.3e2b88d9.webp", alt: "Tertulia GDL: publicación «Mixología de Autor»" },
      ] },
      { id: "carousels", label: "Carruseles", kind: "carousels", carousels: [
        { title: "Bodas & Banquetes", slides: [
          { src: "/portfolio/tertulia/c1-1-bodas-y-banquetes.e27c41bc.webp", alt: "Tertulia GDL: carrusel «Bodas & Banquetes», lámina 1" },
          { src: "/portfolio/tertulia/c1-2-bodas-y-banquetes.4095753c.webp", alt: "Tertulia GDL: carrusel «Bodas & Banquetes», lámina 2" },
          { src: "/portfolio/tertulia/c1-3-bodas-y-banquetes.28542b4f.webp", alt: "Tertulia GDL: carrusel «Bodas & Banquetes», lámina 3" },
        ] },
        { title: "Eventos Empresariales", slides: [
          { src: "/portfolio/tertulia/c2-1-eventos-empresariales.014614d5.webp", alt: "Tertulia GDL: carrusel «Eventos Empresariales», lámina 1" },
          { src: "/portfolio/tertulia/c2-2-eventos-empresariales.68e9c20d.webp", alt: "Tertulia GDL: carrusel «Eventos Empresariales», lámina 2" },
          { src: "/portfolio/tertulia/c2-3-eventos-empresariales.26e18542.webp", alt: "Tertulia GDL: carrusel «Eventos Empresariales», lámina 3" },
        ] },
        { title: "Celebraciones Pop-Up", slides: [
          { src: "/portfolio/tertulia/c3-1-celebraciones-pop-up.b879c6a1.webp", alt: "Tertulia GDL: carrusel «Celebraciones Pop-Up», lámina 1" },
          { src: "/portfolio/tertulia/c3-2-celebraciones-pop-up.5a448f38.webp", alt: "Tertulia GDL: carrusel «Celebraciones Pop-Up», lámina 2" },
          { src: "/portfolio/tertulia/c3-3-celebraciones-pop-up.4014f037.webp", alt: "Tertulia GDL: carrusel «Celebraciones Pop-Up», lámina 3" },
        ] },
        { title: "Fuego & Brasa · platillos", slides: [
          { src: "/portfolio/tertulia/c4-1-fuego-y-brasa-platillos.0c03d136.webp", alt: "Tertulia GDL: carrusel «Fuego & Brasa · platillos», lámina 1" },
          { src: "/portfolio/tertulia/c4-2-fuego-y-brasa-platillos.61208042.webp", alt: "Tertulia GDL: carrusel «Fuego & Brasa · platillos», lámina 2" },
          { src: "/portfolio/tertulia/c4-3-fuego-y-brasa-platillos.50cb2cf0.webp", alt: "Tertulia GDL: carrusel «Fuego & Brasa · platillos», lámina 3" },
        ] },
        { title: "Alta Cocina · platillos", slides: [
          { src: "/portfolio/tertulia/c5-1-alta-cocina-platillos.5af9dbff.webp", alt: "Tertulia GDL: carrusel «Alta Cocina · platillos», lámina 1" },
          { src: "/portfolio/tertulia/c5-2-alta-cocina-platillos.ded1cdd8.webp", alt: "Tertulia GDL: carrusel «Alta Cocina · platillos», lámina 2" },
          { src: "/portfolio/tertulia/c5-3-alta-cocina-platillos.1b46bee5.webp", alt: "Tertulia GDL: carrusel «Alta Cocina · platillos», lámina 3" },
        ] },
        { title: "Mixología · bebidas", slides: [
          { src: "/portfolio/tertulia/c6-1-mixologia-bebidas.795aec98.webp", alt: "Tertulia GDL: carrusel «Mixología · bebidas», lámina 1" },
          { src: "/portfolio/tertulia/c6-2-mixologia-bebidas.8413e857.webp", alt: "Tertulia GDL: carrusel «Mixología · bebidas», lámina 2" },
          { src: "/portfolio/tertulia/c6-3-mixologia-bebidas.086f11cd.webp", alt: "Tertulia GDL: carrusel «Mixología · bebidas», lámina 3" },
        ] },
        { title: "Experiencias", slides: [
          { src: "/portfolio/tertulia/c7-1-experiencias.b6b378a0.webp", alt: "Tertulia GDL: carrusel «Experiencias», lámina 1" },
          { src: "/portfolio/tertulia/c7-2-experiencias.b1e52b00.webp", alt: "Tertulia GDL: carrusel «Experiencias», lámina 2" },
          { src: "/portfolio/tertulia/c7-3-experiencias.ac04b009.webp", alt: "Tertulia GDL: carrusel «Experiencias», lámina 3" },
        ] },
      ] },
      { id: "mockups", label: "Mockups", kind: "grid", ratio: "wide", images: [
        { src: "/portfolio/tertulia/mockup-perfil-cuadricula.3f35f7c9.webp", alt: "Tertulia GDL: mockup «Perfil cuadrícula»", width: 1000, height: 2000 },
        { src: "/portfolio/tertulia/mockup-feed.14caeb61.webp", alt: "Tertulia GDL: mockup «Feed»", width: 1000, height: 2000 },
        { src: "/portfolio/tertulia/mockup-carrusel-deslizando.5529c72b.webp", alt: "Tertulia GDL: mockup «Carrusel (deslizando)»", width: 1000, height: 2000 },
      ] },
    ],
  },
};
