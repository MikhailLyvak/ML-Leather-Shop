import Image from "next/image"

import { BELT_CONTENT } from "@/components/products/belt-block/content"
import { DoubleBlock } from "@/components/products/belt-block/double-block"
import { HeroAddToCartButton } from "@/components/products/hero/hero-add-to-cart-button"
import { ML_DAILY_POUCH, formatPriceUah } from "@/lib/products/ml-daily-pouch"

const BeltBlock = () => {
  return (
    <section
      aria-labelledby={BELT_CONTENT.headingId}
      className="bg-[linear-gradient(35.87deg,#4E4036_9.94%,#372B20_79.74%)] px-[15px] py-10 sm:px-10 lg:bg-[linear-gradient(90deg,#382E27_0%,#503E33_63%,#372B20_93%)] lg:px-0 lg:py-0"
      id={BELT_CONTENT.sectionId}
    >
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:mt-32">
          <h2
            className="m-0 flex flex-col font-serif text-[30px] font-bold uppercase leading-[normal] tracking-normal text-white lg:max-w-153 lg:gap-2 lg:text-[48px] lg:leading-none lg:[text-box:trim-both_cap_alphabetic]"
            id={BELT_CONTENT.headingId}
          >
            {BELT_CONTENT.headingLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="m-0 mt-[11px] font-gilroy text-[14px] font-normal leading-normal tracking-normal text-white lg:mt-2 lg:max-w-146.75 lg:text-base lg:leading-[1.1875]">
            {BELT_CONTENT.description}
          </p>
          <div className="mt-5 flex gap-[13px] lg:mt-6.25 lg:gap-4">
            {BELT_CONTENT.features.map((item) => (
              <DoubleBlock
                description={item.description}
                key={item.id}
                title={item.title}
              />
            ))}
          </div>
          <Image
            alt={BELT_CONTENT.imageAlt}
            className="mx-auto mt-5 h-auto w-full max-w-[375px] lg:hidden"
            height={BELT_CONTENT.imageMobileHeight}
            sizes="(max-width: 1023px) 100vw, 375px"
            src={BELT_CONTENT.imageMobileSrc}
            width={BELT_CONTENT.imageMobileWidth}
          />
          <div className="mt-5 flex items-center gap-5 lg:mt-6.25 lg:gap-6">
            <HeroAddToCartButton variant="outline" />
            <span className="font-gilroy text-[40px] font-medium whitespace-nowrap tabular-nums tracking-normal text-[#E6A781] lg:text-5xl">
              +{formatPriceUah(ML_DAILY_POUCH.strap.priceUah)}
            </span>
          </div>
        </div>
        <Image
          alt={BELT_CONTENT.imageAlt}
          className="hidden lg:block"
          height={BELT_CONTENT.imageHeight}
          sizes="642px"
          src={BELT_CONTENT.imageSrc}
          width={BELT_CONTENT.imageWidth}
        />
      </div>
    </section>
  )
}

export default BeltBlock
