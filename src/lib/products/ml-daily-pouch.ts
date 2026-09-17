import { HOME_HREF } from "@/utils/route-href"

export const PRODUCT_COLOR_IDS = ["black", "brown", "cognac"] as const

export type ProductColorId = (typeof PRODUCT_COLOR_IDS)[number]

export type HeroTheme = "dark" | "light"

type ProductFileKey = "black" | "brown" | "orange"

export type ProductColor = {
  alt: string
  backgroundAlt: string
  backgroundSrc: string
  fileKey: ProductFileKey
  id: ProductColorId
  label: string
  productSrcWithBelt: string
  productSrcWithoutBelt: string
  selectorSrc: string
  theme: HeroTheme
}

function colorAssets(fileKey: ProductFileKey) {
  return {
    backgroundSrc: `/images/hero_block_bg/color_${fileKey}.png`,
    productSrcWithBelt: `/images/product/with_belt/color_${fileKey}.png`,
    productSrcWithoutBelt: `/images/product/without_belt/color_${fileKey}.png`,
    selectorSrc: `/images/product/minimalistic_selector/color_${fileKey}.png`,
  }
}

export const HERO_BACKGROUND_SIZE = {
  height: 1026,
  width: 1920,
} as const

export const PRODUCT_PHOTO_SIZE = {
  height: 675,
  width: 1271,
} as const

export const ML_DAILY_POUCH = {
  currency: "UAH",
  defaultColorId: "cognac" as ProductColorId,
  description:
    "Чоловічий клатч із натуральної італійської шкіри.\nДля порядку, стилю та щоденного комфорту.",
  dimensionsCm: {
    depth: 3,
    height: 17,
    width: 25,
  },
  name: "ML Daily Pouch",
  priceUah: 6990,
  seoDescription:
    "Чоловічий клатч ML Daily Pouch із натуральної шкіри: телефон у зовнішній кишені, менше речей у кишенях — для порядку, стилю та щоденного комфорту.",
  seoTitle: "ML Daily Pouch — чоловіча шкіряна сумка-органайзер",
  sku: "ML-DAILY-POUCH",
  slug: "ml-daily-pouch",
  strap: {
    label: "Шкіряний ремінь 140 см",
    lengthCm: 140,
    priceUah: 899,
  },
  urlPath: HOME_HREF,
} as const

const BLACK_ASSETS = colorAssets("black")
const BROWN_ASSETS = colorAssets("brown")
const COGNAC_ASSETS = colorAssets("orange")

export const PRODUCT_COLOR_MAP: Record<ProductColorId, ProductColor> = {
  black: {
    alt: "Чорний чоловічий шкіряний клатч ML Daily Pouch з кишенею для телефона",
    backgroundAlt:
      "Мармурова тераса з класичною колоною на тлі зоряного нічного узбережжя",
    backgroundSrc: BLACK_ASSETS.backgroundSrc,
    fileKey: "black",
    id: "black",
    label: "Black",
    productSrcWithBelt: BLACK_ASSETS.productSrcWithBelt,
    productSrcWithoutBelt: BLACK_ASSETS.productSrcWithoutBelt,
    selectorSrc: BLACK_ASSETS.selectorSrc,
    theme: "dark",
  },
  brown: {
    alt: "Темно-коричневий чоловічий шкіряний клатч ML Daily Pouch з кишенею для телефона",
    backgroundAlt:
      "Мармурова тераса з класичною колоною на тлі узбережжя в сутінках",
    backgroundSrc: BROWN_ASSETS.backgroundSrc,
    fileKey: "brown",
    id: "brown",
    label: "Brown",
    productSrcWithBelt: BROWN_ASSETS.productSrcWithBelt,
    productSrcWithoutBelt: BROWN_ASSETS.productSrcWithoutBelt,
    selectorSrc: BROWN_ASSETS.selectorSrc,
    theme: "dark",
  },
  cognac: {
    alt: "Коньячний чоловічий шкіряний клатч ML Daily Pouch з кишенею для телефона",
    backgroundAlt:
      "Мармурова тераса з класичною колоною на тлі середземноморського узбережжя вдень",
    backgroundSrc: COGNAC_ASSETS.backgroundSrc,
    fileKey: "orange",
    id: "cognac",
    label: "Cognac",
    productSrcWithBelt: COGNAC_ASSETS.productSrcWithBelt,
    productSrcWithoutBelt: COGNAC_ASSETS.productSrcWithoutBelt,
    selectorSrc: COGNAC_ASSETS.selectorSrc,
    theme: "light",
  },
}

export const PRODUCT_COLORS = PRODUCT_COLOR_IDS.map(
  (colorId) => PRODUCT_COLOR_MAP[colorId],
)

export function getHeroVisual(
  colorId: ProductColorId,
  hasShoulderStrap: boolean,
) {
  const color = PRODUCT_COLOR_MAP[colorId]
  const productAlt = hasShoulderStrap
    ? `${color.alt} та шкіряним ременем`
    : color.alt

  return {
    backgroundAlt: color.backgroundAlt,
    backgroundSrc: color.backgroundSrc,
    productAlt,
    productSrc: hasShoulderStrap
      ? color.productSrcWithBelt
      : color.productSrcWithoutBelt,
    theme: color.theme,
  }
}

export function getHeroPriceUah(hasShoulderStrap: boolean) {
  if (hasShoulderStrap) {
    return ML_DAILY_POUCH.priceUah + ML_DAILY_POUCH.strap.priceUah
  }

  return ML_DAILY_POUCH.priceUah
}

export function formatPriceUah(amount: number) {
  return `${amount.toLocaleString("uk-UA")} ₴`
}

export function getDefaultProductColor() {
  return PRODUCT_COLOR_MAP[ML_DAILY_POUCH.defaultColorId]
}

export function getProductImagePaths() {
  const defaultColor = getDefaultProductColor()
  const rest = PRODUCT_COLORS.flatMap((color) => [
    color.productSrcWithoutBelt,
    color.productSrcWithBelt,
  ]).filter((path) => path !== defaultColor.productSrcWithoutBelt)

  return [defaultColor.productSrcWithoutBelt, ...rest]
}
