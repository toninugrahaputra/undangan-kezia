import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Instagram } from 'lucide-react'

// Ekstrak logic ke child component untuk me-restart hook mount bila key (isMobile) berubah
const CinematicStory = ({ data, isMobile }) => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // === ANIMATION TIMELINES (0.0 to 1.0) ===

  // Parameter Layout Adaptif
  const initialGroomOffset = isMobile ? "-25vh" : "-25vw"
  const initialBrideOffset = isMobile ? "25vh" : "25vw"
  
  const focusGroomImgOffset = isMobile ? "-25vh" : "15vw"
  const focusGroomTextOffset = isMobile ? "20vh" : "-20vw"

  const focusBrideImgOffset = isMobile ? "-25vh" : "15vw"
  const focusBrideTextOffset = isMobile ? "20vh" : "-20vw"

  // GROOM MAPPING
  const groomX = useTransform(scrollYProgress, 
    [0, 0.1, 0.2, 0.4, 0.5], 
    isMobile 
      ? ["0vw", "0vw", "0vw", "0vw", "-100vw"] 
      : [initialGroomOffset, initialGroomOffset, focusGroomImgOffset, focusGroomImgOffset, "-100vw"]
  )
  const groomY = useTransform(scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5],
    isMobile
      ? [initialGroomOffset, initialGroomOffset, focusGroomImgOffset, focusGroomImgOffset, "0vh"]
      : ["0vh", "0vh", "0vh", "0vh", "0vh"]
  )
  const groomScale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4], [1, 1, 1.25, 1.25])
  const groomOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0])

  // BRIDE MAPPING
  const brideX = useTransform(scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5, 0.7, 0.8],
    isMobile
      ? ["0vw", "0vw", "100vw", "100vw", "0vw", "0vw", "-100vw"]
      : [initialBrideOffset, initialBrideOffset, "100vw", "100vw", focusBrideImgOffset, focusBrideImgOffset, "-100vw"]
  )
  const brideY = useTransform(scrollYProgress,
    [0, 0.1, 0.2, 0.4, 0.5, 0.7, 0.8],
    isMobile
      ? [initialBrideOffset, initialBrideOffset, "0vh", "0vh", focusBrideImgOffset, focusBrideImgOffset, "0vh"]
      : ["0vh", "0vh", "0vh", "0vh", "0vh", "0vh", "0vh"]
  )
  const brideScale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.5, 0.7], [1, 1, 1, 1.25, 1.25, 1.25])
  const brideOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.5, 0.75, 0.85], [1, 1, 0, 0, 1, 1, 0])

  // GROOM TEXT
  const groomTextX = useTransform(scrollYProgress, [0.1, 0.2, 0.4], isMobile ? ["0vw", "0vw", "0vw"] : ["-50vw", focusGroomTextOffset, focusGroomTextOffset])
  const groomTextY = useTransform(scrollYProgress, [0.1, 0.2, 0.4], isMobile ? ["50vh", focusGroomTextOffset, focusGroomTextOffset] : ["0vh", "0vh", "0vh"])
  const groomTextOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0])

  // BRIDE TEXT
  const brideTextX = useTransform(scrollYProgress, [0.4, 0.5, 0.7], isMobile ? ["0vw", "0vw", "0vw"] : ["-50vw", focusBrideTextOffset, focusBrideTextOffset])
  const brideTextY = useTransform(scrollYProgress, [0.4, 0.5, 0.7], isMobile ? ["50vh", focusBrideTextOffset, focusBrideTextOffset] : ["0vh", "0vh", "0vh"])
  const brideTextOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0])

  // INTRO TITLE
  const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 1, 0])
  const introX = useTransform(scrollYProgress, [0, 0.05, 0.15], isMobile ? ["-50vw", "0vw", "50vw"] : ["0vw", "0vw", "0vw"])
  const introY = useTransform(scrollYProgress, [0, 0.15], isMobile ? ["0vh", "0vh"] : ["0vh", "-20vh"])

  // OUTRO / FINAL NARRATIVE
  const outroOpacity = useTransform(scrollYProgress, [0.8, 0.9, 0.95], [0, 1, 0])
  
  // PARALLAX BACKGROUND
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
  return (
    <section ref={containerRef} className="h-[400vh] relative bg-[#0a0a0a]">
      {/* Sticky Container yang mengunci pergerakan ke layar */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Cinematic Backdrop Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ y: bgY }}
        >
           <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M30 0l4 8h8l-6 6 4 8-8-4-8 4 4-8-6-6h8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </motion.div>

        {/* Ambient Light */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" style={{ transform: 'translateZ(0)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blush-500/10 rounded-full blur-[120px]" style={{ transform: 'translateZ(0)' }} />
        </div>

        {/* ========================================================
            LAYER 1: INTRO (Sang Mempelai)
        ======================================================== */}
        <motion.div 
          className="absolute text-center z-30 pointer-events-none w-full px-4"
          style={{ opacity: introOpacity, y: introY, x: introX }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            Sang Mempelai
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-6 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
        </motion.div>


        {/* ========================================================
            LAYER 2: GROOM
        ======================================================== */}

        {/* Groom Photo */}
        <motion.div 
          className="absolute w-48 h-64 md:w-[20rem] md:h-[28rem] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-20"
          style={{ x: groomX, y: groomY, scale: groomScale, opacity: groomOpacity }}
        >
          <motion.img 
            src={data.couple.groom.photo} 
            alt="Groom"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </motion.div>

        {/* Groom Text */}
        <motion.div
          className="absolute z-20 text-center md:text-left px-6 max-w-sm md:max-w-md w-full drop-shadow-2xl"
          style={{ x: groomTextX, y: groomTextY, opacity: groomTextOpacity }}
        >
          <h3 className="text-gold-400 text-xs md:text-sm uppercase tracking-[0.4em] font-light mb-3">The Groom</h3>
          <h4 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">
            {data.couple.groom.name}
          </h4>
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-6 border-l-2 md:border-l-0 md:border-r-0 border-gold-500/50 pl-4 md:pl-0">
            Putra dari<br/>
            Bapak {data.couple.groom.parents.father} <span className="text-gold-400">&</span> Ibu {data.couple.groom.parents.mother}
          </p>
          <div className="flex justify-center md:justify-start">
            <a href={`https://instagram.com/${data.couple.groom.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors bg-white/5 py-2 px-4 rounded-full border border-white/10">
                <Instagram className="w-4 h-4" />
                <span className="text-xs tracking-wider">@{data.couple.groom.instagram}</span>
            </a>
          </div>
        </motion.div>


        {/* ========================================================
            LAYER 3: BRIDE
        ======================================================== */}

        {/* Bride Photo */}
        <motion.div 
          className="absolute w-48 h-64 md:w-[20rem] md:h-[28rem] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-20"
          style={{ x: brideX, y: brideY, scale: brideScale, opacity: brideOpacity }}
        >
          <motion.img 
            src={data.couple.bride.photo} 
            alt="Bride"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        </motion.div>

        {/* Bride Text */}
        <motion.div
          className="absolute z-20 text-center md:text-left px-6 max-w-sm md:max-w-md w-full drop-shadow-2xl"
          style={{ x: brideTextX, y: brideTextY, opacity: brideTextOpacity }}
        >
          <h3 className="text-blush-400 text-xs md:text-sm uppercase tracking-[0.4em] font-light mb-3">The Bride</h3>
          <h4 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">
            {data.couple.bride.name}
          </h4>
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-6 border-l-2 md:border-l-0 md:border-r-0 border-blush-500/50 pl-4 md:pl-0">
            Putri dari<br/>
            Bapak {data.couple.bride.parents.father} <span className="text-blush-400">&</span> Ibu {data.couple.bride.parents.mother}
          </p>
          <div className="flex justify-center md:justify-start">
            <a href={`https://instagram.com/${data.couple.bride.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blush-400 hover:text-white transition-colors bg-white/5 py-2 px-4 rounded-full border border-white/10">
                <Instagram className="w-4 h-4" />
                <span className="text-xs tracking-wider">@{data.couple.bride.instagram}</span>
            </a>
          </div>
        </motion.div>


        {/* ========================================================
            LAYER 4: OUTRO (Cerita Kami)
        ======================================================== */}
        <motion.div 
          className="absolute text-center z-30 px-6 max-w-2xl"
          style={{ opacity: outroOpacity }}
        >
           <h2 className="text-2xl md:text-4xl font-serif text-white leading-relaxed font-light drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri..."
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-8 opacity-50" />
        </motion.div>

      </div>
    </section>
  )
}

const CoupleSection = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    setMounted(true)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) return null // Menghindari hydration mismatch

  return <CinematicStory data={data} isMobile={isMobile} key={isMobile ? 'mobile' : 'desktop'} />
}

export default CoupleSection
