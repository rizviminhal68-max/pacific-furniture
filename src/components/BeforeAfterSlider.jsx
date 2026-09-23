import { useCallback, useEffect, useRef, useState } from "react"
import { GripVertical } from "lucide-react"

// Reusable before/after comparison slider.
// Supports mouse + touch (pointer events) and keyboard (arrow keys).
export default function BeforeAfterSlider({ project }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)

  const clamp = useCallback((value) => Math.min(96, Math.max(4, value)), [])

  const updateFromClientX = useCallback(
    (clientX) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.width === 0) return
      const pct = ((clientX - rect.left) / rect.width) * 100
      setPosition(clamp(pct))
    },
    [clamp],
  )

  const handlePointerDown = useCallback(
    (event) => {
      event.preventDefault()
      event.currentTarget.setPointerCapture?.(event.pointerId)
      setDragging(true)
      updateFromClientX(event.clientX)
    },
    [updateFromClientX],
  )

  useEffect(() => {
    if (!dragging) return undefined
    const onMove = (event) => updateFromClientX(event.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [dragging, updateFromClientX])

  const handleKeyDown = (event) => {
    let delta = 0
    if (event.key === "ArrowLeft") delta = -4
    if (event.key === "ArrowRight") delta = 4
    if (delta === 0) return
    event.preventDefault()
    setPosition((prev) => clamp(prev + delta))
  }

  // Note: parent remounts this component (via `key`) when the project
  // changes, so position/dragging state always resets to the centre.

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl shadow-2xl shadow-espresso/20 sm:aspect-[16/10]"
      style={{ cursor: dragging ? "grabbing" : "ew-resize" }}
      onPointerDown={handlePointerDown}
    >
      {/* Before image (bottom layer) */}
      <img
        src={project.before}
        alt={`${project.alt} – before`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable="false"
        loading="lazy"
        decoding="async"
      />

      {/* After image (top layer, clipped on the left by the divider) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img
          src={project.after}
          alt={`${project.alt} – after`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-espresso/80 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-terracotta/90 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute inset-y-0 z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 -translate-x-1/2 w-1 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]" />
        <button
          type="button"
          role="slider"
          aria-label={`Compare ${project.title} – drag to reveal before and after`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={handleKeyDown}
          onPointerDown={(event) => {
            event.stopPropagation()
            handlePointerDown(event)
          }}
          onDragStart={(event) => event.preventDefault()}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-espresso text-cream shadow-xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <GripVertical className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}