import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Declaración de Accesibilidad",
  description: `Declaración de accesibilidad de ${site.name}: nuestro objetivo (WCAG 2.2 nivel AA), lo que ya hicimos, limitaciones conocidas y cómo reportar un problema.`,
  alternates: { canonical: `${site.url}/accesibilidad` },
};

const mail = (
  <a href={`mailto:${site.email}`} className="text-primary-light underline underline-offset-2">
    {site.email}
  </a>
);

export default function Accesibilidad() {
  return (
    <LegalPage
      title="Declaración de Accesibilidad"
      updated="8 de noviembre de 2026"
      intro={
        <p>
          En {site.name} (TWID) queremos que este sitio, tanto la página de TWID Development como la
          de TWID Creative, pueda usarse por la mayor cantidad de personas posible, sin importar su
          dispositivo, su forma de navegar o sus capacidades.
        </p>
      }
      sections={[
        {
          title: "Nuestro objetivo",
          body: (
            <p>
              Diseñamos y revisamos el sitio tomando como referencia las Pautas de Accesibilidad para
              el Contenido Web (WCAG) 2.2, nivel AA.
            </p>
          ),
        },
        {
          title: "Estado de conformidad",
          body: (
            <p>
              Consideramos que el sitio es <strong>parcialmente conforme</strong> con WCAG 2.2 nivel AA.
              Esto se basa en una autoevaluación hecha por nosotros, no en una auditoría de un tercero,
              y todavía hay puntos que no hemos podido verificar por completo (ver &ldquo;Limitaciones
              conocidas&rdquo;).
            </p>
          ),
        },
        {
          title: "Lo que ya hicimos",
          body: (
            <ul className="list-disc space-y-2 pl-6">
              <li>Enlace &ldquo;Saltar al contenido&rdquo; al inicio de cada página.</li>
              <li>Todo se puede usar con teclado, con un anillo de foco visible.</li>
              <li>
                Los cuadros de cotización, de agenda y el menú del celular se comportan como diálogos:
                el foco se queda dentro, se cierran con la tecla Escape y el foco regresa al botón
                que los abrió.
              </li>
              <li>
                El carrusel de la página principal tiene botón de pausa, se detiene al pasar el
                mouse o enfocarlo, y se mueve con las flechas del teclado.
              </li>
              <li>
                Respetamos la preferencia del sistema de reducir el movimiento: no hay rotación
                automática ni animaciones que se repitan solas.
              </li>
              <li>
                Contraste de color de al menos 4.5:1 en los textos, incluidos los que van sobre
                fotografías.
              </li>
              <li>
                Campos de formulario con etiqueta y autocompletado, y mensajes de éxito y de error que
                los lectores de pantalla anuncian.
              </li>
              <li>
                Botones y enlaces repetidos con nombre descriptivo (por ejemplo, &ldquo;Cotizar
                Desarrollo Web&rdquo;), y aviso cuando un enlace abre una pestaña nueva.
              </li>
              <li>Estructura con encabezados, regiones de navegación con nombre e idioma de la página declarado (español de México).</li>
            </ul>
          ),
        },
        {
          title: "Cómo lo evaluamos",
          body: (
            <p>
              Usamos herramientas automáticas (axe-core y Lighthouse), pruebas manuales de navegación
              con teclado y revisión del contraste de color. No hemos hecho pruebas con personas
              usuarias de tecnologías de apoyo ni una auditoría externa.
            </p>
          ),
        },
        {
          title: "Limitaciones conocidas",
          body: (
            <ul className="list-disc space-y-2 pl-6">
              <li>
                No hemos probado el sitio con todas las combinaciones de lectores de pantalla,
                navegadores y dispositivos.
              </li>
              <li>
                El contraste de los textos sobre fotografías se verificó con las imágenes actuales; si
                se cambian las fotos, hay que volver a revisarlo.
              </li>
              <li>
                Los proyectos de portafolio enlazan a sitios de demostración independientes que no
                están cubiertos por esta declaración.
              </li>
              <li>El contenido está únicamente en español.</li>
            </ul>
          ),
        },
        {
          title: "Tecnologías utilizadas",
          body: <p>El sitio se apoya en HTML, CSS, JavaScript y WAI-ARIA.</p>,
        },
        {
          title: "Comentarios y contacto",
          body: (
            <p>
              Si encuentras una barrera de accesibilidad o necesitas la información en otro formato,
              escríbenos a {mail} y cuéntanos qué página y qué dificultad encontraste. Intentaremos
              responderte en un plazo razonable y corregir el problema lo antes posible.
            </p>
          ),
        },
        {
          title: "Fecha de esta declaración",
          body: (
            <p>
              Esta declaración se preparó el 8 de noviembre de 2026 y la actualizaremos cuando haya
              cambios importantes en el sitio.
            </p>
          ),
        },
      ]}
    />
  );
}
