import { useState } from 'react'
import { CalendarRange, Scan, Cpu, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react'

interface TimelineStep {
  number: string
  title: string
  tagline: string
  description: string
  icon: any
  details: string[]
  duration: string
}

export default function ExperienceTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  const steps: TimelineStep[] = [
    {
      number: '01',
      title: 'Smart Scheduling',
      tagline: '30-Second Booking',
      description: 'Select your preferred date, practitioner, and treatment plan through our simplified digital booking interface.',
      icon: CalendarRange,
      details: [
        'Instant confirmation via SMS/Email',
        'Direct calendar sync Integration',
        'Automatic insurance verification'
      ],
      duration: '30 Seconds'
    },
    {
      number: '02',
      title: '3D Intraoral Scan',
      tagline: 'Zero-Radiation Mapping',
      description: 'Dr. Vance uses high-fidelity optical scanners to create an ultra-precise digital clone of your bite structure in under 3 minutes.',
      icon: Scan,
      details: [
        'No messy structural putty',
        '100% painless optical process',
        'Identifies micro-cavities early'
      ],
      duration: '3 Minutes'
    },
    {
      number: '03',
      title: 'AI Smile Simulation',
      tagline: 'Visual Smile Architecting',
      description: 'Review a fully interactive 3D blueprint of your facial profile and customized biological dental alignment outcomes.',
      icon: Cpu,
      details: [
        'Adjust alignment parameters live',
        'Compare shade options visually',
        'Full biological mockup preview'
      ],
      duration: '10 Minutes'
    },
    {
      number: '04',
      title: 'Painless Restoration',
      tagline: 'Biological Minimally-Invasive',
      description: 'Relax in our luxurious healing suites with digital anesthesia, calming spa amenities, and computerized diagnostic lasers.',
      icon: ShieldCheck,
      details: [
        'Zero needle-pain anesthesia systems',
        'Calming aromatherapy & VR headset',
        'Quiet biological laser systems'
      ],
      duration: '45 - 60 Mins'
    },
    {
      number: '05',
      title: 'Continuous Support',
      tagline: 'Patient-Portal Syncing',
      description: 'Maintain your perfect smile with custom mineral trays, smart follow-up schedules, and immediate patient support access.',
      icon: HeartHandshake,
      details: [
        'Dedicated care representative',
        'Digital check-ins via Portal',
        'Complimentary wellness follow-up'
      ],
      duration: 'Ongoing'
    }
  ]

  return (
    <section id="experience" className="py-24 bg-brand-bg relative overflow-hidden">
      
      {/* Visual Accent Glows */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-medical-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            The Patient Onboarding Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-display">
            A Masterclass in <span className="gradient-text">Patient Experience</span>
          </h2>
          <p className="text-slate-600 font-light leading-relaxed">
            We have stripped away traditional clinical anxiety. Here is what your luxurious, painless smile transformation looks like from start to finish.
          </p>
        </div>

        {/* Horizontal Timeline Connector Nav */}
        <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-thin">
          
          {/* Connector Line */}
          <div className="absolute top-12 left-8 right-8 h-0.5 bg-slate-200 hidden md:block z-0" />
          <div 
            className="absolute top-12 left-8 h-0.5 bg-gradient-to-r from-primary-500 to-medical-500 hidden md:block z-10 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
          />

          <div className="flex md:justify-between items-center min-w-[760px] px-2 relative z-20">
            {steps.map((step, idx) => {
              const StepIcon = step.icon
              const isActive = activeStep === idx
              const isPast = idx < activeStep

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-3 cursor-pointer group shrink-0 focus:outline-none"
                  style={{ width: '16%' }}
                >
                  {/* Step bubble */}
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600 to-medical-500 text-white shadow-lg shadow-primary-500/25 scale-110'
                        : isPast
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-white text-slate-400 border border-slate-200 group-hover:border-primary-400'
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Step details snippet */}
                  <div className="text-center">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                      Step {step.number}
                    </span>
                    <span className={`text-xs font-bold font-display ${isActive ? 'text-primary-600' : 'text-slate-600'}`}>
                      {step.title}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

        </div>

        {/* Active Step Showcase Card */}
        <div className="glass-premium p-8 md:p-12 rounded-[32px] border border-white/80 hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Description */}
          <div className="md:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-extrabold text-primary-600 px-2.5 py-1 bg-primary-50 rounded-lg">
                  Stage {steps[activeStep].number}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Duration: {steps[activeStep].duration}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 font-display">
                {steps[activeStep].title} — <span className="text-primary-500">{steps[activeStep].tagline}</span>
              </h3>
            </div>

            <p className="text-sm text-slate-600 font-light leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {steps[activeStep].details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-light">{detail}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Block: Procedural Graphics */}
          <div className="md:col-span-5 bg-gradient-to-tr from-primary-50 to-medical-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center justify-center aspect-square md:aspect-auto md:h-64">
            
            {/* Displaying unique vector graphic representing each process */}
            {activeStep === 0 && (
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary-500 animate-pulse">
                <rect x="15" y="15" width="70" height="70" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M15,35 L85,35" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="35" cy="55" r="4" fill="currentColor" />
                <circle cx="50" cy="55" r="4" fill="currentColor" />
                <circle cx="65" cy="55" r="4" fill="currentColor" />
                <circle cx="35" cy="70" r="4" fill="currentColor" />
                <rect x="46" y="64" width="24" height="12" rx="4" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
              </svg>
            )}

            {activeStep === 1 && (
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary-500">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" className="animate-spin-slow" />
                <path d="M25,50 L75,50 M50,25 L50,75" stroke="currentColor" strokeWidth="1.5" />
                <rect x="42" y="42" width="16" height="16" rx="4" fill="currentColor" opacity="0.4" />
                <path d="M10,25 L25,10 M90,75 L75,90 M90,25 L75,10 M10,75 L25,90" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </svg>
            )}

            {activeStep === 2 && (
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-teal-500">
                <path d="M20,60 Q50,90 80,60" fill="none" stroke="currentColor" strokeWidth="3" />
                <g fill="currentColor" opacity="0.7">
                  <rect x="35" y="40" width="12" height="18" rx="2" />
                  <rect x="53" y="40" width="12" height="18" rx="2" />
                  <rect x="22" y="42" width="10" height="15" rx="2" />
                  <rect x="68" y="42" width="10" height="15" rx="2" />
                </g>
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M50,5 L50,15 M5,50 L15,50 M50,85 L50,95 M85,50 L95,50" stroke="currentColor" strokeWidth="1" />
              </svg>
            )}

            {activeStep === 3 && (
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-cyan-500 animate-bounce">
                <path d="M50,15 L80,35 L80,65 L50,85 L20,65 L20,35 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="18" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50,30 L50,70 M30,50 L70,50" stroke="currentColor" strokeWidth="1" />
              </svg>
            )}

            {activeStep === 4 && (
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary-500">
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M35,50 L45,60 L68,38" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="30" r="3" fill="currentColor" className="animate-pulse" />
                <circle cx="80" cy="70" r="4" fill="currentColor" className="animate-pulse" />
                <circle cx="75" cy="25" r="2" fill="currentColor" />
              </svg>
            )}

            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
              Diagnostic Module
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}
