---
name: landing-block
description: Scaffold or refactor an ML Shop landing section (src/components/products/<block>/) following project conventions — content.ts with Ukrainian copy, arrow component with bottom named export, index.ts barrel, semantic <section aria-labelledby>, next/image, optional JSON-LD wiring. Use when adding a new landing block or normalizing an existing one.
argument-hint: "<block-kebab-name>"
---

# Landing block

Precondition: the block is in the mockup and has a spec in `docs/specs/` (else run `write-spec` first). Block: **$ARGUMENTS**

## Folder layout
```
src/components/products/<block>/
  <block>.tsx          # section component (Server Component by default)
  content.ts           # Ukrainian copy + image paths, keys sorted
  components/          # sub-components if needed (spelled correctly!)
  hooks.ts / utils.ts / types.ts   # only if needed
  index.ts             # export { Block } from "./<block>"
```
Then export from `src/components/products/index.ts` and render in `src/app/page.tsx` in mockup order.

## Component skeleton
```tsx
import Image from "next/image"

import { BLOCK_CONTENT } from "./content"

interface BlockProps {
  className?: string
}

const Block = ({ className }: BlockProps) => {
  return (
    <section aria-labelledby="block-title" className={className} id="block">
      <h2 id="block-title">{BLOCK_CONTENT.title}</h2>
      {/* … */}
    </section>
  )
}

export { Block }
```

## Rules
- Copy comes from `content.ts`; facts (sizes, colors, prices) from `src/lib/products/ml-daily-pouch.ts` — never duplicated.
- `"use client"` only on the smallest interactive child; read selection via `ProductSelectionProvider` hooks.
- `next/image` with explicit size or `fill` + `sizes`; meaningful Ukrainian `alt`; decorative → `alt=""`.
- Long shared class strings → `<block>-classname.ts` (see `ui-class-tokens.mdc`).
- If the block exposes product facts, extend `src/lib/seo/json-ld.ts` — only while the block is actually rendered.
- Finish with the `verify` skill; for visual work run `visual-qa`.

## Normalizing an existing block
Convert `export default X` → bottom `export { X }` and update imports; fix folder typos (`componenets` → `components`, `product-detils` → `product-details`) with `git mv`; add `index.ts`.
