import { useState, useEffect } from 'react'
import { Sparkles, Menu, X, Phone, Calendar } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/75 backdrop-blur-md border-b border-primary-100/30 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-medical-400 flex items-center justify-center text-white shadow-md shadow-primary-500/10 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight font-display text-slate-800">
              Lumi<span className="gradient-text">dent</span>
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none">
              Dental Excellence
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['services', 'studios', 'before-after', 'doctor', 'testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 capitalize cursor-pointer transition-colors relative group py-2"
            >
              {item.replace('-', ' & ').replace('studios', 'Our Studio')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18005864336"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <span className="hidden lg:inline">+1-800-LUMIDENT</span>
          </a>
          <button
            onClick={() => scrollToSection('booking')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-medical-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-100 shadow-xl py-6 px-6 animate-fade-in flex flex-col gap-5 z-40">
          {['services', 'studios', 'before-after', 'doctor', 'testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left text-base font-semibold text-slate-700 hover:text-primary-600 capitalize py-1 transition-colors cursor-pointer"
            >
              {item.replace('-', ' & ').replace('studios', 'Our Studio')}
            </button>
          ))}
          <hr className="border-slate-100" />
          <div className="flex flex-col gap-4">
            <a
              href="tel:+18005864336"
              className="flex items-center gap-3 text-slate-600 py-1 font-medium hover:text-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary-500" />
              <span>+1-800-LUMIDENT</span>
            </a>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-medical-500 text-white font-semibold shadow-md shadow-primary-500/10 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
