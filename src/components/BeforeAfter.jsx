import { useState } from "react"
import { BEFORE_AFTER_PROJECTS } from "../data/beforeAfter"
import { whatsappLink } from "../data/site"
import BeforeAfterSlider from "./BeforeAfterSlider"
import SectionHeading from "./SectionHeading"

export default function BeforeAfter() {
  const [activeId, setActiveId] = useState(BEFORE_AFTER_PROJECTS[0].id)
  const activeProject = BEFORE_AFTER_PROJECTS.find((project) => project.id === activeId)

  return (
    <section id="before-after" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Before & After"
          title="See The Transformation"
          description="Compare furniture before and after restoration. Drag the slider to reveal the change."
        />

        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Choose a restoration project"
        >
          {BEFORE_AFTER_PROJECTS.map((project) => {
            const active = project.id === activeId
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(project.id)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                  active
                    ? "border-espresso bg-espresso text-cream shadow-lg shadow-espresso/20"
                    : "border-border bg-white text-espresso/85 hover:border-walnut hover:text-espresso"
                }`}
              >
                {project.title}
              </button>
            )
          })}
        </div>

        {activeProject && <BeforeAfterSlider key={activeProject.id} project={activeProject} />}

        <p className="mt-5 text-center text-sm text-espresso/80">
          {activeProject?.short} ·{" "}
          <a
            href={whatsappLink("Hi Pacific Furniture, I would like to discuss a sofa renovation or repair.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-terracotta underline-offset-2 hover:underline"
            data-track="whatsapp-click"
          >
            Ask about your own furniture
          </a>
        </p>
      </div>
    </section>
  )
}