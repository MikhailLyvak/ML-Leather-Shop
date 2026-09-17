"use client"

import Image from "next/image"
import Link from "next/link"

import { Menu } from "lucide-react"


import { BRAND } from "@/lib/brand"
import { cn } from "@/lib/utils"
import { CART_HREF, HOME_HREF } from "@/utils/route-href"

interface HeroHeaderThemeProps {
  isDark: boolean
}

interface HeroHeaderProps extends HeroHeaderThemeProps {
  isSticky: boolean
}

const HeroHeaderMenuButton = ({ className }: { className?: string }) => {
  return (
    <button
      aria-label="Меню"
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-1 py-1 text-sm tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        className,
      )}
      type="button"
    >
      <Menu aria-hidden="true" className="size-12" strokeWidth={1.5} />
      <span className="hidden text-base not-first:sm:inline">Меню</span>
    </button>
  )
}

const HeroHeaderLogo = ({
  className,
  isDark = false,
  showWordmark = true,
}: {
  className?: string
  isDark?: boolean
  showWordmark?: boolean
}) => {
  return (
    <Link
      aria-label={`${BRAND.initials} ${BRAND.wordmark}`}
      className={cn(
        "absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5 text-center transition-colors duration-1000 ease-in-out motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        isDark ? "text-white" : "text-[#211E1A]",
        className,
      )}
      href={HOME_HREF}
    >
      <span className="font-serif text-2xl leading-none font-bold [text-box:trim-both_cap_alphabetic] sm:text-6xl">
        {BRAND.initials}
      </span>
      {showWordmark ? (
        <Image
          alt=""
          aria-hidden="true"
          className={cn(
            "hidden mt-1 h-3 w-auto sm:block",
            isDark && "brightness-0 invert",
          )}
          height={15}
          src="/images/header/initials.svg"
          width={150}
        />
      ) : null}
    </Link>
  )
}

const CART_BADGE_CLASSNAME =
  "flex size-5.5 shrink-0 items-center justify-center rounded-full bg-cognac text-[0.6875rem] font-medium leading-none text-white tabular-nums"

const HeroCartIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-[21px] shrink-0", className)}
      fill="none"
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00479 7.3913L8.50192 1M18.9952 7.3913L14.4981 1M7.00288 11.0435V18.3478M11.5 11.0435V18.3478M15.9971 11.0435V18.3478M18.4316 22H4.56843C4.24376 21.9932 3.9305 21.8529 3.67958 21.6019C3.42866 21.3508 3.25482 21.0037 3.18631 20.617L1.04968 9.66052C0.992477 9.39812 0.984559 9.12338 1.02652 8.85674C1.06847 8.59009 1.15922 8.33839 1.29203 8.12036C1.42483 7.90232 1.59626 7.72354 1.79359 7.59732C1.99091 7.4711 2.20906 7.40069 2.4318 7.3913H20.5682C20.7909 7.40069 21.0091 7.4711 21.2064 7.59732C21.4037 7.72354 21.5752 7.90232 21.708 8.12036C21.8408 8.33839 21.9315 8.59009 21.9735 8.85674C22.0154 9.12338 22.0075 9.39812 21.9503 9.66052L19.8137 20.617C19.7452 21.0037 19.5713 21.3508 19.3204 21.6019C19.0695 21.8529 18.7562 21.9932 18.4316 22Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

const HeroHeaderCartLink = ({
  className,
  isDark = false,
}: {
  className?: string
  isDark?: boolean
}) => {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-6.5 py-3.5 text-sm transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2",
        isDark
          ? "border-white text-white hover:border-white hover:bg-white hover:text-[#211E1A] focus-visible:border-white focus-visible:bg-white focus-visible:text-[#211E1A] focus-visible:outline-white"
          : "border-[#211E1A] text-[#211E1A] hover:border-[#211E1A] hover:bg-[#211E1A] hover:text-white focus-visible:border-[#211E1A] focus-visible:bg-[#211E1A] focus-visible:text-white focus-visible:outline-[#211E1A]",
        className,
      )}
      href={CART_HREF}
    >
      <span className="hidden font-bold text-base sm:inline">Кошик</span>
      <HeroCartIcon />
      <span className="sr-only">Товарів у кошику: 0</span>
      <span aria-hidden="true" className={CART_BADGE_CLASSNAME}>
        0
      </span>
    </Link>
  )
}

const HeroHeaderDefault = ({ isDark }: HeroHeaderThemeProps) => {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 pt-5 sm:pt-10">
      <div className="pointer-events-auto mx-auto grid w-full max-w-[1520px] grid-cols-12 items-center gap-x-5 px-5 sm:px-10 min-[1520px]:px-0">
        <div className="relative col-span-12 flex items-center justify-between">
          <HeroHeaderMenuButton />
          <HeroHeaderLogo isDark={isDark} showWordmark />
          <HeroHeaderCartLink isDark={isDark} />
        </div>
      </div>
    </header>
  )
}

const HeroHeaderSticky = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <header
      aria-hidden={!isVisible}
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[100] px-5 pt-4 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-10 sm:pt-5",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto relative mx-auto flex w-full max-w-[1520px] items-center justify-between rounded-full border border-white/70 bg-white/55 px-4 py-2.5 text-neutral-950 shadow-sm backdrop-blur-md sm:px-6 sm:py-3",
          !isVisible && "pointer-events-none",
        )}
      >
        <HeroHeaderMenuButton className="text-neutral-950" />
        <HeroHeaderLogo className="text-[#211E1A]" showWordmark={false} />
        <HeroHeaderCartLink />
      </div>
    </header>
  )
}

const HeroHeader = ({ isDark, isSticky }: HeroHeaderProps) => {
  return !isSticky ? <HeroHeaderDefault isDark={isDark} /> : null
}

export { HeroHeader, HeroHeaderDefault, HeroHeaderSticky }
export type { HeroHeaderProps, HeroHeaderThemeProps }
