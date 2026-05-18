import { Calendar, ShieldCheck, Star, Users } from 'lucide-react'
import ThreeScene from './ThreeScene'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 flex items-center overflow-hidden bg-radial from-secondary-100/50 via-brand-bg to-brand-bg">
      {/* 3D Canvas Background */}
      <ThreeScene />

      {/* Hero Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-200/50 animate-fade-in">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-primary-800 uppercase">
                Beverly Hills' Leading Dental Studio
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-800 font-display leading-[1.08]">
                Where Tech Meets <br />
                <span className="gradient-text font-extrabold relative">
                  Artistic Confidence
                  <span className="absolute left-0 bottom-0.5 w-full h-[6px] bg-primary-100/40 rounded-full -z-10"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Welcome to Lumident. We have completely reimagined dental wellness by combining modern luxury, AI smile architecting, and painless biological treatments. Experience healthcare like never before.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('booking')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-medical-500 text-white font-semibold text-base shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-semibold text-base border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-xs"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust markers */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/60 w-full max-w-lg">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-slate-800 font-display">99.8%</div>
                <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Satisfaction Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-slate-800 font-display">15k+</div>
                <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Perfect Smiles</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-slate-800 font-display">25+</div>
                <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Years Excellence</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Bento Grid Cards representing floating UI layers */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            
            {/* Decorative background aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/20 to-medical-200/20 blur-3xl -z-10 rounded-full scale-110"></div>
            
            {/* Card 1: Available Booking Slots (Takes full width on grid) */}
            <div className="sm:col-span-2 glass-premium p-4 rounded-3xl border border-white/60 hover:shadow-xl transition-all duration-500 animate-float flex flex-col justify-between">
              
              {/* Luxury Room Image Showcase */}
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/40 shadow-inner group">
                <img 
                  src="/reception.png" 
                  alt="Lumident Beverly Hills Suite" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating frosted-glass overlay badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-xs border border-white/10 text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Suite 404 Room View</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-2 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xs">Painless Dental Protocol</h3>
                      <p className="text-[9px] text-slate-400">100% Patient comfort guarantee</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-primary-100 text-[8px] font-extrabold text-primary-800 uppercase tracking-wide">FDA Certified</span>
                </div>
                <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                  Our clinic pioneers biological minimally invasive therapies, using computerized anesthesia delivery and laser micro-drills to ensure complete pain-free visits.
                </p>
              </div>

            </div>

            {/* Card 2: Interactive Smart Slot */}
            <div className="glass-premium p-5 rounded-3xl border border-white/60 flex flex-col justify-between hover:shadow-xl transition-all duration-500 h-44">
              <div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-2 animate-pulse"></span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Live Availability</span>
                <h4 className="font-semibold text-slate-800 text-base mt-2 font-display">Slots Today</h4>
                <p className="text-xs text-slate-500 mt-1 font-light">Last 3 morning slots available today.</p>
              </div>
              <button 
                onClick={() => scrollToSection('booking')}
                className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Reserve Now</span>
              </button>
            </div>

            {/* Card 3: Top Rated Reviewers */}
            <div className="glass-premium p-5 rounded-3xl border border-white/60 flex flex-col justify-between hover:shadow-xl transition-all duration-500 h-44 animate-float-delayed">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Exceptional Care</span>
                <div className="flex gap-1 text-amber-500 py-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="font-semibold text-slate-800 text-sm font-display leading-tight">“The cleanest, most reassuring clinic ever.”</h4>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-800">A</div>
                  <div className="w-7 h-7 rounded-full bg-medical-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-800">M</div>
                  <div className="w-7 h-7 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-800">S</div>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  <span className="block font-bold text-slate-700">1,200+ Reviews</span>
                  Google & Yelp
                </div>
              </div>
            </div>

            {/* Floating micro-card: Doctor Available badge */}
            <div className="absolute -top-6 -right-6 glass shadow-xl px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-white/80 hidden sm:flex">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-white">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-800 leading-tight">AI Smile Simulator</span>
                <span className="text-[9px] text-teal-600 font-semibold">Active Studio</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
