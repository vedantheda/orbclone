'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'result' | 'shrink' | 'before' | 'growth'

const BARS = [
  { beforeHeight: 22, afterHeight: 30, dark: false },
  { beforeHeight: 26, afterHeight: 50, dark: true },
  { beforeHeight: 30, afterHeight: 80, dark: true, label: 'Leads' },
  { beforeHeight: 26, afterHeight: 60, dark: true, label: 'Booked' },
  { beforeHeight: 22, afterHeight: 40, dark: true },
]

// Start with result visible, keep "before" short
const PHASE_TIMINGS: Record<Phase, number> = {
  result: 2500,
  shrink: 800,
  before: 1200,
  growth: 1500,
}

const PHASE_ORDER: Phase[] = ['result', 'shrink', 'before', 'growth']

const ResultsChart = () => {
  const [phase, setPhase] = useState<Phase>('growth')

  useEffect(() => {
    const duration = PHASE_TIMINGS[phase]
    const timer = setTimeout(() => {
      const currentIndex = PHASE_ORDER.indexOf(phase)
      const nextIndex = (currentIndex + 1) % PHASE_ORDER.length
      setPhase(PHASE_ORDER[nextIndex])
    }, duration)
    return () => clearTimeout(timer)
  }, [phase])

  const showAfterState = phase === 'growth' || phase === 'result'
  const showLabels = phase === 'growth' || phase === 'result'
  const showGrowthIndicator = phase === 'result'
  const isBefore = phase === 'before' || phase === 'shrink'

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      {/* Labels row */}
      <div className="flex justify-between items-center mb-3 px-2">
        <motion.span
          className="text-[9px] font-medium tracking-wider px-2 py-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.8)',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.04)',
            color: '#a3a3a3',
          }}
          animate={{
            opacity: isBefore ? 1 : 0.45,
            scale: isBefore ? 1.08 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          BEFORE
        </motion.span>

        <AnimatePresence>
          {showAfterState && (
            <motion.span
              className="text-[9px] font-medium tracking-wider px-2 py-1 rounded-full"
              style={{
                background: 'linear-gradient(145deg, #171717, #262626)',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.15)',
                color: '#ffffff',
              }}
              initial={{ opacity: 0, scale: 0.5, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              AFTER
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Chart area */}
      <div className="flex-1 flex items-end justify-center gap-3 pb-2">
        {BARS.map((bar, i) => {
          const targetHeight = showAfterState ? bar.afterHeight : bar.beforeHeight
          const useDarkStyle = bar.dark && showAfterState
          const barBackground = useDarkStyle
            ? 'linear-gradient(180deg, #404040, #171717)'
            : 'linear-gradient(180deg, #ffffff, #f0f0f0)'
          const barShadow = useDarkStyle
            ? '4px 4px 12px rgba(0,0,0,0.15), -2px -2px 8px rgba(255,255,255,0.1)'
            : '4px 4px 12px rgba(0,0,0,0.06), -4px -4px 12px rgba(255,255,255,0.9)'
          const barOpacity = useDarkStyle ? 0.95 : 0.7
          const staggerDelay = bar.dark && phase === 'growth' ? (i - 1) * 0.12 : 0

          return (
            <div key={i} className="relative flex flex-col items-center">
              <AnimatePresence>
                {bar.label && showLabels && (
                  <motion.span
                    className="absolute -top-7 whitespace-nowrap px-2 py-1 rounded-full text-[9px] font-medium z-10"
                    style={{
                      background: 'white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      border: '1px solid #f0f0f0',
                      color: '#525252',
                    }}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3, delay: staggerDelay + 0.15, ease: 'easeOut' }}
                  >
                    {bar.label}
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.div
                className="w-9 rounded-xl relative overflow-hidden"
                animate={{ height: targetHeight, opacity: barOpacity }}
                style={{ background: barBackground, boxShadow: barShadow, originY: 1 }}
                transition={
                  phase === 'growth'
                    ? { type: 'spring', stiffness: 200, damping: 12, delay: staggerDelay }
                    : { duration: 0.6, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }
                }
              >
                {i === 2 && phase === 'result' && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Growth indicator */}
      <AnimatePresence>
        {showGrowthIndicator && (
          <motion.div
            className="absolute right-2 top-1/2 flex items-center gap-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <motion.svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.1 }}
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </motion.svg>
            <span className="text-[11px] font-bold text-[#171717]">3x</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ResultsChart
