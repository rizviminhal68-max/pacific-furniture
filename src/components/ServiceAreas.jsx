import { MapPin } from "lucide-react"

const AREAS = [
  {
    name: "Delhi",
    note: "Across all of Delhi",
  },
  {
    name: "Noida",
    note: "Across Noida & greater Noida",
  },
]

export default function ServiceAreas() {
  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl text-center md:mb-16 md:mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
            <span className="h-px w-6 bg-terracotta/60" aria-hidden="true" />
            Service Areas
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Serving Delhi &amp; Noida
          </h2>
          <p className="mt-4 text-cream/80 md:text-lg">
            Pacific Furniture provides sofa and furniture repair services across Delhi and Noida.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {AREAS.map((area) => (
            <div
              key={area.name}
              className="flex items-center gap-5 rounded-3xl border border-cream/15 bg-walnut/30 p-7 transition-all hover:-translate-y-1 hover:border-terracotta/50"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-terracotta text-white shadow-lg shadow-terracotta/30">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-cream">{area.name}</h3>
                <p className="mt-1 text-sm text-cream/75">{area.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}