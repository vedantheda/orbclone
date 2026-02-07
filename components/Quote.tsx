'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Word-by-word unblur animation component
const AnimatedWord = ({ word, index, isHighlight }: { word: string; index: number; isHighlight: boolean }) => {
  return (
    <motion.span
      initial={{
        opacity: 0.2,
        filter: 'blur(8px)',
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
        ease: [0.2, 0, 0.2, 1]
      }}
      className={isHighlight ? 'highlight' : ''}
      style={{ display: 'inline-block' }}
    >
      {word}
    </motion.span>
  )
}

const Quote = () => {
  // Define the quote with highlights
  const quoteWords = [
    { text: '"We\'re', highlight: false },
    { text: 'not', highlight: false },
    { text: 'here', highlight: false },
    { text: 'to', highlight: false },
    { text: 'sell', highlight: true },
    { text: 'leads.', highlight: true },
    { text: 'We\'re', highlight: false },
    { text: 'here', highlight: false },
    { text: 'to', highlight: false },
    { text: 'help', highlight: false },
    { text: 'you', highlight: false },
    { text: 'take', highlight: true },
    { text: 'control', highlight: true },
    { text: 'of', highlight: false },
    { text: 'your', highlight: false },
    { text: 'sales.', highlight: false },
    { text: 'We', highlight: false },
    { text: 'combine', highlight: false },
    { text: 'enterprise', highlight: true },
    { text: 'strategy', highlight: true },
    { text: 'with', highlight: false },
    { text: 'startup', highlight: false },
    { text: 'speed."', highlight: false },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <h3 className="quote-text mb-10">
            {quoteWords.map((word, index) => (
              <span key={index}>
                <AnimatedWord
                  word={word.text}
                  index={index}
                  isHighlight={word.highlight}
                />
                {index < quoteWords.length - 1 && ' '}
              </span>
            ))}
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-white"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
            >
              <Image
                src="/images/founder.png"
                alt="Andrés Di"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-[#171717]">Andrés Di</p>
              <p className="text-xs text-[#a3a3a3]">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Quote
