import { PhoneCall } from "lucide-react"
import { SITE, whatsappLink, WHATSAPP_MESSAGES } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"

// Fixed circular call / WhatsApp buttons, always visible at the bottom-right.
export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-[60] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${SITE.phoneIntl}`}
        id="call-button"
        aria-label={`Call Pacific Furniture at ${SITE.phone}`}
        title="Call now"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-white shadow-xl shadow-espresso/30 transition-all hover:scale-110 hover:bg-walnut focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        data-track="phone-click"
      >
        <PhoneCall className="h-6 w-6" aria-hidden="true" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-espresso px-3 py-1.5 text-xs font-bold text-cream opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
          Call now
        </span>
      </a>

      <a
        href={whatsappLink(WHATSAPP_MESSAGES.default)}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-button"
        aria-label="Chat with Pacific Furniture on WhatsApp"
        title="WhatsApp us"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/40 transition-all hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        data-track="whatsapp-click"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#128C7E] px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
          WhatsApp us
        </span>
      </a>
    </div>
  )
}