import Image from "next/image"

import type { CSSProperties } from "react"

import { WHAT_IN_CONTENT } from "@/components/products/what-in/content"

/** Desktop card width — mobile images keep the same share of their card. */
const WHAT_IN_DESKTOP_CARD_WIDTH_PX = 300

const WHAT_IN_CARD_CLASSNAME =
  "flex aspect-[175/165] flex-col overflow-hidden rounded-[15px] bg-[#ECE8E1] drop-shadow-[8.7px_2.3px_7px_rgba(0,0,0,0.08)] lg:aspect-auto lg:h-70 lg:w-75 lg:shrink-0 lg:snap-start lg:rounded-2xl lg:bg-[#F2EFEB] lg:drop-shadow-none"

const WHAT_IN_CARD_TITLE_CLASSNAME =
  "m-[11.6px] mb-0 font-gilroy text-xs font-medium uppercase leading-[normal] text-black lg:m-5 lg:mb-0 lg:font-serif lg:text-xl lg:font-bold lg:leading-none lg:tracking-[0.02em] lg:text-[#211E1A] lg:[text-box:trim-both_cap_alphabetic]"

const WHAT_IN_TRACK_CLASSNAME =
  "mt-5 grid grid-cols-2 gap-2.5 px-[15px] sm:px-10 lg:mt-12.5 lg:flex lg:snap-x lg:snap-mandatory lg:gap-4 lg:overflow-x-auto lg:overscroll-x-contain lg:scroll-smooth lg:scroll-pl-10 lg:touch-pan-x lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden min-[1880px]:justify-center min-[1880px]:overflow-visible min-[1880px]:snap-none min-[1880px]:px-0"

const WHAT_IN_IMAGE_BOTTOM_CLASSNAME = "mt-auto flex items-end justify-center"

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
          className="block h-auto w-(--what-in-image-width) lg:w-auto"
          height={height}
          sizes="(max-width: 1023px) 40vw, 300px"
          src={image}
          style={
            {
              "--what-in-image-width": `${(width / WHAT_IN_DESKTOP_CARD_WIDTH_PX) * 100}%`,
            } as CSSProperties
          }
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
      className="my-10 flex flex-col lg:my-30"
      id={WHAT_IN_CONTENT.sectionId}
    >
      <p className="m-0 w-full px-[15px] text-center font-gilroy text-xs font-normal uppercase leading-[normal] tracking-[0.15em] text-cognac lg:px-0 lg:text-base lg:normal-case">
        {WHAT_IN_CONTENT.eyebrow}
      </p>
      <h2
        className="m-0 mx-auto mt-px max-w-[272px] text-center font-serif text-[24px] font-bold uppercase leading-[normal] tracking-normal text-[#211E1A] lg:mt-3.5 lg:max-w-none lg:text-[48px] lg:leading-none lg:[text-box:trim-both_cap_alphabetic]"
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
