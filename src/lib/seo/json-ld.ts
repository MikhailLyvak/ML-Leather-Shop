import { BELT_CONTENT } from "@/components/products/belt-block/content"
import {
  NATURAL_LEATHER_BANNER_FEATURES,
  NATURAL_LEATHER_CONTENT,
} from "@/components/products/natural-leather/content"
import { PROPORTIONS_CONTENT } from "@/components/products/proportions/content"
import { WHAT_IN_CONTENT } from "@/components/products/what-in/content"
import { BRAND } from "@/lib/brand"
import {
  ML_DAILY_POUCH,
  PRODUCT_COLORS,
  getProductImagePaths,
} from "@/lib/products/ml-daily-pouch"
import { toAbsoluteUrl } from "@/lib/site-url"

const HOME_JSON_LD_ID = {
  belt: "belt",
  naturalLeather: "natural-leather",
  organization: "organization",
  product: "product",
  proportions: "proportions",
  shoulderStrap: "shoulder-strap",
  webpage: "webpage",
  website: "website",
  whatIn: "what-in",
} as const

function flattenCopy(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function homeFragmentId(fragment: string) {
  return `${toAbsoluteUrl(ML_DAILY_POUCH.urlPath)}#${fragment}`
}

function buildCentimeterJsonLd(valueCm: number) {
  return {
    "@type": "QuantitativeValue",
    unitCode: "CMT",
    value: valueCm,
  }
}

function buildPropertyValueJsonLd({
  description,
  name,
  unitCode,
  value,
}: {
  description?: string
  name: string
  unitCode?: string
  value: number | string
}) {
  return {
    "@type": "PropertyValue",
    ...(description ? { description } : {}),
    name,
    ...(unitCode ? { unitCode } : {}),
    value,
  }
}

export function buildOrganizationJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.organization),
    "@type": "Organization",
    name: BRAND.wordmark,
    url: toAbsoluteUrl(ML_DAILY_POUCH.urlPath),
  }
}

export function buildWebSiteJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.website),
    "@type": "WebSite",
    inLanguage: "uk",
    name: BRAND.wordmark,
    publisher: {
      "@id": homeFragmentId(HOME_JSON_LD_ID.organization),
    },
    url: toAbsoluteUrl(ML_DAILY_POUCH.urlPath),
  }
}

export function buildProductJsonLd() {
  const capacityValue = WHAT_IN_CONTENT.items
    .map((item) => item.title)
    .join(", ")
  const { depth, height, width } = ML_DAILY_POUCH.dimensionsCm

  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.product),
    "@type": "Product",
    additionalProperty: [
      ...PROPORTIONS_CONTENT.dimensions.map((dimension) =>
        buildPropertyValueJsonLd({
          description: dimension.description,
          name: dimension.title,
          unitCode: "CMT",
          value: dimension.cm,
        }),
      ),
      buildPropertyValueJsonLd({
        name: WHAT_IN_CONTENT.heading,
        value: capacityValue,
      }),
      buildPropertyValueJsonLd({
        description: flattenCopy(BELT_CONTENT.description),
        name: ML_DAILY_POUCH.strap.label,
        unitCode: "CMT",
        value: ML_DAILY_POUCH.strap.lengthCm,
      }),
    ],
    brand: {
      "@type": "Brand",
      name: BRAND.name,
    },
    color: PRODUCT_COLORS.map((color) => color.label).join(", "),
    depth: buildCentimeterJsonLd(depth),
    description: ML_DAILY_POUCH.seoDescription,
    height: buildCentimeterJsonLd(height),
    image: getProductImagePaths().map((path) => toAbsoluteUrl(path)),
    itemCondition: "https://schema.org/NewCondition",
    name: ML_DAILY_POUCH.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: String(ML_DAILY_POUCH.priceUah),
      priceCurrency: ML_DAILY_POUCH.currency,
      url: toAbsoluteUrl(ML_DAILY_POUCH.urlPath),
    },
    sku: ML_DAILY_POUCH.sku,
    url: toAbsoluteUrl(ML_DAILY_POUCH.urlPath),
    width: buildCentimeterJsonLd(width),
  }
}

