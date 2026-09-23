import { Gem, House, MapPin, Sparkles } from "lucide-react"

const BENEFITS = [
  {
    icon: House,
    title: "Doorstep Service",
    description: "Convenient furniture repair at your location.",
  },
  {
    icon: Sparkles,
    title: "Professional Work",
    description: "Careful workmanship with attention to detail.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    description: "Quality fabrics, foam and finishing materials.",
  },
  {
    icon: MapPin,
    title: "Delhi & Noida",
    description: "Serving customers across Delhi and Noida.",
  },
]

export default function TrustBenefits() {
  return (
    <section className="bg-light pb-4 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon
            return (
              <article
                key={benefit.title}
                className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-espresso/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-espresso">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-espresso/80">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}