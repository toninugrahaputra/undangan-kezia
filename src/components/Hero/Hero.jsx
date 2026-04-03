import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, CheckCircle2, MoreHorizontal } from 'lucide-react'

const Hero = ({ data }) => {
  const { groom, bride } = data.couple
  const { scrollY } = useScroll()

  // Artist profile parallax
  const bgY = useTransform(scrollY, [0, 800], [0, 150])
  const opacity = useTransform(scrollY, [100, 600], [1, 0])
  
  const heroImage = data.gallery?.[0] || "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
  
  const coupleName = `${groom.nickname} & ${bride.nickname}`
  const weddingDate = new Date(data.event.weddingDate).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  return (
    <section className="relative flex flex-col font-sans bg-spotify-base pb-8 min-h-[80vh]">
      {/* Giant Artist Image Background */}
      <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden bg-spotify-surface">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: bgY, opacity: opacity }}
        >
          <img 
            src={heroImage} 
            alt="Artist Hero" 
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
        
        {/* Strong Spotify Gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spotify-base/60 to-spotify-base" />
        
        {/* Artist Title Section pinned to bottom of the image area */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-10 pb-6 md:pb-8 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Verified Badge */}
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-[#3b82f6] fill-[#3b82f6]/20" />
              <span className="text-sm font-medium tracking-wide text-white">Verified Couple</span>
            </div>
            
            {/* Massive Name */}
            <h1 className="text-6xl md:text-8xl lg:text-[130px] font-extrabold text-white tracking-tighter leading-none mb-4">
              {groom.nickname} <br className="md:hidden" />
              <span className="text-4xl md:text-7xl lg:text-[100px] text-spotify-green">&</span> <br className="md:hidden" />
              {bride.nickname}
            </h1>
            
            <p className="text-text-secondary text-sm md:text-base font-medium">
              Live Concert • {weddingDate}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="w-full px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center gap-6 bg-spotify-base relative z-20">
        <motion.div 
          className="flex items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-spotify-green hover:bg-spotify-lightgreen flex items-center justify-center text-black shadow-lg shadow-spotify-green/20"
          >
            <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 fill-black" />
          </motion.button>

          {/* Follow / RSVP Button */}
          <button className="px-6 py-1.5 md:py-2 rounded-full border border-text-secondary text-text-primary font-bold text-xs md:text-sm tracking-widest hover:border-text-primary hover:scale-105 transition-all uppercase">
            Follow
          </button>

          {/* Context Menu */}
          <button className="text-text-secondary hover:text-text-primary transition-colors">
            <MoreHorizontal className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero