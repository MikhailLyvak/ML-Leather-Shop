#!/usr/bin/env node
// PostToolUse(Edit|Write|MultiEdit): Prettier + ESLint --fix, then ML Shop convention checks.
// Exit 2 feeds remaining problems back to Claude so it fixes them right away.
import { execFileSync } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

import { block, projectDir, readInput, stateDir, toRelative } from "./lib.mjs"

const input = await readInput()
const root = projectDir(input)
const path = toRelative(root, input.tool_input?.file_path)
if (!path || path.startsWith("..") || !existsSync(join(root, path))) process.exit(0)

const isCode = /\.(ts|tsx|mjs|js)$/.test(path)
const isFormattable = /\.(ts|tsx|js|jsx|mjs|cjs|json|md|css)$/.test(path) && !path.startsWith(".claude/")
const bin = (name) => join(root, "node_modules", ".bin", name)
const problems = []

if (path.startsWith("src/")) writeFileSync(join(stateDir(root), "src-dirty"), new Date().toISOString())

if (isFormattable && existsSync(bin("prettier"))) {
  try { execFileSync(bin("prettier"), ["--write", "--ignore-unknown", path], { cwd: root, stdio: "pipe" }) } catch (error) {
    problems.push(`Prettier failed:\n${String(error.stderr || error.message).slice(0, 1500)}`)
  }
}

if (isCode && path.startsWith("src/") && existsSync(bin("eslint"))) {
  try { execFileSync(bin("eslint"), ["--fix", path], { cwd: root, stdio: "pipe" }) } catch (error) {
    problems.push(`ESLint errors left after --fix:\n${String(error.stdout || error.stderr || error.message).slice(0, 3000)}`)
  }
}

if (isCode && path.startsWith("src/")) {
  const source = readFileSync(join(root, path), "utf8")
  const lines = source.split("\n")
  const check = (pattern, message, skip = false) => {
    if (skip) return
    lines.forEach((line, index) => {
      if (pattern.test(line) && !/ml-ignore-convention/.test(line)) problems.push(`${path}:${index + 1} ${message}`)
    })
  }
  const isComponent = path.startsWith("src/components/")
  const isPageOrLayout = /^src\/app\/(.*\/)?(page|layout)\.tsx$/.test(path)

  check(/from\s+["']\.\.\//, 'Relative "../" import — use the "@/..." alias (project-overview.mdc).')
  check(/typeof\s+[\w.?[\]]+\s*===?\s*["']string["']/, "Use isString from @/utils/string instead of typeof === \"string\".", path === "src/utils/string.ts")
  check(/Array\.isArray\([^)]*\)\s*&&\s*[\w.?]+\.length/, "Use isArrayAndHasElements / isArrayAndEmpty from @/utils/array.", path === "src/utils/array.ts")
  check(/\b(href|redirect|revalidatePath|push|replace|prefetch)\s*(=\s*\{?|\()\s*["'`]\/(?!\/|images\/|fonts\/)/, "Hardcoded route — use a constant from @/utils/route-href.", /^src\/(utils\/route-href|app\/(robots|sitemap))\.ts$/.test(path))
  check(/["'`]ml_[a-z]/, 'Hardcoded "ml_" storage key — use mlStorageKey() from @/stores/ml-storage-key.', path === "src/stores/ml-storage-key.ts")
  check(/^export\s+default\b/, "Components use `const X = () => …` + bottom `export { X }` — no default export (typescript-conventions.mdc).", !isComponent)
  check(/<img[\s>]/, "Use next/image instead of <img>.")
  check(/docs\/design\//, "Mockups in docs/design must not be referenced/served from src.")
  check(/\/componenets\/|product-detils/, "Misspelled path (componenets / detils) — rename the folder/file when touching it.")

  if (isPageOrLayout && /^\s*["']use client["']/.test(source)) {
    problems.push(`${path}: "use client" on a page/layout — keep pages as Server Components and move interactivity into a small client island.`)
  }
  if (path.startsWith("src/actions/") && /\.ts$/.test(path) && !path.includes("__tests__") && !/^\s*["']use server["']/.test(source)) {
    problems.push(`${path}: server action files must start with "use server" (server-actions.mdc).`)
  }
}

if (problems.length) {
  block(`ML Shop checks for ${path}:\n- ${problems.join("\n- ")}\nFix issues caused by your change. For pre-existing ones outside the task scope, mention them instead of rewriting unrelated code.`)
}
process.exit(0)
