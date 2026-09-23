import { PhoneCall } from "lucide-react"
import { SITE, whatsappLink } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"
import SectionHeading from "./SectionHeading"

const ABOUT_POINTS = [
  "Sofa repair & restoration",
  "Upholstery & fabric change",
  "Foam replacement",
  "Furniture repair & polishing",
  "Custom furniture work",
  "Doorstep service",
]

export default function About() {
  return (
    <section id="about" className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-3 rounded-[2.5rem] border-2 border-walnut/25 sm:-inset-4"
              aria-hidden="true"
            />
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80"
              alt="Craftsperson restoring an upholstered sofa at a workshop"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-espresso/20"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="About Pacific Furniture"
              description="Pacific Furniture specialises in sofa repair, upholstery, fabric change, foam replacement, furniture repair, polishing and restoration services in Delhi and Noida. We bring the workshop to your doorstep, so your furniture gets care without leaving your home."
            />

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ABOUT_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-espresso"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-bold text-cream shadow-lg shadow-espresso/25 transition-all hover:-translate-y-0.5 hover:bg-walnut"
                data-track="phone-click"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={whatsappLink("Hi Pacific Furniture, I have a question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-white px-7 py-3.5 text-sm font-bold text-espresso transition-all hover:-translate-y-0.5 hover:border-whatsapp hover:text-[#1eb457]"
                data-track="whatsapp-click"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}