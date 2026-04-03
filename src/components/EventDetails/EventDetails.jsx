import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const EventDetails = ({ data }) => {
  const { pemberkatan, resepsi } = data.event

  const EventRow = ({ title, date, time, location, address, directUrl, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
    >
      {/* Left: Date & Time Stack */}
      <div className="flex items-start gap-6 mb-4 md:mb-0 w-full md:w-auto">
         <div className="w-16 h-16 bg-spotify-elevated rounded-md flex flex-col items-center justify-center flex-shrink-0 text-center shadow-lg border border-white/5 group-hover:bg-spotify-highlight transition-colors">
             <span className="text-xl font-bold text-white leading-none">{index === 0 ? '01' : '02'}</span>
             <span className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Stage</span>
         </div>
         <div className="flex flex-col flex-1 pl-2">
             <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">{title}</h3>
             <p className="text-sm font-medium text-spotify-green mb-2">{date} • {time}</p>
             <div className="flex items-start gap-2 mt-1">
                <MapPin className="w-4 h-4 text-text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-text-secondary leading-snug">{location} <br className="hidden md:block"/>{address}</p>
             </div>
         </div>
      </div>

      {/* Right: Action */}
      <div className="mt-4 md:mt-0 flex-shrink-0 flex justify-end w-full md:w-auto pl-22 md:pl-0">
         <motion.a
           href={directUrl || data.map.directUrl}
           target="_blank"
           rel="noopener noreferrer"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="bg-transparent border border-text-secondary hover:border-white text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center w-full md:w-auto"
         >
           View Map
         </motion.a>
      </div>
    </motion.div>
  )

  return (
    <section id="event-section" className="py-16 md:py-24 bg-spotify-base font-sans relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-spotify-base via-spotify-elevated/5 to-spotify-base pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-10"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">On Tour</h2>
           <p className="text-text-secondary text-sm md:text-base">Upcoming events and locations.</p>
        </motion.div>

        <div className="flex flex-col relative">
           <EventRow 
             title="Pemberkatan Pernikahan"
             date={pemberkatan.date}
             time={pemberkatan.time}
             location={pemberkatan.location}
             address={pemberkatan.address}
             directUrl={pemberkatan.mapUrl || data.map?.directUrl}
             index={0}
           />
           <EventRow 
             title="Resepsi & Perayaan"
             date={resepsi.date}
             time={resepsi.time}
             location={resepsi.location}
             address={resepsi.address}
             directUrl={resepsi.mapUrl || data.map?.directUrl}
             index={1}
           />
        </div>

        {/* Note equivalent in Spotify style */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="mt-12 md:mt-16 bg-spotify-surface border-l-4 border-spotify-green p-6 rounded-r-lg"
        >
           <p className="text-sm font-bold text-text-primary mb-2 tracking-wide uppercase">Important Notice</p>
           <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
             Merupakan suatu kehormatan apabila Anda berkenan hadir. <br className="hidden md:block" />
             Mohon maaf apabila ada kesalahan dalam penulisan nama atau gelar pada undangan ini.
           </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails