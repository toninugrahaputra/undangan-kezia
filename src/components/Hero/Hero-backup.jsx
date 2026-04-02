import { motion } from 'framer-motion'
import { Calendar, MapPin, Heart, Sparkles } from 'lucide-react'
import { useScroll, useTransform } from 'framer-motion'
import { AnimatedText, slideUpFade } from '../../utils/animationVariants.jsx'

const Hero = ({ data }) => {
  const { groom, bride } = data.couple
  const { scrollY } = useScroll()

  // Parallax transforms for background layers
  const y1 = useTransform(scrollY, [0, 1000], [0, -150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -75])
  const y3 = useTransform(scrollY, [0, 1000], [0, -30])
  const y4 = useTransform(scrollY, [0, 1000], [0, -120])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-white to-blush-50 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 223, 232, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(254, 243, 199, 0.3) 0%, transparent 50%)',
          backgroundSize: '200% 200%'
        }}
      />

      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M40 0l4 8h8l-6 6 4 8-8-4-8 4 4-8-6-6h8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Parallax Layer 1 - Floating Golden Stars - Slow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-gold-300 opacity-30"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0.8, 1],
              rotate: [0, 180, 360],
              y: [0, -50, 0],
              opacity: [0, 0.3, 0.3, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" />
          </motion.div>
        ))}
      </motion.div>

      {/* Parallax Layer 2 - Floating Hearts - Medium */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-blush-300 opacity-20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 20, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
          </motion.div>
        ))}
      </motion.div>

      {/* Parallax Layer 3 - Elegant Circles - Medium */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-gold-200 to-cream-200 opacity-15"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
              x: `calc(${Math.random() * 100}% + ${Math.sin(Date.now() / 1000 + i) * 20}px)`,
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Layer 4 - Small Sparkles - Fast */}
      <motion.div
        style={{ y: y4 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            <svg className="w-3 h-3 md:w-5 md:h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/5" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Glassmorphism Card for Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 p-8 md:p-12 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30"
        >
          {/* Top Decoration */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold-300 opacity-40"
              />
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gold-400 to-blush-400 flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
              </div>
            </div>
          </motion.div>

          {/* Invitation Text */}
          <motion.div
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <AnimatedText
              text="The Wedding Celebration Of"
              className="text-sm md:text-base text-rose-700 uppercase tracking-[0.4em] font-light mb-6 block"
            />
            <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed mb-2">
              Dengan memohon berkat dan ridho Tuhan Yang Maha Esa
            </p>
            <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed">
              kami bermaksud menyelenggarakan pernikahan kami:
            </p>
          </motion.div>

          {/* Couple Names with Enhanced Typography */}
          <motion.div
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedText
                text={`${groom.nickname} & ${bride.nickname}`}
                className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-rose-700 via-gold-600 to-rose-700 bg-clip-text text-transparent mb-6 block"
              />
              <AnimatedText
                text={`${groom.name} & ${bride.name}`}
                className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-serif block font-medium"
              />
            </motion.div>
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-gold-400"
            />
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </motion.div>

          {/* Date & Location with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 px-6 py-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center shadow-md">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-rose-600 uppercase tracking-wider font-medium">Tanggal</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(data.event.weddingDate).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </motion.div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gold-300 to-transparent" />

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 px-6 py-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush-400 to-blush-500 flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-rose-600 uppercase tracking-wider font-medium">Lokasi</p>
                <p className="text-lg font-semibold text-gray-900">{data.event.resepsi.location}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Ornaments */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-gold-300 opacity-30 hidden lg:block"
        >
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 text-blush-300 opacity-30 hidden lg:block"
        >
          <svg className="w-20 h-20" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
