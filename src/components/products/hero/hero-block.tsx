import { HeroExperience } from "@/components/products/hero/hero-experience"
import { buildHomeJsonLdGraph } from "@/lib/seo/json-ld"
import { JsonLdScript } from "@/lib/seo/json-ld-script"

const HeroBlock = () => {
  return (
    <>
      <JsonLdScript data={buildHomeJsonLdGraph()} />
      <HeroExperience />
    </>
  )
}

export { HeroBlock }
