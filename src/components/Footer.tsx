import { Sparkles, Mail, Phone, MapPin, ShieldAlert } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800 relative overflow-hidden">
      
      {/* Backdrop glowing cyan aura */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Logo & Branding column */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-medical-400 flex items-center justify-center text-white shadow-md shadow-primary-500/10">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight font-display text-white">
                  Lumi<span className="text-primary-400">dent</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-semibold leading-none">
                  Dental Excellence
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Lumident is Beverly Hills' premier biological dental studio. We design breathtaking, natural restorations through micro-cosmetic dentistry and biocompatible methodologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/lumident"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/lumident"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/lumident"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3 text-xs font-light">
              {['services', 'experience', 'before-after', 'doctor', 'testimonials'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-primary-400 cursor-pointer transition-colors capitalize text-left"
                  >
                    {item.replace('-', ' & ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Contact details */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Connect With Us</h3>
            <ul className="space-y-4 text-xs font-light text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>
                  742 Evergreen Terrace <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <a href="tel:+18005864336" className="hover:text-white transition-colors">
                  +1-800-LUMIDENT
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <a href="mailto:concierge@lumident.com" className="hover:text-white transition-colors">
                  concierge@lumident.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map Vector/HTML Placeholder */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Our Location</h3>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 relative flex flex-col justify-end">
              {/* Clean Map SVG Grid Graphic representation */}
              <div className="absolute inset-0 opacity-20 pointer-events-none select-none flex items-center justify-center p-2">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M 0 20 L 100 20 M 0 50 L 100 50 M 0 80 L 100 80 M 30 0 L 30 100 M 70 0 L 70 100" />
                  <path d="M 10 10 L 90 90 M 10 90 L 90 10" strokeWidth="0.25" strokeDasharray="3 3" />
                  {/* Central location marker */}
                  <circle cx="50" cy="50" r="10" stroke="#14b8a6" strokeWidth="1" fill="#14b8a6" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="50" cy="50" r="3" fill="#14b8a6" />
                </svg>
              </div>

              {/* Map Tag overlay */}
              <div className="relative z-10 p-3 bg-slate-900/90 backdrop-blur-xs rounded-xl border border-slate-800 text-[10px] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-400 shrink-0 animate-bounce" />
                <div>
                  <span className="block font-bold text-white leading-tight">Lumident Beverly Hills</span>
                  <span className="text-slate-400">Valet parking complementary</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-light gap-4">
          <div>
            &copy; {currentYear} Lumident Studio LLC. All rights reserved. 
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span className="text-slate-800">|</span>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Care</a>
            <span className="text-slate-800">|</span>
            <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <ShieldAlert className="w-3 h-3 text-primary-500" />
              <span>ADA Certified Suite</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
