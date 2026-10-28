import Image from "next/image"

import { MeanderDivider } from "@/components/products/meander-divider"
import { PROPORTIONS_CONTENT } from "@/components/products/proportions/content"

const PROPORTION_BODY_TEXT_CLASSNAME =
  "m-0 font-gilroy text-[14px] font-normal leading-[1.297] tracking-normal text-[#211E1A] lg:max-w-91.25 lg:text-[18px]"

const PROPORTION_INTRO_TEXT_CLASSNAME =
  "m-0 font-gilroy text-[14px] font-normal leading-[1.297] tracking-normal text-[#211E1A] lg:w-91.25 lg:text-left lg:text-[18px] lg:whitespace-pre"

const PROPORTION_DIMENSION_TITLE_CLASSNAME =
  "m-0 font-serif text-[24px] font-bold uppercase leading-[normal] tracking-[0.02em] text-[#8F6429] lg:mb-2 lg:max-w-91.25 lg:leading-none lg:text-[#736B60] lg:[text-box:trim-both_cap_alphabetic]"

const Proportions = () => {
  return (
    <>
      <section
        aria-labelledby={PROPORTIONS_CONTENT.headingId}
        className="mx-[15px] my-10 text-center sm:mx-10 lg:mx-auto lg:my-30 lg:max-w-7xl lg:text-left"
        id={PROPORTIONS_CONTENT.sectionId}
      >
        <p className="m-0 font-gilroy text-xs font-normal uppercase leading-normal tracking-[0.15em] text-cognac lg:text-base lg:[text-box:trim-both_cap_alphabetic]">
          {PROPORTIONS_CONTENT.eyebrow}
        </p>
        <h2
          className="m-0 mt-px font-serif text-[24px] font-bold uppercase leading-[normal] tracking-normal text-[#211E1A] lg:mt-4 lg:text-[48px] lg:leading-none lg:[text-box:trim-both_cap_alphabetic]"
          id={PROPORTIONS_CONTENT.headingId}
        >
          {PROPORTIONS_CONTENT.heading}
        </h2>
        <div className="mt-[15px] flex flex-col gap-[22px] lg:mt-12.5 lg:flex-row lg:justify-between lg:gap-0">
          <Image
            alt={PROPORTIONS_CONTENT.imageAlt}
            className="mx-auto h-auto w-full max-w-[699px] lg:mx-0 lg:w-auto"
            height={PROPORTIONS_CONTENT.imageHeight}
            sizes="(max-width: 1023px) 100vw, 699px"
            src={PROPORTIONS_CONTENT.imageSrc}
            width={PROPORTIONS_CONTENT.imageWidth}
          />
          <div className="lg:mt-12">
            <p className={PROPORTION_INTRO_TEXT_CLASSNAME}>
              {PROPORTIONS_CONTENT.intro}
            </p>
            <ul className="mt-3.5 flex flex-col gap-[19px] lg:mt-7 lg:gap-5.75">
              {PROPORTIONS_CONTENT.dimensions.map((dimension) => (
                <li key={dimension.axis}>
                  <h3 className={PROPORTION_DIMENSION_TITLE_CLASSNAME}>
                    {dimension.title}
                  </h3>
                  <p className={PROPORTION_BODY_TEXT_CLASSNAME}>
                    {dimension.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <MeanderDivider className="lg:hidden" />
    </>
  )
}

export { Proportions }
