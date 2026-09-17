import { Q_AND_A_CONTENT } from "@/components/products/q-and-a/content"

const Q_AND_A_ANSWER_CLASSNAME =
  "m-0 max-w-3xl pb-6 font-gilroy text-base font-normal leading-[1.45] tracking-normal text-[#211E1A]/80"

const Q_AND_A_QUESTION_CLASSNAME =
  "font-gilroy text-base font-medium uppercase leading-[1.2] tracking-[0.04em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]"

const Q_AND_A_SUMMARY_CLASSNAME =
  "flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden"

const Q_AND_A_TOGGLE_CLASSNAME =
  "flex size-8 shrink-0 items-center justify-center rounded-full border border-[#211E1A]/40 font-gilroy text-xl font-normal leading-none text-[#211E1A]"

const QAndA = () => {
  return (
    <section
      aria-labelledby={Q_AND_A_CONTENT.headingId}
      className="mx-auto my-30 max-w-7xl px-5 sm:px-10"
      id={Q_AND_A_CONTENT.sectionId}
    >
      <h2
        className="mt-3.5 m-0 text-center font-serif text-[48px] font-bold uppercase leading-none tracking-normal text-[#211E1A] [text-box:trim-both_cap_alphabetic]"
        id={Q_AND_A_CONTENT.headingId}
      >
        {Q_AND_A_CONTENT.heading}
      </h2>
      <div className="mt-12 border-t border-[#211E1A]/15">
        {Q_AND_A_CONTENT.items.map((item) => (
          <details
            key={item.id}
            className="group border-b border-[#211E1A]/15"
          >
            <summary className={Q_AND_A_SUMMARY_CLASSNAME}>
              <span className={Q_AND_A_QUESTION_CLASSNAME}>{item.question}</span>
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
