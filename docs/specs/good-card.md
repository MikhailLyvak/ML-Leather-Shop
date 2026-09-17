# Good card — ML Daily Pouch purchase panel

## Problem / goal

Add the landing purchase card after the capacity section: stone-texture product shot on the left, configurator on the right. Success is a shopper seeing the same color and strap they picked in the hero, and being able to change either from this card.

## Users

- **Shopper**: confirms color / strap and adds to cart after reading the page.
- **Future admin**: not in this slice. Copy and catalog stay in typed config.

## Scope (in / out)

**In**

- Homepage section after `WhatIn`, matching [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png) and the detailed purchase-card frame.
- Left panel: `public/images/good_card/bg_card.png` as the panel background; product photo for the **currently selected** color, always **without** the strap. Checking the strap does **not** swap the photo — only the checkbox and the big price change. Stone texture does not change.
- Right panel: name, description, **live total** (pouch + strap when checked), color radios, strap checkbox, add-to-cart, delivery/return note from the mockup.
- Shared selection with the hero (one color, one strap flag).

**Out**

- Working cart persistence (same stub CTA as the hero).
- FAQ / footer (next blocks on the PNG).
- New product photos; reuse `with_belt` / `without_belt` assets.
- Invented prices or extra SKUs.

## UX flow & states

1. Default matches the hero: **Cognac**, strap off.
2. Changing color or strap here updates the hero (and the other way around) without a reload.
3. Left photo follows **color only** (`without_belt` PNG). Checking the strap does **not** swap to `with_belt`.
4. Big price uses `getHeroPriceUah`: pouch only, or pouch + strap (`+899 ₴` still shown on the checkbox).
5. **One card**, not two: a single rounded container. Mobile stacks photo, then a horizontal greek-key, then configurator. Desktop columns: photo | **52px** greek-key | configurator. The ornament is a **sibling** of the photo panel (flush beside it, never overlaid on the product or its stone). It is **52px** thick. The greek-key is filled with `bg_card.png` via a CSS mask — the SVG is not stacked on top of the stone.
6. Copy / controls in the right panel are a **414px** stack (Figma hug). The add-to-cart button is **full width** of that stack. The strap row is a **rounded-2xl** pill with a 1px border (not a full capsule). The checkbox is a **rounded-md** square, not a circle. The delivery note is centered under the button.

## Data model

- Color / strap: `ProductSelectionProvider` (client), default from `ML_DAILY_POUCH`.
- Copy / price / images: `ML_DAILY_POUCH` + `PRODUCT_COLORS`.
- Delivery note is mockup copy, not yet a config field.

## Server surface

None. Server Component wrapper + one client island. No actions.

## Reuse

- `HeroColorPicker`, `HeroStrapOption`, `HeroAddToCartButton`, `HeroProduct`.
- `ProductSelectionProvider` wrapping homepage sections.
- `next/image`, `@/` imports, `formatPriceUah`.
- `/images/elements/antic_underline.svg` as the column ornament.

## Acceptance criteria

- [ ] Section sits after `WhatIn` on `/`.
- [ ] Left panel uses `bg_card.png` as the background of that column.
- [ ] Desktop is one rounded card; 52px greek-key sits beside the photo panel (not on top of it) and is colored with `bg_card.png`.
- [ ] Right-panel copy stack is 414px; add-to-cart is full width of that stack.
- [ ] Visible copy matches config + mockup; layout matches the purchase-card frame.
- [ ] Color and strap stay in sync with the hero.
- [ ] Product photo follows the selected color only; this card never shows `with_belt`.
- [ ] Checking the strap updates the checkbox and the big price only.
- [ ] No extra client wrapper around the whole page beyond the selection provider.

## Open questions

- Delivery / 14-day return line is in the mockup only — keep it, and move into product config when shipping policy is locked.
