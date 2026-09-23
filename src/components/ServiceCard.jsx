import { ArrowRight, Brush, Hammer, Layers, PencilRuler, RotateCcw, Scissors, SprayCan, Wrench } from "lucide-react"
import { whatsappLink } from "../data/site"

const ICON_MAP = {
  Wrench,
  Scissors,
  Brush,
  Layers,
  Hammer,
  SprayCan,
  RotateCcw,
  PencilRuler,
}

export default function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] ?? Wrench
  const enquiry = `Hi Pacific Furniture, I would like to enquire about "${service.title}" service.`

  return (
    <article className="group flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso/10">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-espresso">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/80">{service.description}</p>
      <a
        href={whatsappLink(enquiry)}
        target="_blank"
        rel="noopener noreferrer"
        className="service-enquiry mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta transition-colors hover:text-walnut"
        data-track="whatsapp-click"
        data-service={service.title}
        aria-label={`Enquire about ${service.title} on WhatsApp`}
      >
        Enquire
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </article>
  )
}