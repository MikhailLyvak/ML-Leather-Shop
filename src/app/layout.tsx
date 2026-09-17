import type { Metadata } from "next"
import { Cormorant_Infant, Inter } from "next/font/google"

import { SiteFooter } from "@/components/footer"
import { BRAND } from "@/lib/brand"
import { getMetadataBase } from "@/lib/site-url"

import "./globals.css"

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
})

const cormorantInfant = Cormorant_Infant({
  subsets: ["cyrillic", "latin"],
  variable: "--font-cormorant-infant",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  description:
    "Чоловічі шкіряні аксесуари ML. Організація щоденних речей без набитих кишень.",
  metadataBase: getMetadataBase(),
  title: {
    default: `${BRAND.name} — чоловічі шкіряні аксесуари`,
    template: `%s | ${BRAND.name}`,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${inter.variable} ${cormorantInfant.variable} h-full antialiased`}
      lang="uk"
    >
      <body className="flex min-h-full flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
