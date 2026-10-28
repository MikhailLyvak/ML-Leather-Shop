import Image from "next/image"

import { cn } from "@/lib/utils"

const MEANDER_SRC = "/images/elements/antic_underline.svg"

interface MeanderDividerProps {
  className?: string
}

/**
 * Decorative Greek-key strip. Below `lg` it keeps the mobile mockup height
 * (21px) and crops horizontally instead of shrinking with the viewport.
 */
const MeanderDivider = ({ className }: MeanderDividerProps) => {
  return (
    <Image
      alt=""
      aria-hidden
      className={cn(
        "h-[21px] w-full object-cover object-left lg:h-auto lg:object-fill",
        className,
      )}
      height={52}
      src={MEANDER_SRC}
      width={1920}
    />
  )
}

export { MeanderDivider }
