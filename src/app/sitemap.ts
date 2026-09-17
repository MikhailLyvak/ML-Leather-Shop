import type { MetadataRoute } from "next"

import { toAbsoluteUrl } from "@/lib/site-url"
import { HOME_HREF } from "@/utils/route-href"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "weekly",
      priority: 1,
      url: toAbsoluteUrl(HOME_HREF),
    },
  ]
}
