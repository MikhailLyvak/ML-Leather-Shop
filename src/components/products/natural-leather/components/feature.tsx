import Image from "next/image"

import type { NaturalLeatherBannerFeature } from "@/components/products/natural-leather/content"

const FeatureElement = ({
  description,
  image,
  imageAlt,
  title,
}: NaturalLeatherBannerFeature) => {
  return (
    <article className="flex items-center gap-[5px] lg:gap-4">
      <div className="relative size-7.5 shrink-0 lg:size-14.5">
        <Image
          alt={imageAlt}
          className="object-contain"
          fill
          sizes="(max-width: 1023px) 30px, 58px"
          src={image}
        />
      </div>
      <h3 className="font-serif text-[14px] font-bold uppercase leading-[normal] tracking-[0.02em] lg:text-[20px] lg:leading-tight lg:whitespace-pre-line">
        {title}
      </h3>
      <p className="sr-only">{description}</p>
    </article>
  )
}

export { FeatureElement }
