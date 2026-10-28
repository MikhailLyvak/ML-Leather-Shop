# <Feature name> — ML Daily

## Problem / goal

<What is broken or missing; what success looks like for the shopper and the business.>

## Users

- **Shopper** (Ukraine, mobile-heavy): …
- **Future admin**: not in this slice / …

## Scope (in / out)

**In**

- …

**Out**

- …

## UX flow & states

Visual source: [`docs/design/ml-daily-landing-desktop.png`](../design/ml-daily-landing-desktop.png), [`mobile`](../design/ml-daily-landing-mobile.png)

1. …

States: default · loading · empty · error · disabled.

## Data model

```ts
// Zod schema first; types via z.infer
```

Facts from config: `src/lib/products/ml-daily-pouch.ts` (…).

## Server surface

- Actions (`src/actions/<domain>/…`, return `ActionResponse<T>`): …
- Revalidation: `revalidatePath(<ROUTE_CONST>)`
- Session / cookies / storage keys (`mlStorageKey("…")`): …

## SEO

- Indexable? canonical? metadata? JSON-LD (only for visible content)?

## Reuse

- Components / config / primitives to extend: …

## File plan

- Create: …
- Modify: …

## Acceptance criteria

- [ ] …
- [ ] Works at 390px without horizontal scroll; matches mockup at 1920px.
- [ ] Keyboard accessible, visible focus, Ukrainian accessible names.
- [ ] `npm run lint` and `npm run check-types` pass.

## Open questions

- None.
