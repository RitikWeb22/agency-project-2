import { useState, useEffect } from 'react'
import { Star, CheckCircle, Quote, ArrowLeft, ArrowRight } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  treatment: string
  stars: number
  text: string
  imageInitial: string
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const reviews: Testimonial[] = [
    {
      name: 'Sarah Jenkins',
      location: 'Beverly Hills, CA',
      treatment: 'Full Smile Makeover',
      stars: 5,
      text: 'Dr. Vance completely transformed my confidence. The entire process was designed digitally before we began, and the biological veneers look so beautiful and natural. The suite felt like a 5-star spa rather than a dental clinic.',
      imageInitial: 'S'
    },
    {
      name: 'Marcus Chen',
      location: 'Los Angeles, CA',
      treatment: 'Invisalign & Teeth Whitening',
      stars: 5,
      text: 'I was hesitant about orthodontic aligners at 35, but the Invisalign treatment at Lumident was invisible, quick, and completely pain-free. The laser whitening session took 45 minutes and my teeth are literally glowing.',
      imageInitial: 'M'
    },
    {
      name: 'Amara Egwu',
      location: 'Santa Monica, CA',
      treatment: 'Biological Dental Restoration',
      stars: 5,
      text: 'As someone with severe dental anxiety, the painless computerized anesthesia was a miracle. I felt absolutely zero discomfort. Dr. Olivia is an absolute master of modern biological dental care.',
      imageInitial: 'A'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 8000) // Auto scroll every 8s
    return () => clearInterval(timer)
  }, [reviews.length])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background soft circles */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-primary-100/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-medical-100/20 rounded-full blur-3xl -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
              Patient Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-display">
              Stories of Restored <span className="gradient-text">Pride & Health</span>
            </h2>
            <p className="text-slate-600 font-light leading-relaxed">
              Read how our personalized, biocompatible, and high-technology approach has changed lives by creating comfortable, stunning smile architectures.
            </p>
          </div>

          {/* Manual navigation buttons */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-400 hover:shadow-md transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-400 hover:shadow-md transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Glassmorphic Card container */}
        <div className="relative min-h-[340px] max-w-4xl mx-auto flex items-center justify-center">
          {reviews.map((review, idx) => {
            const isActive = idx === activeIndex
            
            return (
              <div
                key={idx}
                className={`absolute w-full glass-premium p-8 md:p-12 rounded-[32px] border border-white/90 shadow-xl transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto z-20'
                    : 'opacity-0 translate-x-12 scale-95 pointer-events-none z-10'
                }`}
              >
                {/* Floating quote bubble */}
                <div className="absolute top-6 right-8 text-primary-100">
                  <Quote className="w-16 h-16 stroke-current fill-current opacity-30" />
                </div>

                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed italic">
                    “{review.text}”
                  </p>

                  {/* Patient Info Footer */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    
                    {/* Patient Image Initial Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-500 to-medical-400 flex items-center justify-center text-white font-bold font-display text-base shadow-md">
                      {review.imageInitial}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-800 text-sm md:text-base">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          <span>Verified Patient</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-slate-500 font-light">
                        {review.location} — <span className="text-primary-600 font-medium">{review.treatment}</span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Global Google & Trustpilot Stats footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 text-slate-500 text-xs font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-800 font-bold">Google Reviews</span>
              <div className="flex text-amber-500"><Star className="w-3.5 h-3.5 fill-current" /></div>
              <span className="text-slate-800 font-bold">4.9/5.0</span>
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-800 font-bold">Trustpilot Rating</span>
              <div className="flex text-emerald-500"><Star className="w-3.5 h-3.5 fill-current" /></div>
              <span className="text-slate-800 font-bold">Excellent</span>
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-800 font-bold">100% HIPAA Compliant</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
