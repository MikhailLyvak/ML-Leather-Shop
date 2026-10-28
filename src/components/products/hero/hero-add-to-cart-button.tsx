import type { Ref } from "react"

import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

interface HeroAddToCartButtonProps {
  className?: string
  compact?: boolean
  isDark?: boolean
  ref?: Ref<HTMLButtonElement>
  variant?: "filled" | "outline"
}

const HeroAddToCartButton = ({
  className,
  compact = false,
  isDark = false,
  ref,
  variant = "filled",
}: HeroAddToCartButtonProps) => {
  const plusClassName =
    variant === "outline"
      ? "size-4"
      : compact
        ? "size-4 sm:size-5 max-[1919px]:size-3.5 max-[1919px]:sm:size-4"
        : "size-5 min-[1440px]:size-6"

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "outline"
          ? "rounded-full border border-white bg-transparent px-6.5 py-3.5 text-white transition-[color,background-color,border-color,transform] duration-300 ease-out hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98] focus-visible:outline-white"
          : compact
            ? "rounded-full bg-neutral-950 px-4 py-2 text-xs text-white transition-colors duration-1000 ease-in-out hover:bg-neutral-800 focus-visible:outline-current sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm max-[1919px]:px-3 max-[1919px]:py-1.5 max-[1919px]:sm:gap-1.5 max-[1919px]:sm:px-4 max-[1919px]:sm:py-2 max-[1919px]:sm:text-xs"
            : `h-12 rounded-full px-7 transition-colors duration-1000 ease-in-out focus-visible:outline-current sm:h-[50px] sm:w-[195px] min-[1440px]:h-[60px] min-[1440px]:w-[229px] min-[1440px]:text-base ${
                isDark
                  ? "bg-[#f4efe6] text-neutral-950 hover:bg-white"
                  : "bg-neutral-950 text-white hover:bg-neutral-800"
              }`,
        className,
      )}
      type="button"
    >
      Додати до кошика
      <Plus aria-hidden="true" className={plusClassName} strokeWidth={1.75} />
    </button>
  )
}

export { HeroAddToCartButton }
export type { HeroAddToCartButtonProps }
