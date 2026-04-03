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

          {/* Spotify Style Footer */}
          <footer className="relative bg-[#000000] text-text-secondary py-16 md:py-24 border-t border-white/5 font-sans pb-32">
             <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                
                {/* Branding / Logo equivalent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="w-16 h-16 bg-spotify-elevated rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 shadow-lg">
                    <span className="text-xl font-bold text-white tracking-widest">{invitationData.couple.groom.nickname[0]}<span className="text-spotify-green">&</span>{invitationData.couple.bride.nickname[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {invitationData.couple.groom.nickname} & {invitationData.couple.bride.nickname}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-spotify-green">The Live Experience</p>
                </motion.div>

                {/* Bible Verse */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-12 max-w-lg"
                >
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary mb-3">
                    "Sebab di mana dua atau tiga orang berkumpul dalam Nama-Ku, di situ Aku ada di tengah-tengah mereka."
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-primary">— Matius 18:20</p>
                </motion.div>

                {/* Copyright / End note */}
                <div className="pt-8 border-t border-white/10 w-full flex flex-col items-center text-xs space-y-2">
                   <p>© {new Date().getFullYear()} {invitationData.couple.groom.nickname} & {invitationData.couple.bride.nickname}. All rights reserved.</p>
                   <p>Terima kasih atas doa & restu Anda.</p>
                   <div className="flex items-center gap-1.5 text-text-secondary/60 pt-4">
                     <span>Sponsored by</span>
                     <a href="https://www.instagram.com/tnugra_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-spotify-green transition-colors font-medium underline decoration-white/30 underline-offset-2">Toni</a>
                     <span>&</span>
                     <a href="https://www.instagram.com/dev_mdc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-spotify-green transition-colors font-medium underline decoration-white/30 underline-offset-2">Cahyo</a>
                   </div>
                </div>
             </div>
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
