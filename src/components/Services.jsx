import { ChevronRight } from "lucide-react"
import { SERVICES } from "../data/services"
import ServiceCard from "./ServiceCard"

export default function Services() {
  return (
    <section id="services" className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
            <span className="h-px w-6 bg-terracotta/60" aria-hidden="true" />
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl lg:text-[2.75rem]">
            Our Furniture &amp; Sofa Services
          </h2>
          <p className="mt-4 text-espresso/85 md:text-lg">
            From a quick repair to a complete restoration, we handle it all at your doorstep.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-terracotta transition-colors hover:text-walnut"
          >
            Not sure which service you need? Ask us.
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}