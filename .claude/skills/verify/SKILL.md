---
name: verify
description: Run ML Shop quality gates — Prettier check, ESLint, TypeScript, and optionally production build — and summarize failures with file:line. Use before saying work is done, before commits, or when the user asks to check the project.
argument-hint: "[--build]"
allowed-tools: Bash(npm run lint:*), Bash(npm run check-types:*), Bash(npm run format:*), Bash(npm run build:*), Bash(npm run fonts:verify:*)
---

# Verify

Run from the repo root, in this order, continuing even if one fails:

1. `npm run format` (Prettier check). If it fails, run `npm run format:write` only on files you changed in this session, then re-check.
2. `npm run lint`
3. `npm run check-types`
4. If `$ARGUMENTS` contains `--build` or the change touches config/fonts/next.config/Dockerfile: `npm run build` (includes fonts:verify).

Report a compact table: gate | status | top errors (`path:line — message`). Fix errors that come from this session's changes; list pre-existing ones separately instead of silently fixing unrelated files.
