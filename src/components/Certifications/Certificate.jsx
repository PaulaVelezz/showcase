import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certificate = ({certificate}) => {
  const {firstTitle, secondTitle, image} = certificate;

  return (
    <div className='lg:w-full lg:flex lg:items-center lg:justify-between gap-4 border-t-[1px] border-violet-700 text-stone-200 p-4'>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
        <a href={image} target="_blank">
          <img src={image} alt="certificate" width={150} height={150} className='object-contain rounded' />
        </a>
      </motion.div>

      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
        <p className='mb-2 text-2xl md:text-3xl lg:text-4xl'>{firstTitle}</p>
        <span className='mb-2 text-lime-400'>{secondTitle}</span>
      </motion.div>
    </div>
  )
}

export default Certificate;