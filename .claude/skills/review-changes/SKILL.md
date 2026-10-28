---
name: review-changes
description: Multi-agent review of the current uncommitted diff — runs code-reviewer, seo-specialist, perf-a11y-auditor and (for UI) design-qa in parallel, then merges findings into one prioritized list. Use before a commit/PR or when the user asks to review changes.
argument-hint: "[path filter or 'staged']"
---

# Review changes

1. `git status --short` and `git diff --stat` (`--cached` if `$ARGUMENTS` is `staged`). Build the list of changed files (include untracked under `src/`, `docs/`, `public/`). If a path filter was given, restrict to it.
2. Decide reviewers:
   - always `code-reviewer`;
   - `seo-specialist` if `src/app/**`, `src/lib/seo/**`, `content.ts`, metadata or headings changed;
   - `perf-a11y-auditor` if `.tsx`, `public/images/**`, fonts, `globals.css` or deps changed;
   - `design-qa` if visual components or styles changed;
   - `test-engineer` if `src/actions/**`, `src/utils/**`, `src/stores/**` changed.
3. Launch all selected agents **in one message** (parallel). Each prompt: the file list, the related spec path, "report Critical / Should fix / Nit with path:line, do not edit".
4. Merge: dedupe, sort by severity, keep the agent name per finding. Verdict: APPROVE / CHANGES REQUESTED.
5. Ask whether to fix; on yes, delegate to `frontend-engineer` (code) / `copywriter` (text), then run `verify`.
