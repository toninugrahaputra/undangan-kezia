import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const GateTransition = ({ children }) => {
  const containerRef = useRef(null)

  // Section setinggi 250vh: 
  // 1. 0 - 0.4 (100vh): Gate pelan-pelan terbuka
  // 2. 0.4 - 1.0 (150vh): Hero terlihat penuh dan user bisa melihat isi Hero dengan bebas
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Membuka gerbang di sisa awal scroll (0 sampai 40% dari 250vh)
  const leftDoorX = useTransform(scrollYProgress, [0, 0.4], ["0%", "-100%"])
  const rightDoorX = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"])
  
  // Glow menghilang setelah sedikit discroll
  const glowOpacity = useTransform(scrollYProgress, [0, 0.15], [0.8, 0])
  
  // Petunjuk scroll menghilang duluan saat pintu sedikit terbuka
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  const WayangPathLeft = "M100 10 Q30 50 20 120 Q30 170 100 190 L100 10 Z"
  const WayangPathRight = "M0 10 Q70 50 80 120 Q70 170 0 190 L0 10 Z"

  return (
    <section ref={containerRef} className="h-[250vh] relative bg-black">
      {/* Sticky container yang menahan layar */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Konten Hero di Balik Gerbang */}
        <div className="absolute inset-0 z-0">
          {children}
        </div>

        {/* Lapisan Gerbang Wayang */}
        <div className="absolute inset-0 z-50 pointer-events-none flex overflow-hidden">
          {/* Left Door */}
          <motion.div
            style={{ x: leftDoorX }}
            className="relative w-1/2 h-full bg-[#0a0a0a] border-r border-[#ffd700]/30 shadow-[20px_0_50px_rgba(0,0,0,0.9)] flex justify-end items-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#111] to-[#151515]" />
            <div className="relative z-10 w-32 h-[60vh] md:w-48 md:h-[80vh] flex items-center justify-end right-[-1px]">
              <svg viewBox="0 0 100 200" className="w-full h-full text-[#ffd700] drop-shadow-[0_0_20px_rgba(255,215,0,0.25)]">
                <path d={WayangPathLeft} fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M100 30 Q60 70 50 110 Q60 140 100 170" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M100 70 Q70 85 80 110" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M100 100 Q80 110 85 130" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M100 130 Q90 135 95 150" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            style={{ x: rightDoorX }}
            className="relative w-1/2 h-full bg-[#0a0a0a] border-l border-[#ffd700]/30 shadow-[-20px_0_50px_rgba(0,0,0,0.9)] flex justify-start items-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-black via-[#111] to-[#151515]" />
            <div className="relative z-10 w-32 h-[60vh] md:w-48 md:h-[80vh] flex items-center justify-start left-[-1px]">
              <svg viewBox="0 0 100 200" className="w-full h-full text-[#ffd700] drop-shadow-[0_0_20px_rgba(255,215,0,0.25)]">
                <path d={WayangPathRight} fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M0 30 Q40 70 50 110 Q40 140 0 170" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M0 70 Q30 85 20 110" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M0 100 Q20 110 15 130" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M0 130 Q10 135 5 150" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Cahaya di tengah sebelum terbelah */}
          <motion.div 
            style={{ opacity: glowOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[40vh] bg-[#ffd700] blur-[3px] mix-blend-screen"
          />

          {/* Petunjuk Membuka Gerbang (Hanya tampil saat pintu menutup) */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#ffd700] opacity-80"
          >
            <p className="tracking-[0.3em] uppercase text-xs font-light">Scroll ke bawah</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
               <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GateTransition
