import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, Clock, Quote, Calendar, Images, Mail, MapPin, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const FloatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'couple-section', icon: Users, label: 'Pasangan' },
    { id: 'countdown-section', icon: Clock, label: 'Countdown' },
    { id: 'quote-section', icon: Quote, label: 'Kutipan' },
    { id: 'event-section', icon: Calendar, label: 'Acara' },
    { id: 'gallery-section', icon: Images, label: 'Galeri' },
    { id: 'rsvp-section', icon: Mail, label: 'RSVP' },
    { id: 'map-section', icon: MapPin, label: 'Lokasi' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-rose-600 to-gold-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-gold-500/50 transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 p-4 max-w-xs"
          >
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Navigasi</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => {
                const Icon = section.icon
                const isActive = activeSection === section.id

                return (
                  <motion.button
                    key={section.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-br from-rose-100 to-gold-100 text-rose-700'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{section.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-br from-rose-200 to-gold-200 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Section Indicator (Small dot) */}
      <motion.div
        className="fixed top-8 right-8 z-40 hidden md:flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-white/50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
        <span className="text-sm font-medium text-gray-700">
          {sections.find((s) => s.id === activeSection)?.label}
        </span>
      </motion.div>
    </>
  )
}

export default FloatingNavigation
