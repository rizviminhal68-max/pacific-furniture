export const SITE = {
  name: "Pacific Furniture",
  tagline: "Premium Sofa & Furniture Repair in Delhi & Noida",
  phone: "9990050304",
  phoneIntl: "+919990050304",
  email: "info@pacificinteriors.co.in",
  areas: ["Delhi", "Noida"],

  // Placeholder URL: replace once the final domain is known.
  url: "https://pacificinteriors.co.in/",

  whatsapp: "919990050304",
  whatsappLink: "https://wa.me/919990050304",

  // Hero showcase slides (used by FurnitureHeroSlider).
  //
  // TO REPLACE WITH REAL PHOTOS:
  // 1. Drop high-quality furniture photos into /public/images/hero/
  //    (e.g. sofa-1.jpg, sofa-2.jpg, bed-1.jpg, recliner-1.jpg, furniture-1.jpg)
  // 2. Update each `image` below to the local path, e.g. "images/hero/sofa-1.jpg"
  // 3. Keep every `alt` descriptive (it is read by screen readers).
  //
  // Current values are branded placeholder images, not final photography.
  heroSlides: [
    {
      image: "images/hero/sofa-1.jpg",
      category: "SOFA RESTORATION",
      alt: "Premium sofa restoration showcase by Pacific Furniture in Delhi",
    },
    {
      image: "images/hero/sofa-2.jpg",
      category: "SOFA UPHOLSTERY",
      alt: "Sofa upholstery service by Pacific Furniture in Delhi and Noida",
    },
    {
      image: "images/hero/bed-1.jpg",
      category: "BED & UPHOLSTERY",
      alt: "Bed and upholstered furniture care by Pacific Furniture",
    },
    {
      image: "images/hero/recliner-1.jpg",
      category: "RECLINER RESTORATION",
      alt: "Recliner restoration service across Delhi and Noida",
    },
    {
      image: "images/hero/furniture-1.jpg",
      category: "FURNITURE RESTORATION",
      alt: "Luxury furniture restoration showcase by Pacific Furniture",
    },
  ],
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Before & After", href: "#before-after" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function whatsappLink(message = "") {
  const base = `https://wa.me/${SITE.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const WHATSAPP_MESSAGES = {
  default:
    "Hello Pacific Furniture, I would like to enquire about your sofa/furniture repair services in Delhi/Noida.",
  heroCall:
    "Hello Pacific Furniture, I saw your website and would like to discuss my sofa/furniture repair requirement in Delhi/Noida.",
}