# Hero block — ML Daily Pouch

## Problem / goal

Replace the homepage stub with a full-viewport product hero that matches the landing mockup: premium scene, color switching, optional strap, and crawlable product meaning. Success is a shopper immediately understanding the product, wanting it, and being able to pick a color — while search engines receive unique metadata, semantic HTML, and valid structured data.

## Visual source

- Desktop landing (full page, hero is the first viewport): [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png)
- Designer file (not inspectable by agents): [ML Daily Klatch (Figma)](https://www.figma.com/design/GpU9pIhsIUvGO5DFEyfYb9/ML?node-id=159-30&p=f)

Match the PNG for hero composition. Prices, color IDs, and strap cost come from `src/lib/products/ml-daily-pouch.ts`, not from OCR on the mockup. Sections below the fold are **out of this slice** but must follow the same PNG when specified.

## Users

- **Shopper** (Ukraine, mobile-heavy): sees the product, switches color, optionally adds the leather strap, starts a purchase.
- **Future admin**: not in this slice (no CMS). Catalog lives in typed product config.

## Scope (in / out)

**In**

- Full-viewport homepage hero (`100dvh`).
- Header: menu control, brand mark, cart link with count badge (`0` until cart exists).
- Product copy, price, primary CTA, color radios, optional 140 cm strap.
- Scene background + product photo swap by selected color; product photo also swaps when the strap is on.
- Use every current asset under `public/images/hero_block_bg/` and `public/images/product/` (color radios use `minimalistic_selector`; hero scene uses `with_belt` / `without_belt`).
- Technical SEO for `/`: metadata, canonical, OG/Twitter, JSON-LD, `robots.ts`, `sitemap.ts`, `lang="uk"`.

**Out**

- Working cart / add-to-cart persistence (CTA is present; `/cart` is a noindex empty stub so the header link does not 404).
- Menu drawer contents.
- Extra landing sections below the fold (next section: [`natural-leather.md`](./natural-leather.md)).
- Invented reviews, stock feeds, or unlocked commercial facts beyond the mockup.

## UX flow & states

Mockup: first viewport of [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png). Default: **Cognac**, strap off.

1. Page loads full-screen: daylight terrace background + cognac pouch.
2. Shopper selects **Black** → night background (`color_black`) + black pouch.
3. **Brown** → twilight background (`color_brown`) + espresso pouch.
4. Strap checkbox → `with_belt` photo for the active color; displayed price += 899 ₴. The full 1271×675 composition is shown at **85%** of the 10-column span, so the rolled strap sits to the left of the pouch and is not clipped.
5. Color change crossfades the terrace (day → twilight → night) over ~1.4s. The pouch swaps instantly. `prefers-reduced-motion` skips the background fade.
6. Empty/loading: none (static catalog). Error: none in this slice.
7. Dark scenes invert type and chrome so contrast holds.

Hero photos and color-selector thumbnails are served as original PNGs (no Next.js recompression). The product photo is the native 1271×675 composition so Black / Brown / Cognac share the same canvas and rest on the same ground line. It is displayed at **85%** of the 10-column span (~1080×574), right-aligned on desktop so the pouch stays on the terrace. The product price is 48px / weight 500 / line-height 100% / cap-height trim, UI sans, cognac `#966849`.

Mobile (~360 / ~390): stack — promise, price, CTA and product remain above the fold; swatches stay usable.

## Layout

Desktop follows the mockup **12-column** layout inside a **1520px-max** shell, with a **10px** spacing rhythm (padding/gaps in 10px multiples).

- Shared frame: **1520px** 12-column grid, 20px gutters. That 1520px **is** the grid (no extra desktop inset). Above 1520px the frame is centered. **Below 1520px on desktop (`lg+`), do not shrink the 1520 frame** — right-align it so extra width comes off the left. Copy stays in the viewport with at least **80px** left inset (not 40px — smaller type still needs breathing room). Header stays viewport-padded so menu/cart never clip. Below `lg`, stack as before with 20 / 40px side padding.
- Header sits on a viewport-centered 1520 max frame: menu at the left edge, wordmark centered, cart at the right edge. Below **1440px**, copy is start-aligned with **128px** top padding so it clears the header with a comfortable gap (not vertically centered). Type, controls, and the product photo use **Tailwind `min-[1440px]:` sizes** (~15% smaller below 1440) — no `zoom` / `scale`. Header stays full size.
- Copy (title, description, price, CTA, swatches, strap) starts at **column 3** and spans **4 columns** of the 1520 frame. Vertical rhythm matches the mockup: title, body, price + CTA on **one row** (do not wrap), then swatches, then the strap add-on.
- Product photo is the native **1271×675** PNG (pouch on the right, optional rolled strap on the left). It sits in **columns 3–12** of the 1520 frame at **85%** of that 10-column width (~1080×574) at ≥1440px, right-aligned and pinned to the **bottom of the hero** so it rests on the terrace tiles. Below 1440px it is **72%** of that span (~15% smaller again) so the strap still fits. Copy overlays the empty left of that canvas; do not crop to the pouch.
- Hero scene is `object-cover` with **center / bottom** at ≥1520px and on stacked/mobile layouts. On desktop below 1520px use **right / bottom** so extra width is cropped from the left (column / empty side) and the floor stays in the frame.
- The bottom purchase control is a **floating pill overlay** connected to the **left edge of the screen** (`left: 0`), not placed in the 12-column grid. Left side meets the viewport (square), right side stays a pill and hugs content. Name left, price, then CTA. **At 1920px and up** it keeps the original mockup spacing (`sm:bottom-10`, `lg:pl-20`, roomy gaps and CTA). **Below 1920px** it stays compact so it does not cover the rolled strap.

## Data model

Central catalog in `src/lib/products/` (single source for UI, metadata, JSON-LD).

| Field        | Mockup / asset source | Notes                                                        |
| ------------ | --------------------- | ------------------------------------------------------------ |
| Name         | ML Daily Pouch        | Branded English name                                         |
| Colors       | black, brown, cognac  | Mapped to `color_black`, `color_brown`, `color_orange` files |
| Price        | 6 990 ₴               | Design-sourced; not a locked retail price                    |
| Strap add-on | +899 ₴, 140 cm        | Optional; not a separate SKU yet                             |
| Wordmark     | MICHAEL LYVANCHELLO   | From mockup + product photography; stored in brand config    |

## Server surface

- No new server actions in this slice.
- `app/robots.ts`, `app/sitemap.ts`.
- `NEXT_PUBLIC_SITE_URL` for canonical/OG absolute URLs (never localhost in production).

## Reuse

- `next/image`, `next/font` (display serif: Cormorant Infant; UI sans: Gilroy when self-hosted, otherwise Inter), `next/link`.
- Route constants from `@/utils/route-href`.
- `cn()` from `@/lib/utils`.
- Smallest client island for color/strap/theme; page remains a Server Component.

## Acceptance criteria

- [ ] Homepage hero is exactly one viewport tall on desktop and mobile.
- [ ] Default view matches mockup: cognac, no extra strap, daylight background.
- [ ] Black → black pouch + night `color_black` background.
- [ ] Brown and cognac pair with their same-named background files.
- [ ] Strap toggle swaps `without_belt` / `with_belt` and updates the visible price.
- [ ] One H1; Ukrainian body copy; crawlable HTML (not image-only text).
- [ ] Unique title, description, canonical, OG image; Product + Organization + WebSite JSON-LD with no fake ratings.
- [ ] Cart and checkout URLs are not in the sitemap; robots disallow them.
- [ ] Color control is a keyboard-accessible radiogroup; strap is a labeled checkbox; visible focus.
- [ ] Full 1271×675 product photo is shown (not pouch-cropped) at 85% of the 10-column span on the 1520 frame; the rolled strap is fully visible when selected.
- [ ] Desktop viewports below 1520px keep the 1520 product frame and crop from the left; copy keeps ≥80px left inset and does not leave the viewport.
- [ ] Hero photos are not recompressed to low quality (no blocky artifacts from the image optimizer).
- [ ] Color change crossfades the terrace only; the pouch swaps instantly. Reduced-motion users get an instant background swap.
- [ ] Desktop copy and product sit on the 1520px 12-column frame (copy cols 3–6, product photo cols 3–12 displayed at 85% of that span, right-aligned). Above 1520px the frame is centered; below it the frame is right-aligned so the product does not shrink. Header chrome stays on screen. The 1520px shell is not further inset on desktop.
- [ ] Bottom purchase control is connected to the left screen edge (outside the 12-col grid), a floating inset pill overlaying the hero — not a full-width bar.
- [ ] Terrace background keeps the floor at the bottom of the viewport; extra width is cropped equally left/right at ≥1520px, and from the left on desktop below 1520px; the pouch stays on the tiles when the viewport height changes.

## Open questions

Resolved for this slice from the mockup + assets: three colors including black; wordmark as photographed; prices as shown. Still commercially unlocked (do not treat as final): retail price, leather origin wording vs Ukrainian production, full legal entity.
