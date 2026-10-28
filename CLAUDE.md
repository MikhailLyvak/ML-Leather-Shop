@AGENTS.md

# ML Shop — instructions for Claude

Premium single-product storefront for **ML Daily** (men's natural-leather pouch), Ukrainian market, UAH. Next.js 16 App Router, React 19, TypeScript, Tailwind v4.

## Sources of truth (in priority order)
1. `src/lib/**` typed config — prices, colors, sizes, wordmark. Config wins; flag mismatches.
2. `docs/ML_PROJECT_CONTEXT.md` — brand, copy, SEO rules. Read the relevant sections before any copy, page, metadata or SEO work.
3. `docs/design/ml-daily-landing-desktop.png`, `docs/design/ml-daily-landing-mobile.png` — layout (Read the PNG before landing UI work).
4. `.cursor/rules/*.mdc` — code conventions shared with Cursor. Read the files whose globs match what you edit; they are authoritative.
5. `docs/specs/*.md` — a spec is required before any new feature (`/write-spec`).

## Team (`.claude/agents/`)
orchestrator · architect · frontend-engineer · copywriter · seo-specialist · design-qa · perf-a11y-auditor · test-engineer · code-reviewer.
For a feature, use `/ml-feature <description>` (the main session orchestrates) or start `claude --agent orchestrator`.
Before a commit: `/review-changes`, then `/verify`.

## Commands
`npm run dev` · `npm run lint` · `npm run check-types` · `npm run format` · `npm run build`

## Never
- Discard uncommitted work (most of the repo is not committed yet).
- Invent unlocked facts (price, full wordmark, extra colors, key dock, shoulder strap).
- Serve mockups from `public/` or add sections that are not in the mockup/spec.
- Commit or push unless asked.
