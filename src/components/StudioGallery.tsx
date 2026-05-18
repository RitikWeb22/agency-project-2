import { useState } from 'react'
import { Image, Compass, ZoomIn } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  imageSrc: string
  size: 'large' | 'small'
  badge: string
  stats?: { label: string; value: string }
}

export default function StudioGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'studios' | 'lab' | 'clinical'>('all')
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Suite 404 — Sandstone Wellness Lounge',
      category: 'studios',
      description: 'Our primary biological suite engineered with soft sandstone walls, custom ambient coved lights, and integrated biological aromatherapy.',
      imageSrc: '/reception.png',
      size: 'large',
      badge: 'Wellness Suite',
      stats: { label: 'Air Quality Index', value: '0.00 ug/m³' }
    },
    {
      id: 2,
      title: 'Dr. Olivia Vance, DMD — Clinical Lead',
      category: 'clinical',
      description: 'Harvard Dental honors graduate & pioneer of painless biological dental protocols. Olivia sculpts custom porcelain smiles under polarized surgical microscopes.',
      imageSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop',
      size: 'small',
      badge: 'Chief Smile Architect',
      stats: { label: 'Reconstructions', value: '2,400+' }
    },
    {
      id: 3,
      title: 'Digital Micro-Cosmetic Laboratory',
      category: 'lab',
      description: 'Our in-house artisanal ceramic studio. Here, ultra-thin porcelain restorations are individually detailed, hand-shaded, and custom fired.',
      imageSrc: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop',
      size: 'small',
      badge: 'Artisanal Lab',
      stats: { label: 'Precision Rate', value: '99.9%' }
    },
    {
      id: 4,
      title: 'Biological Laser & Ozone Therapy Room',
      category: 'studios',
      description: 'Sterile coved healing suite equipped with biological lasers and custom medical grade ozone sanitization systems for complete sterilization without harsh toxic chemicals.',
      imageSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
      size: 'large',
      badge: 'Biocompatible Suite',
      stats: { label: 'Pathogen Kill Rate', value: '99.99%' }
    },
    {
      id: 5,
      title: 'Premium Holistic Consultation Lounge',
      category: 'studios',
      description: 'A comforting, warm slate-toned luxury lounge. This space is dedicated to analyzing high-res three-dimensional bone scans and custom styling smiles.',
      imageSrc: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=1000&auto=format&fit=crop',
      size: 'small',
      badge: 'Consultation Suite',
      stats: { label: 'Client Satisfaction', value: '100%' }
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="studios" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-100/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-50/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Image className="w-3.5 h-3.5 text-primary-500" />
              <span>Studio & Clinical Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-display">
              Step Into Our <span className="gradient-text">State-Of-The-Art Studio</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              Explore the premium biological environments, meet our clinical specialists, and see where artistic smile sculpting meets non-toxic high-tech medical engineering.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-200/50 rounded-2xl border border-slate-350/20 self-start">
            {[
              { id: 'all', label: 'All View' },
              { id: 'studios', label: 'Clinical Suites' },
              { id: 'clinical', label: 'Our Specialists' },
              { id: 'lab', label: 'Ceramics Lab' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[380px] bg-white ${
                item.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              
              {/* Image Frame Container */}
              <div className="flex-1 w-full relative overflow-hidden bg-slate-900 min-h-[220px]">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Visual Glassmorphic Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-wider text-white">
                    {item.badge}
                  </span>
                </div>

                {/* Micro-hover Zoom-In Button */}
                <button
                  onClick={() => setActiveZoomImage(item.imageSrc)}
                  className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white transition-opacity duration-300 cursor-pointer ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Visual Telemetry Stats Overlay */}
                {item.stats && (
                  <div className={`absolute bottom-4 left-4 z-20 transition-all duration-500 ${
                    hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}>
                    <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl p-2.5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">{item.stats.label}:</span>
                      <span className="text-[10px] font-mono text-teal-400 font-bold">{item.stats.value}</span>
                    </div>
                  </div>
                )}

                {/* Dark Masking Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 z-10"></div>
              </div>

              {/* Description Info Drawer */}
              <div className="p-6 bg-white border-t border-slate-100 space-y-2 relative z-20">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-primary-500">
                    {item.category.replace('studios', 'Clinical Suite').replace('lab', 'Artisanal Lab').replace('clinical', 'Clinical Lead')}
                  </span>
                  <div className="flex gap-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest items-center">
                    <Compass className="w-3 h-3 text-slate-400" />
                    <span>Lumident Beverly Hills</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-800 font-display leading-tight group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Cinematic High-Res Lightbox Modal Overlay */}
      {activeZoomImage && (
        <div 
          onClick={() => setActiveZoomImage(null)}
          className="fixed inset-0 bg-slate-950/95 z-[9999] flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900">
            <img
              src={activeZoomImage}
              alt="High resolution dental suite"
              className="w-full h-full object-contain max-h-[85vh] mx-auto"
            />
            <button 
              onClick={() => setActiveZoomImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-400 text-sm font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

    </section>
  )
}
