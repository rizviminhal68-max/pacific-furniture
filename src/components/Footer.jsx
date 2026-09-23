import { Mail, MapPin, Phone } from "lucide-react"
import { NAV_LINKS, SITE } from "../data/site"
import { SERVICES } from "../data/services"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-cream" id="footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold" aria-label={SITE.name}>
              {SITE.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/75">
              Sofa &amp; Furniture Repair Services in Delhi &amp; Noida. Professional sofa repair,
              upholstery, fabric change, foam replacement and furniture restoration at your doorstep.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream/75">
              <MapPin className="h-4 w-4 text-terracotta" aria-hidden="true" />
              Delhi &amp; Noida
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-terracotta">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-cream"
                  data-track="phone-click"
                >
                  <Phone className="h-4 w-4 text-terracotta" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 break-all text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  <Mail className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-cream/65">
              Serving customers across Delhi and Noida with doorstep sofa and furniture care.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Sofa &amp; furniture repair in Delhi &amp; Noida</p>
        </div>
      </div>
    </footer>
  )
}