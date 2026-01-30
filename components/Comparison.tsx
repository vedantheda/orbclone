'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowUpRight } from 'lucide-react'

const Comparison = () => {
  const orbFeatures = [
    'Automated workflows',
    'Personalized AI-driven strategies',
    'Data-backed, real-time insights',
    'Scalable AI systems',
    'Trained chatbots',
    'Rapid, AI-generated content',
    'Real time data analysis',
  ]

  const othersFeatures = [
    'Manual workflows',
    'Generic, one-size-fits-all solutions',
    'Decision-making based on guesswork',
    'Lacks scalability',
    'Standard chatbots',
    'Time-consuming content creation',
  ]

  return (
    <section className="py-24 px-6 bg-white">
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
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            <span>COMPARISON</span>
          </div>
          <h2 className="section-title mb-4">Precision vs Basic</h2>
          <p className="section-subtitle mx-auto">
            See how our AI outperforms competitors with speed.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ORB AI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 border-2 border-[#171717]"
          >
            <h3 className="text-2xl font-bold text-[#171717] mb-8">ORB AI</h3>

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
              href="#pricing"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#171717] text-white rounded-xl text-sm font-medium transition-all hover:bg-[#2a2a2a]"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 bg-[#fafafa]"
          >
            <h3 className="text-2xl font-bold text-[#a3a3a3] mb-8">Others</h3>

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
