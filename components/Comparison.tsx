'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowUpRight, Shield } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'

const comparisonRows = [
  {
    feature: 'Monthly Cost',
    us: 'Fraction of in-house',
    sdr: '$60-80K+/yr salary + tools',
    agency: '$2-5K/mo for shared leads',
  },
  {
    feature: 'Time to First Lead',
    us: '3-5 days',
    sdr: '3-6 months to ramp',
    agency: '2-4 weeks (if qualified)',
  },
  {
    feature: 'Data Ownership',
    us: 'You own everything',
    sdr: 'Depends on contract',
    agency: 'Shared / rented leads',
  },
  {
    feature: 'Dedicated Team',
    us: '10-person team on your account',
    sdr: 'Single employee',
    agency: 'Shared across clients',
  },
  {
    feature: 'Outreach Quality',
    us: 'Personalized, co-written with you',
    sdr: 'One person\'s best effort',
    agency: 'Generic templates at scale',
  },
  {
    feature: 'Optimization',
    us: 'Weekly strategy + continuous A/B testing',
    sdr: 'Self-directed',
    agency: 'Quarterly (maybe)',
  },
  {
    feature: 'Contracts',
    us: 'Month-to-month',
    sdr: 'Employment agreement',
    agency: '6-12 month minimum',
  },
  {
    feature: 'Transparency',
    us: 'Full pipeline visibility + weekly calls',
    sdr: 'Varies by person',
    agency: 'Monthly PDF reports',
  },
]

const Comparison = () => {
  const isMobile = useIsMobile()

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Shield className="w-4 h-4" />
            <span>HOW WE COMPARE</span>
          </div>
          <h2 className="section-title-gradient mb-4">How We&apos;re Different</h2>
          <p className="section-subtitle mx-auto">
            See how partnering with us compares to the alternatives.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          {...fadeIn(isMobile)}
          className="card p-0 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-0">
            <div className="p-4 md:p-6" />
            <div
              className="p-4 md:p-6 text-center"
              style={{
                background: 'linear-gradient(180deg, #262626, #171717)',
              }}
            >
              <p className="text-sm md:text-base font-bold text-white">Python Marketing</p>
              <p className="text-[10px] text-[#a3a3a3] mt-1 hidden sm:block">Your growth partner</p>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-[#e8e8e8]">
              <p className="text-sm md:text-base font-bold text-[#a3a3a3]">In-House SDR</p>
              <p className="text-[10px] text-[#d4d4d4] mt-1 hidden sm:block">Hire & manage</p>
            </div>
            <div className="p-4 md:p-6 text-center border-l border-[#e8e8e8]">
              <p className="text-sm md:text-base font-bold text-[#a3a3a3]">Lead Gen Agency</p>
              <p className="text-[10px] text-[#d4d4d4] mt-1 hidden sm:block">Buy shared leads</p>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonRows.map((row, index) => (
            <div
              key={row.feature}
              className="grid grid-cols-4 gap-0"
              style={{
                borderTop: '1px solid #e8e8e8',
                background: index % 2 === 0 ? '#fafafa' : '#ffffff',
              }}
            >
              <div className="p-3 md:p-5 flex items-center">
                <span className="text-xs md:text-sm font-medium text-[#525252]">{row.feature}</span>
              </div>
              <div
                className="p-3 md:p-5 flex items-center gap-2"
                style={{
                  background: index % 2 === 0
                    ? 'linear-gradient(180deg, #1f1f1f, #171717)'
                    : 'linear-gradient(180deg, #262626, #1a1a1a)',
                }}
              >
                <Check className="w-3.5 h-3.5 text-white flex-shrink-0 hidden sm:block" />
                <span className="text-xs md:text-sm text-white/90">{row.us}</span>
              </div>
              <div className="p-3 md:p-5 flex items-center gap-2 border-l border-[#e8e8e8]">
                <X className="w-3.5 h-3.5 text-[#d4d4d4] flex-shrink-0 hidden sm:block" />
                <span className="text-xs md:text-sm text-[#a3a3a3]">{row.sdr}</span>
              </div>
              <div className="p-3 md:p-5 flex items-center gap-2 border-l border-[#e8e8e8]">
                <X className="w-3.5 h-3.5 text-[#d4d4d4] flex-shrink-0 hidden sm:block" />
                <span className="text-xs md:text-sm text-[#a3a3a3]">{row.agency}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeIn(isMobile, 0.1, 20)}
          className="text-center mt-10"
        >
          <a
            href="https://tidycal.com/pmdigital/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary inline-flex"
          >
            See If We&apos;re a Fit
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
