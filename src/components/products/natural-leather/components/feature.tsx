import Image from "next/image"

import type { NaturalLeatherBannerFeature } from "@/components/products/natural-leather/content"

const FeatureElement = ({
  description,
  image,
  imageAlt,
  title,
}: NaturalLeatherBannerFeature) => {
  return (
    <article className="flex items-center gap-4">
      <div className="relative size-14.5 shrink-0">
        <Image
          alt={imageAlt}
          className="object-contain"
          fill
          sizes="58px"
          src={image}
        />
      </div>
      <h3 className="font-serif text-[20px] font-bold uppercase leading-tight tracking-[0.02em] whitespace-pre-line">
        {title}
      </h3>
      <p className="sr-only">{description}</p>
    </article>
  )
}

export { FeatureElement }
