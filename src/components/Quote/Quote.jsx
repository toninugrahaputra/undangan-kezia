import { motion } from 'framer-motion'
import { Quote as QuoteIcon, Heart, Sparkles } from 'lucide-react'

const Quote = ({ data }) => {
  return (
    <section id="quote-section" className="relative py-32 bg-gradient-to-br from-cream-50 via-white to-gold-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(254, 243, 199, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 223, 232, 0.4) 0%, transparent 50%)',
            backgroundSize: '200% 200%'
          }}
        />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M30 0l4 8h8l-6 6 4 8-8-4-8 4 4-8-6-6h8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Ornaments */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 left-16 text-gold-300/20 hidden lg:block"
      >
        <Sparkles className="w-16 h-16" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-16 right-16 text-blush-300/20 hidden lg:block"
      >
        <Heart className="w-20 h-20" fill="currentColor" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Glassmorphism Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Main Card */}
          <div className="p-12 md:p-16 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50">
            {/* Decorative Corner Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-gold-300/50 rounded-tl-3xl" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-blush-300/50 rounded-tr-3xl" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-blush-300/50 rounded-bl-3xl" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-gold-300/50 rounded-br-3xl" />

            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-gold-200 to-blush-200 opacity-30 blur-xl"
                />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gold-400/20 to-blush-400/20 backdrop-blur-sm flex items-center justify-center">
                  <QuoteIcon className="w-12 h-12 text-gold-600" />
                </div>
              </div>
            </motion.div>

            {/* Quote Text with Animated Reveal */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-light leading-relaxed mb-8 font-serif italic">
                "{data.quote.text}"
              </p>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 my-10"
              >
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-gold-400 to-blush-400"
                />
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
              </motion.div>

              {/* Quote Source with Premium Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <cite className="inline-block px-8 py-4 bg-gradient-to-r from-gold-100 to-blush-100 rounded-full border border-gold-200/50">
                  <p className="text-lg md:text-xl text-rose-700 font-semibold not-italic">
                    — {data.quote.source}
                  </p>
                </cite>
              </motion.div>
            </motion.blockquote>

            {/* Bottom Decorative Hearts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center gap-4 mt-12"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Heart
                    style={{ width: `${20 + i * 4}px`, height: `${20 + i * 4}px` }}
                    fill="currentColor"
                    className="text-gold-400/60"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-gold-200/20 via-blush-200/20 to-gold-200/20 rounded-3xl blur-3xl -z-10"
          />
        </motion.div>

        {/* Additional Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-700 text-lg max-w-3xl mx-auto font-light leading-relaxed"
        >
          Kami berharap semoga pernikahan kami menjadi awal dari kehidupan yang penuh cinta,
          kebahagiaan, dan berkah selamanya.
        </motion.p>
      </div>
    </section>
  )
}

export default Quote
