'use client'

import { motion } from 'framer-motion'

// Visual showing lead pipeline flow: Scrape → Contact → Book
const LeadPipeline = () => {
  const steps = [
    { icon: 'search', label: 'Find' },
    { icon: 'mail', label: 'Reach' },
    { icon: 'calendar', label: 'Book' },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center py-4">
      {/* Connection line */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-1">
        <motion.line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="#e5e5e5"
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </svg>

      <div className="flex items-center gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.1 }}
          >
            {/* Icon circle */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: i === 2
                  ? 'linear-gradient(145deg, #262626, #171717)'
                  : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                boxShadow: i === 2
                  ? '4px 4px 12px rgba(0,0,0,0.2)'
                  : '4px 4px 12px rgba(0,0,0,0.08), -4px -4px 12px rgba(255,255,255,0.9)'
              }}
            >
              {step.icon === 'search' && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2.5" />
                  <path d="M16 16l4 4" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              )}
              {step.icon === 'mail' && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2" />
                  <path d="M2 7l10 6 10-6" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2" />
                </svg>
              )}
              {step.icon === 'calendar' && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke={i === 2 ? '#fff' : '#171717'} strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="15" r="2" fill={i === 2 ? '#fff' : '#171717'} />
                </svg>
              )}
            </div>

            {/* Label */}
            <span className="text-[11px] font-medium text-[#737373]">{step.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Floating "3,000+" badge */}
      <motion.div
        className="absolute top-0 left-4 px-2 py-1 rounded-full"
        style={{
          background: 'white',
          boxShadow: '2px 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #f0f0f0'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[10px] font-bold text-[#171717]">3,000+ leads</span>
      </motion.div>
    </div>
  )
}

export default LeadPipeline
