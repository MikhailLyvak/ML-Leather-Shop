import { Check } from "lucide-react"

import { ML_DAILY_POUCH, formatPriceUah } from "@/lib/products/ml-daily-pouch"
import { cn } from "@/lib/utils"

interface HeroStrapOptionProps {
  hasShoulderStrap: boolean
  isDark?: boolean
  onShoulderStrapChange: (nextValue: boolean) => void
  variant?: "overlay" | "plain"
}

const HeroStrapOption = ({
  hasShoulderStrap,
  isDark = false,
  onShoulderStrapChange,
  variant = "overlay",
}: HeroStrapOptionProps) => {
  return (
    <label
      className={cn(
        "flex w-full min-w-0 cursor-pointer items-center justify-between gap-2 text-xs min-[1440px]:text-sm",
        variant === "plain"
          ? "rounded-2xl border border-[#C4B8A8] px-4 py-3 text-[#211E1A]"
          : `rounded-2xl px-3 py-2 shadow-sm transition-colors duration-1000 ease-in-out motion-reduce:transition-none min-[1440px]:py-2.5 ${
              isDark
                ? "bg-white/92 text-neutral-950"
                : "bg-white/90 text-neutral-900"
            }`,
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <span className="relative size-5 shrink-0">
          <input
            checked={hasShoulderStrap}
            className="peer size-5 appearance-none rounded-md border-2 border-cognac bg-transparent checked:bg-cognac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cognac"
            onChange={(event) => onShoulderStrapChange(event.target.checked)}
            type="checkbox"
          />
          <Check
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto size-3.5 text-white opacity-0 peer-checked:opacity-100"
            strokeWidth={3}
          />
        </span>
        <span className="min-w-0 leading-snug">{ML_DAILY_POUCH.strap.label}</span>
      </span>
      <span className="shrink-0 text-[20px] font-medium leading-none text-cognac tabular-nums min-[1440px]:text-[24px]">
        +{formatPriceUah(ML_DAILY_POUCH.strap.priceUah)}
      </span>
    </label>
  )
}

export { HeroStrapOption }
export type { HeroStrapOptionProps }
