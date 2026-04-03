import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Disc3 } from 'lucide-react'

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

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tabular-nums tracking-tighter">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs text-text-secondary uppercase tracking-[0.2em] mt-2 font-bold">
        {label}
      </span>
    </div>
  )

  const Separator = () => (
    <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-secondary opacity-30 mb-6 md:mb-8">
      :
    </div>
  )

  return (
    <section id="countdown-section" className="py-20 md:py-32 bg-spotify-base font-sans relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-spotify-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Presave Badge */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-spotify-green bg-spotify-green/10 text-spotify-green text-xs font-bold uppercase tracking-widest mb-8"
        >
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
           >
             <Disc3 className="w-4 h-4" />
           </motion.div>
           <span>UP NEXT • WEDDING DAY</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
         Counting Down to Our Forever
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto">
          The next chapter of our love story is almost here.
Join us as we celebrate the day our hearts become one.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-3 md:gap-8 bg-spotify-surface px-6 md:px-16 py-8 md:py-12 rounded-2xl border border-white/5 shadow-2xl w-full md:w-auto"
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </motion.div>

      </div>
    </section>
  )
}

export default Countdown
