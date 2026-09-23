import { Gem, House, MapPin, MessageSquare, Search, Star } from "lucide-react"
import SectionHeading from "./SectionHeading"

const REASONS = [
  {
    icon: Star,
    title: "Professional Workmanship",
    description: "Careful, skilled work on every repair and restoration project.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    description: "We use quality fabrics, foams and finishing materials.",
  },
  {
    icon: House,
    title: "Doorstep Service",
    description: "We come to your location, so you don't have to move your furniture.",
  },
  {
    icon: Search,
    title: "Attention to Detail",
    description: "Every stitch, seam and finish is checked before we hand it back.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear discussion of work and costing before we begin.",
  },
  {
    icon: MapPin,
    title: "Delhi & Noida Coverage",
    description: "Conveniently serving customers across Delhi and Noida.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Pacific Furniture?"
          description="What makes our sofa and furniture care different."
        />

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon
            return (
              <article
                key={reason.title}
                className={`relative flex gap-4 ${
                  index % 3 !== 0 ? "lg:pl-10 lg:border-l lg:border-border" : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-terracotta ring-1 ring-border">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-espresso">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-espresso/80">
                    {reason.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}