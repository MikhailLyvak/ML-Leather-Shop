import { NATURAL_LEATHER_BANNER_FEATURES } from "@/components/products/natural-leather/content"

import { FeatureElement } from "./feature"

const Features = () => {
  return (
    <ul className="mx-auto flex h-33 max-w-7xl list-none justify-between border-b border-cognac pb-18">
      {NATURAL_LEATHER_BANNER_FEATURES.map((feature) => (
        <li key={feature.title}>
          <FeatureElement {...feature} />
        </li>
      ))}
    </ul>
  )
}

export { Features }
