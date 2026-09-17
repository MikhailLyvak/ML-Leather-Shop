import {
  DELIVERY_AND_PAYMENT_HREF,
  PRIVACY_POLICY_HREF,
  PUBLIC_OFFER_HREF,
  RETURNS_AND_EXCHANGE_HREF,
} from "@/utils/route-href"

export const FOOTER_LEGAL_LINKS = [
  {
    href: PUBLIC_OFFER_HREF,
    id: "public-offer",
    label: "Публічний договір оферти",
  },
  {
    href: RETURNS_AND_EXCHANGE_HREF,
    id: "returns-and-exchange",
    label: "Повернення та обмін",
  },
  {
    href: DELIVERY_AND_PAYMENT_HREF,
    id: "delivery-and-payment",
    label: "Доставка і оплата",
  },
  {
    href: PRIVACY_POLICY_HREF,
    id: "privacy-policy",
    label: "Політика конфіденційності",
  },
] as const

export const FOOTER_SOCIAL_LINKS = [
  {
    href: "https://www.tiktok.com/",
    id: "tiktok",
    label: "TikTok",
  },
  {
    href: "https://www.instagram.com/",
    id: "instagram",
    label: "Instagram",
  },
] as const

export const FOOTER_CONTENT = {
  address: "Germany — 785 15h Street, Office 47, Berlin, De 81566",
  columnImageAlt: "",
  columnImageHeight: 558,
  columnImageSrc: "/images/footer/footer.png",
  columnImageWidth: 792,
  contactEmail: "michael.lyvanchello@gmail.com",
  contactEmailDisplay: "Michael.Lyvanchello@gmail.com",
  paymentTitle: "Оплата",
  addressTitle: "Адреса",
  emailTitle: "E-mail",
  socialTitle: "Get in Touch",
} as const
