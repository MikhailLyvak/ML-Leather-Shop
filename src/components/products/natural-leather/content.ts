export type NaturalLeatherBannerFeature = {
  description: string
  image: string
  imageAlt: string
  title: string
}

export const NATURAL_LEATHER_BANNER_FEATURES = [
  {
    description:
      "ML Daily Pouch виготовлений із преміальної італійської шкіри — матеріалу з насиченою текстурою та природним благородним відтінком.",
    image: "/images/features/1_leather.svg",
    imageAlt: "Натуральна італійська шкіра",
    title: "Преміальна\nіталійська шкіра",
  },
  {
    description:
      "Кожен клатч збирається вручну в Україні — від розкрою шкіри до фінальної обробки країв.",
    image: "/images/features/2_gerb.svg",
    imageAlt: "Виготовлено вручну в Україні",
    title: "Виготовлено\nвручну в Україні",
  },
  {
    description:
      "Лаконічна прямокутна форма та стримана деталізація — аксесуар, який не втрачає актуальності з сезоном.",
    image: "/images/features/3_construction.svg",
    imageAlt: "Позачасовий дизайн",
    title: "Позачасовий\nдизайн",
  },
  {
    description:
      "Міцна шкіра та ретельне швейне виконання розраховані на щоденне носіння протягом багатьох років.",
    image: "/images/features/4_calendar.svg",
    imageAlt: "Створено на роки",
    title: "Створено\nна роки",
  },
] as const satisfies readonly NaturalLeatherBannerFeature[]

export const NATURAL_LEATHER_CONTENT = {
  bannerHeading: "Переваги ML Daily Pouch з натуральної шкіри",
  eyebrow: "НАТУРАЛЬНА ШКІРА",
  features: NATURAL_LEATHER_BANNER_FEATURES,
  heading: "ШКІРА, ЩО НАБУВАЄ ХАРАКТЕРУ З ЧАСОМ",
  imageAlt: "",
  imageSrc: "/images/natural_leather/statue.png",
} as const

export type NaturalLeatherFeature = NaturalLeatherBannerFeature
