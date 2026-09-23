import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { NAV_LINKS, SITE, whatsappLink, WHATSAPP_MESSAGES } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-espresso text-cream transition-all duration-300 ${
        scrolled ? "shadow-xl shadow-espresso/20" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4 md:py-5"
        }`}
      >
        <a
          href="#home"
          className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight"
          aria-label={`${SITE.name} – back to top`}
        >
          {SITE.name}
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-terracotta/30 transition-all hover:bg-terracotta/90 hover:shadow-xl"
            id="header-call-button"
            data-track="phone-click"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[34rem]" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-6 sm:px-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-cream/85 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-terracotta/30"
              data-track="phone-click"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now · {SITE.phone}
            </a>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-whatsapp/30"
              data-track="whatsapp-click"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}