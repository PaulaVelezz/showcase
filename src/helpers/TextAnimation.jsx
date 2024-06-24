import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
  if (typeof text !== 'string') {
    return null;
  }
  
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: index / 10 }}
          viewport={{ once: true }}
        >
          {word}{" "}
        </motion.p>
      ))}
    </>
  )
}

export default TextAnimation;