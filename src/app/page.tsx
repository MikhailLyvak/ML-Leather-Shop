import type { Metadata } from "next"

import { HeroBlock, NaturalLeatherBlock } from "@/components/products"
import BeltBlock from "@/components/products/belt-block/componenets/belt-block"
import GoodCard from "@/components/products/good-card/good-card"
import { ProductSelectionProvider } from "@/components/products/product-selection"
import ProductImages from "@/components/products/product-images/product-images"
import { Proportions } from "@/components/products/proportions/proportions"
import QAndA from "@/components/products/q-and-a/q-and-a"
import WhatIn from "@/components/products/what-in/what-in"
import { buildHomeMetadata } from "@/lib/seo/home-metadata"

export const metadata: Metadata = buildHomeMetadata()

export default function HomePage() {
  return (
    <main className="bg-[#DED8CC]">
      <ProductSelectionProvider>
        <HeroBlock />
        <NaturalLeatherBlock />
        <ProductImages />
        <BeltBlock />
        <Proportions />
        <WhatIn />
        <GoodCard />
        <QAndA />
      </ProductSelectionProvider>
    </main>
  )
}
