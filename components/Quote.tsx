'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Word-by-word animation component
const AnimatedWord = ({ word, index, isHighlight }: { word: string; index: number; isHighlight: boolean }) => {
  return (
    <motion.span
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={isHighlight ? 'highlight' : ''}
    >
      {word}
    </motion.span>
  )
}

const Quote = () => {
  // Define the quote with highlights
  const quoteWords = [
    { text: '"We', highlight: false },
    { text: 'harness', highlight: false },
    { text: 'your', highlight: true },
    { text: 'data', highlight: true },
    { text: ',', highlight: false },
    { text: 'understand', highlight: false },
    { text: 'your', highlight: false },
    { text: 'audience,', highlight: false },
    { text: 'and', highlight: false },
    { text: 'use', highlight: true },
    { text: 'AI', highlight: true },
    { text: 'to', highlight: false },
    { text: 'help', highlight: false },
    { text: 'your', highlight: false },
    { text: 'brand', highlight: false },
    { text: 'rise', highlight: false },
    { text: 'above', highlight: false },
    { text: 'the', highlight: false },
    { text: 'noise.', highlight: false },
    { text: 'The', highlight: false },
    { text: 'best', highlight: false },
    { text: 'part?', highlight: false },
    { text: 'We', highlight: true },
    { text: 'execute', highlight: true },
    { text: ',', highlight: false },
    { text: 'too."', highlight: false },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div>
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src="/images/cZ9VBNOcSpg8RiRzIkAXdz6ScF4_1.png"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-[#737373]">Founder of ORB AI</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Quote
