import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalGallery = ({ project }) => {
  const galleryRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const pin = gsap.fromTo(
      galleryRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-200vw',
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
    <main className='scroll-section-outer overflow-hidden rounded-2xl'>
      <section ref={triggerRef}> 
        <div ref={galleryRef} className='scroll-section-inner h-[100vh] w-[300vw] flex flex-row relative overflow-hidden gap-1'>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={project.imgOne} alt="project" className='object-center object-cover'/>
          </div>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={project.imgTwo} alt="project" className='object-center object-cover'/>
          </div>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={project.imgThree} alt="project" className='object-center object-cover'/>
          </div>
          <div className='scroll-section h-[100vh] w-[100vw] flex justify-center items-center'>
            <img src={project.imgFour} alt="project" className='object-center object-cover'/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HorizontalGallery;