import React from 'react';
import { motion } from 'framer-motion';

const InitialAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{  type: 'tween', ease: 'easeOut', duration: 0.8, delay: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default InitialAnimation;