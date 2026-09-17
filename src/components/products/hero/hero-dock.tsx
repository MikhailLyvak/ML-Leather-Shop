"use client"

import { HeroAddToCartButton } from "@/components/products/hero/hero-add-to-cart-button"
import { ML_DAILY_POUCH } from "@/lib/products/ml-daily-pouch"
import { cn } from "@/lib/utils"

interface HeroDockProps {
  formattedPrice: string
  isVisible: boolean
}

const HeroDock = ({ formattedPrice, isVisible }: HeroDockProps) => {
  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        "pointer-events-none fixed bottom-0 left-0 z-50 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex w-max max-w-[100vw] items-center justify-between gap-4 overflow-hidden rounded-none rounded-tr-2xl bg-white/85 px-[26px] py-2.5 text-neutral-950 shadow-sm backdrop-blur-md sm:gap-5 lg:gap-10 max-[1919px]:gap-3 max-[1919px]:py-2 max-[1919px]:sm:gap-4",
          !isVisible && "pointer-events-none",
        )}
      >
        <p className="truncate font-serif text-sm tracking-wide uppercase sm:text-base max-[1919px]:text-xs max-[1919px]:sm:text-sm">
          {ML_DAILY_POUCH.name}
        </p>
        <div className="flex items-center gap-5 max-[1919px]:gap-3 max-[1919px]:sm:gap-4">
          <p className="align-middle text-sm font-medium leading-none tracking-normal text-cognac tabular-nums [text-box:trim-both_cap_alphabetic] sm:text-lg max-[1919px]:sm:text-sm">
            {formattedPrice}
          </p>
          <HeroAddToCartButton compact />
        </div>
      </div>
    </div>
  )
}

export { HeroDock }
export type { HeroDockProps }
