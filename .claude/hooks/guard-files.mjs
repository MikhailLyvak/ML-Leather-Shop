#!/usr/bin/env node
// PreToolUse(Edit|Write|MultiEdit|NotebookEdit): protect generated, secret and source-of-truth files.
import { block, projectDir, readInput, toRelative } from "./lib.mjs"

const input = await readInput()
const root = projectDir(input)
const path = toRelative(root, input.tool_input?.file_path || input.tool_input?.notebook_path)
if (!path) process.exit(0)

const rules = [
  [/^\.\.\//, "File is outside the project."],
  [/^(\.next|node_modules|out|build|\.git)\//, "Generated/vendor directory — do not edit by hand."],
  [/(^|\/)\.env(?!\.example$)(\..*)?$/, "Secrets file — edit .env.example instead and tell the user which variable to set."],
  [/^package-lock\.json$/, "Lockfile is managed by npm — run npm install/uninstall instead."],
  [/\.tsbuildinfo$|^next-env\.d\.ts$/, "Generated TypeScript file."],
  [/^docs\/design\/.+\.(png|jpe?g|webp|fig)$/i, "Design mockups are the visual source of truth — only the designer replaces them."],
  [/^public\/.*(mockup|ml-daily-landing)/i, "Mockups must never be served from public/ (see design-source rule)."],
]
for (const [pattern, reason] of rules) {
  if (pattern.test(path)) block(`Blocked edit of ${path}: ${reason}`)
}
process.exit(0)
