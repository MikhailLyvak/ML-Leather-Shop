#!/usr/bin/env node
// Usage: node screenshot.mjs [path=/] [baseUrl=http://localhost:3000]
import { execFileSync } from "node:child_process"
import { mkdirSync } from "node:fs"
import { join } from "node:path"

const pagePath = process.argv[2] || "/"
const baseUrl = (process.argv[3] || "http://localhost:3000").replace(/\/$/, "")
const url = baseUrl + pagePath
const outDir = join(process.cwd(), ".tmp-design")
const slug = pagePath === "/" ? "home" : pagePath.replace(/^\/|\/$/g, "").replace(/\//g, "-")
mkdirSync(outDir, { recursive: true })

const viewports = [
  { height: 1080, name: "desktop", width: 1920 },
  { height: 844, name: "mobile", width: 390 },
]

let playwright = null
try { playwright = await import("playwright") } catch {
  try { playwright = await import("@playwright/test") } catch { playwright = null }
}

if (playwright) {
  const browser = await playwright.chromium.launch()
  for (const viewport of viewports) {
    const page = await browser.newPage({ deviceScaleFactor: 1, viewport: { height: viewport.height, width: viewport.width } })
    await page.goto(url, { waitUntil: "networkidle" })
    await page.waitForTimeout(500)
    const file = join(outDir, `${slug}-${viewport.name}.png`)
    await page.screenshot({ fullPage: true, path: file })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    console.log(`${file}${overflow > 0 ? `  ⚠ horizontal overflow ${overflow}px` : ""}`)
    await page.close()
  }
  await browser.close()
} else {
  for (const viewport of viewports) {
    const file = join(outDir, `${slug}-${viewport.name}.png`)
    try {
      execFileSync("npx", ["--yes", "playwright", "screenshot", "--full-page", `--viewport-size=${viewport.width},${viewport.height}`, "--wait-for-timeout=800", url, file], { stdio: "inherit" })
      console.log(file)
    } catch {
      console.error("Playwright browsers are not installed. Ask the user, then run: npx playwright install chromium")
      process.exit(1)
    }
  }
}
