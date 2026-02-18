'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const spring = { type: "spring" as const, stiffness: 260, damping: 20 }

const leads = [
  { name: 'Sarah M.', action: 'Booked a demo' },
  { name: 'Mike T.', action: 'Booked appointment' },
  { name: 'Rachel L.', action: 'Qualified by AI' },
  { name: 'James W.', action: 'Downloaded guide' },
]

const formFields = [
  { label: 'Full Name', filled: 'John Martinez' },
  { label: 'Work Email', filled: 'john@company.com' },
  { label: 'Company', filled: 'Acme Consulting' },
  { label: 'Team Size', filled: '10-50' },
]

type Screen = 'ad' | 'form' | 'confirm'

const SocialAds = () => {
  const [currentLead, setCurrentLead] = useState(0)
  const [leadCount, setLeadCount] = useState(12)
  const [screen, setScreen] = useState<Screen>('ad')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLead(prev => (prev + 1) % leads.length)
      setLeadCount(prev => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const durations: Record<Screen, number> = { ad: 3200, form: 3000, confirm: 2200 }
    const next: Record<Screen, Screen> = { ad: 'form', form: 'confirm', confirm: 'ad' }
    const timer = setTimeout(() => setScreen(next[screen]), durations[screen])
    return () => clearTimeout(timer)
  }, [screen])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #171717 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Phone frame */}
      <motion.div
        className="relative w-[138px] h-[285px] rounded-[24px] overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #111111 100%)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
          padding: '2.5px',
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...spring }}
      >
        {/* Screen */}
        <div className="w-full h-full rounded-[21px] overflow-hidden bg-white flex flex-col">
          {/* Status bar with Dynamic Island */}
          <div className="h-7 bg-white flex items-center justify-between px-3 pt-1 flex-shrink-0 relative">
            <span className="text-[7px] font-semibold text-[#171717]">9:41</span>
            {/* Dynamic Island */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[38px] h-[10px] bg-[#111111] rounded-full" />
            <div className="flex items-center gap-0.5">
              <svg width="10" height="8" viewBox="0 0 16 12" fill="#171717">
                <rect x="0" y="8" width="3" height="4" rx="0.5"/>
                <rect x="4.5" y="5" width="3" height="7" rx="0.5"/>
                <rect x="9" y="2" width="3" height="10" rx="0.5"/>
                <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" opacity="0.2"/>
              </svg>
              <div className="w-3.5 h-[7px] rounded-[1.5px] border border-[#171717] ml-0.5 relative">
                <div className="absolute inset-[1px] right-[2px] rounded-[0.5px] bg-[#171717]" />
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {/* ===== AD SCREEN ===== */}
              {screen === 'ad' && (
                <motion.div
                  key="ad"
                  className="absolute inset-0 px-2.5 pt-1 pb-2 flex flex-col"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Social post header */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#171717] flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill="#fff"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[7px] font-bold text-[#171717] leading-none">GrowthEdge Co.</p>
                      <p className="text-[6px] text-[#a3a3a3] leading-none mt-0.5">Sponsored</p>
                    </div>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#a3a3a3">
                      <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
                    </svg>
                  </div>

                  {/* Ad image - gradient with growth chart */}
                  <div
                    className="w-full h-[62px] rounded-lg mb-1.5 relative overflow-hidden flex items-end justify-center"
                    style={{ background: 'linear-gradient(180deg, #e8e8e8 0%, #d4d4d4 100%)' }}
                  >
                    {/* Simple growth chart illustration */}
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="mb-1 opacity-40">
                      <polyline points="5,25 15,20 22,12 30,15 38,6 45,3" stroke="#525252" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="45" cy="3" r="2.5" stroke="#525252" strokeWidth="1.2"/>
                      <line x1="5" y1="28" x2="45" y2="28" stroke="#525252" strokeWidth="0.8"/>
                      <line x1="5" y1="28" x2="5" y2="3" stroke="#525252" strokeWidth="0.8"/>
                    </svg>
                  </div>

                  <p className="text-[9px] text-[#171717] font-bold mb-0.5 leading-tight">
                    Scale Your B2B Pipeline in 30 Days
                  </p>
                  <p className="text-[7px] text-[#737373] leading-tight mb-1.5">
                    Get qualified meetings on autopilot. Limited spots.
                  </p>

                  {/* CTA with shimmer + tap ripple */}
                  <div className="relative">
                    <div
                      className="w-full py-[3px] rounded-md relative overflow-hidden flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(180deg, #3a3a3a 0%, #171717 100%)',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)' }}
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                      />
                      <span className="text-[7px] text-white font-bold tracking-wide relative z-10">Book a Demo</span>
                    </div>
                    {/* Tap ripple before transition */}
                    <motion.div
                      className="absolute inset-0 rounded-md bg-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 0, 0.25, 0] }}
                      transition={{ duration: 3.2, times: [0, 0.75, 0.82, 0.88, 1] }}
                    />
                  </div>

                  {/* Engagement row */}
                  <div className="flex items-center gap-2.5 mt-1.5">
                    <div className="flex items-center gap-0.5">
                      <svg
                        width="9" height="9" viewBox="0 0 24 24" fill="#171717"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="text-[7px] font-semibold text-[#525252]">2.4k</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                      </svg>
                      <span className="text-[7px] font-semibold text-[#525252]">184</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2">
                        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
                      </svg>
                      <span className="text-[7px] font-semibold text-[#525252]">52</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ===== FORM SCREEN ===== */}
              {screen === 'form' && (
                <motion.div
                  key="form"
                  className="absolute inset-0 px-2.5 pt-2 pb-2 flex flex-col"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-[9px] font-bold text-[#171717] mb-0.5">Book Your Strategy Call</p>
                  <p className="text-[6px] text-[#a3a3a3] mb-2">Tell us about your business</p>

                  {/* Form fields with typing animation */}
                  {formFields.map((field, i) => (
                    <motion.div
                      key={field.label}
                      className="mb-1.5"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12 }}
                    >
                      <p className="text-[5px] text-[#a3a3a3] font-medium mb-0.5 ml-0.5">{field.label}</p>
                      <div
                        className="w-full h-[18px] rounded-md relative overflow-hidden flex items-center px-2"
                        style={{ background: '#fafafa', border: '1px solid #ebebeb' }}
                      >
                        {/* Text types in after field appears */}
                        <motion.span
                          className="text-[7px] text-[#171717]"
                          initial={{ width: 0 }}
                          animate={{ width: 'auto' }}
                          transition={{ delay: i * 0.12 + 0.3, duration: 0.4, ease: 'easeOut' }}
                          style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
                        >
                          {field.filled}
                        </motion.span>
                        {/* Blinking cursor on current field */}
                        <motion.div
                          className="w-[1px] h-2.5 bg-[#171717] ml-px flex-shrink-0"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: i === formFields.length - 1 ? [1, 0, 1] : [0, 1, 1, 0],
                          }}
                          transition={
                            i === formFields.length - 1
                              ? { duration: 0.8, repeat: Infinity, delay: i * 0.12 + 0.3 }
                              : { duration: 0.6, delay: i * 0.12 + 0.2, times: [0, 0.1, 0.8, 1] }
                          }
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Submit button */}
                  <motion.div
                    className="w-full py-[4px] rounded-md mt-1 relative overflow-hidden flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(180deg, #3a3a3a 0%, #171717 100%)',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                    }}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {/* Tap ripple on submit */}
                    <motion.div
                      className="absolute inset-0 bg-white rounded-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 0, 0.2, 0] }}
                      transition={{ duration: 3, times: [0, 0.7, 0.78, 0.84, 1] }}
                    />
                    <span className="text-[7px] text-white font-bold relative z-10">Submit</span>
                  </motion.div>
                </motion.div>
              )}

              {/* ===== CONFIRM SCREEN ===== */}
              {screen === 'confirm' && (
                <motion.div
                  key="confirm"
                  className="absolute inset-0 flex flex-col items-center justify-center px-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ ...spring }}
                >
                  {/* Confetti particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: i % 2 === 0 ? '#171717' : '#a3a3a3',
                        left: '50%',
                        top: '40%',
                      }}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                      animate={{
                        x: Math.cos((i * Math.PI * 2) / 8) * (25 + Math.random() * 15),
                        y: Math.sin((i * Math.PI * 2) / 8) * (25 + Math.random() * 15),
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1.2, 1, 0],
                      }}
                      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    />
                  ))}

                  {/* Success checkmark */}
                  <div className="relative mb-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.15, 1] }}
                      transition={{ delay: 0.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <motion.path
                          d="M20 6L9 17l-5-5"
                          stroke="#fff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.35, duration: 0.3, ease: 'easeOut' }}
                        />
                      </motion.svg>
                    </motion.div>
                    {/* Expanding ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#171717]"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                    />
                  </div>
                  <motion.p
                    className="text-[10px] font-bold text-[#171717] mb-0.5"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Call Booked!
                  </motion.p>
                  <motion.p
                    className="text-[7px] text-[#a3a3a3] text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Confirmed for tomorrow at 2 PM
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Home indicator bar */}
          <div className="flex justify-center py-1.5 flex-shrink-0">
            <div className="w-10 h-[3px] rounded-full bg-[#171717] opacity-20" />
          </div>
        </div>
      </motion.div>

      {/* Cycling lead notification - top right */}
      <div className="absolute top-3 right-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLead}
            className="rounded-xl px-3 py-2.5"
            style={{
              background: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
            initial={{ opacity: 0, y: -12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ ...spring }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  className="absolute inset-[-2px] rounded-full border border-[#22c55e] opacity-30"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#171717]">{leads[currentLead].name}</p>
                <p className="text-[8px] text-[#a3a3a3]">{leads[currentLead].action}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Live lead counter - bottom left */}
      <motion.div
        className="absolute bottom-3 left-2 rounded-xl px-3 py-2"
        style={{
          background: '#fff',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.04)',
        }}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
        animate={{ y: [0, -6, 0] }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#171717] flex items-center justify-center">
            <svg
              width="10" height="10" viewBox="0 0 24 24" fill="none"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fff" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] text-[#a3a3a3]">Leads today</p>
            <motion.p
              key={leadCount}
              className="text-[11px] font-bold text-[#171717]"
              initial={{ y: 4, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {leadCount} captured
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SocialAds
