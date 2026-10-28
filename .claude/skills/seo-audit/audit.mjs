#!/usr/bin/env node
// Zero-dependency technical SEO audit for ML Shop.
// Usage: node audit.mjs [baseUrl] [...paths]
const baseUrl = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "")
const extraPaths = process.argv.slice(3)

const issues = []
const report = (severity, where, message) => issues.push({ message, severity, where })

async function get(path) {
  const response = await fetch(baseUrl + path, { redirect: "manual" })
  return { body: await response.text(), status: response.status, headers: response.headers }
}

function pick(html, regex) {
  const match = html.match(regex)
  return match ? match[1].trim() : null
}

function metaContent(html, attribute, value) {
  const tag = html.match(new RegExp(`<meta[^>]+${attribute}=["']${value}["'][^>]*>`, "i"))
  return tag ? pick(tag[0], /content=["']([^"']*)["']/i) : null
}

function decode(text) {
  return text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
}

let sitemapUrls = []
try {
  const robots = await get("/robots.txt")
  if (robots.status !== 200) report("Critical", "/robots.txt", `status ${robots.status}`)
  else if (!/sitemap:/i.test(robots.body)) report("Should fix", "/robots.txt", "no Sitemap: line")
  const sitemap = await get("/sitemap.xml")
  if (sitemap.status !== 200) report("Critical", "/sitemap.xml", `status ${sitemap.status}`)
  sitemapUrls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim())
  if (sitemapUrls.some((url) => /localhost|127\.0\.0\.1/.test(url))) {
    report("Should fix", "/sitemap.xml", "contains localhost URLs — set NEXT_PUBLIC_SITE_URL for production")
  }
} catch (error) {
  console.error(`Cannot reach ${baseUrl}: ${error.message}. Start the server first.`)
  process.exit(1)
}

const sitemapPaths = sitemapUrls.map((url) => {
  try { return new URL(url).pathname } catch { return url }
})
const paths = [...new Set(extraPaths.length ? extraPaths : ["/", ...sitemapPaths, "/products/ml-daily-klatch", "/cart"])]

const summary = []
for (const path of paths) {
  const { body: html, status } = await get(path)
  if (status >= 300) { report(status >= 400 ? "Critical" : "Nit", path, `status ${status}`); continue }

  const title = decode(pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || "")
  const description = decode(metaContent(html, "name", "description") || "")
  const robotsMeta = metaContent(html, "name", "robots") || ""
  const noindex = /noindex/i.test(robotsMeta)
  const canonicalTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)
  const canonical = canonicalTag ? pick(canonicalTag[0], /href=["']([^"']+)["']/i) : null
  const lang = pick(html, /<html[^>]*\slang=["']([^"']+)["']/i)
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  const images = html.match(/<img\b[^>]*>/gi) || []
  const imagesWithoutAlt = images.filter((tag) => !/\salt=/i.test(tag)).length
  const ogImage = metaContent(html, "property", "og:image")
  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  const jsonLdTypes = []

  for (const [, raw] of jsonLdBlocks) {
    try {
      const data = JSON.parse(raw)
      const nodes = Array.isArray(data) ? data : data["@graph"] || [data]
      for (const node of nodes) {
        jsonLdTypes.push(node["@type"])
        if (node["@type"] === "Product") {
          const offers = [].concat(node.offers || [])
          if (!offers.length) report("Should fix", path, "Product JSON-LD has no offers")
          for (const offer of offers) {
            if (offer.priceCurrency && offer.priceCurrency !== "UAH") report("Critical", path, `Offer priceCurrency ${offer.priceCurrency} ≠ UAH`)
          }
          if (node.aggregateRating || node.review) report("Should fix", path, "Product has rating/review — make sure they are real and visible")
        }
      }
    } catch (error) {
      report("Critical", path, `invalid JSON-LD: ${error.message}`)
    }
  }

  if (!title) report("Critical", path, "missing <title>")
  else if (title.length < 25 || title.length > 65) report("Nit", path, `title length ${title.length} (aim 50–60)`)
  if (!noindex) {
    if (!description) report("Critical", path, "missing meta description")
    else if (description.length < 70 || description.length > 170) report("Nit", path, `description length ${description.length} (aim 140–160)`)
    if (!canonical) report("Should fix", path, "missing canonical")
    if (!ogImage) report("Should fix", path, "missing og:image")
    if (!sitemapPaths.includes(path)) report("Should fix", path, "indexable page not in sitemap")
  } else if (sitemapPaths.includes(path)) {
    report("Critical", path, "noindex page is listed in sitemap")
  }
  if (lang !== "uk") report("Should fix", path, `<html lang> is "${lang}" (expected "uk")`)
  if (h1Count !== 1) report("Should fix", path, `${h1Count} <h1> elements (expected 1)`)
  if (imagesWithoutAlt) report("Should fix", path, `${imagesWithoutAlt} <img> without alt`)

  summary.push({ path, status, noindex, h1: h1Count, title: title.slice(0, 60), descriptionLength: description.length, canonical: canonical || "-", jsonLd: jsonLdTypes.join(",") || "-" })
}

console.log(`\nSEO audit — ${baseUrl}\n`)
console.table(summary)
const order = { Critical: 0, "Should fix": 1, Nit: 2 }
issues.sort((a, b) => order[a.severity] - order[b.severity])
if (!issues.length) console.log("No mechanical issues found. Do the manual review steps.")
for (const issue of issues) console.log(`[${issue.severity}] ${issue.where} — ${issue.message}`)
process.exit(issues.some((issue) => issue.severity === "Critical") ? 2 : 0)
