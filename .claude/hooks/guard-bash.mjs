#!/usr/bin/env node
// PreToolUse(Bash): stop destructive or irreversible commands.
import { block, readInput } from "./lib.mjs"

const input = await readInput()
const command = String(input.tool_input?.command || "")

const rules = [
  [/\bgit\s+push\b[^;&|]*(--force|-f\b|--force-with-lease)/, "Force push is not allowed."],
  [/\bgit\s+(reset\s+--hard|clean\s+-[a-z]*f|checkout\s+--\s+\.|restore\s+\.)/, "Discards uncommitted work (most of this project is uncommitted!). Ask the user first."],
  [/\bgit\s+commit\b[^;&|]*--no-verify/, "Do not skip git hooks."],
  [/\bnpm\s+publish\b/, "Publishing is not part of this project."],
  [/\b(cat|less|head|tail|more)\s+[^;&|]*\.env(?!\.example)\b/, "Do not print secrets from .env files."],
]
// Recursive rm is only allowed for build/scratch directories.
const SAFE_RM_TARGET = /^(\.\/)?(\.next|\.tmp-design|\.claude\/\.state|coverage|out)(\/.*)?$/
for (const segment of command.split(/&&|\|\||;|\|/)) {
  const words = segment.trim().split(/\s+/)
  const rmIndex = words.indexOf("rm")
  if (rmIndex === -1) continue
  const args = words.slice(rmIndex + 1)
  const recursive = args.some((arg) => /^-[a-zA-Z]*[rR]/.test(arg) || arg === "--recursive")
  const targets = args.filter((arg) => !arg.startsWith("-"))
  if (recursive && (!targets.length || targets.some((target) => !SAFE_RM_TARGET.test(target)))) {
    block(`Blocked command: recursive rm outside build/scratch dirs (.next, .tmp-design, coverage, out). Delete specific files or ask the user.\nCommand: ${command}`)
  }
}

for (const [pattern, reason] of rules) {
  if (pattern.test(command)) block(`Blocked command: ${reason}\nCommand: ${command}`)
}
process.exit(0)
