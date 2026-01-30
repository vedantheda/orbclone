'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden bg-[#f5f5f5]">
      {/* Video Background - the animated orb/ripple effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-auto max-w-none"
          style={{
            width: '120%',
            height: '120%',
            objectFit: 'cover',
            filter: 'invert(1) grayscale(1)',
          }}
        >
          <source src="/orb-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-[#e5e5e5] rounded-full text-xs font-medium tracking-wider uppercase mb-8 shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#171717]">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
          </svg>
          <span className="text-[#171717]">AI AUTOMATION FOR BUSINESSES</span>
        </motion.div>

        {/* Logo and Title Container - Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Logo and Title in one line */}
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-6">
            {/* Circular Logo Sphere - exact template match */}
            <div
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(145deg, #5a5a5a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                boxShadow: `
                  inset -8px -8px 20px rgba(0,0,0,0.6),
                  inset 8px 8px 20px rgba(255,255,255,0.08),
                  inset 0 -2px 6px rgba(0,0,0,0.4),
                  0 10px 40px rgba(0,0,0,0.4),
                  0 0 0 1px rgba(255,255,255,0.05)
                `,
              }}
            >
              {/* Inner highlight ring */}
              <div
                className="absolute inset-[3px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 40%)',
                  pointerEvents: 'none',
                }}
              />
              <svg width="36" height="26" viewBox="0 0 77 55" fill="none" className="md:w-[44px] md:h-[32px] relative z-10">
                <path fill="white" d="M53.691 19.255a4.047 4.047 0 0 1 0 5.723L24.978 53.69a4.047 4.047 0 0 1-5.723 0L1.185 35.62a4.047 4.047 0 0 1 0-5.722L29.9 1.185a4.047 4.047 0 0 1 5.723 0l18.07 18.07Z"/>
                <path fill="white" fillOpacity="0.5" d="M60.435 24.978a4.047 4.047 0 0 0 0-5.723L47.15 5.968l4.783-4.783a4.047 4.047 0 0 1 5.723 0l18.07 18.07a4.047 4.047 0 0 1 0 5.723L47.01 53.69a4.047 4.047 0 0 1-5.723 0l-4.783-4.783 23.93-23.93Z"/>
              </svg>
            </div>

            {/* Title */}
            <div className="flex items-baseline gap-3 md:gap-4">
              <span className="hero-title text-[#171717]">ORB</span>
              <span className="hero-title text-[#a3a3a3] font-normal">AI</span>
            </div>
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-[#737373] mb-10 max-w-md mx-auto"
        >
          Custom AI solutions, built for the innovators of tomorrow
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#pricing" className="hero-btn-primary">
            Get Template
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a href="#services" className="hero-btn-secondary">
            See Our Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
