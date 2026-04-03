import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, Clock, Quote, Calendar, Images, Mail, MapPin, X, MoreVertical } from 'lucide-react'
import { useState, useEffect } from 'react'

const FloatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'couple-section', icon: Users, label: 'Artist' },
    { id: 'event-section', icon: Calendar, label: 'Tour Date' },
    { id: 'gallery-section', icon: Images, label: 'Albums' },
    { id: 'countdown-section', icon: Clock, label: 'Drop' },
    { id: 'quote-section', icon: Quote, label: 'Lyrics' },
    { id: 'rsvp-section', icon: Mail, label: 'RSVP' },
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
      {/* Toggle Button - Spotify style (Dark elevated circle) */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 md:bottom-36 right-6 z-50 w-12 h-12 bg-[#282828] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#3E3E3E] transition-all border border-white/10"
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
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MoreVertical className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-48 md:bottom-52 right-6 z-50 bg-[#282828] rounded-lg shadow-2xl border border-white/10 p-2 w-[200px]"
          >
            <div className="mb-2 px-3 pt-2 pb-3 border-b border-white/10">
              <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Jump To</p>
            </div>
            <div className="flex flex-col gap-1">
              {sections.map((section) => {
                const Icon = section.icon
                const isActive = activeSection === section.id

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-medium ${
                      isActive
                        ? 'bg-white/10 text-spotify-green'
                        : 'text-text-primary hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-spotify-green' : 'text-text-secondary'}`} />
                    <span>{section.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingNavigation
