import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'; 
import styles from './Page.module.css';

const Marquee = () => {
  const firstTxt = useRef(null);
  const secondTxt = useRef(null);
  const marqSlider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(marqSlider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: '-500px',
    })
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstTxt.current, { xPercent: xPercent });
    gsap.set(secondTxt.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <main className={styles.main}>
        <div className={styles.sliderContainer}>
          <div ref={marqSlider} className={styles.slider}>
            <p ref={firstTxt}>Showcase - Showcase - Showcase - Showcase - Showcase </p>
            <p ref={secondTxt}>- Showcase - Showcase - Showcase - Showcase - Showcase</p>
          </div>
        </div>
    </main>
  );
};

export default Marquee;