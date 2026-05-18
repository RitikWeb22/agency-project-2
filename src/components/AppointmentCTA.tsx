import { useState } from 'react'
import { Calendar, Clock, Smile, User, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react'

export default function AppointmentCTA() {
  const [step, setStep] = useState(1) // 1: service, 2: details/datetime, 3: success
  const [formData, setFormData] = useState({
    service: 'Cosmetic Dentistry',
    practitioner: 'Dr. Olivia Vance, CDO',
    date: '2026-05-19',
    time: '10:30 AM',
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const servicesList = [
    'Teeth Whitening',
    'Dental Implants',
    'Cosmetic Dentistry',
    'Invisalign Aligners',
    'Smile Design Studio',
    'Biological Checkup'
  ]

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ]

  const selectService = (val: string) => {
    setFormData(prev => ({ ...prev, service: val }))
  }

  const selectTime = (val: string) => {
    setFormData(prev => ({ ...prev, time: val }))
  }

  const validate = () => {
    const errs: {[key: string]: string} = {}
    if (!formData.name.trim()) errs.name = 'Full Name is required'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email'
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid phone number'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setStep(3)
    }
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-secondary-50 to-brand-bg relative overflow-hidden">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-medical-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conversion text, Badges and Onboarding Guarantees */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                Painless Booking Suite
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-800 font-display leading-tight">
                Your Perfect Smile <br />
                <span className="gradient-text font-extrabold">Starts Right Here</span>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed max-w-xl">
                Ready to experience luxury restorative dentistry? Use our streamlined appointment architect to secure your personalized biological consultation slot.
              </p>
            </div>

            {/* Value Guarantees list */}
            <div className="space-y-4 max-w-lg">
              {[
                { title: '100% HIPAA Protected & Secure', desc: 'Your medical telemetry and booking scheduling is fully encrypted.' },
                { title: 'Zero-Pain Guarantee Policy', desc: 'Our automated biological sedation and laser suite ensures complete relaxation.' },
                { title: 'Flexible Calendar Rescheduling', desc: 'Easily modify or cancel your slot up to 24 hours prior without fees.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instant Contact Hotline */}
            <div className="pt-6 border-t border-slate-200/60 max-w-md">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Prefer to Book by Phone?</p>
              <div className="flex items-center gap-4">
                <a 
                  href="tel:+18005864336"
                  className="text-2xl font-bold text-slate-800 font-display hover:text-primary-600 transition-colors"
                >
                  +1-800-LUMIDENT
                </a>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  Open Now
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Booking Architect Card */}
          <div className="lg:col-span-6">
            <div className="glass-premium p-8 rounded-[36px] border border-white/80 shadow-2xl relative">
              
              {/* Form Navigation Indicator */}
              {step < 3 && (
                <div className="flex items-center gap-2 mb-6 text-xs text-slate-400 font-semibold uppercase tracking-wider pb-4 border-b border-slate-100">
                  <span className={step === 1 ? 'text-primary-600 font-bold' : ''}>01 Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className={step === 2 ? 'text-primary-600 font-bold' : ''}>02 Info & Time</span>
                </div>
              )}

              {/* Step 1: Select Service tag list */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-800 font-display">Select Requested Care</h3>
                    <p className="text-xs text-slate-500 font-light">What treatment is Dr. Vance evaluating for you?</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {servicesList.map((service, idx) => {
                      const isSelected = formData.service === service
                      return (
                        <button
                          key={idx}
                          onClick={() => selectService(service)}
                          className={`p-4 rounded-2xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white border-primary-600 shadow-md shadow-primary-500/10'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:bg-slate-50'
                          }`}
                        >
                          {service}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
                  >
                    <span>Proceed to Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: DateTime & Personal details input */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-800 font-display">Provide Contact & Slot</h3>
                    <p className="text-xs text-slate-500 font-light">Choose your date, preferred slot, and contact.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Date</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:border-primary-400 focus:outline-none text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Practitioner</label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <select
                          value={formData.practitioner}
                          onChange={(e) => setFormData(prev => ({ ...prev, practitioner: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:border-primary-400 focus:outline-none text-slate-600 appearance-none"
                        >
                          <option>Dr. Olivia Vance, CDO</option>
                          <option>First Available Specialist</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots tag list */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary-500" />
                      <span>Available Hours</span>
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {timeSlots.map((time, idx) => {
                        const isSelected = formData.time === time
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => selectTime(time)}
                            className={`px-3 py-2 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-primary-500 text-white border-primary-500 shadow-xs'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-primary-200'
                            }`}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-white focus:border-primary-400 focus:outline-none ${
                          errors.name ? 'border-rose-400 focus:border-rose-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-rose-500 flex items-center gap-1 font-medium mt-0.5">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-white focus:border-primary-400 focus:outline-none ${
                            errors.email ? 'border-rose-400 focus:border-rose-400' : 'border-slate-200'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[10px] text-rose-500 flex items-center gap-1 font-medium mt-0.5">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-white focus:border-primary-400 focus:outline-none ${
                            errors.phone ? 'border-rose-400 focus:border-rose-400' : 'border-slate-200'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-rose-500 flex items-center gap-1 font-medium mt-0.5">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit and Back */}
                  <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl text-xs transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-gradient-to-r from-primary-600 to-medical-500 hover:shadow-lg hover:shadow-primary-500/10 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Success Confirmation Screen */}
              {step === 3 && (
                <div className="text-center py-6 space-y-6 animate-reveal">
                  
                  {/* Glowing Checked Circle */}
                  <div className="w-20 h-20 rounded-[30px] bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-800 font-display">Booking Confirmed!</h3>
                    <p className="text-xs text-slate-400">Your biological consultation has been locked into our database.</p>
                  </div>

                  {/* Summary Glass Panel */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80 text-left space-y-3 text-xs max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Appointment Code:</span>
                      <span className="font-bold text-slate-800">LMD-94829</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Service Selection:</span>
                      <span className="font-bold text-slate-800">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Date & Slot:</span>
                      <span className="font-bold text-primary-600">{formData.date} at {formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Provider:</span>
                      <span className="font-bold text-slate-800">{formData.practitioner}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 max-w-sm mx-auto pt-2">
                    <button
                      onClick={() => {
                        setStep(1)
                        setFormData(prev => ({ ...prev, name: '', email: '', phone: '' }))
                      }}
                      className="w-full py-3 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                    >
                      Book Another Consultation
                    </button>
                    <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                      <Smile className="w-3 h-3 text-emerald-500" />
                      We are excited to restore your confidence!
                    </p>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
