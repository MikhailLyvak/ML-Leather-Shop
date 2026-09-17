import Image from "next/image"

import { PROPORTIONS_CONTENT } from "@/components/products/proportions/content"

const PROPORTION_BODY_TEXT_CLASSNAME =
  "m-0 max-w-91.25 font-gilroy text-[18px] font-normal leading-[1.297] tracking-normal text-[#211E1A]"

const PROPORTION_INTRO_TEXT_CLASSNAME =
  "m-0 w-91.25 font-gilroy text-[18px] font-normal leading-[1.297] tracking-normal text-left text-[#211E1A] whitespace-pre"

const PROPORTION_DIMENSION_TITLE_CLASSNAME =
  "m-0 max-w-91.25 font-serif text-[24px] font-bold mb-2 uppercase leading-none tracking-[0.02em] text-[#736B60] [text-box:trim-both_cap_alphabetic]"

const Proportions = () => {
  return (
    <section
      aria-labelledby={PROPORTIONS_CONTENT.headingId}
      className="my-30 max-w-7xl mx-auto"
      id={PROPORTIONS_CONTENT.sectionId}
    >
      <p className="m-0 font-gilroy text-base font-normal uppercase leading-normal tracking-[0.15em] text-cognac [text-box:trim-both_cap_alphabetic]">
        {PROPORTIONS_CONTENT.eyebrow}
      </p>
      <h2
        className="mt-4 m-0 font-serif text-[48px] font-bold uppercase leading-none tracking-normal text-[#211E1A] [text-box:trim-both_cap_alphabetic]"
        id={PROPORTIONS_CONTENT.headingId}
      >
        {PROPORTIONS_CONTENT.heading}
      </h2>
      <div className="flex justify-between mt-12.5">
        <Image
          alt={PROPORTIONS_CONTENT.imageAlt}
          height={PROPORTIONS_CONTENT.imageHeight}
          sizes="(max-width: 768px) 100vw, 698px"
          src={PROPORTIONS_CONTENT.imageSrc}
          width={PROPORTIONS_CONTENT.imageWidth}
        />
        <div className="mt-12">
          <p className={PROPORTION_INTRO_TEXT_CLASSNAME}>
            {PROPORTIONS_CONTENT.intro}
          </p>
          <ul className="mt-7 flex flex-col gap-5.75">
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
  )
}

export { Proportions }
