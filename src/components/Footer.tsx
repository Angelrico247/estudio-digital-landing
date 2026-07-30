import { navLinks, services, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-dark">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-heading text-xl font-bold uppercase tracking-[0.1em] text-foreground">
              {site.name}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-[1.7] text-secondary">
              Estudio de soluciones digitales: desarrollo web, gestión de redes sociales y
              publicidad digital para hacer crecer tu negocio.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
              Links Rápidos
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-secondary hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.number}>
                  <a href="#servicios" className="text-sm text-secondary hover:text-primary">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-line" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-primary">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
