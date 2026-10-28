import { getImageProps } from "next/image"

import type { CSSProperties } from "react"

import {
  ML_DAILY_POUCH,
  PRODUCT_COLORS,
  PRODUCT_PHOTO_SIZE,
  type ProductColorId,
} from "@/lib/products/ml-daily-pouch"
import { cn } from "@/lib/utils"

const STRAP_STATES = [false, true] as const

/** Matches the stacked hero (`max-lg`). */
const HERO_PRODUCT_MOBILE_MAX_WIDTH_PX = 1023

interface HeroProductProps {
  aspectRatio?: string
  className?: string
  colorId: ProductColorId
  hasShoulderStrap: boolean
  loading?: "eager" | "lazy"
  objectClassName?: string
  productAlt: string
  sizes?: string
}

const HeroProduct = ({
  aspectRatio = `${PRODUCT_PHOTO_SIZE.width} / ${PRODUCT_PHOTO_SIZE.height}`,
  className,
  colorId,
  hasShoulderStrap,
  loading = "eager",
  objectClassName,
  productAlt,
  sizes = "(max-width: 1024px) 66vw, (max-width: 1439px) 920px, 1080px",
}: HeroProductProps) => {
  const isDefaultProduct =
    colorId === ML_DAILY_POUCH.defaultColorId && !hasShoulderStrap

  return (
    <div
      className={cn(
        "relative mx-auto h-[34dvh] w-full min-[1440px]:w-[85%] lg:ml-auto lg:mr-0 lg:h-auto lg:max-h-full lg:w-[72%] lg:aspect-(--hero-product-aspect)",
        className,
      )}
      style={
        {
          "--hero-product-aspect": aspectRatio,
        } as CSSProperties
      }
    >
      {PRODUCT_COLORS.flatMap((color) =>
        STRAP_STATES.map((strapState) => {
          const isActiveProduct =
            color.id === colorId && strapState === hasShoulderStrap
          const productSrc = strapState
            ? color.productSrcWithBelt
            : color.productSrcWithoutBelt
          const productSrcMobile = strapState
            ? color.productSrcWithBeltMobile
            : color.productSrcWithoutBeltMobile
          const imageClassName = cn(
            "object-contain object-bottom drop-shadow-[0_12px_10px_rgba(40,32,24,0.22)]",
            isActiveProduct ? "opacity-100" : "opacity-0",
            objectClassName,
          )
          const {
            props: { srcSet: mobileSrcSet },
          } = getImageProps({
            alt: "",
            fill: true,
            sizes,
            src: productSrcMobile,
            unoptimized: true,
          })
          const { props: desktopImageProps } = getImageProps({
            alt: isActiveProduct ? productAlt : "",
            className: imageClassName,
            fetchPriority:
              isActiveProduct && isDefaultProduct && loading === "eager"
                ? "high"
                : "auto",
            fill: true,
            loading,
            sizes,
            src: productSrc,
            unoptimized: true,
          })

          return (
            <picture key={productSrc}>
              <source
                media={`(max-width: ${HERO_PRODUCT_MOBILE_MAX_WIDTH_PX}px)`}
                srcSet={mobileSrcSet ?? productSrcMobile}
              />
              <img
                {...desktopImageProps}
                alt={isActiveProduct ? productAlt : ""}
                aria-hidden={!isActiveProduct}
              />
            </picture>
          )
        }),
      )}
    </div>
  )
}

export { HeroProduct }
export type { HeroProductProps }
