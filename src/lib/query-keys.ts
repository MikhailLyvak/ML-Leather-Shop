export const STALE_TIME = {
  REALTIME: 30_000,
  SEMI_STATIC: 5 * 60_000,
  STATIC: Infinity,
} as const

export const queryKeys = {
  cart: {
    all: ["cart"] as const,
  },
  order: {
    all: ["order"] as const,
    byId: (id: string) => [...queryKeys.order.all, id] as const,
  },
  product: {
    all: ["product"] as const,
    bySlug: (slug: string) => [...queryKeys.product.all, slug] as const,
    mlDailyKlatch: () => [...queryKeys.product.all, "ml-daily-klatch"] as const,
  },
}
