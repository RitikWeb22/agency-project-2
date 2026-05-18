import { useState, useEffect, useRef } from 'react'
import { CheckCircle2, Award, Star, Heart } from 'lucide-react'

interface StatItem {
  id: string
  label: string
  value: number
  suffix: string
  icon: any
  description: string
}

export default function TrustStats() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    patients: 0,
    experience: 0,
    satisfaction: 0,
    awards: 0
  })

  const stats: StatItem[] = [
    {
      id: 'patients',
      label: 'Happy Patients',
      value: 15200,
      suffix: '+',
      icon: Heart,
      description: 'Restoring beautiful, biological smiles across Beverly Hills'
    },
    {
      id: 'experience',
      label: 'Years Experience',
      value: 25,
      suffix: '+',
      icon: Award,
      description: 'Pioneering minimally invasive advanced dental practices'
    },
    {
      id: 'satisfaction',
      label: 'Satisfaction Rate',
      value: 99.8,
      suffix: '%',
      icon: Star,
      description: 'Uncompromising standard of painless care and support'
    },
    {
      id: 'awards',
      label: 'Certifications',
      value: 12,
      suffix: '',
      icon: CheckCircle2,
      description: 'Top-tier board certifications & state-of-the-art tech standards'
    }
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounts()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounts = () => {
    const duration = 2000 // 2 seconds animation
    const steps = 50
    const intervalTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      // Easing function (easeOutQuad)
      const easedProgress = progress * (2 - progress)

      setCounts({
        patients: Math.round(easedProgress * 15200),
        experience: Math.round(easedProgress * 25),
        satisfaction: Math.round(easedProgress * 998) / 10,
        awards: Math.round(easedProgress * 12)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        // Ensure final values are exact
        setCounts({
          patients: 15200,
          experience: 25,
          satisfaction: 99.8,
          awards: 12
        })
      }
    }, intervalTime)
  }

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-brand-bg to-secondary-50 relative overflow-hidden"
    >
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            const currentValue = counts[stat.id]

            return (
              <div 
                key={stat.id}
                className="glass-premium p-8 rounded-3xl border border-white/80 hover:shadow-xl hover:border-primary-100 transition-all duration-500 flex flex-col space-y-4"
              >
                {/* Header: Icon + Accent Line */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-primary-200 to-transparent rounded-full"></div>
                </div>

                {/* Stat Display */}
                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-800 font-display flex items-baseline">
                    <span>
                      {stat.id === 'patients' 
                        ? currentValue.toLocaleString() 
                        : currentValue}
                    </span>
                    <span className="text-primary-500 font-extrabold ml-0.5">
                      {stat.suffix}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-700 tracking-wide mt-2 uppercase">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {stat.description}
                </p>

              </div>
            )
          })}
        </div>

        {/* Professional Badges Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-wrap justify-center items-center gap-12 text-slate-400 font-medium text-xs tracking-wider uppercase">
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary-400"></span>
            <span>American Dental Association</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary-400"></span>
            <span>American Academy of Cosmetic Dentistry</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-600 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary-400"></span>
            <span>ISO 9001 Standard Accredited</span>
          </div>
        </div>

      </div>
    </section>
  )
}
