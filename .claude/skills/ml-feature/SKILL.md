---
name: ml-feature
description: Full team pipeline for a new ML Shop feature or significant change — spec (architect) → implement (frontend-engineer + copywriter) → parallel review (seo, design-qa, perf-a11y, tests) → fixes → code-reviewer gate → verify. Use when the user asks to build/add/implement a feature, landing block, cart, checkout, order or billing.
argument-hint: "<feature description>"
---

# ML feature pipeline

You (the main session) act as the orchestrator. Subagents cannot spawn subagents, so you launch every agent yourself. Feature: **$ARGUMENTS**

## 0. Plan
Create a task list with the stages below. Read `docs/ML_PROJECT_CONTEXT.md` (relevant parts), the mockups in `docs/design/` if UI is involved, and `ls docs/specs/`.

## 1. Spec gate
- Spec exists and covers the request → continue.
- Otherwise launch `architect` with: feature description, related files, and "write docs/specs/<kebab>.md using the write-spec template".
- Show the user the acceptance criteria + open questions. Wait for answers if any question is blocking.

## 2. Build
Launch in parallel when both are needed:
- `frontend-engineer`: spec path, file plan, acceptance criteria, files it must not touch.
- `copywriter`: list of content keys/strings needed (only if new customer-facing text).

## 3. Parallel review (single message, multiple Agent calls)
Pick what applies:
- `seo-specialist` — any public page, metadata, JSON-LD, headings, copy.
- `design-qa` — any visual change.
- `perf-a11y-auditor` — UI, images, fonts, new deps.
- `test-engineer` — actions, utils, stores, pricing logic.

## 4. Fix loop
Collect Critical + Should-fix items → one `frontend-engineer` call with the full list. Max 2 loops; leftovers go to the final report.

## 5. Gate
Launch `code-reviewer` on the diff. Fix Critical items. Then run the `verify` skill.

## 6. Report
Changed files (grouped), acceptance criteria ✅/❌, open items, suggested next step. Do not commit unless asked.
