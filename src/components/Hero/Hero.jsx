import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Hero = ({ data }) => {
  const { groom, bride } = data.couple

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-pink-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Invitation Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-sm md:text-base text-gray-600 uppercase tracking-[0.3em] mb-4">
            The Wedding Of
          </p>
          <p className="text-gray-700 font-light text-lg">
            Dengan memohon berkat dan ridho Tuhan Yang Maha Esa, kami bermaksud
          </p>
          <p className="text-gray-700 font-light text-lg mt-2">
            menyelenggarakan pernikahan kami:
          </p>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-4">
            {groom.nickname} <span className="text-pink-500">&</span> {bride.nickname}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-serif">
            {groom.name} & {bride.name}
          </p>
        </motion.div>

        {/* Date & Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-gray-700"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-pink-500" />
            <div className="text-left">
              <p className="text-sm text-gray-600">Tanggal</p>
              <p className="font-medium">
                {new Date(data.event.weddingDate).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-300" />

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-pink-500" />
            <div className="text-left">
              <p className="text-sm text-gray-600">Lokasi</p>
              <p className="font-medium">{data.event.resepsi.location}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
