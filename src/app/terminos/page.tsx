import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de uso del sitio de ${site.name} y de la contratación de sus servicios.`,
  alternates: { canonical: `${site.url}/terminos` },
};

export default function Terminos() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      updated="24 de octubre de 2026"
      intro={
        <p>
          Al usar este sitio aceptas los siguientes términos. Si no estás de acuerdo con ellos, te
          pedimos no utilizarlo.
        </p>
      }
      sections={[
        {
          title: "Quiénes somos",
          body: (
            <p>
              Este sitio es operado por {site.name} (TWID), estudio de soluciones digitales con base
              en {site.location}.
            </p>
          ),
        },
        {
          title: "Cotizaciones",
          body: (
            <p>
              Las cotizaciones y propuestas que enviamos son informativas y no constituyen un
              contrato. El alcance, los costos y los tiempos se formalizan por escrito antes de
              iniciar cualquier proyecto.
            </p>
          ),
        },
        {
          title: "Contratación de servicios",
          body: (
            <p>
              Los servicios se prestan conforme a lo acordado por escrito con cada cliente. El
              contenido del catálogo del sitio describe el tipo de servicios que ofrecemos y puede
              ajustarse según las necesidades de cada proyecto.
            </p>
          ),
        },
        {
          title: "Propiedad intelectual",
          body: (
            <p>
              Los textos, diseños, logotipos y demás elementos de este sitio son propiedad de TWID o
              se usan con autorización, y no pueden reproducirse sin permiso. La titularidad de los
              entregables de cada proyecto se define en el acuerdo con el cliente.
            </p>
          ),
        },
        {
          title: "Portafolio",
          body: (
            <p>
              Algunos proyectos mostrados en el portafolio son conceptos o demostraciones creados
              para ilustrar nuestro trabajo y no necesariamente corresponden a clientes reales.
            </p>
          ),
        },
        {
          title: "Enlaces de terceros",
          body: (
            <p>
              El sitio puede enlazar a páginas de terceros. No controlamos su contenido y no somos
              responsables de él ni de sus políticas de privacidad.
            </p>
          ),
        },
        {
          title: "Limitación de responsabilidad",
          body: (
            <p>
              Hacemos lo posible por mantener el sitio disponible y la información correcta, pero no
              garantizamos que esté libre de errores o interrupciones. TWID no será responsable por
              daños derivados del uso del sitio, en la medida que la ley lo permita.
            </p>
          ),
        },
        {
          title: "Privacidad",
          body: (
            <p>
              El tratamiento de tus datos personales se rige por nuestro{" "}
              <a href="/aviso-de-privacidad" className="text-primary underline underline-offset-2">
                Aviso de Privacidad
              </a>
              .
            </p>
          ),
        },
        {
          title: "Ley aplicable",
          body: (
            <p>
              Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para su
              interpretación, las partes se someten a los tribunales competentes de Guadalajara,
              Jalisco.
            </p>
          ),
        },
        {
          title: "Contacto",
          body: (
            <p>
              Para cualquier duda escríbenos a{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
