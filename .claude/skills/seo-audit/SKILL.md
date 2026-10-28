---
name: seo-audit
description: Technical SEO audit of the running ML Shop site — titles, descriptions, canonical, robots/noindex, h1 count, html lang, image alt, Open Graph, JSON-LD validity and visibility, sitemap vs noindex conflicts. Use after changes to pages, metadata, JSON-LD, sitemap/robots, or when the user asks for an SEO check.
argument-hint: "[base-url, default http://localhost:3000]"
---

# SEO audit

1. Make sure the site is running. Prefer a production build for accurate output: `npm run build && npm run start` (background); otherwise `npm run dev`. Stop any server you started when done.
2. Run the script (no dependencies, Node 18+):
   `node .claude/skills/seo-audit/audit.mjs ${ARGUMENTS:-http://localhost:3000}`
   Extra paths: `node .claude/skills/seo-audit/audit.mjs http://localhost:3000 / /cart /products/ml-daily-klatch`
3. The script covers mechanical checks only. Then review manually, using `docs/ML_PROJECT_CONTEXT.md`:
   - JSON-LD describes only content visible on the page (compare JSON-LD entities with sections rendered in `src/app/page.tsx`; commented-out sections ⇒ their JSON-LD must not ship).
   - Product/Offer facts equal `src/lib/products/ml-daily-pouch.ts` (price, UAH, colors, sizes).
   - Ukrainian copy is natural, no keyword stuffing; title/description reflect search intent.
4. Optionally validate JSON-LD at https://validator.schema.org/ (paste output) and Rich Results Test after deploy.
5. Report Critical / Should fix / Nit with the file to change. Delegate fixes to `seo-specialist` if asked to fix.
