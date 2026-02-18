'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Filter } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'
const CYCLE_MS = 4000
const TOTAL_STEPS = 4

/* ── Circular timer constants ── */
const TIMER_R = 14
const TIMER_CIRC = 2 * Math.PI * TIMER_R

/* ── Neumorphic style tokens ── */
const neuCard = {
  background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
  border: '1px solid #e0e0e0',
  borderTopColor: '#fff',
  borderBottomColor: '#d5d5d5',
  borderRadius: 20,
  boxShadow:
    '0 2px 0 0 rgba(255,255,255,1) inset, 0 -1px 0 0 rgba(0,0,0,0.03) inset, 0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
}

const neuCardActive = {
  background: 'linear-gradient(180deg, #f0f0f0 0%, #f5f5f5 100%)',
  border: '1px solid #d5d5d5',
  borderTopColor: '#e0e0e0',
  borderBottomColor: '#ccc',
  borderRadius: 20,
  boxShadow:
    'inset 0 2px 6px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.03)',
}

const neuPill = {
  background: 'linear-gradient(180deg, #ffffff 0%, #f3f3f3 100%)',
  border: '1px solid #e0e0e0',
  borderTopColor: '#fff',
  borderBottomColor: '#d5d5d5',
  boxShadow:
    '0 2px 0 0 rgba(255,255,255,1) inset, 0 -1px 0 0 rgba(0,0,0,0.03) inset, 0 4px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
}

/* ── Count-up number (remounts each activation) ── */
const CountUpNumber = ({ value, duration = 800 }: { value: number; duration?: number }) => {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    const steps = 25
    const stepMs = duration / steps
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(current))
      }
    }, stepMs)
    return () => clearInterval(timer)
  }, [value, duration])
  return <>{display.toLocaleString()}</>
}

