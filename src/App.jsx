import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cover from './components/Cover/Cover'
import Hero from './components/Hero/Hero'
import Countdown from './components/Countdown/Countdown'
import Quote from './components/Quote/Quote'
import EventDetails from './components/EventDetails/EventDetails'
import Gallery from './components/Gallery/Gallery'
import RSVP from './components/RSVP/RSVP'
import Map from './components/Map/Map'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import invitationData from './data/invitationData.json'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {!isOpen && (
          <Cover
            data={invitationData}
            onOpen={() => setIsOpen(true)}
          />
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Hero data={invitationData} />
          <Countdown data={invitationData} />
          <Quote data={invitationData} />
          <EventDetails data={invitationData} />
          <Gallery data={invitationData} />
          <RSVP data={invitationData} />
          <Map data={invitationData} />

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8 text-center">
            <p className="text-sm mb-2">The Wedding of {invitationData.couple.groom.nickname} & {invitationData.couple.bride.nickname}</p>
            <p className="text-xs text-gray-400">"Sebab di mana dua atau tiga orang berkumpul dalam Nama-Ku, di situ Aku ada di tengah-tengah mereka" - Matius 18:20</p>
          </footer>
        </motion.div>
      )}

      {isOpen && (
        <MusicPlayer data={invitationData} />
      )}
    </div>
  )
}

export default App
