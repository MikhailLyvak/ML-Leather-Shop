#!/usr/bin/env node
// SessionStart: give Claude a short, fresh project briefing (stdout is added to context).
import { execFileSync } from "node:child_process"
import { readdirSync } from "node:fs"
import { join } from "node:path"

import { projectDir, readInput } from "./lib.mjs"

const input = await readInput()
const root = projectDir(input)
const run = (command, args) => { try { return execFileSync(command, args, { cwd: root, stdio: "pipe" }).toString().trim() } catch { return "" } }

const branch = run("git", ["branch", "--show-current"]) || "?"
const changed = run("git", ["status", "--short"]).split("\n").filter(Boolean).length
let specs = []
try { specs = readdirSync(join(root, "docs", "specs")).filter((file) => file.endsWith(".md")) } catch {}

console.log(`ML Shop briefing
- Git: branch ${branch}, ${changed} uncommitted paths (most of the project is not committed yet — never discard changes).
- Specs: ${specs.join(", ") || "none"} (docs/specs/). New features need a spec first (write-spec skill).
- Sources of truth: src/lib/** config > docs/ML_PROJECT_CONTEXT.md > docs/design/*.png. Code rules: .cursor/rules/*.mdc.
- Next.js 16 has breaking changes: read node_modules/next/dist/docs/ before using unfamiliar APIs.
- Team: agents in .claude/agents (orchestrator, architect, frontend-engineer, copywriter, seo-specialist, design-qa, perf-a11y-auditor, test-engineer, code-reviewer). Skills: /ml-feature, /write-spec, /review-changes, /verify, /seo-audit, /visual-qa, /landing-block.`)
