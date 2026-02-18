'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const spring = { type: 'spring' as const, stiffness: 260, damping: 20 }

type Phase = 0 | 1 | 2 | 3

const teamMembers = [
  { initials: 'AD', role: 'Strategy Lead', status: 'Reviewing scripts' },
  { initials: 'MR', role: 'Outreach Specialist', status: 'Optimizing sequence' },
  { initials: 'JC', role: 'Data Analyst', status: 'Tracking conversions' },
]

const updates = [
  { text: 'Open rate up to 45%', icon: 'trend' },
  { text: 'Campaign A/B test ready', icon: 'check' },
  { text: 'Weekly report generated', icon: 'chart' },
  { text: '12 meetings booked', icon: 'calendar' },
]

const TeamSync = () => {
  const [phase, setPhase] = useState<Phase>(0)
  const [activeUpdate, setActiveUpdate] = useState(0)

  // Phase cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(prev => ((prev + 1) % 4) as Phase)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  // Update ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveUpdate(prev => (prev + 1) % updates.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

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

      <div className="relative w-full max-w-[280px] h-[340px] flex flex-col gap-2.5 overflow-hidden">

        {/* Header bar */}
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
            <div className="flex -space-x-1.5">
              {teamMembers.map((m, i) => (
                <motion.div
                  key={m.initials}
                  className="w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white"
                  style={{
                    background: i === phase || phase === 3
                      ? '#171717'
                      : '#e8e8e8',
                    transition: 'background 0.3s ease',
                  }}
                >
                  <span
                    className="text-[6px] font-bold"
                    style={{
                      color: i === phase || phase === 3 ? '#fff' : '#737373',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {m.initials}
                  </span>
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#171717]">Your Team</p>
              <p className="text-[7px] text-[#a3a3a3]">10 members active</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[8px] text-[#a3a3a3] font-medium">Live</span>
          </div>
        </motion.div>

        {/* Team activity cards */}
        <div className="space-y-1.5">
          {teamMembers.map((member, i) => {
            const isActive = i === phase || phase === 3

            return (
              <motion.div
                key={member.initials}
                className="rounded-xl px-3 py-2.5 flex items-center gap-2.5"
                style={{
                  background: isActive
                    ? 'linear-gradient(180deg, #262626, #1a1a1a)'
                    : 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
                  border: isActive
                    ? '1px solid rgba(255,255,255,0.08)'
                    : '1px solid #f0f0f0',
                  boxShadow: isActive
                    ? '0 4px 12px rgba(0,0,0,0.15)'
                    : '0 1px 4px rgba(0,0,0,0.03)',
                  transition: 'all 0.4s ease',
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.12)' : '#e8e8e8',
                    transition: 'background 0.4s ease',
                  }}
                >
                  <span
                    className="text-[7px] font-bold"
                    style={{
                      color: isActive ? '#fff' : '#737373',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {member.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[9px] font-semibold truncate"
                    style={{
                      color: isActive ? '#fff' : '#171717',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-[7px] truncate"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.5)' : '#a3a3a3',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {member.status}
                  </p>
                </div>

                {/* Activity indicator */}
                {isActive && (
                  <div className="flex gap-0.5 flex-shrink-0">
                    {[0, 1, 2].map(d => (
                      <motion.div
                        key={d}
                        className="w-[3px] rounded-full"
                        style={{ background: 'rgba(255,255,255,0.5)' }}
                        animate={{ height: [4, 10, 4] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: d * 0.15,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Live update ticker */}
        <motion.div
          className="rounded-xl px-3 py-2.5 flex items-center gap-2.5"
          style={{
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.04)',
          }}
        >
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(145deg, #f5f5f5, #e8e8e8)',
              boxShadow: '1px 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUpdate}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                {updates[activeUpdate].icon === 'trend' && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l5-5 4 4 6-8" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {updates[activeUpdate].icon === 'check' && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {updates[activeUpdate].icon === 'chart' && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                )}
                {updates[activeUpdate].icon === 'calendar' && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#171717" strokeWidth="2" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="#171717" strokeWidth="2" />
                  </svg>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeUpdate}
              className="text-[9px] font-medium text-[#525252]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {updates[activeUpdate].text}
            </motion.p>
          </AnimatePresence>
          <span className="text-[7px] text-[#c5c5c5] ml-auto flex-shrink-0">just now</span>
        </motion.div>

        {/* Weekly call badge */}
        <motion.div
          className="rounded-xl px-3 py-2 flex items-center justify-between"
          style={{
            background: 'linear-gradient(145deg, #262626, #171717)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#fff" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="#fff" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-[9px] text-white font-medium">Weekly Strategy Call</span>
          </div>
          <span className="text-[8px] text-[#737373]">Every Thu</span>
        </motion.div>
      </div>
    </div>
  )
}

export default TeamSync
