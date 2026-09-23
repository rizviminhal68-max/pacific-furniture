import { ClipboardList, Phone, Sparkles, User } from "lucide-react"
import SectionHeading from "./SectionHeading"

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Call or WhatsApp us with your requirement.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Share Your Requirement",
    description: "Tell us about the sofa or furniture that needs attention.",
  },
  {
    number: "03",
    icon: User,
    title: "Discuss Your Service",
    description: "We discuss the work needed and provide clear guidance.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Get Your Furniture Restored",
    description: "We complete the job with quality materials and finishing.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple process from start to finish"
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <li
                key={step.number}
                className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className="pointer-events-none absolute -right-1 -top-5 font-display text-7xl font-bold text-espresso/[0.06]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-espresso">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-espresso/80">
                  {step.description}
                </p>
                {index < STEPS.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}