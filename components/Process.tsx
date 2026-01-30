'use client'

import { motion } from 'framer-motion'
import { Search, Rocket, Headphones } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Workflow Assessment',
      description: 'We begin by examining your existing workflows to identify where AI can deliver the greatest impact.',
    },
    {
      number: '02',
      icon: Rocket,
      title: 'Deploy with Confidence',
      description: 'Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.',
    },
    {
      number: '03',
      icon: Headphones,
      title: 'Ongoing Support & Optimization',
      description: 'After deployment, we provide support and refine your AI systems to keep them performing at their best.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>PROCESS</span>
          </div>
          <h2 className="section-title mb-4">Simple & Scalable</h2>
          <p className="section-subtitle mx-auto">
            A transparent process of collaboration and feedback
          </p>
        </motion.div>

        {/* Process Steps - Template Layout: First card full width, then 2 side by side */}
        <div className="space-y-6">
          {/* First Step - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-[#171717]" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#171717] mb-3">{steps[0].title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed max-w-md">{steps[0].description}</p>
              </div>
            </div>

            {/* Step Number */}
            <div className="absolute bottom-4 right-6 md:bottom-6 md:right-8">
              <span className="text-7xl md:text-8xl font-bold text-[#f0f0f0] select-none">{steps[0].number}</span>
            </div>
          </motion.div>

          {/* Second Row - Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {steps.slice(1).map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="card p-8 relative overflow-hidden"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#f5f5f5] flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#171717]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#171717] mb-3">{step.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-12">{step.description}</p>

                {/* Step Number */}
                <div className="absolute bottom-4 right-6">
                  <span className="text-7xl md:text-8xl font-bold text-[#f0f0f0] select-none">{step.number}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
