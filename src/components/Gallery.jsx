import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../data/gallery"
import SectionHeading from "./SectionHeading"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const activeItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? index : (index - 1 + activeItems.length) % activeItems.length,
    )
  }, [activeItems.length])
  const next = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? index : (index + 1) % activeItems.length,
    )
  }, [activeItems.length])

  useEffect(() => {
    if (lightboxIndex === null) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") prev()
      if (event.key === "ArrowRight") next()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [lightboxIndex, close, prev, next])

  const activeItem = lightboxIndex !== null ? activeItems[lightboxIndex] : null

  return (
    <section id="gallery" className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Gallery" title="Our Recent Work" />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATEGORIES.map((category) => {
            const active = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category)
                  setLightboxIndex(null)
                }}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                  active
                    ? "border-espresso bg-espresso text-cream shadow-lg shadow-espresso/20"
                    : "border-border bg-white text-espresso/85 hover:border-walnut hover:text-espresso"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activeItems.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightboxIndex(activeItems.indexOf(item))}
              className="group relative overflow-hidden rounded-3xl border border-border text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso/10"
              aria-label={`Open image: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cream/80">
                    {item.category}
                  </p>
                </div>
                <Expand className="h-5 w-5 text-cream" aria-hidden="true" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${activeItem.title}`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              prev()
            }}
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <figure
            className="max-h-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeItem.src}
              alt={activeItem.title}
              className="max-h-[78vh] w-full rounded-2xl object-contain shadow-2xl"
              decoding="async"
            />
            <figcaption className="mt-4 text-center">
              <span className="text-base font-bold text-cream">{activeItem.title}</span>
              <span className="ml-3 text-sm font-semibold uppercase tracking-wider text-terracotta">
                {activeItem.category}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}