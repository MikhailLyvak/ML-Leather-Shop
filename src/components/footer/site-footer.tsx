import Image from "next/image"
import Link from "next/link"

import {
  FOOTER_CONTENT,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/components/footer/content"
import { BRAND } from "@/lib/brand"
import { HOME_HREF } from "@/utils/route-href"

const FOOTER_BODY_TEXT_CLASSNAME =
  "m-0 font-gilroy text-sm font-normal leading-[1.45] tracking-normal text-[#211E1A]/75"

const FOOTER_COLUMN_TITLE_CLASSNAME =
  "m-0 font-gilroy text-base font-medium leading-none tracking-normal text-[#211E1A] [text-box:trim-both_cap_alphabetic]"

const FOOTER_LEGAL_LINK_CLASSNAME =
  "font-gilroy text-sm font-medium leading-[1.35] tracking-normal text-[#211E1A] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211E1A]"

const FooterMastercardIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-auto"
      fill="none"
      viewBox="0 0 32 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="10" fill="#EB001B" r="8" />
      <circle cx="21" cy="10" fill="#F79E1B" fillOpacity="0.85" r="8" />
    </svg>
  )
}

const FooterVisaIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-auto"
      fill="none"
      viewBox="0 0 48 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8 1.2L16.4 14.8H13.1L16.5 1.2H19.8ZM31.2 1.5C30.3 1.1 29 0.9 27.4 0.9C23.8 0.9 21.3 2.7 21.3 5.4C21.3 7.4 23.1 8.5 24.5 9.2C26 9.9 26.5 10.4 26.5 11C26.5 11.9 25.4 12.4 23.4 12.4C21.7 12.4 20.5 12.1 19.3 11.6L18.8 11.4L18.3 14.5C19.4 15 21.2 15.3 23.1 15.3C27 15.3 29.4 13.5 29.4 10.6C29.4 9 28.4 7.8 26.1 6.8C24.8 6.2 24 5.7 24 5.1C24 4.5 24.7 3.9 26.3 3.9C27.7 3.9 28.8 4.2 29.6 4.5L29.9 4.6L30.4 1.7L31.2 1.5ZM40.8 1.2H38.1C37.1 1.2 36.4 1.5 36 2.4L31.1 14.8H34.7L35.4 12.7H39.9L40.4 14.8H43.6L40.8 1.2ZM36.4 10.1L38.1 4.9L39.1 10.1H36.4ZM12.7 1.2L9.5 10.2L9.1 8.1C8.4 5.8 6.2 3.3 3.7 2.1L6.7 14.8H10.2L15.6 1.2H12.7Z"
        fill="#211E1A"
      />
    </svg>
  )
}

const FooterInstagramIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="18" rx="5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.2" cy="6.8" fill="currentColor" r="0.9" stroke="none" />
    </svg>
  )
}

const FooterTikTokIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.6 5.82C15.68 4.84 15.14 3.54 15.14 2.12H12.3V15.54C12.3 17.48 10.74 19.04 8.8 19.04C6.86 19.04 5.3 17.48 5.3 15.54C5.3 13.6 6.86 12.04 8.8 12.04C9.18 12.04 9.54 12.1 9.88 12.2V9.28C9.54 9.22 9.18 9.18 8.8 9.18C5.3 9.18 2.46 12.02 2.46 15.52C2.46 19.02 5.3 21.86 8.8 21.86C12.3 21.86 15.14 19.02 15.14 15.52V9.08C16.42 10.02 18.02 10.58 19.74 10.58V7.74C18.78 7.74 17.9 7.4 17.18 6.84L16.6 5.82Z" />
    </svg>
  )
}

const SiteFooter = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#211E1A]/10 bg-[#E3DFD3]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-10 sm:pb-10 sm:pt-16">
        <div className="flex flex-col items-center text-center">
          <Link
            aria-label={`${BRAND.initials} — ${BRAND.wordmark}`}
            className="font-serif text-[56px] font-bold uppercase leading-none tracking-normal text-[#211E1A] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211E1A] sm:text-[72px] [text-box:trim-both_cap_alphabetic]"
            href={HOME_HREF}
          >
            {BRAND.initials}
          </Link>
          <a
            className="mt-3 font-gilroy text-sm font-normal leading-none tracking-normal text-[#211E1A]/80 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211E1A]"
            href={`mailto:${FOOTER_CONTENT.contactEmail}`}
          >
            {FOOTER_CONTENT.contactEmailDisplay}
          </a>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-8">
          <nav
            aria-label="Юридична інформація"
            className="flex flex-col items-center gap-3 sm:items-start"
          >
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.id}
                className={FOOTER_LEGAL_LINK_CLASSNAME}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h2 className={FOOTER_COLUMN_TITLE_CLASSNAME}>
              {FOOTER_CONTENT.paymentTitle}
            </h2>
            <div
              aria-label="Visa та Mastercard"
              className="flex items-center gap-3"
            >
              <FooterVisaIcon />
              <FooterMastercardIcon />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h2 className={FOOTER_COLUMN_TITLE_CLASSNAME}>
              {FOOTER_CONTENT.addressTitle}
            </h2>
            <p className={`${FOOTER_BODY_TEXT_CLASSNAME} max-w-48 text-center sm:text-left`}>
              {FOOTER_CONTENT.address}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h2 className={FOOTER_COLUMN_TITLE_CLASSNAME}>
              {FOOTER_CONTENT.emailTitle}
            </h2>
            <a
              className={`${FOOTER_BODY_TEXT_CLASSNAME} transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211E1A]`}
              href={`mailto:${FOOTER_CONTENT.contactEmail}`}
            >
              {FOOTER_CONTENT.contactEmail}
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <h2 className={FOOTER_COLUMN_TITLE_CLASSNAME}>
              {FOOTER_CONTENT.socialTitle}
            </h2>
            <div className="flex items-center gap-3">
              {FOOTER_SOCIAL_LINKS.map((socialLink) => (
                <a
                  key={socialLink.id}
                  aria-label={socialLink.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-[#211E1A]/35 text-[#211E1A] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211E1A]"
                  href={socialLink.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {socialLink.id === "tiktok" ? (
                    <FooterTikTokIcon />
                  ) : (
                    <FooterInstagramIcon />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        alt={FOOTER_CONTENT.columnImageAlt}
        aria-hidden={FOOTER_CONTENT.columnImageAlt === ""}
        className="pointer-events-none absolute right-0 bottom-0 z-[1] h-auto w-[min(72vw,360px)] max-w-none translate-y-8 opacity-100 sm:w-[min(58vw,480px)] sm:translate-y-12 lg:w-[min(42vw,792px)] lg:translate-y-16"
        height={FOOTER_CONTENT.columnImageHeight}
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 58vw, 792px"
        src={FOOTER_CONTENT.columnImageSrc}
        width={FOOTER_CONTENT.columnImageWidth}
      />

      <p
        aria-hidden="true"
        className="pointer-events-none relative z-[2] -mb-6 select-none px-2 text-center font-gilroy text-[clamp(3.5rem,14vw,11rem)] font-medium uppercase leading-[0.85] tracking-[0.06em] text-[#211E1A]/[0.07] sm:-mb-10 [text-box:trim-both_cap_alphabetic]"
      >
        {BRAND.wordmark}
      </p>
    </footer>
  )
}

export { SiteFooter }
