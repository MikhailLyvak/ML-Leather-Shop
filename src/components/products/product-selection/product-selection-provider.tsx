"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  ML_DAILY_POUCH,
  getHeroPriceUah,
  getHeroVisual,
  type ProductColorId,
} from "@/lib/products/ml-daily-pouch"

type ProductSelectionValue = {
  colorId: ProductColorId
  hasShoulderStrap: boolean
  onColorChange: (nextColorId: ProductColorId) => void
  onShoulderStrapChange: (nextValue: boolean) => void
  priceUah: number
  visual: ReturnType<typeof getHeroVisual>
}

const ProductSelectionContext = createContext<ProductSelectionValue | null>(
  null,
)

const ProductSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [colorId, setColorId] = useState<ProductColorId>(
    ML_DAILY_POUCH.defaultColorId,
  )
  const [hasShoulderStrap, setHasShoulderStrap] = useState(false)

  const visual = useMemo(
    () => getHeroVisual(colorId, hasShoulderStrap),
    [colorId, hasShoulderStrap],
  )

  const priceUah = useMemo(
    () => getHeroPriceUah(hasShoulderStrap),
    [hasShoulderStrap],
  )

  const onColorChange = useCallback((nextColorId: ProductColorId) => {
    setColorId(nextColorId)
  }, [])

  const onShoulderStrapChange = useCallback((nextValue: boolean) => {
    setHasShoulderStrap(nextValue)
  }, [])

  const value = useMemo(
    () => ({
      colorId,
      hasShoulderStrap,
      onColorChange,
      onShoulderStrapChange,
      priceUah,
      visual,
    }),
    [
      colorId,
      hasShoulderStrap,
      onColorChange,
      onShoulderStrapChange,
      priceUah,
      visual,
    ],
  )

  return (
    <ProductSelectionContext.Provider value={value}>
      {children}
    </ProductSelectionContext.Provider>
  )
}

function useProductSelection() {
  const value = useContext(ProductSelectionContext)

  if (!value) {
    throw new Error(
      "useProductSelection must be used within ProductSelectionProvider.",
    )
  }

  return value
}

export { ProductSelectionProvider, useProductSelection }
export type { ProductSelectionValue }
