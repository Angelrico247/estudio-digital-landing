import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: `Aviso de privacidad de ${site.name}: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.`,
  alternates: { canonical: `${site.url}/aviso-de-privacidad` },
};

const mail = (
  <a href={`mailto:${site.email}`} className="text-primary underline underline-offset-2">
    {site.email}
  </a>
);

export default function AvisoDePrivacidad() {
  return (
    <LegalPage
      title="Aviso de Privacidad"
      updated="24 de octubre de 2026"
      intro={
        <p>
          En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares (LFPDPPP), {site.name} (&ldquo;TWID&rdquo;) pone a tu disposición el presente
          aviso de privacidad.
        </p>
      }
      sections={[
        {
          title: "Responsable del tratamiento",
          body: (
            <p>
              {site.name} (TWID), con domicilio en {site.location}, es responsable del tratamiento de
              tus datos personales. Para cualquier asunto relacionado con este aviso puedes
              escribirnos a {mail}.
            </p>
          ),
        },
        {
          title: "Datos personales que recabamos",
          body: (
            <>
              <p>
                Los recabamos directamente de ti cuando llenas el formulario de contacto o el
                cotizador del sitio:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Nombre</li>
                <li>Correo electrónico</li>
                <li>Servicio o paquete de tu interés y giro de tu negocio</li>
                <li>El mensaje que decidas escribirnos</li>
              </ul>
              <p>No recabamos datos personales sensibles.</p>
            </>
          ),
        },
        {
          title: "Finalidades",
          body: (
            <>
              <p>Usamos tus datos para:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Responder tu mensaje y darte seguimiento.</li>
                <li>Preparar y enviarte la cotización que solicitaste.</li>
                <li>Dar inicio a la relación comercial, si decides contratar nuestros servicios.</li>
              </ul>
              <p>No usamos tus datos para fines publicitarios ni los vendemos.</p>
            </>
          ),
        },
        {
          title: "Transferencias y proveedores",
          body: (
            <p>
              No transferimos tus datos personales a terceros con fines propios. Para operar el sitio
              y recibir tus mensajes nos apoyamos en proveedores de servicios de alojamiento web y de
              correo electrónico, que tratan la información únicamente por cuenta nuestra y para ese
              fin.
            </p>
          ),
        },
        {
          title: "Derechos ARCO",
          body: (
            <p>
              Tienes derecho a Acceder a tus datos, Rectificarlos si son inexactos, Cancelarlos y
              Oponerte a su tratamiento. También puedes revocar tu consentimiento. Para ejercer
              cualquiera de estos derechos, envía tu solicitud a {mail} indicando tu nombre, el
              derecho que deseas ejercer y una descripción clara de los datos involucrados. Te
              responderemos en los plazos que marca la ley.
            </p>
          ),
        },
        {
          title: "Cookies y tecnologías similares",
          body: (
            <p>
              Este sitio no usa cookies con fines publicitarios. Si en el futuro incorporamos
              herramientas de analítica, actualizaremos este aviso.
            </p>
          ),
        },
        {
          title: "Cambios al aviso",
          body: (
            <p>
              Podemos modificar este aviso para reflejar cambios legales o en nuestros servicios.
              Publicaremos la versión vigente en esta misma página, con su fecha de actualización.
            </p>
          ),
        },
        {
          title: "Autoridad",
          body: (
            <p>
              Si consideras que tu derecho a la protección de datos personales ha sido vulnerado,
              puedes acudir a la autoridad competente en materia de protección de datos personales en
              México.
            </p>
          ),
        },
      ]}
    />
  );
}
