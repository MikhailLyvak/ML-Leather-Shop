import { ML_DAILY_POUCH } from "@/lib/products/ml-daily-pouch"

const { depth, height, width } = ML_DAILY_POUCH.dimensionsCm

export const PROPORTIONS_INTRO_COPY = [
  `Розміри ${width} × ${height} × ${depth} см створюють баланс`,
  "між компактністю та зручністю. Клатч",
  "комфортно тримати в руці — він не",
  "виглядає громіздким і зберігає акуратний",
  "силует у щоденному використанні.",
].join("\n")

export const PROPORTIONS_DIMENSIONS = [
  {
    axis: "width",
    cm: width,
    description: "Оптимальна ширина без зайвого об'єму",
    title: `${width} CM`,
  },
  {
    axis: "height",
    cm: height,
    description: "Зручна висота для носіння в руці",
    title: `${height} CM`,
  },
  {
    axis: "depth",
    cm: depth,
    description: "Тонкий та акуратний профіль",
    title: `${depth} CM`,
  },
] as const

export const PROPORTIONS_CONTENT = {
  dimensions: PROPORTIONS_DIMENSIONS,
  eyebrow: "ВИВІРЕНІ ПРОПОРЦІЇ",
  heading: "КОМПАКТНИЙ ФОРМАТ, ПРОДУМАНИЙ КОМФОРТ.",
  headingId: "proportions-heading",
  imageAlt: `Чоловічий клатч ML Daily Pouch із розмірами ${width} × ${height} × ${depth} см`,
  imageHeight: 473,
  imageSrc: "/images/proportions/proportions.svg",
  imageWidth: 699,
  intro: PROPORTIONS_INTRO_COPY,
  sectionId: "proportions",
} as const
