import { useState } from 'react'
import { Newspaper, Star, Sparkles } from 'lucide-react'

interface Publication {
  name: string
  quote: string
  logoText: string
  subText: string
  stars: number
}

export default function PressBanner() {
  const [activePub, setActivePub] = useState<number | null>(null)

  const publications: Publication[] = [
    {
      name: 'Forbes',
      logoText: 'Forbes',
      subText: 'HEALTH & TECH',
      quote: '“Lumident represents a complete paradigms shift—combining 3D AI smile architecture with biological wellness.”',
      stars: 5
    },
    {
      name: 'Vogue',
      logoText: 'VOGUE',
      subText: 'WELLNESS EDIT',
      quote: '“Beverly Hills’ most exquisite dental experience. Completely painless biological dentistry that feels like a luxury spa.”',
      stars: 5
    },
    {
      name: 'Architectural Digest',
      logoText: 'AD',
      subText: 'DESIGN & ARCHITECTURE',
      quote: '“From the state-of-the-art sandstone lounge suites to digital clinical chairs, the clinic is a masterpiece of modern zen.”',
      stars: 5
    },
    {
      name: 'The Hollywood Reporter',
      logoText: 'THR',
      subText: 'A-LIST SELECTION',
      quote: '“The secret behind Hollywood’s natural, micro-cosmetic smile restorations. Extreme dental art with biocompatible metals.”',
      stars: 5
    }
  ]

  return (
    <section className="relative py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      
      {/* Soft circular cyan visual blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* PR Heading */}
          <div className="shrink-0 text-center lg:text-left space-y-1.5 max-w-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Newspaper className="w-3.5 h-3.5 text-primary-500" />
              <span>Editorial Press</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 font-display">As Featured In</h3>
            <p className="text-xs text-slate-400 font-light">Hover over logos to view editorial reviews & ratings.</p>
          </div>

          {/* Grayscale Press Logos Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePub(idx)}
                onMouseLeave={() => setActivePub(null)}
                className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-center items-center text-center h-24 ${
                  activePub === idx
                    ? 'bg-white border-primary-200 shadow-md -translate-y-1 scale-102'
                    : 'bg-white/40 border-slate-200/60 hover:bg-white/80'
                }`}
              >
                <span className={`font-display font-extrabold tracking-widest text-lg transition-colors ${
                  activePub === idx ? 'text-primary-600' : 'text-slate-400'
                }`}>
                  {pub.logoText}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold mt-1 leading-none">
                  {pub.subText}
                </span>

                {/* Micro active dot */}
                {activePub === idx && (
                  <span className="absolute bottom-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping"></span>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic Quote Reveal panel */}
        <div className="mt-6 relative h-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xs rounded-2xl border border-slate-200/40 flex items-center justify-center px-8 text-center transition-all duration-500">
            {activePub !== null ? (
              <div className="space-y-1.5 animate-fade-in max-w-3xl">
                <p className="text-xs md:text-sm text-slate-700 font-medium italic leading-relaxed">
                  {publications[activePub].quote}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mr-2">
                    {publications[activePub].name} Review:
                  </span>
                  {[...Array(publications[activePub].stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="flex items-center gap-0.5 text-[9px] font-bold text-primary-500 uppercase tracking-widest ml-2">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Highly Recommended</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-slate-400 text-xs font-light tracking-wide flex items-center gap-2">
                <span>✦</span>
                <span>Select a publication above to view certified biological clinical critiques</span>
                <span>✦</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
