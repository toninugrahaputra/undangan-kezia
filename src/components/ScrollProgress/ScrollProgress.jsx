import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-gold-500 to-rose-500 origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
