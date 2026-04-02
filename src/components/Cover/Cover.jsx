import { motion } from 'framer-motion'
import { Heart, Calendar } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useState, useEffect } from 'react'

const Cover = ({ data, onOpen }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effect based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const triggerConfetti = () => {
    const duration = 1500
    const animationEnd = Date.now() + duration
    const defaults = {
      startVelocity: 25,
      spread: 360,
      ticks: 50,
      zIndex: 100,
      colors: ['#FFB6C1', '#FF69B4', '#FFC0CB', '#FFFFFF', '#ec4899']
    }

    const randomInRange = (min, max) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 30 * (timeLeft / duration)

      // Single burst from center
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.5, y: 0.5 }
      })
    }, 200)
  }

  // Text reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const letterVariants = {
    hidden: { y: 50, opacity: 0, rotateX: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  // Split text into letters for animation
  const groomName = data.couple.groom.nickname.split('')
  const brideName = data.couple.bride.nickname.split('')

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05
      }}
      transition={{
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-pink-50">
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Elegant Floral Corners with Parallax */}
      <motion.div
        style={{ x: mousePosition.x * 0.3, y: mousePosition.y * 0.3 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top Left Floral */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-pink-400">
            <defs>
              <linearGradient id="floralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            {/* Main floral scroll */}
            <path
              d="M0,0 Q50,20 80,60 Q100,90 120,80 Q150,70 180,100"
              fill="none"
              stroke="url(#floralGrad1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Decorative leaves */}
            <ellipse cx="40" cy="30" rx="15" ry="8" fill="url(#floralGrad1)" transform="rotate(-30 40 30)" />
            <ellipse cx="70" cy="50" rx="12" ry="6" fill="url(#floralGrad1)" transform="rotate(-45 70 50)" />
            <ellipse cx="100" cy="70" rx="10" ry="5" fill="url(#floralGrad1)" transform="rotate(-60 100 70)" />
            {/* Small flowers */}
            <circle cx="30" cy="25" r="8" fill="url(#floralGrad1)" />
            <circle cx="60" cy="45" r="6" fill="url(#floralGrad1)" />
            <circle cx="85" cy="65" r="5" fill="url(#floralGrad1)" />
            {/* Delicate vines */}
            <path d="M10,10 Q30,15 40,25 Q50,35 55,45" fill="none" stroke="url(#floralGrad1)" strokeWidth="1" />
            <path d="M20,5 Q45,10 55,25 Q65,40 70,55" fill="none" stroke="url(#floralGrad1)" strokeWidth="0.8" />
          </svg>
        </motion.div>

        {/* Top Right Floral (mirrored) */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          style={{ transform: 'scaleX(-1)' }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-pink-400">
            <path
              d="M0,0 Q50,20 80,60 Q100,90 120,80 Q150,70 180,100"
              fill="none"
              stroke="url(#floralGrad1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse cx="40" cy="30" rx="15" ry="8" fill="url(#floralGrad1)" transform="rotate(-30 40 30)" />
            <ellipse cx="70" cy="50" rx="12" ry="6" fill="url(#floralGrad1)" transform="rotate(-45 70 50)" />
            <ellipse cx="100" cy="70" rx="10" ry="5" fill="url(#floralGrad1)" transform="rotate(-60 100 70)" />
            <circle cx="30" cy="25" r="8" fill="url(#floralGrad1)" />
            <circle cx="60" cy="45" r="6" fill="url(#floralGrad1)" />
            <circle cx="85" cy="65" r="5" fill="url(#floralGrad1)" />
            <path d="M10,10 Q30,15 40,25 Q50,35 55,45" fill="none" stroke="url(#floralGrad1)" strokeWidth="1" />
            <path d="M20,5 Q45,10 55,25 Q65,40 70,55" fill="none" stroke="url(#floralGrad1)" strokeWidth="0.8" />
          </svg>
        </motion.div>

        {/* Bottom Left Floral (rotated 180) */}
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          style={{ transform: 'scaleY(-1)' }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-pink-400">
            <path
              d="M0,0 Q50,20 80,60 Q100,90 120,80 Q150,70 180,100"
              fill="none"
              stroke="url(#floralGrad1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse cx="40" cy="30" rx="15" ry="8" fill="url(#floralGrad1)" transform="rotate(-30 40 30)" />
            <ellipse cx="70" cy="50" rx="12" ry="6" fill="url(#floralGrad1)" transform="rotate(-45 70 50)" />
            <ellipse cx="100" cy="70" rx="10" ry="5" fill="url(#floralGrad1)" transform="rotate(-60 100 70)" />
            <circle cx="30" cy="25" r="8" fill="url(#floralGrad1)" />
            <circle cx="60" cy="45" r="6" fill="url(#floralGrad1)" />
            <circle cx="85" cy="65" r="5" fill="url(#floralGrad1)" />
            <path d="M10,10 Q30,15 40,25 Q50,35 55,45" fill="none" stroke="url(#floralGrad1)" strokeWidth="1" />
            <path d="M20,5 Q45,10 55,25 Q65,40 70,55" fill="none" stroke="url(#floralGrad1)" strokeWidth="0.8" />
          </svg>
        </motion.div>

        {/* Bottom Right Floral (mirrored + rotated 180) */}
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          style={{ transform: 'scale(-1, -1)' }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-pink-400">
            <path
              d="M0,0 Q50,20 80,60 Q100,90 120,80 Q150,70 180,100"
              fill="none"
              stroke="url(#floralGrad1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse cx="40" cy="30" rx="15" ry="8" fill="url(#floralGrad1)" transform="rotate(-30 40 30)" />
            <ellipse cx="70" cy="50" rx="12" ry="6" fill="url(#floralGrad1)" transform="rotate(-45 70 50)" />
            <ellipse cx="100" cy="70" rx="10" ry="5" fill="url(#floralGrad1)" transform="rotate(-60 100 70)" />
            <circle cx="30" cy="25" r="8" fill="url(#floralGrad1)" />
            <circle cx="60" cy="45" r="6" fill="url(#floralGrad1)" />
            <circle cx="85" cy="65" r="5" fill="url(#floralGrad1)" />
            <path d="M10,10 Q30,15 40,25 Q50,35 55,45" fill="none" stroke="url(#floralGrad1)" strokeWidth="1" />
            <path d="M20,5 Q45,10 55,25 Q65,40 70,55" fill="none" stroke="url(#floralGrad1)" strokeWidth="0.8" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-black/10" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Decorative Top Element */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl">
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
            </div>
            {/* Glow effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-pink-400 blur-xl -z-10"
            />
          </motion.div>
        </motion.div>

        {/* The Wedding Of - Cinematic Text */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.p
            className="text-sm md:text-base text-gray-600 uppercase tracking-[0.5em] font-light"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            The Wedding Celebration Of
          </motion.p>
        </motion.div>

        {/* Groom Name - Letter by Letter Reveal */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-4 overflow-hidden">
            <motion.div className="inline-flex">
              {groomName.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    display: letter === ' ' ? 'inline' : 'inline-block'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </h1>
        </motion.div>

        {/* Animated Heart with Glow */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 my-8"
        >
          <motion.div
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-px w-20 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative"
          >
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-500 fill-pink-500" />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-pink-400 blur-lg"
            />
          </motion.div>
          <motion.div
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-px w-20 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
          />
        </motion.div>

        {/* Bride Name - Letter by Letter Reveal */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 overflow-hidden">
            <motion.div className="inline-flex">
              {brideName.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    display: letter === ' ' ? 'inline' : 'inline-block'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </h1>
        </motion.div>

        {/* Date with Cinematic Styling */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-pink-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Calendar className="w-6 h-6 text-pink-500" />
            <div className="text-left">
              <p className="text-xs text-gray-600 uppercase tracking-wider">Save The Date</p>
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                {new Date(data.event.weddingDate).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Open Button */}
        <motion.div variants={itemVariants} className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              triggerConfetti()
              setTimeout(() => onOpen(), 200)
            }}
            className="group relative px-12 py-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-full overflow-hidden shadow-2xl"
          >
            {/* Animated background gradient */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3 text-base md:text-lg font-medium tracking-wide">
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.span>
              <span className="relative">
                Buka Undangan
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                />
              </span>
            </span>

            {/* Shine effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.button>
        </motion.div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-gray-500 mb-4"
          >
            Klik tombol di atas untuk membuka undangan
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Cover
