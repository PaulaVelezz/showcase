import React, { useState } from 'react';
import { easeInOut, easeOut, motion } from 'framer-motion';
import styles from './Certificate.module.css';

const animation = {
  initial: {width: 0},
  open: {width: "auto", transition: {duration: 0.5, easeOut}},
  closed: {width: 0}
}

const Certificate = ({certificate}) => {
  const {firstTitle, secondTitle, image} = certificate;
  const [ isActive, setIsActive ] = useState(false);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.certificate_container}>
      <p>{firstTitle}</p>
        <motion.div variants={animation} animate={isActive ? "open" : "closed"} className={styles.img_container}>
          <img src={image} alt="certificate" />
        </motion.div>
      <p>{secondTitle}</p>
    </div>
  )
}

export default Certificate;