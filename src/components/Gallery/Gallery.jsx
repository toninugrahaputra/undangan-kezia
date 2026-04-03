import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const scrollRef = useRef(null)

  const images = data.gallery || []

  const openLightbox = (index) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery-section" className="py-16 md:py-24 bg-spotify-base font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-2xl font-bold text-white mb-1 hover:underline cursor-pointer tracking-tight">Gallery</h2>
             <p className="text-text-secondary text-sm">Moments captured in time.</p>
           </motion.div>
           <button className="text-[11px] font-bold text-text-secondary hover:text-white uppercase tracking-widest hidden md:block transition-colors">
             Show All
           </button>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative group">
           <div 
             ref={scrollRef}
             className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory"
             style={{ scrollbarWidth: 'thin', scrollbarColor: '#4d4d4d transparent' }}
           >
             {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true, margin: "100px" }}
                  className="snap-start flex-shrink-0 w-[200px] md:w-[260px] aspect-[4/5] md:aspect-square rounded-xl overflow-hidden bg-spotify-surface cursor-pointer group/card hover:bg-spotify-highlight transition-colors p-3 md:p-4 shadow-lg border border-white/5"
                  onClick={() => openLightbox(index)}
                >
                   <div className="w-full h-full rounded-lg overflow-hidden relative shadow-md bg-spotify-base">
                      <img 
                        src={img} 
                        alt={`Gallery ${index}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-300" />
                   </div>
                </motion.div>
             ))}
           </div>
        </div>

      </div>

      {/* Premium Lightbox - Spotify Style (Dark, sleek) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
               className="absolute top-6 right-6 w-10 h-10 rounded-full bg-spotify-surface text-text-secondary hover:text-white hover:scale-110 flex items-center justify-center transition-all z-10"
               onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            >
               <X className="w-6 h-6" />
            </button>

            {/* Prev/Next Navigation Desktop */}
            <button
               className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-spotify-surface text-text-secondary hover:text-white hover:scale-110 flex items-center justify-center transition-all z-10 hidden md:flex"
               onClick={(e) => { e.stopPropagation(); goToPrevious() }}
            >
               <ChevronLeft className="w-8 h-8" />
            </button>

            <button
               className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-spotify-surface text-text-secondary hover:text-white hover:scale-110 flex items-center justify-center transition-all z-10 hidden md:flex"
               onClick={(e) => { e.stopPropagation(); goToNext() }}
            >
               <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
               key={selectedIndex}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.3 }}
               src={images[selectedIndex]}
               alt={`Gallery photo ${selectedIndex + 1}`}
               className="max-w-full max-h-[85vh] object-contain rounded drop-shadow-2xl"
               onClick={(e) => e.stopPropagation()}
            />

            {/* Info / Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary font-bold tracking-[0.2em] text-[10px] uppercase bg-spotify-surface px-4 py-2 rounded-full">
               {selectedIndex + 1} of {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
