import { useState } from 'react'
import { Sparkles, Smile, ShieldAlert, Layers, Compass, Activity, ArrowUpRight } from 'lucide-react'

interface Service {
  id: string
  title: string
  tagline: string
  description: string
  details: string[]
  icon: any
  span: string
  color: string
  bg: string
}

export default function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: 'smile-design',
      title: 'Smile Design Studio',
      tagline: 'Procedural Aesthetics',
      description: 'Using high-end 3D scanning and custom facial mapping, we architect your perfect, natural smile before any treatment even begins.',
      details: ['AI smile architecture simulator', 'Digital mockups in 10 minutes', 'Personalized matching algorithms'],
      icon: Compass,
      span: 'md:col-span-2',
      color: 'text-primary-600 border-primary-200/50',
      bg: 'from-primary-50/50 via-white to-white'
    },
    {
      id: 'invisalign',
      title: 'Invisalign Aligners',
      tagline: 'Invisible Orthodontics',
      description: 'Align your teeth comfortably and discreetly without bulky metal brackets, using customized biological pressure sequences.',
      details: ['Completely invisible', 'Removable during dining', '30% faster alignment'],
      icon: Layers,
      span: 'md:col-span-1',
      color: 'text-teal-600 border-teal-200/50',
      bg: 'from-teal-50/50 via-white to-white'
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      tagline: 'Artistic Excellence',
      description: 'Bespoke hand-crafted porcelain veneers, tooth bonding, and structural gum contouring for flawless cinematic symmetry.',
      details: ['Ultra-thin premium porcelain', 'Micro-contouring systems', 'Stain-resistant finishes'],
      icon: Smile,
      span: 'md:col-span-1',
      color: 'text-secondary-600 border-secondary-200/50',
      bg: 'from-secondary-50/50 via-white to-white'
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      tagline: 'Biomimetic Restoration',
      description: 'State-of-the-art biological tooth replacement utilizing titanium posts that fuse with bone, supporting beautiful ceramic crowns.',
      details: ['Lifetime durability structural guarantee', 'Computer-guided placement', 'Natural root integration'],
      icon: Activity,
      span: 'md:col-span-2',
      color: 'text-cyan-600 border-cyan-200/50',
      bg: 'from-cyan-50/50 via-white to-white'
    },
    {
      id: 'whitening',
      title: 'Laser Teeth Whitening',
      tagline: 'Instant Luminosity',
      description: 'Achieve up to 8 shades lighter in a single 45-minute therapeutic laser session with zero structural enamel sensitivity.',
      details: ['Advanced hydrogen thermal activation', 'Anti-sensitivity mineral coating', '24-month color lock protection'],
      icon: Sparkles,
      span: 'md:col-span-1',
      color: 'text-amber-600 border-amber-200/50',
      bg: 'from-amber-50/30 via-white to-white'
    },
    {
      id: 'emergency',
      title: '24/7 Urgent Care',
      tagline: 'Immediate Pain Relief',
      description: 'Accidental trauma, severe swelling, or sudden sharp pain? Walk in instantly for same-day biological relief and intervention.',
      details: ['Emergency operations ready', 'Instant computerized anesthesia', 'Same-day diagnostics'],
      icon: ShieldAlert,
      span: 'md:col-span-1',
      color: 'text-rose-600 border-rose-200/50',
      bg: 'from-rose-50/30 via-white to-white'
    }
  ]

  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-medical-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-primary-600">
            Our Advanced Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-display">
            A New Paradigm of <span className="gradient-text">Dental Solutions</span>
          </h2>
          <p className="text-slate-600 font-light leading-relaxed">
            By infusing modern computerized diagnostics, premium materials, and comforting environments, we offer solutions that look pristine and feel incredibly natural.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            const isActive = activeCard === service.id

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`bento-card relative rounded-3xl p-8 border border-slate-100 bg-gradient-to-br ${service.bg} flex flex-col justify-between overflow-hidden cursor-pointer ${service.span}`}
              >
                {/* Visual Accent Glow on Hover */}
                <div
                  className={`absolute -right-12 -top-12 w-40 h-40 rounded-full bg-radial from-current opacity-5 blur-2xl transition-all duration-700 ${
                    isActive ? 'scale-150 opacity-15 text-primary-500' : 'text-slate-300'
                  }`}
                />

                {/* Top Action */}
                <div className="flex items-start justify-between w-full mb-6">
                  <div className={`p-4 rounded-2xl bg-white shadow-xs border ${service.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary-600 transition-all ${
                    isActive ? 'bg-primary-50 text-primary-600 scale-110' : ''
                  }`}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300" style={{ transform: isActive ? 'translate(1px, -1px)' : 'none' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl font-bold font-display text-slate-800 mt-1">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Expanded Micro-features */}
                <div className={`mt-6 pt-6 border-t border-slate-100/80 transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-85 translate-y-1'
                }`}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
