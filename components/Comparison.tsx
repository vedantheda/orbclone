'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowUpRight } from 'lucide-react'

const Comparison = () => {
  const orbFeatures = [
    'Own your entire growth pipeline',
    'Strategic partner, not a faceless vendor',
    'Personalized outreach that builds trust',
    'Appointments in days, not months',
    'AI-powered qualification & instant engagement',
    'Full pipeline visibility & weekly strategy',
    'No contracts—results earn your business',
  ]

  const othersFeatures = [
    'Buying shared leads from vendors',
    'Generic one-size-fits-all campaigns',
    'Cold calling and door knocking',
    'Waiting months for referrals',
    'Manual follow-up (leads go cold)',
    'No visibility into performance',
    'Generic mass messaging',
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span>COMPARISON</span>
          </div>
          <h2 className="section-title-gradient mb-4">Us vs. The Old Way</h2>
          <p className="section-subtitle mx-auto">
            Stop renting leads. Start owning your growth.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Python Marketing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="card p-8"
            style={{ border: '2px solid #171717' }}
          >
            <h3 className="text-2xl font-bold text-[#171717] mb-8">Python Marketing</h3>

            <ul className="space-y-4 mb-8">
              {orbFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[#737373]">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://tidycal.com/pmdigital/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary w-full justify-center"
            >
              Book a Strategy Call
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="card p-8 bg-[#fafafa]"
          >
            <h3 className="text-2xl font-bold text-[#a3a3a3] mb-8">Traditional Lead Gen</h3>

            <ul className="space-y-4">
              {othersFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#e5e5e5] flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-[#a3a3a3]" />
                  </div>
                  <span className="text-[#a3a3a3]">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
