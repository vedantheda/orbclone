'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Parse a stat value like "1M", "$5M+", "47%", "200", "70" into parts.
 *
 * Strategy:
 *   1. Leading non-digit characters  -> prefix  (e.g. "$")
 *   2. First run of digits           -> the number to animate
 *   3. Everything remaining in value + the explicit suffix arg -> trailing suffix
 *
 * Examples:
 *   ("1M",  "+")  => { prefix: "",  num: 1,   fullSuffix: "M+" }
 *   ("$5M+","")   => { prefix: "$", num: 5,   fullSuffix: "M+" }
 *   ("47",  "%")  => { prefix: "",  num: 47,  fullSuffix: "%"  }
 *   ("200", "%")  => { prefix: "",  num: 200, fullSuffix: "%"  }
 *   ("70",  "%")  => { prefix: "",  num: 70,  fullSuffix: "%"  }
 */
function parseStatValue(value: string, suffix: string) {
  // Match: optional non-digit prefix, then digits, then whatever remains
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  if (!match) {
    return { prefix: '', num: 0, fullSuffix: suffix }
  }
  const prefix = match[1]          // e.g. "$" or ""
  const num = parseInt(match[2], 10) // the animatable number
  const afterNum = match[3]         // e.g. "M+", "M", "x", or ""
  const fullSuffix = afterNum + suffix
  return { prefix, num, fullSuffix }
}

// Counter animation component
const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { prefix, num: targetValue, fullSuffix } = parseStatValue(value, suffix)

  useEffect(() => {
    if (isInView && targetValue > 0) {
      const duration = 800
      const steps = 40
      const increment = targetValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setCount(targetValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, targetValue])

  return (
    <div ref={ref} className="flex items-baseline gap-0.5">
      {prefix && <span className="text-4xl font-bold text-[#171717]">{prefix}</span>}
      <span className="text-4xl font-bold text-[#171717]">{count}</span>
      {fullSuffix && <span className="text-2xl font-bold text-[#171717]">{fullSuffix}</span>}
    </div>
  )
}

// Neumorphic box style helper
const neuBox = {
  background: 'linear-gradient(145deg, #ffffff, #ececec)',
  boxShadow: '4px 4px 10px rgba(0,0,0,0.06), -4px -4px 10px rgba(255,255,255,0.8)',
}
const neuBoxInset = {
  background: 'linear-gradient(145deg, #f0f0f0, #e4e4e4)',
  boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.06), inset -2px -2px 6px rgba(255,255,255,0.7)',
}

// Mini bar chart SVG
const MiniBarChart = ({ heights, color = '#171717' }: { heights: number[]; color?: string }) => (
  <svg viewBox="0 0 80 40" className="w-full h-full" preserveAspectRatio="none">
    {heights.map((h, i) => (
      <rect
        key={i}
        x={i * 12 + 2}
        y={40 - h}
        width={8}
        height={h}
        rx={2}
        fill={color}
        opacity={0.15 + (i / heights.length) * 0.7}
      />
    ))}
  </svg>
)

