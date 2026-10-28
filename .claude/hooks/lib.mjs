import { mkdirSync } from "node:fs"
import { isAbsolute, join, relative } from "node:path"

export async function readInput() {
  let raw = ""
  for await (const chunk of process.stdin) raw += chunk
  try { return JSON.parse(raw || "{}") } catch { return {} }
}

export function projectDir(input) {
  return process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd()
}

export function toRelative(root, filePath) {
  if (!filePath) return ""
  const absolute = isAbsolute(filePath) ? filePath : join(root, filePath)
  return relative(root, absolute).split("\\").join("/")
}

export function stateDir(root) {
  const dir = join(root, ".claude", ".state")
  mkdirSync(dir, { recursive: true })
  return dir
}

export function block(message) {
  process.stderr.write(message.trim() + "\n")
  process.exit(2)
}
