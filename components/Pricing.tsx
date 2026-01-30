'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowUpRight, Star } from 'lucide-react'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 800,
      yearlyPrice: 560,
      description: 'Ideal for businesses ready to explore AI and intelligent automation',
      features: [
        'Basic AI Tools',
        'Limited Automation Features',
        'Real-Time Reporting',
        'Basic Chatbot Integration',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 1700,
      yearlyPrice: 1190,
      description: 'Built for companies that want to gain an edge with AI-powered automation',
      features: [
        'Advanced AI Tools',
        'Customizable Workflows',
        'AI-Powered Analytics',
        'Premium Chatbot Features',
        'Cross-Platform Integrations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 4700,
      yearlyPrice: 3290,
      description: 'For businesses aiming to harness AI and automation to lead their industry',
      features: [
        'Fully Customized AI Solutions',
        'Unlimited Integrations',
        'Advanced Reporting & Insights',
        'Scalable AI Solutions',
        'Team Collaboration Features',
        'Priority Feature Access',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-[#f5f5f5]">
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
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span>PRICING</span>
          </div>
          <h2 className="section-title mb-4">Simple Price For All</h2>
          <p className="section-subtitle mx-auto">
            Flexible pricing plans that fit your budget & scale with needs.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-white rounded-full border border-[#e5e5e5]">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isYearly ? 'bg-[#171717] text-white' : 'text-[#737373] hover:text-[#171717]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? 'bg-[#171717] text-white' : 'text-[#737373] hover:text-[#171717]'
              }`}
            >
              Yearly
              <span className={`text-xs px-2 py-0.5 rounded-full ${isYearly ? 'bg-white/20' : 'bg-[#171717] text-white'}`}>
                30% off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card p-8 relative ${plan.popular ? 'ring-2 ring-[#171717] ring-inset' : ''}`}
            >
              {/* Popular badge - inline next to plan name */}
              {plan.popular && (
                <div className="absolute top-8 right-8">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-white text-xs font-medium rounded-full">
                    <Star className="w-3 h-3 fill-white" />
                    Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-semibold text-[#171717] mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#171717]">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-[#737373]">/month</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#737373] mb-6">{plan.description}</p>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-medium transition-all mb-6 ${
                  plan.popular
                    ? 'bg-[#171717] text-white hover:bg-[#2a2a2a]'
                    : 'bg-white text-[#171717] border border-[#e5e5e5] hover:border-[#171717]'
                }`}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#737373]">
                    <Check className="w-4 h-4 text-[#171717]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Donation note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 text-sm text-[#737373]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          We donate 2% of your membership to pediatric wellbeing
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
