import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

const Map = ({ data }) => {
  return (
    <section id="map-section" className="relative py-16 md:py-24 bg-spotify-base font-sans overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Venue Details</h2>
          <p className="text-text-secondary text-sm md:text-base">Find your way to the live show.</p>
        </motion.div>

        {/* Map Container */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-spotify-surface rounded-xl overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-2xl"
        >
           {/* Info Container */}
           <div className="p-8 lg:p-12 flex flex-col justify-center flex-1 bg-gradient-to-br from-spotify-surface to-spotify-base">
              <div className="mb-8">
                 <div className="w-12 h-12 rounded-full bg-spotify-elevated flex items-center justify-center mb-6 border border-white/5 shadow-md">
                    <MapPin className="w-6 h-6 text-spotify-green" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    {data.event.resepsi.location}
                 </h3>
                 <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                    {data.event.resepsi.address}
                 </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row lg:flex-col gap-4 mt-auto">
                 <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.event.resepsi.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 w-full py-3 md:py-4 bg-spotify-green hover:bg-spotify-lightgreen text-black rounded-full font-bold transition-colors uppercase tracking-widest text-xs"
                 >
                    <Navigation className="w-[18px] h-[18px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Get Directions</span>
                 </a>
                 
                 <a
                    href={data.map.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3 md:py-4 bg-transparent border border-text-secondary hover:border-white text-white rounded-full font-bold transition-colors uppercase tracking-widest text-xs"
                 >
                    <ExternalLink className="w-[18px] h-[18px]" />
                    <span>Open Map Link</span>
                 </a>
              </div>
           </div>

           {/* Map Embed with Grayscale Effect */}
           <div className="w-full h-[350px] md:h-[400px] lg:h-auto lg:w-1/2 flex-shrink-0 bg-spotify-elevated relative group">
              <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
              <iframe
                 src={data.map.embedUrl}
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Wedding Location Map"
                 className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Map
