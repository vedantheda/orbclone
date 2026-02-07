'use client'

import { motion } from 'framer-motion'
import { Layers, Send, TrendingUp, MessageCircle, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const ease = [0.16, 1, 0.3, 1] as const
const transition = { duration: 0.7, ease }

const Features = () => {
  return (
    <section className="section bg-white" id="features">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Layers className="w-4 h-4" />
            <span>FEATURES</span>
          </div>
          <h2 className="section-title-gradient mb-4">A Complete Acquisition Engine</h2>
          <p className="section-subtitle mx-auto">
            A complete acquisition system, not just another lead vendor.
          </p>
        </motion.div>

        {/* Bento Grid — 2 rows, alternating image placement */}
        <div className="space-y-6 mb-10">

          {/* Row 1: Image card (60%) + Text card (40%) */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-6">
            {/* Image + text card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transition}
              className="card p-0 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative w-full md:w-[45%] min-h-[220px] md:min-h-0 flex-shrink-0 overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src="/images/feature-data.jpg"
                    alt="Smart Lead Finding"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </motion.div>
                {/* Inset border */}
                <div
                  className="absolute inset-3 rounded-xl pointer-events-none"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                />
              </div>
              {/* Text content */}
              <div className="flex flex-col justify-center flex-1 p-8">
                <div className="icon-box mb-5">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">Smart Lead Finding</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  We identify and verify 3,000+ decision-makers in your target market—building a proprietary pipeline you own.
                </p>
              </div>
            </motion.div>

            {/* Text-only card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transition, delay: 0.1 }}
              className="card p-8 flex flex-col justify-center"
            >
              <div className="icon-box mb-5">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#171717] mb-3">Automated Outreach</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                Strategically sequenced outreach co-written with you. Each touchpoint is personalized to start real conversations, not blast templates.
              </p>
            </motion.div>
          </div>

          {/* Row 2: Text card (40%) + Image card (60%) */}
          <div className="grid md:grid-cols-[2fr_3fr] gap-6">
            {/* Text-only card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transition}
              className="card p-8 flex flex-col justify-center"
            >
              <div className="icon-box mb-5">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#171717] mb-3">Real-Time Reporting</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                Full visibility into your pipeline with weekly strategy calls. You&apos;ll always know what&apos;s working, what&apos;s being optimized, and what&apos;s coming next.
              </p>
            </motion.div>

            {/* Image + text card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transition, delay: 0.1 }}
              className="card p-0 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="relative w-full md:w-[45%] min-h-[220px] md:min-h-0 flex-shrink-0 overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src="/images/feature-team.new.jpg"
                    alt="Dedicated Support"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </motion.div>
                {/* Inset border */}
                <div
                  className="absolute inset-3 rounded-xl pointer-events-none"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                />
              </div>
              {/* Text content */}
              <div className="flex flex-col justify-center flex-1 p-8">
                <div className="icon-box mb-5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">Dedicated Support</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  A dedicated team aligned to your goals—refining scripts, optimizing campaigns, and maximizing your close rate every week.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="https://tidycal.com/pmdigital/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Book a Strategy Call
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

export default Features
