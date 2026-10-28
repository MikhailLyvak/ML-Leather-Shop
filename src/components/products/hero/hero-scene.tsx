import { getImageProps } from "next/image"

import {
  ML_DAILY_POUCH,
  PRODUCT_COLORS,
  type ProductColorId,
} from "@/lib/products/ml-daily-pouch"

const HERO_BACKGROUND_MOBILE_MAX_WIDTH_PX = 896

interface HeroSceneProps {
  backgroundAlt: string
  colorId: ProductColorId
}

const HeroScene = ({ backgroundAlt, colorId }: HeroSceneProps) => {
  const isDefaultBackground = colorId === ML_DAILY_POUCH.defaultColorId

  return (
    <div className="absolute inset-0 overflow-hidden">
      {PRODUCT_COLORS.map((color) => {
        const isActiveBackground = color.id === colorId
        const imageClassName = `absolute inset-0 size-full object-cover object-[20%_100%] min-[897px]:object-bottom lg:max-[1519px]:object-bottom-right transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
          isActiveBackground ? "opacity-100" : "opacity-0"
        }`
        const {
          props: { srcSet: mobileSrcSet },
        } = getImageProps({
          alt: "",
          className: imageClassName,
          fill: true,
          sizes: "100vw",
          src: color.backgroundSrcMobile,
          unoptimized: true,
        })
        const { props: desktopImageProps } = getImageProps({
          alt: isActiveBackground ? backgroundAlt : "",
          className: imageClassName,
          fetchPriority:
            isActiveBackground && isDefaultBackground ? "high" : "auto",
          fill: true,
          loading: "eager",
          sizes: "100vw",
          src: color.backgroundSrc,
          unoptimized: true,
        })

        return (
          <picture key={color.id}>
            <source
              media={`(max-width: ${HERO_BACKGROUND_MOBILE_MAX_WIDTH_PX}px)`}
              srcSet={mobileSrcSet ?? color.backgroundSrcMobile}
            />
            <img
              {...desktopImageProps}
              alt={isActiveBackground ? backgroundAlt : ""}
              aria-hidden={!isActiveBackground}
            />
          </picture>
        )
      })}
      <div
        className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
          colorId === "cognac" ? "opacity-0" : "opacity-25"
        }`}
      />
    </div>
  )
}

export { HeroScene }
export type { HeroSceneProps }
