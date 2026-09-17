"use client"

import { useEffect, useState, type RefObject } from "react"

import { useProductSelection } from "@/components/products/product-selection"

export function useHeroExperience() {
  return useProductSelection()
}

export function useHeroDockVisibility(
  primaryCtaRef: RefObject<HTMLButtonElement | null>,
) {
  const [isPrimaryCtaVisible, setIsPrimaryCtaVisible] = useState(true)

  useEffect(() => {
    const primaryCta = primaryCtaRef.current

    if (!primaryCta) {
      return
    }

    const desktopMediaQuery = window.matchMedia("(min-width: 640px)")

    const syncVisibility = (isIntersecting: boolean) => {
      setIsPrimaryCtaVisible(
        desktopMediaQuery.matches ? isIntersecting : false,
      )
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        syncVisibility(entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(primaryCta)

    const onViewportChange = () => {
      if (!desktopMediaQuery.matches) {
        setIsPrimaryCtaVisible(false)
        return
      }

      const [entry] = observer.takeRecords()

      if (entry) {
        syncVisibility(entry.isIntersecting)
      }
    }

    desktopMediaQuery.addEventListener("change", onViewportChange)
    onViewportChange()

    return () => {
      observer.disconnect()
      desktopMediaQuery.removeEventListener("change", onViewportChange)
    }
  }, [primaryCtaRef])

  return !isPrimaryCtaVisible
}

const STICKY_HEADER_SCROLL_THRESHOLD_PX = 16

export function useStickyHeader() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const syncStickyState = () => {
      setIsSticky(window.scrollY > STICKY_HEADER_SCROLL_THRESHOLD_PX)
    }

    syncStickyState()
    window.addEventListener("scroll", syncStickyState, { passive: true })

    return () => {
      window.removeEventListener("scroll", syncStickyState)
    }
  }, [])

  return isSticky
}
