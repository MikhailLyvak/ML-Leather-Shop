import Image from "next/image"

import {
  ML_DAILY_POUCH,
  PRODUCT_COLORS,
  PRODUCT_PHOTO_SIZE,
  type ProductColorId,
} from "@/lib/products/ml-daily-pouch"
import { cn } from "@/lib/utils"

const STRAP_STATES = [false, true] as const

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
  objectClassName = "object-contain object-bottom drop-shadow-[0_12px_10px_rgba(40,32,24,0.22)]",
  productAlt,
  sizes = "(max-width: 1024px) 66vw, (max-width: 1439px) 920px, 1080px",
}: HeroProductProps) => {
  const isDefaultProduct =
    colorId === ML_DAILY_POUCH.defaultColorId && !hasShoulderStrap

  return (
    <div
      className={cn(
        "relative mx-auto max-h-full w-[72%] min-[1440px]:w-[85%] lg:ml-auto lg:mr-0",
        className,
      )}
      style={{
        aspectRatio,
      }}
    >
      {PRODUCT_COLORS.flatMap((color) =>
        STRAP_STATES.map((strapState) => {
          const isActiveProduct =
            color.id === colorId && strapState === hasShoulderStrap
          const productSrc = strapState
            ? color.productSrcWithBelt
            : color.productSrcWithoutBelt

          return (
            <Image
              alt={isActiveProduct ? productAlt : ""}
              aria-hidden={!isActiveProduct}
              className={cn(
                objectClassName,
                isActiveProduct ? "opacity-100" : "opacity-0",
              )}
              fetchPriority={
                isActiveProduct && isDefaultProduct && loading === "eager"
                  ? "high"
                  : "auto"
              }
              fill
              key={productSrc}
              loading={loading}
              sizes={sizes}
              src={productSrc}
              unoptimized
            />
          )
        }),
      )}
    </div>
  )
}

export { HeroProduct }
export type { HeroProductProps }
