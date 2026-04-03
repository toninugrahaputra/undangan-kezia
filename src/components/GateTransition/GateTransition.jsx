import { motion } from 'framer-motion'

const GateTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ y: '20px', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full z-10 bg-spotify-base"
    >
      {children}
    </motion.div>
  )
}

export default GateTransition
