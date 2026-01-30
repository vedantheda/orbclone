import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Comparison from '@/components/Comparison'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Navigation />
      <Hero />
      <Quote />
      <Benefits />
      <Features />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Pricing />
      <Comparison />
      <Team />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
