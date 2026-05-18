import { useEffect, useState } from 'react'
import { Calendar, ArrowUp, MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PressBanner from './components/PressBanner'
import Services from './components/Services'
import TrustStats from './components/TrustStats'
import BeforeAfter from './components/BeforeAfter'
import StudioGallery from './components/StudioGallery'
import DoctorIntroduction from './components/DoctorIntroduction'
import ExperienceTimeline from './components/ExperienceTimeline'
import Testimonials from './components/Testimonials'
import AppointmentCTA from './components/AppointmentCTA'
import Footer from './components/Footer'

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show "scroll to top" button when scrolling past hero
      setShowScrollTop(window.scrollY > 600)
      
      // Show sticky bottom conversion CTA when scrolling past hero but not in booking section
      const bookingSection = document.getElementById('booking')
      if (bookingSection) {
        const rect = bookingSection.getBoundingClientRect()
        const isBeforeBooking = rect.top > window.innerHeight
        setShowStickyCTA(window.scrollY > 800 && isBeforeBooking)
      } else {
        setShowStickyCTA(window.scrollY > 800)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg relative selection:bg-primary-100 selection:text-primary-800">
      
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Bento Hero and 3D Showcase */}
      <Hero />

      {/* 2.5 Dynamic Press & Editorial Banner */}
      <PressBanner />

      {/* 3. Services Grid Catalog */}
      <Services />

      {/* 4. Trust and Clinical Statistics */}
      <TrustStats />

      {/* 5. Before & After Cinematic transformations */}
      <BeforeAfter />

      {/* 5.5 Modern Studio Bento Gallery */}
      <StudioGallery />

      {/* 6. Horizontal Patient Journey Timeline */}
      <ExperienceTimeline />

      {/* 7. Editorial Dr. Olivia Vance Profile */}
      <DoctorIntroduction />

      {/* 8. Verified Patient Testimonials Slider */}
      <Testimonials />

      {/* 9. High-Conversion Appointment Scheduler */}
      <AppointmentCTA />

      {/* 10. Clinic Navigational Footer */}
      <Footer />

      {/* Sticky Conversion Optimization CTA Bar (Floats up from bottom) */}
      <div 
        className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ease-in-out hidden sm:block ${
          showStickyCTA 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <div className="glass shadow-xl px-5 py-3 rounded-2xl border border-white/60 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Next Opening: Today</span>
          </div>
          <button 
            onClick={() => scrollToSection('booking')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-medical-500 text-white text-xs font-semibold shadow-md shadow-primary-500/10 hover:shadow-lg transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Secure Spot</span>
          </button>
        </div>
      </div>

      {/* Floating Action Button (Bottom Right: Chat / Support) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Scroll Top Bubble */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-12 h-12 rounded-2xl glass border border-white/60 shadow-lg flex items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-200 transition-all cursor-pointer ${
            showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Floating Concierge Chat button */}
        <a
          href="tel:+18005864336"
          className="w-14 h-14 rounded-3xl bg-gradient-to-tr from-primary-600 via-primary-500 to-medical-400 text-white flex items-center justify-center shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform duration-300 relative group cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border border-slate-800 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 shadow-xl whitespace-nowrap">
            Concierge Desk 🟢
          </span>
        </a>

      </div>

    </div>
  )
}
