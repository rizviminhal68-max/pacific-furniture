import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const AUTOPLAY_INTERVAL = 4000

function mediaMatches(query) {
  return typeof window !== "undefined" && window.matchMedia?.(query).matches
}

function supportsHover() {
  return mediaMatches("(hover: hover)")
}

function prefersReducedMotion() {
  return mediaMatches("(prefers-reduced-motion: reduce)")
}

// Premium auto-rotating furniture showcase.
// Crossfades between slides with a subtle horizontal drift and gentle zoom.
// Pauses while hovered on hover-capable devices; manual selection continues autoplay.
export default function FurnitureHeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [canHover] = useState(supportsHover)
  const [reducedMotion] = useState(prefersReducedMotion)

  const count = slides.length

  const goTo = useCallback(
    (target) => setCurrent((((target % count) + count) % count)),
    [count],
  )
  const next = useCallback(() => setCurrent((index) => (index + 1) % count), [count])
  const prev = useCallback(() => setCurrent((index) => (index - 1 + count) % count), [count])

  useEffect(() => {
    if (reducedMotion || (canHover && hovering)) return undefined
    const id = window.setInterval(() => {
      setCurrent((index) => (index + 1) % count)
    }, AUTOPLAY_INTERVAL)
    return () => window.clearInterval(id)
  }, [reducedMotion, canHover, hovering, count])

  const motion = reducedMotion
    ? "transition-none"
    : "transition-all duration-[1400ms] ease-out"

  const activeSlide = slides[current]

  return (
    <div
      className="relative aspect-[4/3] w-full select-none overflow-hidden"
      onMouseEnter={() => canHover && setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Furniture showcase"
    >
      {/* Slides (stacked for cinematic crossfade) */}
      {slides.map((slide, index) => {
        const active = index === current
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 ${
              active
                ? "z-[1] translate-x-0 scale-100 opacity-100"
                : "z-0 translate-x-6 scale-[1.04] opacity-0 pointer-events-none"
            } ${motion}`}
            aria-hidden={active}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding="async"
              onDragStart={(event) => event.preventDefault()}
            />
          </div>
        )
      })}

      {/* Category label */}
      <div className="pointer-events-none absolute left-4 top-4 z-[2] sm:left-5 sm:top-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-espresso/75 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur-sm sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
          {activeSlide.category}
        </span>
      </div>

      {/* Previous / next */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous furniture image"
        className="absolute left-3 top-1/2 z-[2] -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-espresso shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:left-4"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next furniture image"
        className="absolute right-3 top-1/2 z-[2] -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-espresso shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:right-4"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Indicator dots */}
      <div className="absolute inset-x-0 bottom-3 z-[2] flex items-center justify-center gap-2.5 sm:bottom-4">
        {slides.map((slide, index) => {
          const active = index === current
          return (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${slide.category}`}
              aria-current={active ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                active ? "w-7 bg-terracotta" : "w-2 bg-cream/55 hover:bg-cream"
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}