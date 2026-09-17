import type { MetadataRoute } from "next"

import { getPublicSiteUrl } from "@/lib/site-url"
import { BILLING_HREF, CART_HREF, ORDER_HREF } from "@/utils/route-href"

export default function robots(): MetadataRoute.Robots {
  const publicSiteUrl = getPublicSiteUrl()

  return {
    host: publicSiteUrl?.host,
    rules: {
      allow: "/",
      disallow: [BILLING_HREF, CART_HREF, ORDER_HREF],
      userAgent: "*",
    },
    sitemap: publicSiteUrl
      ? new URL("/sitemap.xml", publicSiteUrl).toString()
      : undefined,
  }
}
