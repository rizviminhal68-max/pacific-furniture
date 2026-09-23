# Image folders

Use these folders to store the client's real photos. Paths inside the site are
relative to `/public`, so a file at `public/images/hero/sofa.jpg` is served
from `images/hero/sofa.jpg`.

## images/hero/

Hero showcase images used by `FurnitureHeroSlider` (all `.jpg`).

- `sofa-1.jpg` — currently your dropped image (renamed from `download (8).jpg`).
- `sofa-2.jpg`, `bed-1.jpg`, `recliner-1.jpg`, `furniture-1.jpg` — branded
  placeholder images until you replace them with real photography.

To swap in real photos:

1. Drop high-quality furniture photos here using the same names
   (`sofa-1.jpg`, `sofa-2.jpg`, `bed-1.jpg`, `recliner-1.jpg`, `furniture-1.jpg`),
   overwriting the placeholders.
2. `src/data/site.js` → the `heroSlides` array already points at these
   `.jpg` paths — nothing else to change.
3. Keep each slide's `alt` descriptive (screen readers read it).
4. Recommended size: at least 1200×900 (4:3); `object-fit: cover` handles the crop.

The first slide loads eagerly (above the fold); the rest are lazy-loaded.

## images/before-after/

Before/after comparison pairs for the slider (all `.jpg`).

Files expected (currently branded placeholders):

- `project-1-before.jpg` / `project-1-after.jpg`
- `project-2-before.jpg` / `project-2-after.jpg`
- `project-3-before.jpg` / `project-3-after.jpg`

Drop the client's real photos here using the exact same names — they will
overwrite the placeholders. `src/data/beforeAfter.js` already points at these
paths, so no code edits are needed. Keep `before` and `after` pairs at the
same aspect ratio (1200x900 recommended) so the slider lines up.

## images/gallery/

Grid + lightbox images. Naming convention: `sofa-repair-1.jpg`,
`upholstery-1.jpg`, etc. Add the paths to `src/data/gallery.js`.
Categories available: "Sofa Repair", "Upholstery", "Fabric Change", "Restoration".