import React from 'react'
import Image from 'next/image'

const ProductImage = ({ alt, description, image, title }: { alt: string, description: string, image: string, title: string }) => {
  return (
    <div className="">
      <Image src={image} alt={alt} width={300} height={300} />
      <div className="mt-12">
      <h3 className="text-xl font-bold font-serif uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]">{title}</h3>
      <p className="mt-2 text-base font-gilroy font-light text-[#211E1A]">{description}</p>
      </div>
      
    </div>
  )
}

export default ProductImage