export function buildShoulderStrapJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.shoulderStrap),
    "@type": "Product",
    additionalProperty: [
      buildPropertyValueJsonLd({
        name: BELT_CONTENT.features[0].title,
        unitCode: "CMT",
        value: ML_DAILY_POUCH.strap.lengthCm,
      }),
    ],
    description: flattenCopy(BELT_CONTENT.description),
    image: toAbsoluteUrl(BELT_CONTENT.imageSrc),
    isAccessoryOrSparePartFor: {
      "@id": homeFragmentId(HOME_JSON_LD_ID.product),
    },
    name: BELT_CONTENT.headingLines.join(" "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: String(ML_DAILY_POUCH.strap.priceUah),
      priceCurrency: ML_DAILY_POUCH.currency,
      url: homeFragmentId(HOME_JSON_LD_ID.belt),
    },
  }
}

export function buildNaturalLeatherFeaturesItemListJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.naturalLeather),
    "@type": "ItemList",
    itemListElement: NATURAL_LEATHER_BANNER_FEATURES.map((feature, index) => ({
      "@type": "ListItem",
      description: feature.description,
      name: flattenCopy(feature.title),
      position: index + 1,
    })),
    name: NATURAL_LEATHER_CONTENT.bannerHeading,
  }
}

export function buildBeltFeaturesItemListJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.belt),
    "@type": "ItemList",
    description: flattenCopy(BELT_CONTENT.description),
    itemListElement: BELT_CONTENT.features.map((feature, index) => ({
      "@type": "ListItem",
      description: flattenCopy(feature.description),
      name: feature.title,
      position: index + 1,
    })),
    name: BELT_CONTENT.headingLines.join(" "),
    url: homeFragmentId(HOME_JSON_LD_ID.belt),
  }
}

export function buildProportionsItemListJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.proportions),
    "@type": "ItemList",
    description: flattenCopy(PROPORTIONS_CONTENT.intro),
    itemListElement: PROPORTIONS_CONTENT.dimensions.map((dimension, index) => ({
      "@type": "ListItem",
      description: dimension.description,
      name: dimension.title,
      position: index + 1,
    })),
    name: PROPORTIONS_CONTENT.heading,
    url: homeFragmentId(HOME_JSON_LD_ID.proportions),
  }
}

export function buildWhatInItemListJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.whatIn),
    "@type": "ItemList",
    description: WHAT_IN_CONTENT.eyebrow,
    itemListElement: WHAT_IN_CONTENT.items.map((item, index) => ({
      "@type": "ListItem",
      image: toAbsoluteUrl(item.image),
      name: item.title,
      position: index + 1,
    })),
    name: WHAT_IN_CONTENT.heading,
    url: homeFragmentId(HOME_JSON_LD_ID.whatIn),
  }
}

export function buildWebPageJsonLd() {
  return {
    "@id": homeFragmentId(HOME_JSON_LD_ID.webpage),
    "@type": "WebPage",
    about: {
      "@id": homeFragmentId(HOME_JSON_LD_ID.product),
    },
    description: ML_DAILY_POUCH.seoDescription,
    hasPart: [
      { "@id": homeFragmentId(HOME_JSON_LD_ID.naturalLeather) },
      { "@id": homeFragmentId(HOME_JSON_LD_ID.belt) },
      { "@id": homeFragmentId(HOME_JSON_LD_ID.proportions) },
      { "@id": homeFragmentId(HOME_JSON_LD_ID.whatIn) },
    ],
    inLanguage: "uk",
    isPartOf: {
      "@id": homeFragmentId(HOME_JSON_LD_ID.website),
    },
    mainEntity: {
      "@id": homeFragmentId(HOME_JSON_LD_ID.product),
    },
    name: ML_DAILY_POUCH.seoTitle,
    url: toAbsoluteUrl(ML_DAILY_POUCH.urlPath),
  }
}

export function buildHomeJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      buildWebPageJsonLd(),
      buildProductJsonLd(),
      buildShoulderStrapJsonLd(),
      buildNaturalLeatherFeaturesItemListJsonLd(),
      buildBeltFeaturesItemListJsonLd(),
      buildProportionsItemListJsonLd(),
      buildWhatInItemListJsonLd(),
    ],
  }
}
