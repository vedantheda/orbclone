'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const spring = { type: "spring" as const, stiffness: 260, damping: 20 }

type Screen = 'scraping' | 'composing' | 'sending' | 'done'

const emails = [
  { initials: 'JM', name: 'John Miller', company: 'Axon SaaS', color: '#e8e8e8' },
  { initials: 'SR', name: 'Sarah Roberts', company: 'Vantage Co', color: '#d8d8d8' },
  { initials: 'DK', name: 'David Kim', company: 'Praxion Inc', color: '#e0e0e0' },
]

const EmailOutreach = () => {
  const [screen, setScreen] = useState<Screen>('scraping')
  const [visibleEmails, setVisibleEmails] = useState(0)
  const [scrapeProgress, setScrapeProgress] = useState(0)

  // Screen cycling
  useEffect(() => {
    const durations: Record<Screen, number> = { scraping: 3000, composing: 3200, sending: 3600, done: 1800 }
    const next: Record<Screen, Screen> = { scraping: 'composing', composing: 'sending', sending: 'done', done: 'scraping' }
    const timer = setTimeout(() => {
      const nextScreen = next[screen]
      setScreen(nextScreen)
      if (nextScreen === 'scraping') {
        setVisibleEmails(0)
        setScrapeProgress(0)
      }
      if (nextScreen === 'sending') {
        setVisibleEmails(0)
      }
    }, durations[screen])
    return () => clearTimeout(timer)
  }, [screen])

  // Scrape counter animation
  useEffect(() => {
    if (screen === 'scraping') {
      const interval = setInterval(() => {
        setScrapeProgress(prev => {
          if (prev >= 100) return 100
          return prev + 4
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [screen])

  // Email rows appear during 'sending' phase
  useEffect(() => {
    if (screen === 'sending' && visibleEmails < emails.length) {
      const timer = setTimeout(() => setVisibleEmails(prev => prev + 1), 700)
      return () => clearTimeout(timer)
    }
  }, [screen, visibleEmails])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #171717 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Main window */}
      <motion.div
        className="relative w-full max-w-[340px] rounded-2xl overflow-hidden"
        style={{
          background: '#fff',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...spring }}
      >
        {/* Chrome */}
        <div className="px-4 py-2.5 border-b border-[#f0f0f0] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <div className="w-[9px] h-[9px] rounded-full bg-[#e5e5e5]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#e5e5e5]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#e5e5e5]" />
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={screen}
                className="text-[10px] text-[#a3a3a3] font-medium tracking-wide"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                {screen === 'scraping' && 'Finding Leads'}
                {screen === 'composing' && 'AI Composing'}
                {screen === 'sending' && 'Sending Outreach'}
                {screen === 'done' && 'Batch Complete'}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-[6px] h-[6px] rounded-full bg-[#22c55e]" />
            <span className="text-[9px] text-[#a3a3a3] font-medium">Live</span>
          </div>
        </div>

        {/* Content area */}
        <div className="relative" style={{ minHeight: 180 }}>
          <AnimatePresence mode="wait">

            {/* SCREEN 1: Scraping leads */}
            {screen === 'scraping' && (
              <motion.div
                key="scraping"
                className="p-5 flex flex-col items-center justify-center"
                style={{ minHeight: 180 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Circular progress */}
                <div className="relative w-16 h-16 mb-3">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#f0f0f0" strokeWidth="4" />
                    <motion.circle
                      cx="32" cy="32" r="28" fill="none" stroke="#171717" strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={176}
                      animate={{ strokeDashoffset: 176 - (176 * scrapeProgress) / 100 }}
                      transition={{ duration: 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-[13px] font-bold text-[#171717]"
                      key={Math.floor(scrapeProgress / 10)}
                    >
                      {Math.floor(scrapeProgress)}%
                    </motion.span>
                  </div>
                </div>
                <p className="text-[10px] font-semibold text-[#171717] mb-1">Scraping decision makers</p>
                <p className="text-[8px] text-[#a3a3a3]">B2B &middot; SaaS &amp; Agency owners</p>

                {/* Animated lead count */}
                <div
                  className="mt-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{ background: '#f5f5f5', border: '1px solid #ebebeb' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="#737373" strokeWidth="2" />
                  </svg>
                  <span className="text-[8px] font-semibold text-[#525252]">{Math.floor(scrapeProgress * 30)} found</span>
                </div>
              </motion.div>
            )}

            {/* SCREEN 2: AI composing email */}
            {screen === 'composing' && (
              <motion.div
                key="composing"
                className="p-4"
                style={{ minHeight: 180 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] text-[#c5c5c5]">To:</span>
                  <motion.div
                    className="flex items-center gap-1.5 bg-[#f7f7f7] rounded-md px-2 py-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#e0e0e0] flex items-center justify-center">
                      <span className="text-[6px] font-bold text-[#a3a3a3]">J</span>
                    </div>
                    <span className="text-[10px] text-[#525252]">john@axonsaas.com</span>
                  </motion.div>
                </div>

                <motion.div
                  className="mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-[10px] text-[#c5c5c5]">Subject: </span>
                  <span className="text-[10px] font-semibold text-[#171717]">Quick question about scaling your pipeline</span>
                </motion.div>

                <div className="border-t border-[#f0f0f0] pt-2">
                  <TypingText
                    text="Hi John, I noticed Axon SaaS recently expanded into the mid-market. We help B2B companies like yours fill their pipeline with qualified meetings on autopilot..."
                    speed={25}
                  />
                </div>

                {/* AI badge */}
                <motion.div
                  className="mt-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full w-fit"
                  style={{ background: '#f5f5f5', border: '1px solid #ebebeb' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <svg
                    width="10" height="10" viewBox="0 0 24 24" fill="none"
                  >
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#171717" />
                  </svg>
                  <span className="text-[8px] font-semibold text-[#525252]">AI writing...</span>
                </motion.div>
              </motion.div>
            )}

            {/* SCREEN 3: Sending emails */}
            {screen === 'sending' && (
              <motion.div
                key="sending"
                className="p-2.5 space-y-1.5"
                style={{ minHeight: 180 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatePresence>
                  {emails.slice(0, visibleEmails).map((email, i) => (
                    <motion.div
                      key={email.initials}
                      initial={{ opacity: 0, x: 24, scale: 0.97 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ ...spring }}
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl"
                      style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)', border: '1px solid #f0f0f0' }}
                    >
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: email.color }}>
                        <span className="text-[8px] font-bold text-[#737373]">{email.initials}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-[#171717] truncate">{email.name}</p>
                        <p className="text-[8px] text-[#a3a3a3]">{email.company}</p>
                      </div>
                      <EmailStatus index={i} visibleEmails={visibleEmails} />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {visibleEmails < emails.length && (
                  <div className="flex items-center justify-center py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 rounded-full bg-[#c5c5c5]"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* SCREEN 4: Done */}
            {screen === 'done' && (
              <motion.div
                key="done"
                className="flex flex-col items-center justify-center"
                style={{ minHeight: 180 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ ...spring }}
              >
                <div className="relative mb-3">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, ...spring }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#171717]"
                    initial={{ scale: 1, opacity: 0.4 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <motion.p
                  className="text-[11px] font-bold text-[#171717] mb-0.5"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  3 emails sent
                </motion.p>
                <motion.p
                  className="text-[8px] text-[#a3a3a3]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Next batch in 2 hours
                </motion.p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div className="px-4 py-2.5 border-t border-[#f0f0f0] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg
              width="10" height="10" viewBox="0 0 24 24" fill="none"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#171717" />
            </svg>
            <span className="text-[8px] font-semibold text-[#525252]">AI Personalized</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] font-bold text-[#171717]">Automated</span>
          </div>
        </div>
      </motion.div>

      {/* Floating stats - top right */}
      <motion.div
        className="absolute top-3 right-2 rounded-xl px-3 py-2"
        style={{
          background: '#fff',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
          border: '1px solid rgba(0,0,0,0.04)',
        }}
        initial={{ opacity: 0, x: 8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        animate={{ y: [0, -6, 0] }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#171717] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M22 4L12 14.01l-3-3" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] text-[#a3a3a3]">Open rate</p>
            <p className="text-[12px] font-bold text-[#171717]">68%</p>
          </div>
        </div>
      </motion.div>

      {/* Floating queue - bottom left */}
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
        transition={{ delay: 0.6 }}
        animate={{ y: [0, -7, 0] }}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            <div className="w-4 h-4 rounded-full bg-[#e0e0e0] ring-1 ring-white" />
            <div className="w-4 h-4 rounded-full bg-[#d0d0d0] ring-1 ring-white" />
            <div className="w-4 h-4 rounded-full bg-[#c0c0c0] ring-1 ring-white" />
          </div>
          <div>
            <p className="text-[9px] text-[#a3a3a3]">In queue</p>
            <p className="text-[11px] font-bold text-[#171717]">247 leads</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Typing text component
const TypingText = ({ text, speed }: { text: string; speed: number }) => {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (displayed < text.length) {
      const timer = setTimeout(() => setDisplayed(prev => prev + 1), speed)
      return () => clearTimeout(timer)
    }
  }, [displayed, text, speed])

  // Reset when text changes
  useEffect(() => {
    setDisplayed(0)
  }, [text])

  return (
    <p className="text-[10px] text-[#525252] leading-[1.6]">
      {text.slice(0, displayed)}
      <motion.span
        className="inline-block w-[2px] h-[10px] bg-[#171717] ml-0.5 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </p>
  )
}

// Sending status animation
const EmailStatus = ({ index, visibleEmails }: { index: number; visibleEmails: number }) => {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (index < visibleEmails) {
      const timer = setTimeout(() => setSent(true), 500)
      return () => clearTimeout(timer)
    }
    setSent(false)
  }, [index, visibleEmails])

  return (
    <AnimatePresence mode="wait">
      {!sent ? (
        <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-1">
          <motion.div
            className="w-3 h-3 rounded-full border-[1.5px] border-[#a3a3a3] border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-[8px] text-[#a3a3a3]">Sending</span>
        </motion.div>
      ) : (
        <motion.div key="sent" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...spring }} className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full bg-[#171717] flex items-center justify-center">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[8px] font-semibold text-[#171717]">Sent</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EmailOutreach
