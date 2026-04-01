import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 md:p-8 bg-white rounded-2xl shadow-lg min-w-[100px] md:min-w-[140px]"
    >
      <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-serif">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm text-gray-600 uppercase tracking-wider mt-2">
        {label}
      </span>
    </motion.div>
  )

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-pink-400" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              Menuju Bahagia
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Menghitung menuju momen spesial kami
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg md:text-xl text-gray-300 font-light">
            "Karena itu seorang akan meninggalkan ayahnya dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging."
          </p>
          <p className="text-sm text-gray-500 mt-2">Matius 19:5</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
