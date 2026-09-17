import Image from "next/image"

import {
  PRODUCT_COLORS,
  type ProductColorId,
} from "@/lib/products/ml-daily-pouch"
import { cn } from "@/lib/utils"

interface HeroColorPickerProps {
  colorId: ProductColorId
  isDark?: boolean
  onColorChange: (colorId: ProductColorId) => void
  variant?: "overlay" | "panel"
}

const HeroColorPicker = ({
  colorId,
  isDark = false,
  onColorChange,
  variant = "overlay",
}: HeroColorPickerProps) => {
  return (
    <div
      aria-label="Колір"
      className="grid w-full grid-cols-3 gap-2.5"
      role="radiogroup"
    >
      {PRODUCT_COLORS.map((color) => {
        const isSelected = color.id === colorId

        return (
          <button
            aria-checked={isSelected}
            className={cn(
              "flex h-[84px] w-full flex-col items-center justify-center gap-1 rounded-2xl border p-2 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current min-[1440px]:h-[99.12px]",
              variant === "panel"
                ? isSelected
                  ? "border-[#211E1A] bg-white text-[#211E1A] shadow-sm"
                  : "border-[#E4DDD2] bg-white text-[#211E1A] hover:border-[#C8BDB0]"
                : isSelected
                  ? isDark
                    ? "border-transparent bg-white/90 text-neutral-950"
                    : "border-transparent bg-white text-neutral-950 shadow-sm"
                  : isDark
                    ? "border-white/20 bg-white/10 text-white/80 hover:bg-white/16"
                    : "border-white/70 bg-white/35 text-neutral-800 hover:bg-white/55",
            )}
            key={color.id}
            onClick={() => onColorChange(color.id)}
            role="radio"
            type="button"
          >
            <span className="text-[0.65rem] tracking-wide">{color.label}</span>
            <span className="relative min-h-0 w-full flex-1 overflow-hidden">
              <Image
                alt=""
                className="object-contain"
                fill
                loading="eager"
                sizes="132px"
                src={color.selectorSrc}
                unoptimized
              />
            </span>
          </button>
        )
      })}
    </div>
  )
}

export { HeroColorPicker }
export type { HeroColorPickerProps }
