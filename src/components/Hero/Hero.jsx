import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Hero = ({ data }) => {
  const { groom, bride } = data.couple
  const { scrollY } = useScroll()

  // Ensure Hero parallax starts fading AFTER the Gate opens (~100vh = ~700-800px)
  const bgScale = useTransform(scrollY, [0, 1500], [1.1, 1.05])
  const bgY = useTransform(scrollY, [0, 1500], [0, -100])
  
  // Keep background clear initially, blur later
  const bgBlurValue = useTransform(scrollY, [800, 1400], [0, 10])
  const bgBlur = useTransform(bgBlurValue, (value) => `blur(${value}px)`)
  const bgOpacity = useTransform(scrollY, [1000, 1800], [1, 0.2])

  // Parallax for the main giant text
  const textY = useTransform(scrollY, [700, 1300], [0, -150])
  const textOpacity = useTransform(scrollY, [700, 1100], [1, 0])

  // Glassmorphism card parallax
  const cardY = useTransform(scrollY, [800, 1400], [0, -180])
  const cardOpacity = useTransform(scrollY, [800, 1200], [1, 0])
  
  // Use a stunning photo from gallery for the background
  const heroImage = data.gallery?.[0] || "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Container */}
      <motion.div
        style={{
          scale: bgScale,
          y: bgY,
          opacity: bgOpacity,
          filter: bgBlur
        }}
        className="absolute inset-0 w-full h-full origin-top"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dim overlay for readability */}
        {/* Subtle vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50 z-10" />
        <img 
          src={heroImage} 
          alt="Pre-wedding Cinematic Hero" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Bokeh/Dust Particles on top of image for depth */}
      <div className="absolute inset-0 z-20 pointer-events-none">
         {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, Math.random() * 0.3 + 0.1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              filter: `blur(${Math.random() * 2}px)`
            }}
          />
        ))}
      </div>

      <div className="relative z-30 w-full min-h-screen flex flex-col justify-end px-4 pb-24 mx-auto max-w-6xl">
        
        {/* Giant Cinematic Typography - Positioned closer to center-bottom */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="text-center w-full mb-12 flex-1 flex flex-col justify-center mt-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-xs md:text-sm text-gold-300/80 uppercase tracking-[0.5em] font-medium mb-6"
          >
            The Wedding Celebration Of
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
          >
            {groom.nickname} <span className="text-gold-400 font-light mx-2">&</span> {bride.nickname}
          </motion.h1>

          <motion.div
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
             className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto opacity-70"
          />
        </motion.div>

        {/* Informational Glassmorphism Card (Floating Bottom) */}
        <motion.div
           style={{ y: cardY, opacity: cardOpacity }}
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
           className="w-full max-w-3xl mx-auto px-6 py-5 md:py-6 bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-full border border-white/10 shadow-2xl relative overflow-hidden group"
        >
           {/* Card subtle animated glow */}
           <motion.div 
             animate={{ x: ['-100%', '200%'] }}
             transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
             className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
           />

           <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white relative z-10">
             {/* Date */}
             <div className="flex items-center gap-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0 border border-white/5">
                     <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gold-300" />
                 </div>
                 <div className="text-left">
                     <p className="text-[10px] md:text-xs text-gold-300/80 uppercase tracking-widest mb-0.5">Tanggal</p>
                     <p className="text-xs md:text-sm font-medium tracking-wide">
                         {new Date(data.event.weddingDate).toLocaleDateString('id-ID', {
                           day: 'numeric', month: 'long', year: 'numeric'
                         })}
                     </p>
                 </div>
             </div>
             
             {/* Divider */}
             <div className="hidden md:block w-px h-8 bg-white/20" />

             {/* Location */}
             <div className="flex items-center gap-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0 border border-white/5">
                     <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold-300" />
                 </div>
                 <div className="text-left">
                     <p className="text-[10px] md:text-xs text-gold-300/80 uppercase tracking-widest mb-0.5">Lokasi</p>
                     <p className="text-xs md:text-sm font-medium tracking-wide">
                         {data.event.resepsi.location}
                     </p>
                 </div>
             </div>
           </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border border-white/30 rounded-full flex justify-center p-1 md:p-1.5 backdrop-blur-md">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 md:h-2 bg-gold-300 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero