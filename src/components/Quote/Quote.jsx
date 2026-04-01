import { motion } from 'framer-motion'
import { Quote as QuoteIcon } from 'lucide-react'

const Quote = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <QuoteIcon className="w-16 h-16 text-pink-300" />
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed mb-6 font-serif">
              "{data.quote.text}"
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300" />
              <div className="w-2 h-2 bg-pink-400 rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300" />
            </div>

            {/* Quote Source */}
            <cite className="text-base md:text-lg text-pink-600 font-medium not-italic">
              — {data.quote.source}
            </cite>
          </motion.blockquote>

          {/* Additional Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-600 max-w-2xl mx-auto"
          >
            Kami berharap semoga pernikahan kami menjadi awal dari kehidupan yang penuh cinta,
            kebahagiaan, dan berkah selamanya.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Quote
