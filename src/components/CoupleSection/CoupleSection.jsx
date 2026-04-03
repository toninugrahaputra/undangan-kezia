import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'

const ArtistCard = ({ person, role, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-spotify-surface hover:bg-spotify-highlight transition-colors rounded-lg overflow-hidden group w-full cursor-pointer shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img 
          src={person.photo} 
          alt={person.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider">{role}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">{person.name}</h3>
        <p className="text-sm font-medium text-spotify-green mb-4">@{person.instagram}</p>
        
        <p className="text-sm text-text-secondary leading-relaxed">
          {person.childNumber || (role === 'Groom' ? 'Putra' : 'Putri')} dari <br className="hidden md:block" />
          Bapak {person.parents.father} & Ibu {person.parents.mother}
        </p>

        <a 
          href={`https://instagram.com/${person.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-transparent border border-text-secondary group-hover:border-white text-white py-2 rounded-full font-bold text-sm transition-colors"
        >
          <Instagram className="w-4 h-4" />
          View Profile
        </a>
      </div>
    </motion.div>
  )
}

const CoupleSection = ({ data }) => {
  return (
    <section className="bg-spotify-base py-16 px-6 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8"
        >
           <h2 className="text-2xl font-bold text-white mb-2">About the Artists</h2>
           <p className="text-text-secondary text-sm">The main vocalists of this lifetime journey.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
           <ArtistCard person={data.couple.groom} role="Groom" delay={0.1} />
           <ArtistCard person={data.couple.bride} role="Bride" delay={0.2} />
        </div>

        {/* Lyrics Style Quote */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3 }}
           className="mt-16 text-center max-w-3xl mx-auto py-16 px-6 rounded-2xl bg-gradient-to-b from-spotify-surface to-spotify-base"
        >
           <Heart className="w-8 h-8 text-spotify-green mx-auto mb-8 animate-pulse" />
           <h3 className="text-xl md:text-3xl font-bold text-text-primary leading-relaxed mb-6">
             "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri..."
           </h3>
           <p className="text-text-secondary text-sm uppercase tracking-widest font-bold">Lyrics by Destiny</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CoupleSection
