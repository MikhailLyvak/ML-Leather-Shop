# Natural leather block — ML Daily Pouch

## Problem / goal

Add the second landing section under the hero: a material story that makes the leather feel premium and tactile. Success is a shopper reading why the leather matters, seeing the statue + pouch image, and continuing down the page — with crawlable HTML (not image-only copy).

## Users

- **Shopper** (Ukraine, mobile-heavy): understands the leather story after the hero.
- **Future admin**: not in this slice (no CMS). Copy lives in the feature `content.ts`.

## Scope (in / out)

**In**

- Homepage section directly under the hero.
- Desktop: two columns — statue/pouch image left, copy + three feature rows right.
- Mobile: stack — image then copy. Confirm spacing against [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png) (and mobile PNG when this section is visible there).
- Static copy: eyebrow, heading, three title + description rows from the mockup.
- One image under `public/images/natural_leather/` (add the statue asset; do not serve the design PNG).

**Out**

- Color switching, cart, strap, price, CTA.
- Later landing sections (detail grid, strap upsell, specs, what-fits, secondary CTA, FAQ, footer).
- Invented leather origin / production claims beyond the mockup and `docs/ML_PROJECT_CONTEXT.md`.

## UX flow & states

Mockup: second viewport of [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png).

1. After the hero, cream/ivory section (not the terrace scene).
2. Left: tall image — classical marble bust holding the cognac pouch.
3. Right: small caps eyebrow, large serif heading, then three stacked feature rows (bold title + quieter description).
4. No interaction, loading, or error states.

Transcribe eyebrow, heading, and the three feature rows from the PNG. Do not invent extra bullets or English body copy.

## Data model

Static content in `src/components/products/natural-leather/content.ts`:

| Field        | Notes                                      |
| ------------ | ------------------------------------------ |
| eyebrow      | Small caps label above the heading         |
| heading      | Section `h2` (hero already has the page `h1`) |
| features[]   | Three `{ title, description }` rows        |
| image src    | `/images/natural_leather/…` once the file exists |

No product price / SKU here. Do not duplicate `ML_DAILY_POUCH` fields.

## Server surface

- None. Server Component only. No `"use client"`, actions, or APIs.

## Reuse

- `next/image` for the statue photo.
- `@/` imports. `cn()` if classes need to branch.
- Same **1520px / 12-column / 20px gutter** desktop frame language as the hero. Match column spans to the PNG; do not invent a new grid system.
- Heading: existing serif (`font-serif`). Body: UI sans.

## Acceptance criteria

- [ ] Section sits immediately under the hero on `/`.
- [ ] One `h2`; Ukrainian copy; real HTML (not text baked into the image).
- [ ] Desktop: image left, copy right; mobile: stacked.
- [ ] Three feature rows match the mockup.
- [ ] Image uses `next/image` with useful Ukrainian `alt`; design PNG is not served.
- [ ] No client JS for this section.
- [ ] No extra claims (price, origin, extra colors) beyond mockup + product config.

## Open questions

- Statue asset is not in `public/images/` yet — drop it into `public/images/natural_leather/` before wiring `next/image`.
- Exact three feature strings: copy from the PNG when implementing.
