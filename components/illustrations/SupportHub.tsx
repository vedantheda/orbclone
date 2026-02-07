'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ---- layout constants (percentages) ----
const HUB = { x: 55, y: 45 }
const PERSON = { x: 25, y: 78 }
const CALENDAR = { x: 82, y: 15 }
const CHART = { x: 84, y: 70 }

// Phase durations in ms — ~6s total loop
const PHASE_DURATIONS = [1500, 1500, 1500, 1500] // total 6s

type Phase = 0 | 1 | 2 | 3

const SupportHub = () => {
  const [phase, setPhase] = useState<Phase>(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const runPhase = (current: Phase) => {
      setPhase(current)
      const duration = PHASE_DURATIONS[current]
      timeout = setTimeout(() => {
        const next = ((current + 1) % 4) as Phase
        runPhase(next)
      }, duration)
    }

    runPhase(0)
    return () => clearTimeout(timeout)
  }, [])

  // Which satellite is currently "activating" (glow ring)
  const personActive = phase === 0
  const calendarActive = phase === 1
  const chartActive = phase === 2
  const allActive = phase === 3

  // Lines go brighter when their satellite is active or during "all active"
  const personLineActive = phase === 0 || phase === 3
  const calendarLineActive = phase === 1 || phase === 3
  const chartLineActive = phase === 2 || phase === 3

  // Traveling dots
  const showDotPerson = phase === 0
  const showDotCalendar = phase === 1
  const showDotChart = phase === 2

  // Hub pulses when a dot arrives (phases 0-2)
  const hubPulse = phase === 0 || phase === 1 || phase === 2

  return (
    <div className="relative w-full h-full">
      {/* ---- SVG layer: lines + traveling dots ---- */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Dashed line: hub <-> person */}
        <motion.line
          x1={`${HUB.x}%`} y1={`${HUB.y}%`}
          x2={`${PERSON.x}%`} y2={`${PERSON.y}%`}
          stroke="#d4d4d4"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{
            opacity: personLineActive ? 1 : 0.5,
            strokeDashoffset: [0, -24],
          }}
          transition={{
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.4 },
          }}
        />

        {/* Dashed line: hub <-> calendar */}
        <motion.line
          x1={`${HUB.x}%`} y1={`${HUB.y}%`}
          x2={`${CALENDAR.x}%`} y2={`${CALENDAR.y}%`}
          stroke="#d4d4d4"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{
            opacity: calendarLineActive ? 1 : 0.5,
            strokeDashoffset: [0, -24],
          }}
          transition={{
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.4 },
          }}
        />

        {/* Dashed line: hub <-> chart */}
        <motion.line
          x1={`${HUB.x}%`} y1={`${HUB.y}%`}
          x2={`${CHART.x}%`} y2={`${CHART.y}%`}
          stroke="#d4d4d4"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{
            opacity: chartLineActive ? 1 : 0.5,
            strokeDashoffset: [0, -24],
          }}
          transition={{
            strokeDashoffset: { duration: 3, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.4 },
          }}
        />

        {/* ---- Traveling dots ---- */}

        {/* Dot: Person -> Hub (phase 0) */}
        <AnimatePresence>
          {showDotPerson && (
            <motion.circle
              key="dot-person"
              r="3"
              fill="#171717"
              initial={{ cx: `${PERSON.x}%`, cy: `${PERSON.y}%`, opacity: 0 }}
              animate={{
                cx: [`${PERSON.x}%`, `${HUB.x}%`],
                cy: [`${PERSON.y}%`, `${HUB.y}%`],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                times: [0, 0.1, 0.85, 1],
              }}
            />
          )}
        </AnimatePresence>

        {/* Dot: Hub -> Calendar (phase 1) */}
        <AnimatePresence>
          {showDotCalendar && (
            <motion.circle
              key="dot-calendar"
              r="3"
              fill="#171717"
              initial={{ cx: `${HUB.x}%`, cy: `${HUB.y}%`, opacity: 0 }}
              animate={{
                cx: [`${HUB.x}%`, `${CALENDAR.x}%`],
                cy: [`${HUB.y}%`, `${CALENDAR.y}%`],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                times: [0, 0.1, 0.85, 1],
              }}
            />
          )}
        </AnimatePresence>

        {/* Dot: Hub -> Chart (phase 2) */}
        <AnimatePresence>
          {showDotChart && (
            <motion.circle
              key="dot-chart"
              r="3"
              fill="#171717"
              initial={{ cx: `${HUB.x}%`, cy: `${HUB.y}%`, opacity: 0 }}
              animate={{
                cx: [`${HUB.x}%`, `${CHART.x}%`],
                cy: [`${HUB.y}%`, `${CHART.y}%`],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                times: [0, 0.1, 0.85, 1],
              }}
            />
          )}
        </AnimatePresence>
      </svg>

      {/* ---- Central Hub ---- */}
      <div
        className="absolute w-20 h-20 flex items-center justify-center"
        style={{ top: `${HUB.y}%`, left: `${HUB.x}%`, transform: 'translate(-50%, -50%)' }}
      >
        {/* Static ambient ring */}
        <div
          className="absolute w-28 h-28 rounded-full"
          style={{ border: '1px solid rgba(23,23,23,0.08)' }}
        />

        {/* Hub glow ring - pulses when a dot arrives (phases 0-2) */}
        <AnimatePresence>
          {hubPulse && (
            <motion.div
              className="absolute w-20 h-20 rounded-full"
              style={{ border: '2px solid rgba(23,23,23,0.25)' }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              key={`hubglow-${phase}`}
            />
          )}
        </AnimatePresence>

        {/* Hub circle (neumorphic) - ALWAYS visible at full scale */}
        <div
          className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(145deg, #ffffff, #ececec)',
            boxShadow:
              '0 4px 16px rgba(0,0,0,0.08), inset 0 -2px 4px rgba(0,0,0,0.04), inset 0 2px 4px rgba(255,255,255,0.9)',
          }}
        >
          {/* Double chevron icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M13 5l6 7-6 7" fill="#171717" />
            <path d="M5 5l6 7-6 7" fill="#171717" />
          </svg>
        </div>
      </div>

      {/* ---- Person icon (bottom-left) - ALWAYS visible ---- */}
      <div
        className="absolute z-20"
        style={{
          bottom: `${100 - PERSON.y}%`,
          left: `${PERSON.x}%`,
          transform: 'translate(-50%, 50%)',
        }}
      >
        {/* Glow ring for person - shows during person activation */}
        <AnimatePresence>
          {personActive && (
            <motion.div
              key="person-glow"
              className="absolute inset-0 w-10 h-10 rounded-full"
              style={{ border: '2px solid rgba(23,23,23,0.3)' }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
          animate={
            allActive
              ? { y: [0, -5, 0] }
              : { y: 0 }
          }
          transition={
            allActive
              ? { y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }
              : { duration: 0.3 }
          }
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="#171717" />
            <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#171717" />
          </svg>
        </motion.div>
      </div>

      {/* ---- Calendar icon (top-right) - ALWAYS visible ---- */}
      <div
        className="absolute z-20"
        style={{
          top: `${CALENDAR.y}%`,
          right: `${100 - CALENDAR.x}%`,
          transform: 'translate(50%, -50%)',
        }}
      >
        {/* Glow ring for calendar */}
        <AnimatePresence>
          {calendarActive && (
            <motion.div
              key="calendar-glow"
              className="absolute w-9 h-9 rounded-lg"
              style={{
                border: '2px solid rgba(23,23,23,0.3)',
                top: 0,
                left: 0,
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{
            background: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
          animate={
            calendarActive
              ? { rotate: [0, 12, -6, 0], y: 0 }
              : allActive
                ? { y: [0, -4, 0], rotate: 0 }
                : { y: 0, rotate: 0 }
          }
          transition={
            calendarActive
              ? { rotate: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } }
              : allActive
                ? { y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }
                : { duration: 0.3 }
          }
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#171717" strokeWidth="2" />
            <line x1="3" y1="10" x2="21" y2="10" stroke="#171717" strokeWidth="2" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      {/* ---- Chart icon (bottom-right, dark) - ALWAYS visible ---- */}
      <div
        className="absolute z-20"
        style={{
          bottom: `${100 - CHART.y}%`,
          right: `${100 - CHART.x}%`,
          transform: 'translate(50%, 50%)',
        }}
      >
        {/* Glow ring for chart */}
        <AnimatePresence>
          {chartActive && (
            <motion.div
              key="chart-glow"
              className="absolute w-9 h-9 rounded-lg"
              style={{
                border: '2px solid rgba(23,23,23,0.3)',
                top: 0,
                left: 0,
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{
            background: '#171717',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
          animate={
            allActive
              ? { y: [0, -5, 0] }
              : { y: 0 }
          }
          transition={
            allActive
              ? { y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } }
              : { duration: 0.3 }
          }
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M18 20V10M12 20V4M6 20v-6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      {/* ---- Checkmark near hub (phase 2 - chart activates) ---- */}
      <AnimatePresence>
        {phase === 2 && (
          <motion.div
            className="absolute z-30 flex items-center justify-center"
            style={{
              top: `${HUB.y - 14}%`,
              left: `${HUB.x + 8}%`,
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: '#171717',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
              exit: { duration: 0.3 },
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <motion.path
                d="M5 13l4 4L19 7"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SupportHub
