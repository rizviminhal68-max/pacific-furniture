export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClasses =
    align === "left"
      ? "text-left max-w-2xl items-start"
      : "text-center max-w-2xl mx-auto items-center"

  return (
    <div className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClasses}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
          <span className="h-px w-6 bg-terracotta/60" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-espresso">
        {title}
      </h2>
      {description && <p className="text-espresso/85 text-base md:text-lg">{description}</p>}
    </div>
  )
}