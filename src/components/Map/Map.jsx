import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

const Map = ({ data }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-pink-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Lokasi Acara
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Temukan kami di peta
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Google Maps Embed */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src={data.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Location Map"
              className="absolute inset-0"
            />
          </div>

          {/* Location Info */}
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              {data.event.resepsi.location}
            </h3>
            <p className="text-gray-600 mb-6">
              {data.event.resepsi.address}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={data.map.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex-1"
              >
                <MapPin className="w-5 h-5" />
                <span>Buka di Google Maps</span>
              </motion.a>

              <motion.a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.event.resepsi.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-colors flex-1"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Petunjuk Arah</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center"
        >
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Tips:</span> Gunakan fitur "Petunjuk Arah" untuk mendapatkan rute terbaik dari lokasi Anda ke venue acara.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Map
