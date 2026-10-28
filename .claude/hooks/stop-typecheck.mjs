#!/usr/bin/env node
// Stop: if src/ was edited this session, require a clean `tsc --noEmit` before finishing.
import { execFileSync } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

import { block, projectDir, readInput, stateDir } from "./lib.mjs"

const input = await readInput()
const root = projectDir(input)
const marker = join(stateDir(root), "src-dirty")
if (!existsSync(marker) || readFileSync(marker, "utf8") === "clean") process.exit(0)

const tsc = join(root, "node_modules", ".bin", "tsc")
if (!existsSync(tsc)) process.exit(0)

let typecheckError = null
try {
  execFileSync(tsc, ["--noEmit", "--pretty", "false"], { cwd: root, stdio: "pipe", timeout: 110_000 })
} catch (error) {
  typecheckError = error
}

if (!typecheckError) {
  writeFileSync(marker, "clean")
  process.exit(0)
} else {
  const error = typecheckError
  const output = String(error.stdout || error.stderr || error.message)
  if (input.stop_hook_active) {
    // Second attempt in a row: let Claude stop, but keep the marker so the next turn re-checks.
    process.stderr.write("TypeScript still has errors (reported to the user).\n")
    process.exit(0)
  }
  block(`TypeScript errors after your edits — fix them before finishing (or explain if pre-existing):\n${output.split("\n").slice(0, 40).join("\n")}`)
}
