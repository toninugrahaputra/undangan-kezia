import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Heart, ZoomIn } from 'lucide-react'

const Gallery = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

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

  // Masonry layout configuration
  const masonryConfig = [
    { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  ]

  return (
    <section id="gallery-section" className="relative py-32 bg-gradient-to-br from-cream-50 via-white to-blush-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Ornaments */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-gold-300 opacity-20 hidden lg:block"
      >
        <Heart className="w-16 h-16" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 text-blush-300 opacity-20 hidden lg:block"
      >
        <Heart className="w-20 h-20" fill="currentColor" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-blush-400 flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-rose-700 via-gold-600 to-rose-700 bg-clip-text text-transparent mb-6">
            Momen Bahagia
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Kenangan manis bersama orang-orang tersayang
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {images.map((image, index) => {
            const config = masonryConfig[index % masonryConfig.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`${config.colSpan} ${config.rowSpan} relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group`}
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Gallery photo ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                />

                {/* Content Overlay */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <ZoomIn className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium"
                    >
                      View Photo
                    </motion.div>
                  </div>
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Glassmorphism UI Elements */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
            >
              <p className="text-white text-sm font-medium">
                Photo {selectedIndex + 1} of {images.length}
              </p>
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Main Image with Animation */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.5 }}
              src={images[selectedIndex]}
              alt={`Gallery photo ${selectedIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <motion.button
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIndex(idx)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === selectedIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
