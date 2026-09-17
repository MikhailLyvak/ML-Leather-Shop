"use client"

import { useRef, type CSSProperties } from "react"

import { HeroAddToCartButton } from "@/components/products/hero/hero-add-to-cart-button"
import { HeroColorPicker } from "@/components/products/hero/hero-color-picker"
import { HeroDock } from "@/components/products/hero/hero-dock"
import {
  HeroHeader,
  HeroHeaderSticky,
} from "@/components/products/hero/hero-header"
import { HeroProduct } from "@/components/products/hero/hero-product"
import { HeroScene } from "@/components/products/hero/hero-scene"
import { HeroStrapOption } from "@/components/products/hero/hero-strap-option"
import {
  useHeroDockVisibility,
  useHeroExperience,
  useStickyHeader,
} from "@/components/products/hero/hooks"
import { ML_DAILY_POUCH, formatPriceUah } from "@/lib/products/ml-daily-pouch"

const HERO_FRAME_WIDTH_PX = 1520
const HERO_FRAME_GUTTER_PX = 20
const HERO_FRAME_COLUMNS = 12
const HERO_COPY_COLUMN_START = 3
const HERO_COPY_MIN_INSET_PX = 80

const HERO_COLUMN_WIDTH_PX =
  (HERO_FRAME_WIDTH_PX - (HERO_FRAME_COLUMNS - 1) * HERO_FRAME_GUTTER_PX) /
  HERO_FRAME_COLUMNS

const HERO_COPY_INSET_IN_FRAME_PX =
  (HERO_COPY_COLUMN_START - 1) * (HERO_COLUMN_WIDTH_PX + HERO_FRAME_GUTTER_PX)

const HERO_FRAME_LEFT = `min(calc((100% - ${HERO_FRAME_WIDTH_PX}px) / 2), calc(100% - ${HERO_FRAME_WIDTH_PX}px))`

const heroLayoutStyle = {
  "--hero-copy-left": `max(${HERO_COPY_MIN_INSET_PX}px, calc(${HERO_FRAME_LEFT} + ${HERO_COPY_INSET_IN_FRAME_PX}px))`,
  "--hero-frame-left": HERO_FRAME_LEFT,
} as CSSProperties

const HeroExperience = () => {
  const primaryCtaRef = useRef<HTMLButtonElement>(null)
  const {
    colorId,
    hasShoulderStrap,
    onColorChange,
    onShoulderStrapChange,
    priceUah,
    visual,
  } = useHeroExperience()
  const isDockVisible = useHeroDockVisibility(primaryCtaRef)
  const isSticky = useStickyHeader()

  const isDark = visual.theme === "dark"
  const formattedPrice = formatPriceUah(priceUah)

  return (
    <>
      <section
        aria-label={ML_DAILY_POUCH.name}
        className={`relative isolate h-dvh overflow-hidden transition-colors duration-1000 ease-in-out motion-reduce:transition-none ${
          isDark ? "text-[#f4efe6]" : "text-neutral-950"
        }`}
      >
      <HeroScene backgroundAlt={visual.backgroundAlt} colorId={colorId} />
      <HeroHeader isDark={isDark} isSticky={isSticky} />
      <div
        className="relative z-20 mx-auto grid h-full w-full max-w-[1520px] grid-cols-12 grid-rows-[auto_1fr] gap-x-5 px-5 sm:px-10 min-[1520px]:px-0 lg:mx-0 lg:block lg:max-w-none lg:px-0"
        style={heroLayoutStyle}
      >
        <div className="relative z-10 col-span-12 row-start-1 pt-20 sm:pt-24 lg:absolute lg:inset-y-0 lg:left-(--hero-copy-left) lg:z-10 lg:flex lg:flex-col max-[1439px]:lg:justify-start max-[1439px]:lg:pt-32 min-[1440px]:lg:justify-center min-[1440px]:lg:pt-0 min-[1680px]:lg:pb-20">
          <h1 className="whitespace-nowrap font-serif text-[clamp(1.5rem,6.4vw,3.8rem)] font-semibold leading-[1.05] tracking-tight uppercase min-[1440px]:text-[clamp(1.75rem,7.5vw,4.5rem)]">
            {ML_DAILY_POUCH.name}
          </h1>
          <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-current/80 min-[1440px]:mt-6 min-[1440px]:text-base">
            {ML_DAILY_POUCH.description}
          </p>
          <div className="mt-5 flex flex-nowrap items-center gap-8 min-[1440px]:mt-6 min-[1440px]:gap-10">
            <p className="shrink-0 whitespace-nowrap align-middle text-[40px] font-medium leading-none tabular-nums tracking-normal text-cognac [text-box:trim-both_cap_alphabetic] min-[1440px]:text-[48px]">
              {formattedPrice}
            </p>
            <HeroAddToCartButton isDark={isDark} ref={primaryCtaRef} />
          </div>
          <div className="mt-6 flex w-[352px] max-w-full flex-col gap-9 min-[1440px]:mt-7 min-[1440px]:w-[413.5px] min-[1440px]:gap-[42px]">
            <HeroColorPicker
              colorId={colorId}
              isDark={isDark}
              onColorChange={onColorChange}
            />
            <HeroStrapOption
              hasShoulderStrap={hasShoulderStrap}
              isDark={isDark}
              onShoulderStrapChange={onShoulderStrapChange}
            />
          </div>
        </div>
        <div className="pointer-events-none relative z-0 col-span-12 row-start-2 min-h-0 min-w-0 self-end lg:absolute lg:inset-y-0 lg:left-(--hero-frame-left) lg:z-0 lg:grid lg:w-[1520px] lg:grid-cols-12 lg:gap-x-5 lg:self-auto">
          <div className="min-h-0 min-w-0 w-full lg:col-span-10 lg:col-start-3 lg:self-end">
            <HeroProduct
              colorId={colorId}
              hasShoulderStrap={hasShoulderStrap}
              productAlt={visual.productAlt}
            />
          </div>
        </div>
      </div>
      </section>
      <HeroHeaderSticky isVisible={isSticky} />
      <HeroDock formattedPrice={formattedPrice} isVisible={isDockVisible} />
    </>
  )
}

export { HeroExperience }
