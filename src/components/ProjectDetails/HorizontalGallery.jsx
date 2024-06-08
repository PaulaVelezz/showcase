import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import imgOne from '../../assets/gp1_1.webp';
import imgTwo from '../../assets/gp1_2.webp';
import imgThree from '../../assets/gp1_3.webp';
import imgFour from '../../assets/gp1_4.webp'; 

gsap.registerPlugin(ScrollTrigger);

// const images = [
//   imgOne,
//   imgTwo,
//   imgThree,
//   imgFour
// ];

const HorizontalGallery = () => {
  const galleryRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const pin = gsap.fromTo(
      galleryRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          pin: true,
          scrub: 0.3,
        },
      }
    );
    return () => pin.kill();
  }, []);
 

  return (
    <main className='scroll-section-outer overflow-hidden'>
      <section className="" ref={triggerRef}> 
        <div ref={galleryRef} className='scroll-section-inner h-[100vh] w-[400vw] gap-3 flex flex-row relative overflow-hidden'>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={imgOne} alt="" />
          </div>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={imgTwo} alt="" />
          </div>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={imgThree} alt="" />
          </div>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={imgFour} alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HorizontalGallery;