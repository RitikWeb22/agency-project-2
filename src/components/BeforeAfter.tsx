import { useState, useRef, useEffect } from 'react'
import { Check, Sparkles } from 'lucide-react'

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <section id="before-after" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
            Transformation Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-display">
            The Signature <span className="gradient-text">Lumident Smile Makeover</span>
          </h2>
          <p className="text-slate-600 font-light leading-relaxed">
            Drag the interactive slider below to witness how we combine Invisalign alignment and customized porcelain veneers to construct beautiful, natural results.
          </p>
        </div>

        {/* Double Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Slider Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative w-full max-w-[620px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/5 border border-slate-100 select-none cursor-ew-resize"
            >
              
              {/* After: Sparkling Perfect Smile (Background) */}
              <div className="absolute inset-0 bg-gradient-to-br from-medical-50 to-teal-50 flex items-center justify-center p-8">
                <div className="w-full h-full flex flex-col justify-center items-center relative">
                  
                  {/* Styled Vector Tooth / Smile Representation for AFTER */}
                  <svg viewBox="0 0 400 200" className="w-[85%] h-auto text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Upper Lip line indicator */}
                    <path d="M 40,65 Q 120,45 200,65 Q 280,45 360,65" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Beautiful, straight white teeth shapes grouped together */}
                    <g fill="#ffffff" stroke="#0ea5e9" strokeWidth="2">
                      <rect x="80" y="80" width="30" height="42" rx="4" />
                      <rect x="112" y="80" width="36" height="46" rx="4" />
                      <rect x="150" y="80" width="48" height="50" rx="5" />
                      <rect x="202" y="80" width="48" height="50" rx="5" />
                      <rect x="252" y="80" width="36" height="46" rx="4" />
                      <rect x="290" y="80" width="30" height="42" rx="4" />
                    </g>
                    
                    {/* Smile curve arc */}
                    <path d="M 60,110 Q 200,165 340,110" stroke="#0d9488" strokeWidth="4" />
                  </svg>
                  
                  {/* Floating Sparkling Stars for "After" */}
                  <div className="absolute top-12 right-12 text-primary-400 animate-pulse">
                    <Sparkles className="w-8 h-8 fill-current" />
                  </div>
                  <div className="absolute bottom-16 left-16 text-teal-400 animate-bounce">
                    <Sparkles className="w-5 h-5 fill-current" />
                  </div>

                  <span className="absolute bottom-4 right-4 px-3 py-1 text-[10px] font-bold text-teal-700 bg-teal-100 rounded-full uppercase tracking-widest z-10">
                    After treatment
                  </span>
                </div>
              </div>

              {/* Before: Stained, slightly uneven teeth (Overlay clipped to sliderPosition) */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-[620px] aspect-[4/3] p-8 flex flex-col justify-center items-center">
                  
                  {/* Styled Vector Tooth / Smile Representation for BEFORE */}
                  <svg viewBox="0 0 400 200" className="w-[85%] h-auto text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Upper Lip line indicator */}
                    <path d="M 40,65 Q 120,45 200,65 Q 280,45 360,65" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Misaligned, slightly stained teeth shapes */}
                    <g fill="#fef08a" stroke="#64748b" strokeWidth="2">
                      {/* Left side, slightly tilted */}
                      <rect x="80" y="80" width="30" height="42" rx="4" transform="rotate(-3, 95, 100)" />
                      {/* Left canine, slightly overlapping */}
                      <rect x="110" y="82" width="36" height="46" rx="4" transform="rotate(-2, 128, 100)" />
                      {/* Central left tooth, misaligned/receded */}
                      <rect x="146" y="86" width="48" height="44" rx="5" />
                      {/* Central right tooth, pushed forward */}
                      <rect x="198" y="78" width="48" height="52" rx="5" transform="rotate(3, 222, 100)" />
                      {/* Right canine */}
                      <rect x="250" y="82" width="36" height="46" rx="4" />
                      {/* Right side */}
                      <rect x="288" y="80" width="30" height="42" rx="4" transform="rotate(2, 303, 100)" />
                    </g>
                    
                    {/* Smile curve arc */}
                    <path d="M 60,110 Q 200,165 340,110" stroke="#475569" strokeWidth="4" />
                  </svg>

                  <span className="absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold text-slate-700 bg-slate-200 rounded-full uppercase tracking-widest z-10 whitespace-nowrap">
                    Before treatment
                  </span>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-teal-500 slider-divider"
                style={{ left: `${sliderPosition}%` }}
              />

            </div>
          </div>

          {/* Right Column: Case study description details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase text-primary-500 tracking-wider">
              Featured Case #8493
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display leading-tight">
              A Complete Aesthetic & Functional Makeover
            </h3>
            
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Our 32-year-old patient presented with mild overcrowding, central tooth misalignment, and moderate surface staining. Using our signature <strong>Digital Smile Design</strong> suite, we planned a conservative, biological approach.
            </p>

            <ul className="space-y-3">
              {[
                { title: 'Invisalign Treatment', desc: '14 weeks of gentle alignment using biological custom aligner trays.' },
                { title: 'Enamel Whitening', desc: 'Single session laser treatment targeting deep dentin chromogens.' },
                { title: 'Porcelain Veneers', desc: '4 ultra-thin customized veneers to restore structural symmetry.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800 uppercase tracking-wide">{item.title}</span>
                    <span className="text-xs text-slate-500 font-light">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="block text-xl font-bold text-slate-800 font-display">100%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Biological Preservation</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <span className="block text-xl font-bold text-slate-800 font-display">14 Weeks</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Duration</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <span className="block text-xl font-bold text-slate-800 font-display">0% Pain</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Reported Comfort</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
