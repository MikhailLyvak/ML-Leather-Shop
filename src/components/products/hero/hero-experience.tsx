"use client"

import { type CSSProperties, useRef } from "react"

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
  const heroRef = useRef<HTMLElement>(null)
  const {
    colorId,
    hasShoulderStrap,
    onColorChange,
    onShoulderStrapChange,
    priceUah,
    visual,
  } = useHeroExperience()
  const isDockVisible = useHeroDockVisibility(heroRef)
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
        ref={heroRef}
      >
        <HeroScene backgroundAlt={visual.backgroundAlt} colorId={colorId} />
        <HeroHeader isDark={isDark} isSticky={isSticky} />
        <div
          className="relative z-20 mx-auto flex h-full w-full max-w-[1520px] flex-col justify-end px-5 pt-20 pb-5.5 sm:px-10 sm:pt-24 min-[1520px]:px-0 lg:mx-0 lg:block lg:max-w-none lg:justify-start lg:px-0 lg:pt-0 lg:pb-0"
          style={heroLayoutStyle}
        >
          <div className="relative z-10 flex shrink-0 flex-col items-center text-center lg:absolute lg:inset-y-0 lg:left-(--hero-copy-left) lg:z-10 lg:items-start lg:text-left max-[1439px]:lg:justify-start max-[1439px]:lg:pt-32 min-[1440px]:lg:justify-center min-[1440px]:lg:pt-0 min-[1680px]:lg:pb-20">
            <h1 className="font-serif text-[36px] font-bold leading-[normal] tracking-normal uppercase lg:font-semibold lg:leading-[1.05] lg:tracking-tight lg:whitespace-nowrap lg:text-[clamp(1.5rem,6.4vw,3.8rem)] min-[1440px]:text-[clamp(1.75rem,7.5vw,4.5rem)]">
              {ML_DAILY_POUCH.name}
            </h1>
            <p className="mt-3 max-w-[22rem] font-gilroy text-[14px] font-normal leading-[normal] tracking-normal text-current/80 lg:mt-5 lg:max-w-none lg:font-sans lg:leading-relaxed min-[1440px]:mt-6 min-[1440px]:text-base">
              <span className="whitespace-pre-line lg:hidden">
                {ML_DAILY_POUCH.descriptionMobile}
              </span>
              <span className="hidden whitespace-pre-line lg:inline">
                {ML_DAILY_POUCH.description}
              </span>
            </p>
            <div className="mt-4 flex flex-col items-center gap-4 lg:mt-5 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-8 min-[1440px]:mt-6 min-[1440px]:gap-10">
              <p className="shrink-0 whitespace-nowrap align-middle text-[40px] font-medium leading-none tabular-nums tracking-normal text-cognac [text-box:trim-both_cap_alphabetic] min-[1440px]:text-[48px] max-lg:font-gilroy max-lg:text-[36px] max-lg:leading-[normal] max-lg:[text-box:normal]">
                {formattedPrice}
              </p>
              <HeroAddToCartButton isDark={isDark} />
            </div>
            <HeroStrapOption
              className="mt-4 w-auto rounded-full px-4 py-2.5 lg:hidden"
              hasShoulderStrap={hasShoulderStrap}
              isDark={isDark}
              onShoulderStrapChange={onShoulderStrapChange}
            />
            <div className="mt-6 hidden w-[352px] max-w-full flex-col gap-9 lg:flex min-[1440px]:mt-7 min-[1440px]:w-[413.5px] min-[1440px]:gap-[42px]">
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
          <div className="pointer-events-none relative z-0 min-h-0 w-full shrink lg:absolute lg:inset-y-0 lg:left-(--hero-frame-left) lg:z-0 lg:grid lg:w-[1520px] lg:grid-cols-12 lg:gap-x-5 lg:self-auto">
            <div className="min-h-0 min-w-0 w-full lg:col-span-10 lg:col-start-3 lg:self-end">
              <HeroProduct
                colorId={colorId}
                hasShoulderStrap={hasShoulderStrap}
                productAlt={visual.productAlt}
              />
            </div>
          </div>
          <div className="relative z-10 flex shrink-0 justify-center pt-1 lg:hidden">
            <HeroColorPicker
              colorId={colorId}
              onColorChange={onColorChange}
              variant="dots"
            />
          </div>
        </div>
      </section>
      <HeroHeaderSticky isVisible={isSticky} />
      <HeroDock formattedPrice={formattedPrice} isVisible={isDockVisible} />
    </>
  )
}

export { HeroExperience }
