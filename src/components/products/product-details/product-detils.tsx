import Image from "next/image"

const ProductDetails = () => {
  return (
    <section aria-labelledby="product-details-heading" className="py-30">
      <div className="mx-auto mb-20 flex max-w-7xl list-none items-start justify-between">
        <figure className="m-0 shrink-0">
          <Image
            alt="Product Details"
            className="shrink-0"
            decoding="async"
            height={536}
            loading="lazy"
            src="/images/details/pv_version.png"
            width={471}
          />
        </figure>
        <div className="max-w-[620px]">
        <header>
          <p className="m-0 text-xs font-medium uppercase tracking-[0.2em] text-cognac [text-box:trim-both_cap_alphabetic]">
            МАТЕРІАЛ ТА ФІЛОСОФІЯ
          </p>
          <h2
            className="mt-5 m-0 font-serif text-[48px] font-bold uppercase leading-[1.08] tracking-[0.02em] whitespace-pre-line text-[#211E1A] [text-box:trim-both_cap_alphabetic]"
            id="product-details-heading"
          >
            {`ШКІРА, ЩО НАБУВАЄ\nХАРАКТЕРУ З ЧАСОМ`}
          </h2>
          <p className="mt-6 m-0 font-gilroy text-base leading-normal text-[#211E1A]">
            Натуральна італійська шкіра зберігає фактуру, красиво старіє та робить кожен клатч унікальним.
          </p>
        </header>
        <ul className="mt-9.5 m-0 flex list-none flex-col gap-12 p-0">
          <li>
            <article className="flex flex-col gap-1.5">
              <h3 className="m-0 font-serif text-[20px] font-bold uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]">
                СТРИМАНА РОЗКІШ
              </h3>
              <p className="m-0 font-gilroy text-base leading-normal text-[#211E1A]">
                Виразна фактура без зайвого декору.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-1.5">
              <h3 className="m-0 font-serif text-[20px] font-bold uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]">
                СТАТУС У ДЕТАЛЯХ
              </h3>
              <p className="m-0 font-gilroy text-base leading-normal text-[#211E1A]">
                Якість, яку помічають без пояснень.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-1.5">
              <h3 className="m-0 font-serif text-[20px] font-bold uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]">
                КЛАСИЧНІ ПРОПОРЦІЇ
              </h3>
              <p className="m-0 font-gilroy text-base leading-normal text-[#211E1A]">
                Дизайн, що залишається актуальним поза трендами.
              </p>
            </article>
          </li>
          <li>
            <article className="flex flex-col gap-1.5">
              <h3 className="m-0 font-serif text-[20px] font-bold uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]">
                СТАТУС У ДЕТАЛЯХ
              </h3>
              <p className="m-0 font-gilroy text-base leading-normal text-[#211E1A]">
                Якість, яку помічають без пояснень.
              </p>
            </article>
          </li>
        </ul>
      </div>
      </div>
      <Image
        alt=""
        aria-hidden
        className="h-auto w-full"
        height={52}
        src="/images/elements/antic_underline.svg"
        width={1920}
      />
    </section>
  )
}

export { ProductDetails }
