import { MapPin, PhoneCall } from "lucide-react"
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from "../data/site"
import FurnitureHeroSlider from "./FurnitureHeroSlider"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Hero() {
  return (
    <section id="home" className="relative bg-light pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              <span className="h-px w-7 bg-terracotta/60" aria-hidden="true" />
              Sofa &amp; Furniture Restoration
            </span>

            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-espresso sm:text-5xl lg:text-[3.5rem]">
              Give Your Furniture a{" "}
              <span className="italic text-terracotta">Fresh New Look</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-espresso/85 sm:text-lg">
              Professional sofa repair, upholstery, fabric change and furniture restoration
              services across Delhi &amp; Noida.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${SITE.phoneIntl}`}
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-bold text-white shadow-lg shadow-terracotta/30 transition-all hover:-translate-y-0.5 hover:bg-terracotta/90 hover:shadow-xl"
                data-track="phone-click"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.heroCall)}
                id="hero-whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-espresso/15 bg-white px-8 py-4 text-base font-bold text-espresso transition-all hover:-translate-y-0.5 hover:border-whatsapp hover:text-[#1eb457]"
                data-track="whatsapp-click"
              >
                <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-espresso/85">
              <MapPin className="h-4 w-4 text-terracotta" aria-hidden="true" />
              Serving Delhi &amp; Noida
            </p>
          </div>

          {/* Furniture showcase */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2.5rem] border-2 border-walnut/30 sm:-inset-4"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-espresso/25 ring-1 ring-border">
                <FurnitureHeroSlider slides={SITE.heroSlides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}