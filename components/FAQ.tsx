'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How quickly can I expect to see leads?',
      answer: 'Most clients see their first qualified leads within 3 days of campaign launch. We focus on speed to results while maintaining lead quality.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We specialize in home improvement and local services: solar, roofing, HVAC, remodeling, real estate, and similar businesses. Our systems are built specifically for high-ticket local service providers.',
    },
    {
      question: 'How is this different from buying leads?',
      answer: 'We don\'t sell leads - we build you a complete acquisition system. You own the process, the contacts, and the relationships. Plus, we help optimize your booking and closing rates, not just lead volume.',
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No long-term contracts required. We believe in earning your business month after month with results, not locking you in.',
    },
    {
      question: 'What\'s included in your done-with-you support?',
      answer: 'Beyond running your campaigns, we help optimize your booking rate and closing process. This includes script refinement, follow-up sequences, and weekly strategy calls to maximize your ROI.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
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
