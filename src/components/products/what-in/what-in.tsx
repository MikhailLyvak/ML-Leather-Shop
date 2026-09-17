import Image from "next/image"

import { WHAT_IN_CONTENT } from "@/components/products/what-in/content"

const WHAT_IN_CARD_CLASSNAME =
  "flex h-70 w-75 shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#F2EFEB]"

const WHAT_IN_CARD_TITLE_CLASSNAME =
  "m-5 mb-0 text-xl font-bold font-serif uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]"

const WHAT_IN_TRACK_CLASSNAME =
  "mt-12.5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth scroll-pl-5 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-5 sm:scroll-pl-10 sm:px-10 min-[1880px]:justify-center min-[1880px]:overflow-visible min-[1880px]:snap-none min-[1880px]:px-0"

const WHAT_IN_IMAGE_BOTTOM_CLASSNAME =
  "mt-auto flex items-end justify-center"

const WHAT_IN_IMAGE_CENTER_CLASSNAME = "flex flex-1 items-center justify-center"

type WhatInItem = (typeof WHAT_IN_CONTENT.items)[number]

const WhatInCard = ({
  alt,
  height,
  image,
  imagePlacement,
  title,
  width,
}: WhatInItem) => {
  const imageWrapperClassName =
    imagePlacement === "bottom"
      ? WHAT_IN_IMAGE_BOTTOM_CLASSNAME
      : WHAT_IN_IMAGE_CENTER_CLASSNAME

  return (
    <article className={WHAT_IN_CARD_CLASSNAME} role="listitem">
      <h3 className={WHAT_IN_CARD_TITLE_CLASSNAME}>{title}</h3>
      <div className={imageWrapperClassName}>
        <Image
          alt={alt}
          className="block h-auto w-auto"
          height={height}
          sizes="300px"
          src={image}
          width={width}
        />
      </div>
    </article>
  )
}

const WhatIn = () => {
  return (
    <section
      aria-labelledby={WHAT_IN_CONTENT.headingId}
      className="my-30 flex flex-col"
      id={WHAT_IN_CONTENT.sectionId}
    >
      <p className="m-0 w-full text-center font-gilroy text-base font-normal leading-[normal] tracking-[0.15em] text-cognac">
        {WHAT_IN_CONTENT.eyebrow}
      </p>
      <h2
        className="mt-3.5 m-0 text-center font-serif text-[48px] font-bold uppercase leading-none tracking-normal text-[#211E1A] [text-box:trim-both_cap_alphabetic]"
        id={WHAT_IN_CONTENT.headingId}
      >
        {WHAT_IN_CONTENT.heading}
      </h2>
      <div
        aria-label={WHAT_IN_CONTENT.listLabel}
        className={WHAT_IN_TRACK_CLASSNAME}
        role="list"
      >
        {WHAT_IN_CONTENT.items.map((item) => (
          <WhatInCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default WhatIn
