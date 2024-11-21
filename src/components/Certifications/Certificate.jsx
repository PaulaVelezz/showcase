import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Certificate = ({certificate}) => {
  const {firstTitle, secondTitle, image} = certificate;
  const [ isActive, setIsActive ] = useState(false);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-full flex items-center justify-center gap-4 border-t-[1px] border-violet-700 text-stone-200 pt-[.5vw] pb-[.5vw]'>
      <motion.div animate={isActive ? "open" : "closed"} className='w-44 h-44'>
        <a href={image} target="_blank">
          <img src={image} alt="certificate" className='w-44 h-44 object-contain' />
        </a>
      </motion.div>

      <div className='w-full gap-3 flex flex-col items-end justify-center'>
        <p className='text-2xl md:text-3xl lg:text-4xl'>{firstTitle}</p>
        <span className='text-lime-400'>{secondTitle}</span>
      </div>
    </div>
  )
}

export default Certificate;