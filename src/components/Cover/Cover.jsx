import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const Cover = ({ data, onOpen }) => {
  // Spotify-style fade transition
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  }

  const coupleName = `${data.couple.groom.nickname} & ${data.couple.bride.nickname}`

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-spotify-base overflow-hidden font-sans"
    >
      {/* Background Gradient fading to base */}
      <div className="absolute inset-0 bg-gradient-to-b from-spotify-elevated/40 via-spotify-base to-spotify-base" />
      
      <div className="relative z-10 w-full max-w-md px-8 flex flex-col items-center mt-12">
        {/* Album Art Image Wrapper */}
        <motion.div 
          className="w-64 h-64 md:w-80 md:h-80 aspect-square rounded-md bg-spotify-surface shadow-[0_20px_40px_rgba(0,0,0,0.5)] mb-10 overflow-hidden relative group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
           {/* Temporary Album Art - In a real setup, we use an image. For now, a sleek dark gradient with initials. */}
           <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
             <span className="text-6xl font-bold text-white/10 tracking-widest">
                {data.couple.groom.nickname[0]}&{data.couple.bride.nickname[0]}
             </span>
           </div>
        </motion.div>

        {/* Track Title / Wedding Title */}
        <motion.div 
          className="w-full text-center md:text-left mb-8 flex flex-col md:flex-row md:justify-between md:items-end"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2 line-clamp-1">
              {coupleName}
            </h1>
            <p className="text-base text-text-secondary">
              Single • {new Date(data.event.weddingDate).getFullYear()}
            </p>
          </div>
        </motion.div>

        {/* Controls row - Play Button */}
        <motion.div 
          className="w-full flex items-center justify-center md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              // Smooth transition trigger
              setTimeout(() => onOpen(), 100)
            }}
            className="w-16 h-16 rounded-full bg-spotify-green hover:bg-spotify-lightgreen flex items-center justify-center text-black shadow-lg"
          >
            <Play className="w-8 h-8 ml-1 fill-black" />
          </motion.button>
          
          <div className="ml-6 flex-1 hidden md:block">
            <p className="text-xs text-text-secondary uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
              Press Play to open invitation
            </p>
          </div>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-xs text-text-secondary text-center tracking-widest uppercase md:hidden flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
          Tap Play
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Cover
