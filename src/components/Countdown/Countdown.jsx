import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Heart, Sparkles } from 'lucide-react'

const TimeUnit = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.05 }}
    className="relative group"
  >
    {/* Glassmorphism Card */}
    <div className="relative p-5 md:p-10 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl border border-white/30 min-w-[80px] xs:min-w-[90px] md:min-w-[160px] overflow-hidden flex flex-col items-center justify-center aspect-square">
      {/* Animated Background Gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gold-400/20 to-blush-400/20 rounded-full blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 w-full text-center">
        <span
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-gold-100 to-white bg-clip-text text-transparent font-serif block mb-2 md:mb-4"
        >
          {String(value).padStart(2, '0')}
        </span>
        <span className="text-[10px] md:text-sm text-white/80 uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium block">
          {label}
        </span>
      </div>

      {/* Shine Effect */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity"
      />

      {/* Decorative Corner */}
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gold-400/50" />
      <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-blush-400/50" />
    </div>
  </motion.div>
)

const Countdown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date(data.event.weddingDate).getTime()

    const calculateTimeLeft = () => {
      const difference = weddingDate - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [data.event.weddingDate])

  return (
    <section id="countdown-section" className="relative py-32 bg-gradient-to-br from-rose-900 via-rose-800 to-gold-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20l2-2h4l-2 2 2 2h-4l-2-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 text-gold-300/20 hidden lg:block"
      >
        <Heart className="w-20 h-20" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 text-blush-300/20 hidden lg:block"
      >
        <Sparkles className="w-24 h-24" fill="currentColor" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400/30 to-blush-400/30 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/20">
              <Clock className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Menuju Bahagia
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Menghitung setiap detik menuju momen spesial kami
          </p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-gold-400"
            />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Countdown Timer with Enhanced Spacing */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 justify-items-center relative z-10 max-w-4xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Hari" index={0} />
          
          {/* Decorative dots removed for mobile grid elegance, only show on huge screens if needed, 
              but for grid-cols-4 we don't need the colon separators clogging up the cells. */}
          <TimeUnit value={timeLeft.hours} label="Jam" index={1} />
          <TimeUnit value={timeLeft.minutes} label="Menit" index={2} />
          <TimeUnit value={timeLeft.seconds} label="Detik" index={3} />
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Heart className="w-5 h-5 text-gold-300 fill-gold-300" />
            <p className="text-white text-lg font-medium">
              Doa restu Anda membahagiakan kami
            </p>
            <Heart className="w-5 h-5 text-gold-300 fill-gold-300" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
