const DoubleBlock = ({
  description,
  title,
}: {
  description: string
  title: string
}) => {
  return (
    <div className="flex min-w-0 flex-1 lg:flex-none">
      <div className="flex w-full flex-col gap-[5px] rounded-[15px] border border-[#676360] p-[15px] lg:w-fit lg:gap-2 lg:rounded-2xl lg:border-2 lg:p-3.75">
        <h3 className="font-serif text-[14px] font-bold uppercase leading-[normal] tracking-[0.02em] text-[#E6A781] lg:text-2xl lg:leading-8 lg:tracking-normal">
          {title}
        </h3>
        <p className="m-0 font-gilroy text-[14px] font-normal leading-normal tracking-normal text-white lg:mt-1 lg:text-base lg:whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  )
}

export { DoubleBlock }
