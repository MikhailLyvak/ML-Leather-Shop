import type { Metadata } from "next"

export const metadata: Metadata = {
  description: "ML Daily Pouch — чоловічий шкіряний клатч-органайзер.",
  robots: {
    follow: false,
    index: false,
  },
  title: "ML Daily Pouch",
}

export default function MlDailyKlatchPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 px-6 py-16">
      <h1 className="font-serif text-6xl font-semibold tracking-tight">ML Daily Pouch</h1>
      <p className="text-muted-foreground">
        Сторінка продукту буде розширена після головного героя.
      </p>
    </main>
  )
}
