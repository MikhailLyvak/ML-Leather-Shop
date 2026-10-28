---
name: visual-qa
description: Screenshot ML Shop pages at desktop (1920) and mobile (390) widths and compare them with the mockups in docs/design/. Use after UI changes, when matching the landing to the design, or when the user asks how the page looks.
argument-hint: "[path, default /] [base-url]"
---

# Visual QA

1. Ensure the site runs on :3000 (`npm run dev` in background if not; stop it afterwards if you started it).
2. Capture: `node .claude/skills/visual-qa/screenshot.mjs ${ARGUMENTS:-/}`
   - Output: `.tmp-design/<slug>-desktop.png` (1920 wide, full page) and `<slug>-mobile.png` (390 wide).
   - Uses the `playwright` package if present; otherwise falls back to `npx playwright screenshot`. If browsers are missing, the script prints the install command — ask the user before installing.
3. Read the screenshots and the mockups (`docs/design/ml-daily-landing-desktop.png`, `docs/design/ml-daily-landing-mobile.png`) and compare section by section: order, spacing, typography, colors, crops, product geometry, no horizontal scroll on mobile.
4. Report a table: section | viewport | expected | actual | severity | fix (file/class). Config in `src/lib/` beats numbers in the mockup.
`.tmp-design/` is scratch — never move screenshots into `public/`.
