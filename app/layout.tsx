import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OrbAI – AI Agency Template',
  description: 'Custom AI solutions, built for the innovators of tomorrow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f5f5f5]">
        {children}
      </body>
    </html>
  )
}
