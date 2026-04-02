import { useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Navigation, Heart } from 'lucide-react'

const Map = ({ data }) => {
  return (
    <section id="map-section" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Optimized Background - Removed heavy animated radial patterns */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Static subtle background blob for high performance */}
         <div className="absolute top-10 right-10 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl" style={{ transform: 'translateZ(0)' }} />
         <div className="absolute bottom-10 left-10 w-64 h-64 bg-blush-200/20 rounded-full blur-3xl" style={{ transform: 'translateZ(0)' }} />
      </div>

      {/* Floating Ornaments - Reduced count and complexity */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-gold-400/20 hidden lg:block"
      >
        <MapPin className="w-12 h-12" fill="currentColor" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-300"></div>
            <p className="text-gold-600 uppercase tracking-[0.3em] text-sm font-medium">Lokasi Acara</p>
            <div className="w-12 h-px bg-gold-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 drop-shadow-sm mb-6">
            Peta Lokasi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Kami sangat menantikan kehadiran Anda
          </p>
        </motion.div>

        {/* Map Container - Replaced heavy blur & nested spring animations with simple ease */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Location Info Card - Moved adjacent to map to avoid floating over iframe (which kills performance) */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center mb-6">
                      <MapPin className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                      {data.event.resepsi.location}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                      {data.event.resepsi.address}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.event.resepsi.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <Navigation className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      <span className="font-medium tracking-wide">Petunjuk Arah</span>
                    </a>
                    
                    <a
                      href={data.map.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-gray-900 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all font-medium"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                      Buka Google Maps
                    </a>
                  </div>
              </div>

              {/* Google Maps Embed - Optimized with lazy load and static wrapper */}
              <div className="w-full h-[300px] md:h-[400px] lg:h-full bg-gray-100">
                <iframe
                  src={data.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" /* Very important for performance! */
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Location Map"
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>
        </motion.div>

        {/* Tips Card - Stripped heavy backdrop-blur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="p-6 md:p-8 bg-gold-50/50 rounded-3xl border border-gold-100">
            <div className="flex items-start md:items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                <Navigation className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <p className="text-gray-600 font-light text-sm md:text-base">
                  Gunakan fitur <strong className="text-gray-900 font-medium">Petunjuk Arah</strong> untuk mendapatkan rute terbaik. Pastikan untuk datang lebih awan demi kenyamanan bersama.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Map
