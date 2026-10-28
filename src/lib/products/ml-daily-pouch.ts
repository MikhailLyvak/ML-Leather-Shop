import { HOME_HREF } from "@/utils/route-href"

export const PRODUCT_COLOR_IDS = ["black", "brown", "cognac"] as const

export type ProductColorId = (typeof PRODUCT_COLOR_IDS)[number]

export type HeroTheme = "dark" | "light"

type ProductFileKey = "black" | "brown" | "orange"

export type ProductColor = {
  alt: string
  backgroundAlt: string
  backgroundSrc: string
  backgroundSrcMobile: string
  fileKey: ProductFileKey
  id: ProductColorId
  label: string
  productSrcWithBelt: string
  productSrcWithBeltMobile: string
  productSrcWithoutBelt: string
  productSrcWithoutBeltMobile: string
  selectorSrc: string
  swatch: string
  theme: HeroTheme
}

function colorAssets(fileKey: ProductFileKey) {
  return {
    backgroundSrc: `/images/hero_block_bg/color_${fileKey}.png`,
    backgroundSrcMobile: `/images/hero_block_bg/color_${fileKey}_mobile.png`,
    productSrcWithBelt: `/images/product/with_belt/color_${fileKey}.png`,
    productSrcWithBeltMobile: `/images/product/with_belt/color_${fileKey}_mobile.png`,
    productSrcWithoutBelt: `/images/product/without_belt/color_${fileKey}.png`,
    productSrcWithoutBeltMobile: `/images/product/without_belt/color_${fileKey}_mobile.png`,
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
  descriptionMobile:
    "Чоловічий клатч із натуральної італійської\nшкіри. Для порядку, стилю та щоденного\nкомфорту.",
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
    backgroundSrcMobile: BLACK_ASSETS.backgroundSrcMobile,
    fileKey: "black",
    id: "black",
    label: "Black",
    productSrcWithBelt: BLACK_ASSETS.productSrcWithBelt,
    productSrcWithBeltMobile: BLACK_ASSETS.productSrcWithBeltMobile,
    productSrcWithoutBelt: BLACK_ASSETS.productSrcWithoutBelt,
    productSrcWithoutBeltMobile: BLACK_ASSETS.productSrcWithoutBeltMobile,
    selectorSrc: BLACK_ASSETS.selectorSrc,
    swatch: "#1A1A1A",
    theme: "dark",
  },
  brown: {
    alt: "Темно-коричневий чоловічий шкіряний клатч ML Daily Pouch з кишенею для телефона",
    backgroundAlt:
      "Мармурова тераса з класичною колоною на тлі узбережжя в сутінках",
    backgroundSrc: BROWN_ASSETS.backgroundSrc,
    backgroundSrcMobile: BROWN_ASSETS.backgroundSrcMobile,
    fileKey: "brown",
    id: "brown",
    label: "Brown",
    productSrcWithBelt: BROWN_ASSETS.productSrcWithBelt,
    productSrcWithBeltMobile: BROWN_ASSETS.productSrcWithBeltMobile,
    productSrcWithoutBelt: BROWN_ASSETS.productSrcWithoutBelt,
    productSrcWithoutBeltMobile: BROWN_ASSETS.productSrcWithoutBeltMobile,
    selectorSrc: BROWN_ASSETS.selectorSrc,
    swatch: "#4A3428",
    theme: "dark",
  },
  cognac: {
    alt: "Коньячний чоловічий шкіряний клатч ML Daily Pouch з кишенею для телефона",
    backgroundAlt:
      "Мармурова тераса з класичною колоною на тлі середземноморського узбережжя вдень",
    backgroundSrc: COGNAC_ASSETS.backgroundSrc,
    backgroundSrcMobile: COGNAC_ASSETS.backgroundSrcMobile,
    fileKey: "orange",
    id: "cognac",
    label: "Cognac",
    productSrcWithBelt: COGNAC_ASSETS.productSrcWithBelt,
    productSrcWithBeltMobile: COGNAC_ASSETS.productSrcWithBeltMobile,
    productSrcWithoutBelt: COGNAC_ASSETS.productSrcWithoutBelt,
    productSrcWithoutBeltMobile: COGNAC_ASSETS.productSrcWithoutBeltMobile,
    selectorSrc: COGNAC_ASSETS.selectorSrc,
    swatch: "#C4784A",
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
