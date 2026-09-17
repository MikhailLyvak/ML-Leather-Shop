export const BELT_HEADING_LINES = [
  "ДОВГИЙ РЕМІНЬ",
  "ДЛЯ БІЛЬШОЇ СВОБОДИ",
] as const

export const BELT_FEATURES = [
  {
    description: "140 см для комфортного\nносіння через плече",
    id: 1,
    title: "ЗРУЧНА ДОВЖИНА",
  },
  {
    description: "Міцні латунні карабіни для\nнадійної фіксації",
    id: 2,
    title: "НАДІЙНА ФУРНІТУРА",
  },
] as const

export const BELT_CONTENT = {
  description:
    "Комбінований ремінь із натуральної шкіри та міцної текстильної стрічки. Зручний для щоденного носіння клатча через плече або навскіс. Довжина 140 см забезпечує свободу рухів і комфорт у дорозі.",
  features: BELT_FEATURES,
  headingId: "belt-heading",
  headingLines: BELT_HEADING_LINES,
  imageAlt:
    "Довгий комбінований ремінь 140 см із натуральної шкіри та текстильної стрічки для клатча ML Daily Pouch",
  imageHeight: 642,
  imageSrc: "/images/belt/belt_pc.png",
  imageWidth: 642,
  sectionId: "belt",
} as const
