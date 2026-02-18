'use client'

import { useState, useEffect } from 'react'

export const ease = [0.16, 1, 0.3, 1] as const

/**
 * Detects mobile viewport (< 768px).
 * Returns false during SSR; updates after hydration.
 * For below-the-fold sections this fires before the user scrolls there.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    setIsMobile(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

/**
 * Scroll-triggered fade-in animation props.
 * On mobile: instant appearance (no y offset, fast duration, no delays).
 * On desktop: full 30px slide-up with stagger.
 */
export function fadeIn(isMobile: boolean, delay = 0, y = 30) {
  return {
    initial: { opacity: 0, y: isMobile ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: isMobile ? '0px' : '-100px' },
    transition: {
      duration: isMobile ? 0.3 : 0.7,
      ease,
      ...(delay && !isMobile ? { delay } : {}),
    },
  }
}
