import { Q_AND_A_CONTENT } from "@/components/products/q-and-a/content"

const Q_AND_A_ANSWER_CLASSNAME =
  "m-0 max-w-3xl pb-5 font-gilroy text-[14px] font-normal leading-[1.4] tracking-normal text-[#211E1A] lg:pb-6 lg:text-base lg:leading-[1.45] lg:text-[#211E1A]/80"

const Q_AND_A_QUESTION_CLASSNAME =
  "font-serif text-[18px] font-semibold uppercase leading-[normal] text-[#211E1A] lg:font-gilroy lg:text-base lg:font-medium lg:leading-[1.2] lg:tracking-[0.04em] lg:[text-box:trim-both_cap_alphabetic]"

const Q_AND_A_SUMMARY_CLASSNAME =
  "flex cursor-pointer list-none items-center justify-between gap-4 py-5 lg:gap-6 lg:py-6 [&::-webkit-details-marker]:hidden"

const Q_AND_A_TOGGLE_CLASSNAME =
  "flex size-11 shrink-0 items-center justify-center rounded-full border border-[#966849] font-gilroy text-xl font-normal leading-none text-[#211E1A] lg:size-8 lg:border-[#211E1A]/40"

const QAndA = () => {
  return (
    <section
      aria-labelledby={Q_AND_A_CONTENT.headingId}
      className="mx-auto my-10 max-w-7xl px-[15px] sm:px-10 lg:my-30"
      id={Q_AND_A_CONTENT.sectionId}
    >
      <h2
        className="m-0 text-center font-serif text-[24px] font-bold uppercase leading-[normal] tracking-normal text-[#211E1A] lg:mt-3.5 lg:text-[48px] lg:leading-none lg:[text-box:trim-both_cap_alphabetic]"
        id={Q_AND_A_CONTENT.headingId}
      >
        {Q_AND_A_CONTENT.heading}
      </h2>
      <div className="mt-5 lg:mt-12 lg:border-t lg:border-[#211E1A]/15">
        {Q_AND_A_CONTENT.items.map((item) => (
          <details
            key={item.id}
            className="group border-b border-[#B4B4B4] lg:border-[#211E1A]/15"
          >
            <summary className={Q_AND_A_SUMMARY_CLASSNAME}>
              <span className={Q_AND_A_QUESTION_CLASSNAME}>
                {item.question}
              </span>
              <span aria-hidden="true" className={Q_AND_A_TOGGLE_CLASSNAME}>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:block">−</span>
              </span>
            </summary>
            <p className={Q_AND_A_ANSWER_CLASSNAME}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default QAndA
