import React from 'react'

const DoubleBlock = ({ description, title }: { description: string, title: string }) => {
  return (
    <div className="">
      <div className="flex w-fit flex-col gap-2 rounded-2xl border-2 border-[#676360] p-3.75">
        <h3 className="text-[#E6A781] text-2xl font-bold font-serif">{title}</h3>
        <p className="m-0 mt-1 whitespace-pre-line font-gilroy text-base font-normal leading-normal tracking-normal text-white">
          {description}
        </p>
      </div>
    </div>
  )
}

export { DoubleBlock }