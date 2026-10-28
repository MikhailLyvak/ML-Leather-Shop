---
name: write-spec
description: Create or update a feature spec in docs/specs/<feature>.md using the ML Shop template required by .cursor/rules/spec-before-implementation.mdc. Use before implementing any new feature (landing block, cart, checkout, order, billing, auth, new page).
argument-hint: "<feature-kebab-name> [short description]"
---

# Write a feature spec

1. Read `.cursor/rules/spec-before-implementation.mdc`, `docs/ML_PROJECT_CONTEXT.md`, 1–2 existing specs in `docs/specs/` for tone, and the mockups in `docs/design/` when UI is involved.
2. Inspect code the feature touches (`src/lib/products/ml-daily-pouch.ts`, `src/utils/route-href.ts`, related components).
3. Copy [template.md](template.md) to `docs/specs/<feature-kebab-name>.md` (or update the existing file — keep decisions already made).
4. Fill every section. Facts (prices, colors, sizes) are referenced from config by path, never copied from the mockup.
5. Acceptance criteria must be testable (“Given/When/Then” or checkbox with observable result), including SEO, a11y and mobile (390px) criteria for public UI.
6. Only blocking items go to Open questions. Report the path and the open questions to the user.
