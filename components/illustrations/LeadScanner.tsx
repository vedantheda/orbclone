'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const spring = { type: 'spring' as const, stiffness: 260, damping: 20 }

const leads = [
  { initials: 'JM', name: 'John Miller', company: 'Axon SaaS', verified: false },
  { initials: 'SR', name: 'Sarah Roberts', company: 'Vantage Co', verified: false },
  { initials: 'DK', name: 'David Kim', company: 'Praxion Inc', verified: false },
  { initials: 'AL', name: 'Ana Lopez', company: 'Nuvora Group', verified: false },
  { initials: 'TW', name: 'Tom Walsh', company: 'Meridian HQ', verified: false },
]

type Phase = 'scanning' | 'verifying' | 'complete' | 'reset'

const LeadScanner = () => {
  const [phase, setPhase] = useState<Phase>('scanning')
  const [scanProgress, setScanProgress] = useState(0)
  const [visibleLeads, setVisibleLeads] = useState(0)
  const [verifiedCount, setVerifiedCount] = useState(0)

  // Phase cycling
  useEffect(() => {
    const durations: Record<Phase, number> = {
      scanning: 2800,
      verifying: 3500,
      complete: 2000,
      reset: 400,
    }
    const next: Record<Phase, Phase> = {
      scanning: 'verifying',
      verifying: 'complete',
      complete: 'reset',
      reset: 'scanning',
    }
    const timer = setTimeout(() => {
      const nextPhase = next[phase]
      setPhase(nextPhase)
      if (nextPhase === 'scanning') {
        setScanProgress(0)
        setVisibleLeads(0)
        setVerifiedCount(0)
      }
    }, durations[phase])
    return () => clearTimeout(timer)
  }, [phase])

  // Scanning progress
  useEffect(() => {
    if (phase === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress(prev => Math.min(prev + 5, 100))
      }, 120)
      return () => clearInterval(interval)
    }
  }, [phase])

  // Leads appearing during verifying
  useEffect(() => {
    if (phase === 'verifying' && visibleLeads < leads.length) {
      const timer = setTimeout(() => setVisibleLeads(prev => prev + 1), 500)
      return () => clearTimeout(timer)
    }
  }, [phase, visibleLeads])

  // Verification checkmarks
  useEffect(() => {
    if (phase === 'verifying' && verifiedCount < visibleLeads) {
      const timer = setTimeout(() => setVerifiedCount(prev => prev + 1), 700)
      return () => clearTimeout(timer)
    }
  }, [phase, visibleLeads, verifiedCount])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #171717 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Main container — fixed height to prevent layout shift */}
      <div className="relative w-full max-w-[280px] h-[340px] flex flex-col gap-3 overflow-hidden">

        {/* Scanner header */}
        <motion.div
          className="rounded-2xl px-4 py-3 flex items-center justify-between"
          style={{
            background: '#fff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.04)',
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#171717] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2.5" />
                <path d="M16 16l4.5 4.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#171717]">Lead Database</p>
              <p className="text-[8px] text-[#a3a3a3]">B2B Decision Makers</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {phase === 'scanning' && (
              <motion.div
                key="scanning"
                className="flex items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#a3a3a3] border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                />
                <span className="text-[8px] text-[#a3a3a3] font-medium">{scanProgress}%</span>
              </motion.div>
            )}
            {(phase === 'verifying' || phase === 'complete') && (
              <motion.div
                key="count"
                className="flex items-center gap-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span className="text-[8px] font-bold text-[#171717]">{verifiedCount} verified</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Lead cards */}
        <div className="space-y-1.5">
          <AnimatePresence>
            {leads.slice(0, visibleLeads).map((lead, i) => {
              const isVerified = i < verifiedCount

              return (
                <motion.div
                  key={lead.initials}
                  initial={{ opacity: 0, x: 20, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ ...spring }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
                  style={{
                    background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#e8e8e8' }}
                  >
                    <span className="text-[7px] font-bold text-[#737373]">{lead.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-semibold text-[#171717] truncate">{lead.name}</p>
                    <p className="text-[7px] text-[#a3a3a3]">{lead.company}</p>
                  </div>
                  <AnimatePresence mode="wait">
                    {isVerified ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ ...spring }}
                        className="w-4 h-4 rounded-full bg-[#171717] flex items-center justify-center flex-shrink-0"
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="pending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex gap-0.5"
                      >
                        {[0, 1, 2].map(d => (
                          <motion.div
                            key={d}
                            className="w-0.5 h-0.5 rounded-full bg-[#c5c5c5]"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Scanning placeholder rows */}
          {phase === 'scanning' && (
            <>
              {[0, 1, 2].map(i => (
                <motion.div
                  key={`placeholder-${i}`}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
                  style={{
                    background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
                    border: '1px solid #f0f0f0',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#ebebeb]" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-20 rounded-full bg-[#ebebeb]" />
                    <div className="h-1.5 w-14 rounded-full bg-[#f0f0f0]" />
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Bottom total */}
        <AnimatePresence>
          {phase === 'complete' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ ...spring }}
              className="rounded-xl px-4 py-2.5 flex items-center justify-between"
              style={{
                background: 'linear-gradient(145deg, #262626, #171717)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              <span className="text-[9px] text-[#a3a3a3] font-medium">Total Verified</span>
              <span className="text-[12px] font-bold text-white">3,000+</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LeadScanner
