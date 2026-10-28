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
      className="@container relative h-8 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[52px]"
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
      className="my-10 lg:my-30"
      id={GOOD_CARD_CONTENT.sectionId}
    >
      <div className="mx-auto max-w-7xl px-[15px] sm:px-10">
        <div className="relative overflow-hidden rounded-[15px] bg-[#F2EFEB] lg:rounded-[28px] lg:bg-[#F4EFE6] lg:shadow-[0_12px_40px_rgba(40,32,24,0.08)]">
          <div className="relative flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_52px_minmax(0,1fr)] lg:items-stretch">
            <div className="relative min-h-[302px] overflow-hidden lg:min-h-[640px]">
              <Image
                alt=""
                aria-hidden
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={GOOD_CARD_CONTENT.backgroundSrc}
              />
              <div className="relative z-10 flex h-full min-h-[302px] items-center justify-center px-[15px] pt-6 lg:min-h-[640px] lg:px-10 lg:pt-0">
                <HeroProduct
                  aspectRatio="1.55 / 1"
                  className="mx-0 w-full max-w-none max-lg:h-auto max-lg:aspect-(--hero-product-aspect) lg:ml-0 lg:mr-0"
                  colorId={colorId}
                  hasShoulderStrap={false}
                  loading="lazy"
                  objectClassName="drop-shadow-[0_18px_24px_rgba(40,32,24,0.28)] lg:object-cover lg:object-right"
                  productAlt={PRODUCT_COLOR_MAP[colorId].alt}
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </div>
            <GoodCardMeander />
            <div className="flex w-full flex-col items-center justify-center p-[15px] sm:px-12 sm:py-10 lg:px-8 lg:py-14">
              <div className="flex w-full flex-col sm:max-w-[414px]">
                <h2
                  className="m-0 font-serif text-[36px] font-bold uppercase leading-[normal] tracking-normal text-[#211E1A] lg:text-[52px] lg:leading-none lg:[text-box:trim-both_cap_alphabetic]"
                  id={GOOD_CARD_CONTENT.headingId}
                >
                  <span className="lg:block">ML Daily</span>{" "}
                  <span className="lg:block">Pouch</span>
                </h2>
                <p className="m-0 mt-[17px] max-w-[309px] font-gilroy text-[14px] font-normal leading-normal text-[#211E1A] lg:mt-5 lg:max-w-none lg:text-base lg:leading-relaxed">
                  {ML_DAILY_POUCH.description}
                </p>
                <p className="m-0 mt-[17px] font-gilroy text-[40px] font-medium leading-none tabular-nums tracking-normal text-cognac [text-box:trim-both_cap_alphabetic] lg:mt-6 lg:text-5xl">
                  {formatPriceUah(priceUah)}
                </p>
                <div className="mt-[29px] w-full lg:mt-8">
                  <HeroColorPicker
                    colorId={colorId}
                    onColorChange={onColorChange}
                    variant="panel"
                  />
                </div>
                <div className="mt-[29px] w-full lg:mt-6">
                  <HeroStrapOption
                    hasShoulderStrap={hasShoulderStrap}
                    onShoulderStrapChange={onShoulderStrapChange}
                    variant="plain"
                  />
                </div>
                <HeroAddToCartButton className="mt-[29px] flex h-14 w-full max-lg:h-[50px]! max-lg:w-full! lg:mt-8 min-[1440px]:h-14 min-[1440px]:w-full" />
                <p className="m-0 mt-[13px] lg:mt-4 text-center font-gilroy text-xs font-normal leading-normal tracking-wide text-[#736B60]">
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
