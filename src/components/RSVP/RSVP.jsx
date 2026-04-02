import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Heart } from 'lucide-react'

const RSVP = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const message = `Halo, saya ${formData.name}%0A%0A` +
      `Konfirmasi kehadiran: ${formData.attendance}%0A` +
      `Jumlah tamu: ${formData.guests}%0A` +
      `Pesan: ${formData.message || 'Tidak ada pesan'}`

    const whatsappUrl = `https://wa.me/${data.rsvp.waNumber}?text=${message}`

    // Simulate loading then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          attendance: '',
          guests: '1',
          message: '',
        })
      }, 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="rsvp-section" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Optimized Background - Removed heavy string anims & radial-gradient recalculations */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-full md:w-3/4 h-[50vh] bg-gradient-to-br from-blush-100 to-transparent blur-[120px]" style={{ transform: 'translateZ(0)' }} />
      </div>

      {/* Floating Ornaments - Reduced count & simplified */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 text-blush-400/20 hidden lg:block"
      >
        <Heart className="w-16 h-16" fill="currentColor" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-300"></div>
            <p className="text-gold-600 uppercase tracking-[0.3em] text-sm font-medium">Buku Tamu</p>
            <div className="w-12 h-px bg-gold-300"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 drop-shadow-sm mb-6">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara sebaik mungkin.
          </p>
        </motion.div>

        {/* RSVP Form container - Stripped massive blur-3xl moving elements and lowered DOM nesting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Main Card - Removed backdrop-blur-lg and used solid white for vastly superior mobile perf */}
          <div className="p-8 md:p-12 lg:p-14 bg-white rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
             
            <div className="relative z-10">
              {isSubmitted ? (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center py-16"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                    Terima Kasih!
                  </h3>
                  <p className="text-gray-600 text-lg font-light">
                    Pesan dan konfirmasi kehadiran Anda telah dikirim.
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold-400 focus:ring-4 focus:ring-gold-50 transition-all outline-none text-gray-900"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  {/* Attendance Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Konfirmasi Kehadiran
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {(['Hadir', 'Tidak Hadir']).map((option) => (
                        <label
                          key={option}
                          className={`relative p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.attendance === option
                              ? 'bg-gold-50 border-gold-400 text-gold-800 shadow-sm'
                              : 'bg-white border-gray-200 hover:border-gold-300 text-gray-600'
                          }`}
                        >
                          <input
                            type="radio"
                            name="attendance"
                            value={option}
                            checked={formData.attendance === option}
                            onChange={handleChange}
                            required
                            className="sr-only"
                          />
                          <span className={`block text-center font-medium`}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Guests Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Tamu
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold-400 focus:ring-4 focus:ring-gold-50 transition-all outline-none text-gray-900"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Orang' : 'Orang'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan (Opsional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold-400 focus:ring-4 focus:ring-gold-50 transition-all outline-none text-gray-900 resize-none"
                      placeholder="Tinggalkan pesan untuk mempelai..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-800 active:scale-[0.98] transition-all font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Memproses...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Kirim Konfirmasi via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default RSVP
