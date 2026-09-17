"use client"

import Image from "next/image"

import { GOOD_CARD_CONTENT } from "@/components/products/good-card/content"
import { HeroAddToCartButton } from "@/components/products/hero/hero-add-to-cart-button"
import { HeroColorPicker } from "@/components/products/hero/hero-color-picker"
import { HeroProduct } from "@/components/products/hero/hero-product"
import { HeroStrapOption } from "@/components/products/hero/hero-strap-option"
import { useProductSelection } from "@/components/products/product-selection"
import {
  ML_DAILY_POUCH,
  PRODUCT_COLOR_MAP,
  formatPriceUah,
} from "@/lib/products/ml-daily-pouch"

const MEANDER_FILL_STYLE = {
  backgroundImage: `url(${GOOD_CARD_CONTENT.backgroundSrc})`,
  maskImage: `url(${GOOD_CARD_CONTENT.meanderSrc})`,
  maskRepeat: "repeat-x",
  maskSize: "auto 100%",
  WebkitMaskImage: `url(${GOOD_CARD_CONTENT.meanderSrc})`,
  WebkitMaskRepeat: "repeat-x",
  WebkitMaskSize: "auto 100%",
} as const

const GoodCardMeander = () => {
  return (
    <div
      aria-hidden
      className="@container relative h-[52px] w-full shrink-0 overflow-hidden lg:h-auto lg:w-[52px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={MEANDER_FILL_STYLE}
      />
      <div
        className="absolute top-0 left-full hidden h-[52px] w-[100cqh] origin-top-left rotate-90 bg-cover bg-center lg:block"
        style={MEANDER_FILL_STYLE}
      />
    </div>
  )
}

const GoodCard = () => {
  const {
    colorId,
    hasShoulderStrap,
    onColorChange,
    onShoulderStrapChange,
    priceUah,
  } = useProductSelection()

  return (
    <section
      aria-labelledby={GOOD_CARD_CONTENT.headingId}
      className="my-30"
      id={GOOD_CARD_CONTENT.sectionId}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-[#F4EFE6] shadow-[0_12px_40px_rgba(40,32,24,0.08)]">
          <div className="relative flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)] lg:items-stretch">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[640px]">
              <Image
                alt=""
                aria-hidden
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={GOOD_CARD_CONTENT.backgroundSrc}
              />
              <div className="relative z-10 flex h-full min-h-[360px] items-center justify-center px-8 lg:min-h-[640px] lg:px-10">
                <HeroProduct
                  aspectRatio="1.55 / 1"
                  className="mx-0 w-full max-w-none lg:ml-0 lg:mr-0"
                  colorId={colorId}
                  hasShoulderStrap={false}
                  loading="lazy"
                  objectClassName="object-cover object-right drop-shadow-[0_18px_24px_rgba(40,32,24,0.28)]"
                  productAlt={PRODUCT_COLOR_MAP[colorId].alt}
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </div>
            <GoodCardMeander />
            <div className="flex w-full flex-col items-center justify-center px-8 py-10 sm:px-12 lg:px-8 lg:py-14">
              <div className="flex w-full max-w-[414px] flex-col">
                <h2
                  className="m-0 font-serif text-[44px] font-bold uppercase leading-none tracking-normal text-[#211E1A] [text-box:trim-both_cap_alphabetic] sm:text-[52px]"
                  id={GOOD_CARD_CONTENT.headingId}
                >
                  <span className="block">ML Daily</span>
                  <span className="block">Pouch</span>
                </h2>
                <p className="mt-5 m-0 font-gilroy text-base font-normal leading-relaxed text-[#211E1A]">
                  {ML_DAILY_POUCH.description}
                </p>
                <p className="mt-6 m-0 font-gilroy text-[40px] font-medium leading-none tabular-nums tracking-normal text-cognac [text-box:trim-both_cap_alphabetic] sm:text-5xl">
                  {formatPriceUah(priceUah)}
                </p>
                <div className="mt-8 w-full">
                  <HeroColorPicker
                    colorId={colorId}
                    onColorChange={onColorChange}
                    variant="panel"
                  />
                </div>
                <div className="mt-6 w-full">
                  <HeroStrapOption
                    hasShoulderStrap={hasShoulderStrap}
                    onShoulderStrapChange={onShoulderStrapChange}
                    variant="plain"
                  />
                </div>
                <HeroAddToCartButton className="mt-8 flex h-14 w-full min-[1440px]:h-14 min-[1440px]:w-full" />
                <p className="mt-4 m-0 text-center font-gilroy text-xs font-normal leading-normal tracking-wide text-[#736B60]">
                  {GOOD_CARD_CONTENT.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoodCard
