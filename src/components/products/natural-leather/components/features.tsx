import { NATURAL_LEATHER_BANNER_FEATURES } from "@/components/products/natural-leather/content"

import { FeatureElement } from "./feature"

const Features = () => {
  return (
    <ul className="mx-[15px] grid list-none grid-cols-2 gap-x-2.5 gap-y-[23px] border-b-[0.5px] border-[#BAA08A] py-7.5 sm:mx-10 lg:mx-auto lg:flex lg:h-33 lg:max-w-7xl lg:justify-between lg:border-b lg:border-cognac lg:pt-0 lg:pb-18">
      {NATURAL_LEATHER_BANNER_FEATURES.map((feature) => (
        <li key={feature.title}>
          <FeatureElement {...feature} />
        </li>
      ))}
    </ul>
  )
}

export { Features }
