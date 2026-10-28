"use client"

import { useEffect, useState, type RefObject } from "react"

import { useProductSelection } from "@/components/products/product-selection"

export function useHeroExperience() {
  return useProductSelection()
}

export function useHeroDockVisibility(heroRef: RefObject<HTMLElement | null>) {
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.intersectionRatio >= 1)
      },
      { threshold: [0, 1] },
    )

    observer.observe(hero)

    return () => {
      observer.disconnect()
    }
  }, [heroRef])

  return !isHeroVisible
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
