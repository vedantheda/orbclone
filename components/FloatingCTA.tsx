'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~1 viewport height
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://tidycal.com/pmdigital/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-primary py-3 px-5 text-sm shadow-lg"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.1)',
            }}
          >
            Book a Call
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