// Mini line chart SVG
const MiniLineChart = ({ points, color = '#171717' }: { points: number[]; color?: string }) => {
  const max = Math.max(...points)
  const step = 80 / (points.length - 1)
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${i * step},${40 - (p / max) * 36}`)
    .join(' ')
  const areaPath = path + ` L${(points.length - 1) * step},40 L0,40 Z`
  return (
    <svg viewBox="0 0 80 40" className="w-full h-full" preserveAspectRatio="none">
      <path d={areaPath} fill={color} opacity={0.06} />
      <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
    </svg>
  )
}

// Donut chart SVG
const MiniDonut = ({ percent, color = '#171717' }: { percent: number; color?: string }) => {
  const r = 16
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <svg viewBox="0 0 40 40" className="w-full h-full">
      <circle cx={20} cy={20} r={r} fill="none" stroke={color} strokeWidth={5} opacity={0.08} />
      <circle
        cx={20} cy={20} r={r} fill="none"
        stroke={color} strokeWidth={5} opacity={0.45}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 20 20)"
      />
      <text x={20} y={22} textAnchor="middle" fontSize={9} fontWeight={700} fill={color} opacity={0.7}>
        {percent}%
      </text>
    </svg>
  )
}

// Progress bar component for horizontal metric bars
const ProgressBar = ({ label, value, percent, color = '#171717' }: { label: string; value: string; percent: number; color?: string }) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between items-center">
      <span className="text-[9px] text-[#a3a3a3] font-medium">{label}</span>
      <span className="text-[9px] text-[#171717] font-semibold">{value}</span>
    </div>
    <div className="h-1.5 rounded-full w-full" style={{ background: 'rgba(0,0,0,0.04)' }}>
      <div className="h-full rounded-full" style={{ width: `${percent}%`, background: color, opacity: 0.35 }} />
    </div>
  </div>
)

// Per-project dashboard data -- each project has a distinct visual layout
const dashboardConfigs = [
  // Project 1: Solar Company - emails sent, meetings booked, close rate
  {
    title: 'Outreach Dashboard',
    metrics: [
      { label: 'Emails Sent', value: '4,120', trend: '+32%' },
      { label: 'Meetings', value: '29', trend: '+70%' },
    ],
    chart: <MiniBarChart heights={[8, 14, 18, 12, 22, 28, 34, 32]} color="#171717" />,
    chartLabel: 'Meetings Booked / Week',
    donut: { percent: 70, label: 'Close Rate' },
    sparkline: <MiniLineChart points={[200, 480, 650, 920, 1400, 2100, 3200, 4120]} color="#171717" />,
    sparkLabel: 'Emails Sent (Cumulative)',
    progressBars: [
      { label: 'Opened', value: '62%', percent: 62 },
      { label: 'Replied', value: '18%', percent: 18 },
      { label: 'Booked', value: '7%', percent: 7 },
    ],
  },
  // Project 2: Roofing Contractor - leads, appointments, revenue
  {
    title: 'Lead Pipeline',
    metrics: [
      { label: 'Leads', value: '86', trend: '+24%' },
      { label: 'Appts', value: '34', trend: '+58%' },
    ],
    chart: <MiniBarChart heights={[6, 10, 8, 16, 24, 20, 30, 26]} color="#171717" />,
    chartLabel: 'Weekly Appointments',
    donut: { percent: 45, label: 'Close Rate' },
    sparkline: <MiniLineChart points={[8, 22, 35, 48, 56, 64, 74, 86]} color="#171717" />,
    sparkLabel: 'Revenue Growth ($K)',
    progressBars: [
      { label: 'Qualified', value: '72%', percent: 72 },
      { label: 'Proposal Sent', value: '48%', percent: 48 },
      { label: 'Closed Won', value: '45%', percent: 45 },
    ],
  },
  // Project 3: HVAC - campaigns, response rate, ROI
  {
    title: 'Campaign Performance',
    metrics: [
      { label: 'Campaigns', value: '18', trend: 'Active' },
      { label: 'Responses', value: '2.4K', trend: '+140%' },
    ],
    chart: <MiniBarChart heights={[4, 8, 12, 18, 24, 30, 36, 38]} color="#171717" />,
    chartLabel: 'Monthly Response Rate',
    donut: { percent: 92, label: 'ROI' },
    sparkline: <MiniLineChart points={[50, 120, 280, 420, 600, 780, 920, 1000]} color="#171717" />,
    sparkLabel: 'Revenue ($K)',
    progressBars: [
      { label: 'Deliverability', value: '98%', percent: 98 },
      { label: 'Response Rate', value: '12%', percent: 12 },
      { label: 'ROI', value: '340%', percent: 85 },
    ],
  },
]

const ProjectDashboard = ({ projectIndex }: { projectIndex: number }) => {
  const config = dashboardConfigs[projectIndex]
  return (
    <div
      className="h-auto md:h-[22rem] rounded-2xl p-5 relative overflow-hidden flex flex-col gap-2.5"
      style={{
        background: 'linear-gradient(145deg, #f5f5f5, #e8e8e8)',
        boxShadow: 'inset 6px 6px 16px rgba(0,0,0,0.04), inset -6px -6px 16px rgba(255,255,255,0.8)',
      }}
    >
      {/* Dashboard header */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-wider text-[#a3a3a3] uppercase">{config.title}</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c5c5c5]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d5d5d5]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#e2e2e2]" />
        </div>
      </div>

      {/* Top metric cards row */}
      <div className="flex gap-2.5">
        {config.metrics.map((m, i) => (
          <div key={i} className="flex-1 rounded-xl px-3 py-2" style={neuBox}>
            <p className="text-[10px] text-[#a3a3a3] font-medium">{m.label}</p>
            <p className="text-lg font-bold text-[#171717] leading-tight">{m.value}</p>
            <p className="text-[10px] text-[#22c55e] font-semibold">{m.trend}</p>
          </div>
        ))}
        {/* Donut metric */}
        <div className="flex-1 rounded-xl px-2 py-1.5 flex flex-col items-center justify-center" style={neuBox}>
          <div className="w-11 h-11">
            <MiniDonut percent={config.donut.percent} />
          </div>
          <p className="text-[9px] text-[#a3a3a3] font-medium mt-0.5">{config.donut.label}</p>
        </div>
      </div>

      {/* Funnel / progress bars */}
      <div className="rounded-xl px-3 py-2.5" style={neuBox}>
        <div className="flex flex-col gap-1.5">
          {config.progressBars.map((bar, i) => (
            <ProgressBar key={i} label={bar.label} value={bar.value} percent={bar.percent} />
          ))}
        </div>
      </div>

      {/* Chart area */}
      <div className="flex gap-2.5 flex-1 min-h-0">
        {/* Bar chart */}
        <div className="flex-[1.4] rounded-xl p-2.5 flex flex-col" style={neuBoxInset}>
          <p className="text-[9px] text-[#a3a3a3] font-medium mb-1">{config.chartLabel}</p>
          <div className="flex-1 min-h-0">
            {config.chart}
          </div>
        </div>
        {/* Sparkline */}
        <div className="flex-1 rounded-xl p-2.5 flex flex-col" style={neuBoxInset}>
          <p className="text-[9px] text-[#a3a3a3] font-medium mb-1">{config.sparkLabel}</p>
          <div className="flex-1 min-h-0">
            {config.sparkline}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Solar Company — Booked Out for Installations',
      description: 'A residential solar installer went from chasing referrals to a full pipeline of qualified homeowner appointments.',
      stats: [
        { value: '29', suffix: '', label: 'Appointments in 30 days' },
        { value: '70', suffix: '%', label: 'Lead to appointment rate' },
        { value: '$180', suffix: 'K', label: 'Pipeline generated' },
      ],
    },
    {
      id: 2,
      title: 'Roofing Contractor — Commercial Deals Closed',
      description: 'We helped a roofing company land commercial contracts by targeting property managers and business owners directly.',
      stats: [
        { value: '45', suffix: '%', label: 'Close rate on meetings' },
        { value: '3', suffix: '', label: 'Days to first qualified lead' },
        { value: '$340', suffix: 'K', label: 'In closed contracts' },
      ],
    },
    {
      id: 3,
      title: 'HVAC Business — Scaled to New Markets',
      description: 'An HVAC company expanded into 3 new service areas using our automated outreach system.',
      stats: [
        { value: '200', suffix: '%', label: 'Revenue increase' },
        { value: '1M', suffix: '+', label: 'Emails sent' },
        { value: '$520', suffix: 'K', label: 'Annual revenue added' },
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>PROJECTS</span>
          </div>
          <h2 className="section-title-gradient mb-4">Case Studies</h2>
          <p className="section-subtitle mx-auto">
            Real results from businesses like yours
          </p>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeProject === index
                  ? 'bg-[#171717] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
                  : 'bg-gradient-to-b from-white to-[#f7f7f7] text-[#737373] border border-[#e8e8e8] border-t-white shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_3px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_5px_14px_rgba(0,0,0,0.08)] hover:-translate-y-[1px]'
              }`}
            >
              PROJECT {project.id}
            </button>
          ))}
        </div>

        {/* Active Project */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-[#a3a3a3] mb-4">&ldquo;0{projects[activeProject].id}&rdquo;</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#171717] mb-4 leading-tight">
                {projects[activeProject].title}
              </h3>
              <p className="text-[#737373] leading-relaxed mb-8">
                {projects[activeProject].description}
              </p>

              {/* Stats with animated counters */}
              <div className="flex flex-wrap gap-6 sm:gap-12">
                {projects[activeProject].stats.map((stat, index) => (
                  <div key={`${activeProject}-${index}`}>
                    <div className="flex items-baseline">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-[#737373] mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard-style visual */}
            <ProjectDashboard projectIndex={activeProject} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
