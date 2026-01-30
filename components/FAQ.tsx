'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs',
    },
    {
      question: 'How long does it take to develop an AI solution?',
      answer: 'Depending on the project\'s complexity, timelines typically range from 2 to 12 weeks. We\'ll provide a detailed timeline after our initial discovery call',
    },
    {
      question: 'Do I need technical expertise to work with you?',
      answer: 'No technical background is required! We handle all the complexity for you and explain every step in simple, actionable terms',
    },
    {
      question: 'Is my data safe when working with your agency?',
      answer: 'Absolutely. We follow strict data privacy protocols, comply with GDPR standards, and offer NDAs to ensure your information stays secure',
    },
    {
      question: 'Can AI really help my business grow?',
      answer: 'Yes! AI can automate tasks, enhance customer experiences, uncover insights, and open new revenue streams — and we\'ll show you exactly how it can work for your business.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>FAQS</span>
            </div>
            <h2 className="section-title mb-4">Questions? Answers!</h2>
            <p className="section-subtitle">
              Find Some quick answers to the most common questions.
            </p>

            {/* Contact info */}
            <div className="mt-8 p-6 bg-[#f5f5f5] rounded-2xl">
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <p className="text-sm text-[#737373]">
                  Feel free to mail us for any enquiries:{' '}
                  <a href="mailto:orbai@support.com" className="text-[#171717] font-medium hover:underline">
                    orbai@support.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
                  <ChevronDown
                    className={`w-5 h-5 text-[#737373] transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
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
        </div>
      </div>
    </section>
  )
}

export default FAQ
