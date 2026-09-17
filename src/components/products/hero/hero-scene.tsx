import Image from "next/image"

import {
  ML_DAILY_POUCH,
  PRODUCT_COLORS,
  type ProductColorId,
} from "@/lib/products/ml-daily-pouch"

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

        return (
          <Image
            alt={isActiveBackground ? backgroundAlt : ""}
            aria-hidden={!isActiveBackground}
            className={`object-cover object-bottom lg:max-[1519px]:object-bottom-right transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
              isActiveBackground ? "opacity-100" : "opacity-0"
            }`}
            fetchPriority={
              isActiveBackground && isDefaultBackground ? "high" : "auto"
            }
            fill
            key={color.backgroundSrc}
            loading="eager"
            sizes="100vw"
            src={color.backgroundSrc}
            unoptimized
          />
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
