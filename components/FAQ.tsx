'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useIsMobile, fadeIn } from '@/lib/motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const isMobile = useIsMobile()

  const faqs = [
    {
      question: 'How quickly can I expect to see results?',
      answer: 'Most clients see their first qualified leads within 3-5 days of campaign launch. Our outbound system is built for speed—we can have your prospect database built and outreach live within the first week.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work with B2B companies across industries—agencies, SaaS, consulting firms, professional services, and more. If you sell to other businesses and have a high-ticket offer, our system is built for you. We adapt our targeting and messaging to your specific market.',
    },
    {
      question: 'How is this different from hiring an SDR or using a lead gen agency?',
      answer: 'An in-house SDR costs $60-80K+/year and takes months to ramp. Most lead gen agencies sell you shared leads with no exclusivity. We give you a dedicated acquisition system you own—proprietary prospect data, personalized outreach, and continuous optimization—at a fraction of the cost of building it in-house.',
    },
    {
      question: 'What\'s the typical investment?',
      answer: 'Our engagements are structured around the scope of your campaign—number of channels, target markets, and volume. We\'ll map out a clear plan and investment on your strategy call. Most clients see positive ROI within the first 30-60 days.',
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No long-term contracts required. We operate on a month-to-month basis because we believe in earning your business with results, not locking you in. That said, the best results come from sustained campaigns—most clients stay 6+ months because the ROI compounds.',
    },
    {
      question: 'What happens if it doesn\'t work?',
      answer: 'We\'re transparent about expectations from day one. On your strategy call, we\'ll tell you honestly if we think we can deliver results for your business. If campaigns underperform, we optimize aggressively—adjusting targeting, messaging, and sequences weekly until we hit your benchmarks.',
    },
    {
      question: 'What\'s included in your done-with-you support?',
      answer: 'Beyond running your campaigns, we help optimize your entire sales funnel—from first touch to closed deal. This includes script refinement, follow-up sequences, CRM setup guidance, and weekly strategy calls to maximize your close rate and ROI.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-12"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>FAQS</span>
          </div>
          <h2 className="section-title-gradient mb-4">Questions? Answers!</h2>
          <p className="section-subtitle mx-auto">
            Find some quick answers to the most common questions.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          {...fadeIn(isMobile, 0.08)}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="font-medium text-[#171717] pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown className="w-5 h-5 text-[#737373] flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3, ease: 'easeOut', delay: 0.05 },
                    }}
                  >
                    <p className="px-6 pb-6 text-sm text-[#737373] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          {...fadeIn(isMobile, 0.15)}
          className="mt-8 card p-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <p className="text-sm text-[#737373]">
              Have more questions? Email us at{' '}
              <a href="mailto:info@python-marketing.com" className="text-[#171717] font-medium hover:underline break-all">
                info@python-marketing.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
