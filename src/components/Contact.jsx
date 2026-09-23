import { useState } from "react"
import { CircleCheck, Mail, MapPin, Phone, Send } from "lucide-react"
import { SERVICES } from "../data/services"
import { SITE, whatsappLink } from "../data/site"
import WhatsAppIcon from "./WhatsAppIcon"
import SectionHeading from "./SectionHeading"

const initialState = { name: "", phone: "", service: "", message: "" }

function validate(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = "Please enter your name."
  else if (form.name.trim().length < 2) errors.name = "Name should be at least 2 characters."

  const phoneDigits = form.phone.replace(/[\s-]/g, "")
  const phonePattern = /^(\+91)?[6-9]\d{9}$/
  if (!phoneDigits) errors.phone = "Please enter your phone number."
  else if (!phonePattern.test(phoneDigits)) errors.phone = "Enter a valid 10-digit mobile number."

  if (!form.service) errors.service = "Please select a service."

  if (form.message.trim() && form.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters (optional)."

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (submitted) setSubmitted(false)
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) return

    const message = [
      "Hi Pacific Furniture,",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service Required: ${form.service}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  const inputClasses = (hasError) =>
    `w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-espresso placeholder:text-espresso/40 outline-none transition-all focus:ring-2 ${
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
        : "border-border focus:border-terracotta focus:ring-terracotta/25"
    }`

  return (
    <section id="contact" className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with us"
          description="Call, WhatsApp or send an enquiry and we'll get back to you to discuss your requirement."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="flex items-center gap-4 rounded-3xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                data-track="phone-click"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-terracotta">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-espresso/70">
                    Call us
                  </p>
                  <p className="mt-0.5 text-lg font-bold text-espresso">{SITE.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-3xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-terracotta">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-espresso/70">
                    Email us
                  </p>
                  <p className="mt-0.5 break-all text-base font-bold text-espresso">{SITE.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-border bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-terracotta">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-espresso/70">
                    Service areas
                  </p>
                  <p className="mt-0.5 text-lg font-bold text-espresso">Delhi &amp; Noida</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Hi Pacific Furniture, I'd like to discuss my sofa/furniture requirement.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-whatsapp px-6 py-4 text-base font-bold text-white shadow-lg shadow-whatsapp/25 transition-all hover:-translate-y-0.5 hover:brightness-105"
              data-track="whatsapp-click"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-white p-6 shadow-lg shadow-espresso/5 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-espresso">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className={inputClasses(Boolean(errors.name))}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-espresso">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  className={inputClasses(Boolean(errors.phone))}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-espresso">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  className={`${inputClasses(Boolean(errors.service))} appearance-none ${
                    form.service ? "text-espresso" : "text-espresso/40"
                  }`}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other / General Enquiry">Other / General Enquiry</option>
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-espresso">
                  Message <span className="font-normal text-espresso/60">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your sofa or furniture."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClasses(Boolean(errors.message))} resize-y`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-bold text-white shadow-lg shadow-terracotta/30 transition-all hover:-translate-y-0.5 hover:bg-terracotta/90 sm:w-auto"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              Send Enquiry
            </button>

            {submitted && (
              <p
                className="mt-4 flex items-start gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700"
                role="status"
              >
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Your enquiry has been prepared and will open in WhatsApp — just press send to share
                it with Pacific Furniture.
              </p>
            )}

            <p className="mt-4 text-xs leading-relaxed text-espresso/60">
              Enquiries are delivered instantly via WhatsApp. Email delivery is ready to be added
              when Pacific Furniture connects the form to a backend.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}