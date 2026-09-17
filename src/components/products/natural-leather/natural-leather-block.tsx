import { Features } from "@/components/products/natural-leather/components/features"
import { NATURAL_LEATHER_CONTENT } from "@/components/products/natural-leather/content"
import { ProductDetails } from "@/components/products/product-details/product-detils"

const NaturalLeatherBlock = () => {
  return (
    <section aria-labelledby="natural-leather-heading" className="bg-[#DED8CC] xl:pt-18">
      <h2 className="sr-only" id="natural-leather-heading">
        {NATURAL_LEATHER_CONTENT.bannerHeading}
      </h2>
      <Features />
      <ProductDetails />
    </section>
  )
}

export { NaturalLeatherBlock }
