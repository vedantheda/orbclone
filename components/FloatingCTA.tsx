'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="#pricing"
        className="flex items-center gap-3 px-5 py-3 bg-[#171717] text-white rounded-full shadow-xl hover:bg-[#2a2a2a] transition-all hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          {/* 4-leaf clover pattern icon matching template */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 10L12 12L10 10L12 2Z" fill="white"/>
            <path d="M22 12L14 14L12 12L14 10L22 12Z" fill="white"/>
            <path d="M12 22L10 14L12 12L14 14L12 22Z" fill="white"/>
            <path d="M2 12L10 10L12 12L10 14L2 12Z" fill="white"/>
          </svg>
        </div>
        <span className="font-medium text-sm">Get Orb AI</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}

export default FloatingCTA
