import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cover from './components/Cover/Cover'
import GateTransition from './components/GateTransition/GateTransition'
import Hero from './components/Hero/Hero'
import CoupleSection from './components/CoupleSection/CoupleSection'
import Countdown from './components/Countdown/Countdown'
import Quote from './components/Quote/Quote'
import EventDetails from './components/EventDetails/EventDetails'
import Gallery from './components/Gallery/Gallery'
import RSVP from './components/RSVP/RSVP'
import Map from './components/Map/Map'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import FloatingNavigation from './components/FloatingNavigation/FloatingNavigation'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import invitationData from './data/invitationData.json'

function App() {
  // Hanya butuh dua state: COVER dan MAIN karena Gate sekarang berada di dalam layout Scroll MAIN
  const [appState, setAppState] = useState('COVER') // 'COVER' | 'MAIN'

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {appState === 'COVER' && (
          <Cover
            key="cover"
            data={invitationData}
            onOpen={() => setAppState('MAIN')}
          />
        )}
      </AnimatePresence>

      {/* Konten Utama langsung di-load saat MAIN, gerbang scroll akan menghalanginya di awal */}
      {appState === 'MAIN' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="relative"
        >
          <ScrollProgress />

          {/* Hero kini dibungkus oleh Gate, jadi pintu gate menutupi Hero.
              Saat discroll, pintu membelah dan Hero terungkap. */}
          <GateTransition>
            <Hero data={invitationData} />
          </GateTransition>
          
          <CoupleSection data={invitationData} />
          <Countdown data={invitationData} />
          <Quote data={invitationData} />
          <EventDetails data={invitationData} />
          <Gallery data={invitationData} />
          <RSVP data={invitationData} />
          <Map data={invitationData} />

          <FloatingNavigation />

          {/* Premium Footer */}
          <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
             {/* Animated Background Pattern */}
             <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0l4 8h8l-6 6 4 8-8-4-8 4 4-8-6-6h8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Glowing orbs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" style={{ transform: 'translateZ(0)' }} />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush-500/10 rounded-full blur-[100px]" style={{ transform: 'translateZ(0)' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
              
              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-12"
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-gold-400"
                />
                <div className="h-px w-24 bg-gradient-to-l from-transparent via-gold-400 to-transparent opacity-50" />
              </motion.div>

              {/* Main Text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif font-bold mb-10 text-white drop-shadow-lg"
              >
                {invitationData.couple.groom.nickname} <span className="text-gold-400 font-light">&</span> {invitationData.couple.bride.nickname}
              </motion.p>

              {/* Bible Verse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto font-light">
                  "Sebab di mana dua atau tiga orang berkumpul dalam Nama-Ku, di situ Aku ada di tengah-tengah mereka"
                </p>
                <p className="text-gold-400/80 tracking-widest text-sm mt-4 uppercase">— Matius 18:20</p>
              </motion.div>

              {/* Thank You Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-xl"
              >
                <span className="text-sm font-medium tracking-wide">Terima kasih atas doa & restu Anda</span>
              </motion.div>

              {/* Sponsor Credits */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-xs text-gray-400 flex items-center justify-center gap-1.5 font-light"
              >
                <span>Sponsored by</span>
                <a href="https://www.instagram.com/tnugra_/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors border-b border-gray-600 hover:border-gold-400">Toni</a>
                <span>&</span>
                <a href="https://www.instagram.com/dev_mdc/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors border-b border-gray-600 hover:border-gold-400">Cahyo</a>
              </motion.div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70" />
          </footer>
        </motion.div>
      )}

      {/* Musik play when user enters main state */}
      {appState === 'MAIN' && (
        <MusicPlayer data={invitationData} />
      )}
    </div>
  )
}

export default App
