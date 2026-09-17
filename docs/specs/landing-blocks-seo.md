# Landing blocks SEO — belt, proportions, capacity

## Problem / goal

Make the already-visible **belt**, **proportions**, and **what-in** homepage sections easy for Google and answer engines to extract — without changing customer-facing copy or visual design.

Success is crawlable landmarks, precise product facts in HTML + JSON-LD that match what shoppers already see, and quoteable entities (ML Daily Pouch, 140 cm strap, 25 × 17 × 3 cm, what fits). Rankings are not guaranteed.

## Users

- **Shopper**: unchanged layout and wording.
- **Crawler / AI answer engine**: clearer section meaning, measurements, and capacity list.

## Scope (in / out)

**In**

- Semantic landmarks (`section`, heading `id`, `aria-labelledby`, list roles) with **existing class names**.
- Descriptive `alt` that is not visible on the page.
- Homepage JSON-LD graph: product measurements, strap accessory, dimension list, capacity list.
- Typed dimensions / strap length on `ML_DAILY_POUCH` as the data source for schema.

**Out**

- Any visible copy, spacing, color, or layout change.
- Hidden keyword text, fake FAQ / review schema, extra landing sections.
- Metadata title/description rewrites (hero already owns `/`).

## UX flow & states

No visual or interaction change. Mockup remains [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png).

## Data model

- `ML_DAILY_POUCH.dimensionsCm` — 25 × 17 × 3, already on the proportions block.
- `ML_DAILY_POUCH.strap.lengthCm` — 140, already in the belt copy.
- Feature copy stays in colocated `content.ts` files; JSON-LD reads the same strings.

## Server surface

- Server Components only. Extend `buildHomeJsonLdGraph()` in `src/lib/seo/json-ld.ts`.
- No new routes, actions, or client JS.

## Reuse

- Existing `JsonLdScript` on the hero.
- Natural-leather `ItemList` pattern.
- `toAbsoluteUrl`, `ML_DAILY_POUCH`, fragment ids matching section `id`s.

## Acceptance criteria

- [ ] Visible text and computed layout of the three blocks are unchanged.
- [ ] Each block is a labelled `section` with a stable fragment id (`#belt`, `#proportions`, `#what-in`).
- [ ] Image alts describe the asset; no keyword stuffing.
- [ ] JSON-LD matches visible facts only (strap price/length, dimensions, six capacity items).
- [ ] No hidden text, fake ratings, or extra FAQ blocks.

## Open questions

None — copy and design stay locked; this slice is markup and structured data only.
