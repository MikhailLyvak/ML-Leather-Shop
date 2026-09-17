import Image from "next/image"

import { BELT_CONTENT } from "@/components/products/belt-block/content"
import { HeroAddToCartButton } from "@/components/products/hero/hero-add-to-cart-button"
import { formatPriceUah, ML_DAILY_POUCH } from "@/lib/products/ml-daily-pouch"

import { DoubleBlock } from "@/components/products/belt-block/double-block"

const BeltBlock = () => {
  return (
    <section
      aria-labelledby={BELT_CONTENT.headingId}
      className="bg-[linear-gradient(90deg,#382E27_0%,#503E33_63%,#372B20_93%)]"
      id={BELT_CONTENT.sectionId}
    >
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="mt-32 flex flex-col">
          <h2
            className="m-0 flex max-w-153 flex-col gap-2 font-serif text-[48px] font-bold uppercase leading-none tracking-normal text-white [text-box:trim-both_cap_alphabetic]"
            id={BELT_CONTENT.headingId}
          >
            {BELT_CONTENT.headingLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="m-0 mt-2 max-w-146.75 font-gilroy text-base font-normal leading-[1.1875] tracking-normal text-white">
            {BELT_CONTENT.description}
          </p>
          <div className="mt-6.25 flex gap-4">
            {BELT_CONTENT.features.map((item) => (
              <DoubleBlock
                description={item.description}
                key={item.id}
                title={item.title}
              />
            ))}
          </div>
          <div className="mt-6.25 flex items-center gap-6">
            <HeroAddToCartButton variant="outline" />
            <span className="font-gilroy text-5xl font-medium tabular-nums tracking-normal text-[#E6A781]">
              +{formatPriceUah(ML_DAILY_POUCH.strap.priceUah)}
            </span>
          </div>
        </div>
        <Image
          alt={BELT_CONTENT.imageAlt}
          height={BELT_CONTENT.imageHeight}
          sizes="(max-width: 768px) 100vw, 642px"
          src={BELT_CONTENT.imageSrc}
          width={BELT_CONTENT.imageWidth}
        />
      </div>
    </section>
  )
}

export default BeltBlock
