'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden flex flex-col items-center justify-center h-screen">
      {/* Video Background - the animated orb/ripple effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover will-change-transform"
          style={{
            filter: 'brightness(0.9) grayscale(1) invert(1)',
          }}
        >
          <source src="/orb-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="badge mb-1"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
            <path d="M12 0C12 0 14 8 16 10C18 12 24 12 24 12C24 12 18 12 16 14C14 16 12 24 12 24C12 24 10 16 8 14C6 12 0 12 0 12C0 12 6 12 8 10C10 8 12 0 12 0Z" fill="currentColor" />
          </svg>
          <span>YOUR DEDICATED GROWTH PARTNER</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col items-center -my-4 sm:-my-8 md:-my-16 lg:-my-20"
        >
          <Image
            src="/brand/logo-full.png"
            alt="Python Marketing"
            width={900}
            height={270}
            className="w-auto h-28 sm:h-44 md:h-80 lg:h-96 max-w-full"
            priority
          />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="text-lg md:text-xl text-[#171717] -mt-6 mb-12 max-w-lg mx-auto leading-relaxed"
        >
          We build, manage, and optimize your entire client acquisition pipeline—so you focus on closing deals, not chasing leads.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <a href="https://tidycal.com/pmdigital/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Book a Strategy Call
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a href="#services" className="hero-btn-secondary">
            See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
