import Image from "next/image"

import { MeanderDivider } from "@/components/products/meander-divider"

const PRODUCT_DETAILS_ITEMS = [
  {
    description: "Виразна фактура без зайвого декору.",
    title: "СТРИМАНА РОЗКІШ",
  },
  {
    description: "Якість, яку помічають без пояснень.",
    title: "СТАТУС У ДЕТАЛЯХ",
  },
  {
    description: "Дизайн, що залишається актуальним поза трендами.",
    title: "КЛАСИЧНІ ПРОПОРЦІЇ",
  },
  {
    description: "Якість, яку помічають без пояснень.",
    title: "СТАТУС У ДЕТАЛЯХ",
  },
] as const

const PRODUCT_DETAILS_ITEM_CLASSNAME =
  "flex flex-col gap-[5px] rounded-[15px] border border-[#BAA08A] px-[15px] py-2.5 lg:gap-1.5 lg:rounded-none lg:border-0 lg:p-0"

const PRODUCT_DETAILS_ITEM_TITLE_CLASSNAME =
  "m-0 font-serif text-[14px] font-bold uppercase leading-[normal] tracking-[0.02em] text-[#211E1A] lg:text-[20px] lg:leading-none lg:[text-box:trim-both_cap_alphabetic]"

const PRODUCT_DETAILS_ITEM_TEXT_CLASSNAME =
  "m-0 font-gilroy text-[14px] leading-normal text-[#211E1A]/80 lg:text-base lg:text-[#211E1A]"

const ProductDetails = () => {
  return (
    <section
      aria-labelledby="product-details-heading"
      className="py-10 lg:py-30"
    >
      <div className="mx-[15px] mb-10 flex list-none flex-col-reverse items-stretch gap-5 sm:mx-10 lg:mx-auto lg:mb-20 lg:max-w-7xl lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <figure className="m-0 shrink-0">
          <Image
            alt="Product Details"
            className="mx-auto h-auto w-full max-w-[471px] shrink-0 lg:mx-0 lg:w-[471px]"
            decoding="async"
            height={536}
            loading="lazy"
            sizes="(max-width: 1023px) 100vw, 471px"
            src="/images/details/pv_version.png"
            width={471}
          />
        </figure>
        <div className="lg:max-w-[620px]">
          <header className="text-center lg:text-left">
            <p className="m-0 font-gilroy text-xs font-normal uppercase tracking-[0.15em] text-cognac lg:font-sans lg:font-medium lg:tracking-[0.2em] lg:[text-box:trim-both_cap_alphabetic]">
              МАТЕРІАЛ ТА ФІЛОСОФІЯ
            </p>
            <h2
              className="m-0 mt-[13px] font-serif text-[24px] font-bold uppercase leading-[normal] tracking-normal whitespace-pre-line text-[#211E1A] lg:mt-5 lg:text-[48px] lg:leading-[1.08] lg:tracking-[0.02em] lg:[text-box:trim-both_cap_alphabetic]"
              id="product-details-heading"
            >
              {`ШКІРА, ЩО НАБУВАЄ\nХАРАКТЕРУ З ЧАСОМ`}
            </h2>
            <p className="m-0 mt-[13px] font-gilroy text-[14px] leading-normal text-[#211E1A]/70 lg:mt-6 lg:text-base lg:text-[#211E1A]">
              Натуральна італійська шкіра зберігає фактуру, красиво старіє та
              робить кожен клатч унікальним.
            </p>
          </header>
          <ul className="m-0 mt-5 flex list-none flex-col gap-2.5 p-0 lg:mt-9.5 lg:gap-12">
            {PRODUCT_DETAILS_ITEMS.map((item, index) => (
              <li key={`${item.title}-${index}`}>
                <article className={PRODUCT_DETAILS_ITEM_CLASSNAME}>
                  <h3 className={PRODUCT_DETAILS_ITEM_TITLE_CLASSNAME}>
                    {item.title}
                  </h3>
                  <p className={PRODUCT_DETAILS_ITEM_TEXT_CLASSNAME}>
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MeanderDivider />
    </section>
  )
}

export { ProductDetails }
