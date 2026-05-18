import { CheckCircle, Shield, Award, BookOpen } from 'lucide-react'

export default function DoctorIntroduction() {
  const certifications = [
    { icon: Shield, text: 'Board Certified Biological Dentist (IABDM)' },
    { icon: Award, text: 'Master of Biomimetic Dentistry (Columbia University)' },
    { icon: BookOpen, text: 'Author of "The Science of Biological Smile Mapping"' }
  ]

  return (
    <section id="doctor" className="py-24 bg-gradient-to-b from-white to-secondary-50 relative overflow-hidden">
      
      {/* Decorative backdrop shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Editorial Doctor Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-medical-500 p-1 group">
              
              <div className="w-full h-full bg-slate-900 rounded-[38px] overflow-hidden flex flex-col justify-end p-6 relative">
                
                {/* Doctor Photo */}
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dr. Olivia Vance" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 z-10"></div>
                
                {/* Info Overlay Panel */}
                <div className="relative z-20 space-y-3 bg-slate-950/85 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-primary-400 font-bold uppercase tracking-wider">Chief Dental Officer</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Active</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display leading-tight">Dr. Olivia Vance, CDO</h3>
                    <p className="text-[11px] text-slate-300 font-light">Biological Architect & Board-Certified Specialist</p>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <p className="text-[10px] text-slate-400 italic font-light leading-relaxed">
                    "Every smile is a delicate biological ecosystem. We design restorations that harmonize with your natural anatomy, using strictly non-toxic materials."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Accolades */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                Pioneering Restorative Science
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-display">
                Meet the Architect of <br />
                <span className="gradient-text">Biological Dental Innovation</span>
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Dr. Olivia Vance founded Lumident with a singular vision: to liberate patients from traditional, highly invasive dental methodologies. Through 15+ years of clinical innovation, she has integrated biomimetic composite engineering and computerized planning to create a luxury medical studio of unmatched reputation.
              </p>
            </div>

            {/* Certifications & Specialties */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Accreditations & Board Leadership
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="glass p-5 rounded-2xl border border-white/60 flex items-start gap-4 hover:shadow-md transition-shadow">
                      <div className="p-2.5 rounded-xl bg-primary-50 text-primary-500 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-slate-600 font-light leading-snug">
                        {item.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Clinical Principles list */}
            <div className="space-y-3 pt-4 border-t border-slate-200/60">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Clinical Principles</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['100% Metal-Free/BPA-Free', 'Biomimetic Bonding', 'Laser Diagnostic Micro-Drilling', 'Painless Anesthesia Systems'].map((principle, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
