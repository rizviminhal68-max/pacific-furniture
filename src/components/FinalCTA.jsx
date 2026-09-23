import { PhoneCall } from "lucide-react"
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"

export default function FinalCTA() {
  return (
    <section className="bg-espresso py-16 md:py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-walnut/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
          Give Your Old Furniture a <span className="italic text-terracotta">Fresh New Look</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
          Have a damaged, old or worn-out sofa? Contact Pacific Furniture to discuss your repair or
          renovation requirement.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-bold text-white shadow-lg shadow-terracotta/40 transition-all hover:-translate-y-0.5 hover:bg-terracotta/90"
            data-track="phone-click"
          >
            <PhoneCall className="h-5 w-5" aria-hidden="true" />
            Call Pacific Furniture
          </a>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.heroCall)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/25 px-8 py-4 text-base font-bold text-cream transition-all hover:-translate-y-0.5 hover:border-whatsapp hover:text-white"
            data-track="whatsapp-click"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
            WhatsApp Us
          </a>
        </div>

        <p className="mt-6 text-sm text-cream/65">Available across Delhi &amp; Noida</p>
      </div>
    </section>
  )
}