/* ── Circular progress timer ── */
const CircularTimer = ({
  step,
  active,
  paused,
}: {
  step: number
  active: boolean
  paused: boolean
}) => (
  <div className="relative w-9 h-9 flex-shrink-0">
    <div
      className="absolute inset-[3px] rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
      style={{
        background: active
          ? 'linear-gradient(180deg, #2a2a2a 0%, #171717 100%)'
          : 'linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%)',
        color: active ? '#fff' : '#737373',
        boxShadow: active
          ? 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.2)'
          : 'inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      {step}
    </div>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36" fill="none">
      <circle
        cx="18"
        cy="18"
        r={TIMER_R}
        stroke={active ? '#e0e0e0' : 'transparent'}
        strokeWidth="2"
        fill="none"
        style={{ transition: 'stroke 0.3s ease' }}
      />
      {active && (
        <g transform="rotate(-90 18 18)">
          <motion.circle
            key={`timer-${step}-${paused}`}
            cx="18"
            cy="18"
            r={TIMER_R}
            fill="none"
            stroke="#171717"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={TIMER_CIRC}
            initial={{ strokeDashoffset: TIMER_CIRC }}
            animate={{ strokeDashoffset: paused ? undefined : 0 }}
            transition={{ duration: CYCLE_MS / 1000, ease: 'linear' }}
          />
        </g>
      )}
    </svg>
  </div>
)

const Pipeline = () => {
  const isMobile = useIsMobile()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_STEPS)
  }, [])

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index)
    setPaused(true)
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => setPaused(false), 8000)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(advance, CYCLE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, advance])

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    }
  }, [])

  /* ── Copy aligned to PDF + Process section ── */
  const journeySteps = [
    {
      title: 'Lead Finder Pro',
      description:
        'With a team of 10, we build a proprietary database of 3,000+ verified decision-makers in any target area you choose. Your pipeline, your data.',
    },
    {
      title: 'Outreach AI',
      description:
        'We reach out to hundreds every day with a custom offer we co-write with you—personalized conversations that build trust and drive replies.',
    },
    {
      title: 'Sales Accelerator',
      description:
        'We constantly optimize every touchpoint to ensure we hit what matters most: your close rate. We\'re not done when you get a lead—we\'re done when you close the deal.',
    },
  ]

  const clientStep = {
    title: 'Close the Deal',
    description:
      'Show up to pre-qualified appointments with prospects who already need your service. We handle everything before and after—you just close.',
  }

  const funnelStages = [
    { label: 'Database', numValue: 3000, numSuffix: '+', line1: 'prospects', line2: 'identified in your target area' },
    { label: 'Contacted', numValue: 100, numSuffix: '+', line1: 'reached daily', line2: 'with personalized outreach' },
    { label: 'Qualified', numValue: 35, numSuffix: '+', line1: 'appointments', line2: 'booked per quarter' },
    { label: 'Closed', numValue: 15, numSuffix: '+', line1: 'new customers', line2: '' },
  ]

  const funnelWidths = [100, 86, 72, 60]

  return (
    <section id="pipeline" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Filter className="w-4 h-4" />
            <span>YOUR PIPELINE</span>
          </div>
          <h2 className="section-title-gradient mb-4">
            How Your Pipeline Will Look
          </h2>
          <p className="section-subtitle mx-auto">
            Focus on closing deals while we fill your calendar with
            qualified, ready-to-buy prospects.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── Left: Accordion ── */}
          <motion.div
            {...fadeIn(isMobile)}
          >
            {/* Group 1 — "We handle" */}
            <div
              className="rounded-2xl p-5 mb-4"
              style={{ border: '1px dashed #d4d4d4' }}
            >
              <p className="text-sm text-[#a3a3a3] mb-4">
                We handle your entire acquisition
              </p>
              <div className="space-y-3">
                {journeySteps.map((step, index) => {
                  const isActive = activeIndex === index
                  return (
                    <div
                      key={step.title}
                      onClick={() => handleSelect(index)}
                      className="rounded-2xl p-4 cursor-pointer"
                      style={{
                        ...(isActive ? neuCardActive : neuCard),
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <CircularTimer
                          step={index + 1}
                          active={isActive}
                          paused={paused}
                        />
                        <h3
                          className={`flex-1 font-semibold text-sm md:text-base transition-colors duration-300 ${
                            isActive ? 'text-[#171717]' : 'text-[#737373]'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'text-[#171717] rotate-90'
                              : 'text-[#a3a3a3]'
                          }`}
                        />
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-[#737373] mt-3 ml-12 leading-relaxed">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Group 2 — "Your part" */}
            <div
              className="rounded-2xl p-5"
              style={{ border: '1px dashed #d4d4d4' }}
            >
              <p className="text-sm text-[#a3a3a3] mb-4">
                Your part in the process
              </p>
              <div
                onClick={() => handleSelect(3)}
                className="rounded-2xl p-4 cursor-pointer"
                style={{
                  ...(activeIndex === 3 ? neuCardActive : neuCard),
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="flex items-center gap-3">
                  <CircularTimer
                    step={4}
                    active={activeIndex === 3}
                    paused={paused}
                  />
                  <h3
                    className={`flex-1 font-semibold text-sm md:text-base transition-colors duration-300 ${
                      activeIndex === 3
                        ? 'text-[#171717]'
                        : 'text-[#737373]'
                    }`}
                  >
                    {clientStep.title}
                  </h3>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      activeIndex === 3
                        ? 'text-[#171717] rotate-90'
                        : 'text-[#a3a3a3]'
                    }`}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {activeIndex === 3 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[#737373] mt-3 ml-12 leading-relaxed">
                        {clientStep.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Funnel ── */}
          <motion.div
            {...fadeIn(isMobile, 0.1)}
            className="flex flex-col items-center"
          >
            <div className="w-full flex flex-col items-center">
              {funnelStages.map((stage, index) => {
                const isActive = activeIndex === index

                return (
                  <div
                    key={stage.label}
                    className="flex flex-col items-center w-full cursor-pointer"
                    onClick={() => handleSelect(index)}
                  >
                    {/* Label Pill */}
                    <div
                      className="relative z-10 px-4 py-1.5 rounded-full text-xs font-medium mb-[-10px]"
                      style={{
                        ...neuPill,
                        ...(isActive
                          ? {
                              background:
                                'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)',
                              color: '#fff',
                              borderColor: '#171717',
                              borderTopColor: 'rgba(255,255,255,0.12)',
                              borderBottomColor: '#000',
                              boxShadow:
                                '0 4px 12px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)',
                            }
                          : { color: '#737373' }),
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {stage.label}
                    </div>

                    {/* Stage Card */}
                    <motion.div
                      className="rounded-2xl py-6 px-6 text-center relative overflow-hidden"
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      style={{
                        width: `${funnelWidths[index]}%`,
                        transition: 'width 0.4s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                        ...(isActive
                          ? {
                              background:
                                'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderTopColor: 'rgba(255,255,255,0.15)',
                              boxShadow:
                                '0 12px 32px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
                            }
                          : {
                              background:
                                'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                              border: '1px solid #e0e0e0',
                              borderTopColor: '#fff',
                              borderBottomColor: '#d5d5d5',
                              boxShadow:
                                '0 2px 0 0 rgba(255,255,255,1) inset, 0 -1px 0 0 rgba(0,0,0,0.03) inset, 0 8px 24px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)',
                            }),
                      }}
                    >
                      {/* Shimmer sweep on active card */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background:
                                  'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
                              }}
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Number with count-up */}
                      <p
                        className="text-base md:text-lg font-bold relative z-10"
                        style={{
                          color: isActive ? '#fff' : '#171717',
                          transition: 'color 0.4s ease',
                        }}
                      >
                        {isActive ? (
                          <CountUpNumber
                            key={`count-${index}-${activeIndex}`}
                            value={stage.numValue}
                          />
                        ) : (
                          stage.numValue.toLocaleString()
                        )}
                        {stage.numSuffix} {stage.line1}
                      </p>
                      {stage.line2 && (
                        <p
                          className="text-sm font-medium relative z-10"
                          style={{
                            color: isActive
                              ? 'rgba(255,255,255,0.8)'
                              : '#737373',
                            transition: 'color 0.4s ease',
                          }}
                        >
                          {stage.line2}
                        </p>
                      )}
                    </motion.div>

                    {/* Connector with flowing dot */}
                    {index < funnelStages.length - 1 && (
                      <div className="my-1.5 relative flex justify-center">
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 24 14"
                          fill="none"
                          className="overflow-visible"
                        >
                          <path
                            d="M0 0 L12 14 L24 0"
                            fill={activeIndex === index ? '#a3a3a3' : '#d4d4d4'}
                            style={{ transition: 'fill 0.4s ease' }}
                          />
                          {activeIndex === index && (
                            <motion.circle
                              cx="12"
                              r="2.5"
                              fill="#171717"
                              animate={{
                                cy: [-3, 7, 17],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          )}
                        </svg>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-[#a3a3a3] text-center mt-6">
              Average results per client.
              <br />
              Results depend on market and service area.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pipeline
