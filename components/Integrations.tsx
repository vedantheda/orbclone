'use client'

import { motion } from 'framer-motion'
import { Plug } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'

const toolCategories = [
  {
    category: 'CRM & Sales',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Close'],
  },
  {
    category: 'Email & Outreach',
    tools: ['Instantly', 'Smartlead', 'Lemlist', 'Apollo'],
  },
  {
    category: 'Data & Enrichment',
    tools: ['ZoomInfo', 'Clay', 'Clearbit', 'LinkedIn Sales Nav'],
  },
  {
    category: 'AI & Automation',
    tools: ['OpenAI', 'Make', 'Zapier', 'Custom AI Agents'],
  },
]

const Integrations = () => {
  const isMobile = useIsMobile()

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Plug className="w-4 h-4" />
            <span>INTEGRATIONS</span>
          </div>
          <h2 className="section-title-gradient mb-4">Tools We Work With</h2>
          <p className="section-subtitle mx-auto">
            We plug into the tools you already use—and bring our own stack to maximize results.
          </p>
        </motion.div>

        {/* Tool Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              {...fadeIn(isMobile, catIndex * 0.08)}
              className="card p-6"
            >
              <p className="text-xs font-semibold text-[#a3a3a3] uppercase tracking-wider mb-4">{cat.category}</p>
              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{
                      background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
                      border: '1px solid #e8e8e8',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)',
                        boxShadow: '1px 1px 3px rgba(0,0,0,0.06), -1px -1px 3px rgba(255,255,255,0.8)',
                      }}
                    >
                      <span className="text-[10px] font-bold text-[#525252]">{tool.charAt(0)}</span>
                    </div>
                    <span className="text-sm font-medium text-[#525252]">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          {...fadeIn(isMobile, 0.3)}
          className="text-center text-xs text-[#a3a3a3] mt-8"
        >
          Don&apos;t see your tool? We integrate with 50+ platforms and can build custom connections.
        </motion.p>
      </div>
    </section>
  )
}

export default Integrations
