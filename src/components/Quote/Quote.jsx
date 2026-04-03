import { motion } from 'framer-motion'

const Quote = ({ data }) => {
  return (
    <section id="quote-section" className="relative py-24 md:py-32 bg-spotify-base font-sans overflow-hidden border-t border-white/5">
      {/* Abstract Background like Spotify Lyrics */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
            animate={{ 
               backgroundColor: ['#121212', '#1a1a1a', '#0f0f0f', '#121212'],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-80"
         />
         <div className="absolute top-0 right-0 w-96 h-96 bg-spotify-green/5 blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:items-start text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full"
        >
           {/* Lyrics Style Text */}
           <p className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight md:leading-[1.1] mb-8 tracking-tighter mix-blend-lighten">
             "{data.quote.text}"
           </p>

           <div className="flex items-center gap-4 mt-8">
              <div className="h-0.5 w-12 bg-spotify-green" />
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-text-secondary">
                 {data.quote.source}
              </p>
           </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="mt-20 md:mt-32 border-l-2 border-white/10 pl-6"
        >
           <p className="text-text-secondary text-sm md:text-md max-w-xl font-medium leading-relaxed">
             Kami berharap semoga pernikahan kami menjadi awal dari kehidupan yang penuh cinta,
             kebahagiaan, dan berkah selamanya.
           </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Quote
