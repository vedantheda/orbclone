'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface IconBoxProps {
  icon: LucideIcon
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  delay?: number
}

// Neumorphic icon box matching OrbAI template style
const IconBox = ({ icon: Icon, variant = 'dark', size = 'md', delay = 0 }: IconBoxProps) => {
  const sizes = {
    sm: { box: 'w-10 h-10', icon: 'w-4 h-4', radius: 'rounded-xl' },
    md: { box: 'w-12 h-12', icon: 'w-5 h-5', radius: 'rounded-xl' },
    lg: { box: 'w-14 h-14', icon: 'w-6 h-6', radius: 'rounded-2xl' },
  }

  const styles = {
    dark: {
      background: 'linear-gradient(145deg, #262626, #171717)',
      boxShadow: '4px 4px 12px rgba(0,0,0,0.2), -2px -2px 8px rgba(255,255,255,0.05)',
      iconColor: '#ffffff'
    },
    light: {
      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
      boxShadow: '4px 4px 12px rgba(0,0,0,0.08), -4px -4px 12px rgba(255,255,255,0.9)',
      iconColor: '#171717'
    }
  }

  const { box, icon, radius } = sizes[size]
  const style = styles[variant]

  return (
    <motion.div
      className={`${box} ${radius} flex items-center justify-center`}
      style={{
        background: style.background,
        boxShadow: style.boxShadow
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay
      }}
    >
      <Icon className={icon} style={{ color: style.iconColor }} />
    </motion.div>
  )
}

export default IconBox
