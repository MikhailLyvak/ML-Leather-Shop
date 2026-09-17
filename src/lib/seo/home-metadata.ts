import type { Metadata } from "next"

import { BRAND } from "@/lib/brand"
import {
  HERO_BACKGROUND_SIZE,
  ML_DAILY_POUCH,
} from "@/lib/products/ml-daily-pouch"
import { HOME_HREF } from "@/utils/route-href"

const OPEN_GRAPH_IMAGE = {
  alt: "Коньячний чоловічий шкіряний клатч ML Daily Pouch на мармуровій терасі",
  height: HERO_BACKGROUND_SIZE.height,
  url: "/images/hero_block_bg/color_orange.png",
  width: HERO_BACKGROUND_SIZE.width,
} as const

export function buildHomeMetadata(): Metadata {
  const title = `${ML_DAILY_POUCH.seoTitle} | ${BRAND.name}`

  return {
    alternates: {
      canonical: HOME_HREF,
    },
    description: ML_DAILY_POUCH.seoDescription,
    openGraph: {
      description: ML_DAILY_POUCH.seoDescription,
      images: [OPEN_GRAPH_IMAGE],
      locale: "uk_UA",
      siteName: BRAND.wordmark,
      title,
      type: "website",
      url: HOME_HREF,
    },
    robots: {
      follow: true,
      index: true,
    },
    title: {
      absolute: title,
    },
    twitter: {
      card: "summary_large_image",
      description: ML_DAILY_POUCH.seoDescription,
      images: [OPEN_GRAPH_IMAGE.url],
      title,
    },
  }
}
