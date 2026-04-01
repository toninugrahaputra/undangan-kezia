import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react'

const EventDetails = ({ data }) => {
  const { pemberkatan, resepsi } = data.event

  const EventCard = ({ title, date, time, location, address, isReception = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl shadow-lg p-8 md:p-10 ${isReception ? 'mt-8' : ''}`}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto" />
      </div>

      {/* Event Details */}
      <div className="space-y-6">
        {/* Date */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-pink-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Tanggal</p>
            <p className="text-lg font-medium text-gray-900">{date}</p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Waktu</p>
            <p className="text-lg font-medium text-gray-900">{time}</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Lokasi</p>
            <p className="text-lg font-medium text-gray-900">{location}</p>
            <p className="text-gray-600 mt-1">{address}</p>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <motion.a
        href={data.map.directUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        <Navigation className="w-5 h-5" />
        <span>Buka di Google Maps</span>
      </motion.a>
    </motion.div>
  )

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Rangkaian Acara
          </h2>
          <p className="text-gray-600 text-lg">
            Dengan memohon berkat dan ridho Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan pernikahan kami pada:
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="max-w-2xl mx-auto">
          <EventCard
            title="Pemberkatan Pernikahan"
            date={pemberkatan.date}
            time={pemberkatan.time}
            location={pemberkatan.location}
            address={pemberkatan.address}
          />

          <EventCard
            title="Resepsi"
            date={resepsi.date}
            time={resepsi.time}
            location={resepsi.location}
            address={resepsi.address}
            isReception={true}
          />
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Mohon maaf apabila ada kesalahan dalam penulisan nama atau gelar.</span>
              <br />
              <span className="text-gray-600 mt-2 inline-block">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu dan berkat bagi pernikahan kami.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails
