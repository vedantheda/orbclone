'use client'

import { motion } from 'framer-motion'
import { useIsMobile, fadeIn } from '@/lib/motion'

const stats = [
  { value: '43,000+', label: 'Prospects Targeted' },
  { value: '2,400+', label: 'Meetings Booked' },
  { value: '$12M+', label: 'Pipeline Generated' },
  { value: '75+', label: 'Clients Served' },
  { value: '3 Days', label: 'Avg. Time to First Lead' },
  { value: '97%', label: 'Client Retention' },
]

const ResultsTicker = () => {
  const isMobile = useIsMobile()

  return (
    <section className="px-6 py-6">
      <motion.div
        {...fadeIn(isMobile)}
        className="relative max-w-6xl mx-auto rounded-[32px] overflow-hidden bg-[#171717] py-8"
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 marquee-slow">
          {[...stats, ...stats, ...stats].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 flex-shrink-0 px-5 py-3 rounded-xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderTopColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">{stat.value}</span>
              <span className="text-xs text-[#737373] whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ResultsTicker
