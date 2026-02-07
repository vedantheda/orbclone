'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Phase = 'searching' | 'found' | 'hold'

const TICK_COUNT = 12
// Needle angles: -135 = slow (bottom-left), 0 = mid, +45 = fast (top-right)
const NEEDLE_SLOW = -135
const NEEDLE_FAST = 45

const SpeedGauge = () => {
  const [phase, setPhase] = useState<Phase>('searching')
  const [needleAngle, setNeedleAngle] = useState(NEEDLE_SLOW)
  const [activeTicks, setActiveTicks] = useState(0)
  const [counterValue, setCounterValue] = useState(0)
  const [showLabel, setShowLabel] = useState(false)
  const [pulseHub, setPulseHub] = useState(false)

  // Phase cycling state machine
  useEffect(() => {
    const durations: Record<Phase, number> = {
      searching: 2000,
      found: 2000,
      hold: 2000,
    }
    const next: Record<Phase, Phase> = {
      searching: 'found',
      found: 'hold',
      hold: 'searching',
    }

    const timer = setTimeout(() => {
      const nextPhase = next[phase]
      setPhase(nextPhase)

      // Reset everything when looping back to searching
      if (nextPhase === 'searching') {
        setNeedleAngle(NEEDLE_SLOW)
        setActiveTicks(0)
        setCounterValue(0)
        setShowLabel(false)
        setPulseHub(false)
      }
    }, durations[phase])

    return () => clearTimeout(timer)
  }, [phase])

  // Phase 1: Searching - sweep needle and light up ticks
  useEffect(() => {
    if (phase === 'searching') {
      // Animate needle from slow to fast using fewer steps (10 instead of 40)
      const steps = 10
      const stepDuration = 1800 / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        if (currentStep <= steps) {
          const t = currentStep / steps
          const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
          setNeedleAngle(NEEDLE_SLOW + (NEEDLE_FAST - NEEDLE_SLOW) * eased)
          setActiveTicks(Math.floor(eased * TICK_COUNT))
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [phase])

  // Phase 2: Found - overshoot bounce, counter, hub pulse
  useEffect(() => {
    if (phase === 'found') {
      // Overshoot bounce: go past, then settle
      setNeedleAngle(NEEDLE_FAST + 15) // overshoot
      const bounce1 = setTimeout(() => setNeedleAngle(NEEDLE_FAST - 8), 200)
      const bounce2 = setTimeout(() => setNeedleAngle(NEEDLE_FAST + 4), 350)
      const bounce3 = setTimeout(() => setNeedleAngle(NEEDLE_FAST), 480)

      // All ticks active
      setActiveTicks(TICK_COUNT)

      // Hub pulse
      const pulseTimer = setTimeout(() => setPulseHub(true), 300)

      // Counter: 1... 2... 3... then label
      const counter1 = setTimeout(() => setCounterValue(1), 500)
      const counter2 = setTimeout(() => setCounterValue(2), 900)
      const counter3 = setTimeout(() => setCounterValue(3), 1300)
      const labelTimer = setTimeout(() => setShowLabel(true), 1600)

      return () => {
        clearTimeout(bounce1)
        clearTimeout(bounce2)
        clearTimeout(bounce3)
        clearTimeout(pulseTimer)
        clearTimeout(counter1)
        clearTimeout(counter2)
        clearTimeout(counter3)
        clearTimeout(labelTimer)
      }
    }
  }, [phase])

  // Phase 3: Hold - just holds, then state machine resets via the phase timer

  // Compute tick positions and states
  const ticks = [...Array(TICK_COUNT)].map((_, i) => {
    // Spread ticks across the gauge arc (from ~7 o'clock to ~5 o'clock, 270 degree sweep)
    const startAngle = -225
    const endAngle = 45
    const angle = startAngle + (i / (TICK_COUNT - 1)) * (endAngle - startAngle)
    const isActive = i < activeTicks
    return { angle, isActive, index: i }
  })

  return (
    <div className="relative w-44 h-44">
      {/* Outer neumorphic circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
          boxShadow: `
            inset -8px -8px 16px rgba(255, 255, 255, 0.95),
            inset 8px 8px 16px rgba(0, 0, 0, 0.08),
            4px 4px 12px rgba(0, 0, 0, 0.06)
          `,
        }}
      />

      {/* Inner track circle */}
      <div
        className="absolute inset-5 rounded-full"
        style={{ border: '1px solid #e8e8e8' }}
      />

      {/* Tick marks */}
      {ticks.map(({ angle, isActive, index }) => {
        const rad = (angle * Math.PI) / 180
        const radius = 72
        const cx = 88 + radius * Math.cos(rad)
        const cy = 88 + radius * Math.sin(rad)

        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: cx - (isActive ? 3.5 : 2.5),
              top: cy - (isActive ? 3.5 : 2.5),
            }}
            animate={{
              width: isActive ? 7 : 5,
              height: isActive ? 7 : 5,
              backgroundColor: isActive ? '#171717' : '#d4d4d4',
              scale: isActive ? [1, 1.4, 1] : 1,
              opacity: isActive ? 1 : 0.4,
            }}
            transition={{
              duration: 0.3,
              scale: { duration: 0.4, ease: 'easeOut' },
            }}
          />
        )
      })}

      {/* Needle glow trail (blur shadow) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: needleAngle }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 14,
          mass: 0.8,
        }}
      >
        <div
          className="w-[6px] h-12 rounded-full origin-bottom opacity-10"
          style={{
            background: '#171717',
            transform: 'translateY(-24px)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>

      {/* Animated needle */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: needleAngle }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 14,
          mass: 0.8,
        }}
      >
        <div
          className="w-[3px] h-14 rounded-full origin-bottom"
          style={{
            background: 'linear-gradient(to top, #171717, #404040)',
            transform: 'translateY(-28px)',
            boxShadow: '1px 1px 4px rgba(0,0,0,0.2)',
          }}
        />
      </motion.div>

      {/* Center hub with pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Pulse ring 1 - triggers on "found" */}
        <AnimatePresence>
          {pulseHub && (
            <motion.div
              key="pulse1"
              className="absolute w-8 h-8 rounded-full"
              style={{ border: '2px solid rgba(23,23,23,0.2)' }}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 3.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>
        {/* Pulse ring 2 - staggered */}
        <AnimatePresence>
          {pulseHub && (
            <motion.div
              key="pulse2"
              className="absolute w-8 h-8 rounded-full"
              style={{ border: '1.5px solid rgba(23,23,23,0.12)' }}
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Center dot */}
        <motion.div
          className="w-4 h-4 rounded-full relative z-10"
          style={{
            background: 'linear-gradient(145deg, #262626, #171717)',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.3)',
          }}
          animate={{
            scale: pulseHub ? [1, 1.3, 1] : 1,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* Counter / "3 DAYS" label area */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <AnimatePresence mode="wait">
          {/* Phase 1: hidden */}
          {phase === 'searching' && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            />
          )}

          {/* Phase 2: counting up then "3 DAYS" */}
          {phase === 'found' && !showLabel && counterValue > 0 && (
            <motion.span
              key={`counter-${counterValue}`}
              className="text-[12px] font-bold tracking-wider px-2 py-1 rounded-full block text-center"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                color: '#171717',
              }}
              initial={{ opacity: 0, scale: 0.6, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {counterValue}
            </motion.span>
          )}

          {/* "3 DAYS" final label with scale pop */}
          {(phase === 'found' && showLabel) || phase === 'hold' ? (
            <motion.span
              key="label-3days"
              className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full block text-center whitespace-nowrap"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                color: '#171717',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: phase === 'hold'
                  ? [1, 1, 0]
                  : 1,
                scale: phase === 'hold'
                  ? [1, 1, 0.8]
                  : [0.5, 1.2, 1],
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={
                phase === 'hold'
                  ? { duration: 2, times: [0, 0.5, 1], ease: 'easeInOut' }
                  : { duration: 0.4, times: [0, 0.6, 1], ease: 'easeOut' }
              }
            >
              3 DAYS
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SpeedGauge
