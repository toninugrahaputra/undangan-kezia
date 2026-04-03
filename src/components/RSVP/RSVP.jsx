import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Disc3 } from 'lucide-react'

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
    <section id="rsvp-section" className="py-20 md:py-32 bg-spotify-base font-sans relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Guest List
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto">
            Secure your spot for the live event. Let us know if you'll be joining us!
          </p>
        </motion.div>

        {/* RSVP Form container */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="bg-spotify-surface p-8 md:p-12 rounded-2xl shadow-2xl border border-white/5"
        >
          {isSubmitted ? (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-spotify-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                You're on the list!
              </h3>
              <p className="text-text-secondary text-sm">
                Your RSVP has been sent via WhatsApp. See you at the show.
              </p>
            </motion.div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-[0.1em] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-spotify-elevated border border-white/10 rounded-md focus:border-white focus:ring-1 focus:ring-white transition-all outline-none text-white placeholder-white/30"
                  placeholder="Enter your name"
                />
              </div>

              {/* Attendance Selection */}
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-[0.1em] mb-3">
                  Attendance
                </label>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {(['Hadir', 'Tidak Hadir']).map((option) => (
                    <label
                      key={option}
                      className={`relative px-4 py-3 rounded-full border cursor-pointer transition-all text-center text-sm font-bold ${
                        formData.attendance === option
                          ? 'bg-white border-white text-black'
                          : 'bg-transparent border-text-secondary text-text-secondary hover:border-white hover:text-white'
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
                      <span>
                        {option === 'Hadir' ? 'Attending' : 'Not Attending'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guests Field */}
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-[0.1em] mb-2">
                  Plus Ones (Guests)
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-spotify-elevated border border-white/10 rounded-md focus:border-white focus:ring-1 focus:ring-white transition-all outline-none text-white appearance-none cursor-pointer"
                  style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num.toString()} className="bg-spotify-surface text-white">
                      {num} {num === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-text-secondary uppercase tracking-[0.1em] mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-spotify-elevated border border-white/10 rounded-md focus:border-white focus:ring-1 focus:ring-white transition-all outline-none text-white placeholder-white/30 resize-none"
                  placeholder="Leave a message for the couple..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-spotify-green text-black rounded-full hover:scale-105 hover:bg-spotify-lightgreen active:scale-95 transition-all font-bold disabled:opacity-70 disabled:hover:scale-100 uppercase tracking-widest text-xs"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                         <Disc3 className="w-5 h-5" />
                      </motion.div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-[18px] h-[18px]" />
                      <span>Confirm RSVP</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}

export default RSVP
