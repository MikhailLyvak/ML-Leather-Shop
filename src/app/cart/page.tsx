import type { Metadata } from "next"

import { CART_HREF } from "@/utils/route-href"

export const metadata: Metadata = {
  alternates: {
    canonical: CART_HREF,
  },
  robots: {
    follow: false,
    index: false,
  },
  title: "Кошик",
}

export default function CartPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 px-6 py-16">
      <h1 className="font-serif text-3xl tracking-tight">Кошик</h1>
      <p className="text-muted-foreground">Поки що порожньо.</p>
    </main>
  )
}
