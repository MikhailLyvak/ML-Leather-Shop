import { existsSync } from "node:fs"
import { join } from "node:path"

const requiredManropeFiles = [
  "public/fonts/manrope/Manrope-Regular.woff2",
  "public/fonts/manrope/Manrope-Medium.woff2",
  "public/fonts/manrope/Manrope-Regular-latin.woff2",
  "public/fonts/manrope/Manrope-Medium-latin.woff2",
]

const optionalGilroyFiles = [
  "public/fonts/gilroy/Gilroy-Regular.woff2",
  "public/fonts/gilroy/Gilroy-Medium.woff2",
]

const missingManropeFiles = requiredManropeFiles.filter(
  (filePath) => !existsSync(join(process.cwd(), filePath)),
)

if (missingManropeFiles.length > 0) {
  console.error("Missing bundled UI font files:")
  missingManropeFiles.forEach((filePath) => {
    console.error(`  - ${filePath}`)
  })
  console.error("\nRun: npm run fonts:sync")
  process.exit(1)
}

const hasGilroy = optionalGilroyFiles.every((filePath) =>
  existsSync(join(process.cwd(), filePath)),
)

if (hasGilroy) {
  console.log("Gilroy files found — Gilroy will be used as the primary UI font.")
} else {
  console.log(
    "Gilroy files not found — Manrope fallback from public/fonts/manrope/ will be used.",
  )
  console.log("Add licensed Gilroy files to public/fonts/gilroy/ to override.")
}
