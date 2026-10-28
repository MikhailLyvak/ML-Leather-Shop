import Image from "next/image"

const ProductImage = ({
  alt,
  description,
  image,
  title,
}: {
  alt: string
  description: string
  image: string
  title: string
}) => {
  return (
    <div className="max-lg:even:translate-y-5">
      <Image
        alt={alt}
        className="h-auto w-full lg:w-[300px]"
        height={300}
        sizes="(max-width: 1023px) 50vw, 300px"
        src={image}
        width={300}
      />
      <div className="mt-3 flex flex-col gap-[5px] lg:mt-12 lg:block">
        <h3 className="font-serif text-base font-bold uppercase leading-[normal] tracking-[0.02em] text-[#211E1A] lg:text-xl lg:leading-none lg:[text-box:trim-both_cap_alphabetic]">
          {title}
        </h3>
        <p className="font-gilroy text-[13px] font-normal text-[#211E1A]/70 lg:mt-2 lg:text-base lg:font-light lg:text-[#211E1A]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProductImage
