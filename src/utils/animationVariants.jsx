import { motion } from 'framer-motion'
import React from 'react'

// Container variant for staggered children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // Fast stagger for letters
      delayChildren: 0.2
    }
  }
}

// Individual letter/word variant with 3D rotation effect
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateY: 90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] // Custom easing for smooth feel
    }
  }
}

// Slide up with fade variant for larger text blocks
export const slideUpFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

// AnimatedText component for letter-by-letter text reveal
export const AnimatedText = ({ text, className = '' }) => {
  const letters = Array.from(text)

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={staggerItem}
          className="inline-block"
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}
