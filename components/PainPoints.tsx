'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign, TrendingDown, UserX, Zap, Eye, ArrowDown } from 'lucide-react'
import { useIsMobile, fadeIn } from '@/lib/motion'

const painPoints = [
  {
    icon: Clock,
    text: 'Relying on word-of-mouth and hoping the phone rings',
  },
  {
    icon: DollarSign,
    text: 'Paying for shared leads that 5 other companies also got',
  },
  {
    icon: TrendingDown,
    text: 'No predictable pipeline—feast or famine every month',
  },
  {
    icon: UserX,
    text: 'Tried an agency that overpromised and underdelivered',
  },
  {
    icon: Zap,
    text: 'Leads go cold because nobody follows up fast enough',
  },
  {
    icon: Eye,
    text: 'Spending on ads with no idea what’s actually working',
  },
]

const PainPoints = () => {
  const isMobile = useIsMobile()

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <AlertTriangle className="w-4 h-4" />
            <span>SOUND FAMILIAR?</span>
          </div>
          <h2 className="section-title-gradient mb-4">
            The Growth Ceiling Every Business Hits
          </h2>
          <p className="section-subtitle mx-auto">
            You&apos;re great at what you do. But finding new clients shouldn&apos;t be this hard.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.text}
              {...fadeIn(isMobile, index * 0.08)}
              className="card p-6 flex items-start gap-4"
            >
              <div className="icon-box-neu flex-shrink-0">
                <point.icon
                  className="w-5 h-5"
                  style={{ color: '#525252' }}
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex items-start gap-2 pt-4">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#525252' }}
                />
                <p className="text-sm text-[#525252]">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA line */}
        <motion.div
          {...fadeIn(isMobile)}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-lg font-semibold text-[#171717]">
            There&apos;s a better way.
          </p>
          <ArrowDown className="w-5 h-5 text-[#171717]" strokeWidth={2} />
        </motion.div>
      </div>
    </section>
  )
}

export default PainPoints
