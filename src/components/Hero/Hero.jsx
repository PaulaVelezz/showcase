import React from 'react';
import Spline from '@splinetool/react-spline';
import { FaArrowUp, FaPlay } from "react-icons/fa";
import { GiPolarStar } from "react-icons/gi"; 
import Navbar from '../Navbar/Navbar';
// import { gsap } from 'gsap';
import Resume from '/Paula Velez_(ENG).pdf';

const Hero = () => {

      // useEffect(() => {
    //     gsap.from([
    //         '#nav-logo', 
    //         '#nav-links > a'
    //     ], {
    //         top: '30px',
    //         opacity: 0,
    //         ease:'power4.inOut',
    //         delay: 1,
    //         stagger:{
    //             amount: 0.3,
    //         }, 
    //     });
        
    //     gsap.from([
    //         'h1',
    //     ], {
    //         y: 50,
    //         opacity: 0,
    //         duration: 2,
    //         ease:'power4.inOut',
    //         delay: 1.5,
    //         stagger:{
    //             amount: 0.3,
    //         },
    //     });
        
    //     gsap.from([
    //         '#play-wrapper', 
    //         '#pattern', 
    //         '#copy', 
    //     ], {
    //         scaleY: 0,
    //         duration: 2,
    //         ease:'power4.inOut',
    //         stagger:{
    //             amount: 0.3,
    //         },
    //         delay: 2.5,
    //     });
        
    //     gsap.from([
    //         '#hr',
    //     ], {
    //         width: 0,
    //         duration: 2,
    //         ease:'power4.inOut',
    //         delay: 3,
    //     });
        
    //     gsap.from([
    //         '#btns',
    //      ], {
    //         x: 50,
    //         opacity: 0,
    //         duration: 2,
    //         ease:'power4.inOut',
    //         delay: 3,
    //     });
        
    //     gsap.from([
    //         '#play-btn',
    //      ], {
    //         scale: 0,
    //         duration: 2,
    //         ease:'power4.inOut',
    //         delay: 3,
    //     });
        
    //     gsap.from([
    //         '#hero-wrapper',
    //     ], {
    //         width: '100%',
    //         duration: 2,
    //         ease:'power4.inOut',
    //         delay: 3,
    //     });
        
    //     gsap.from([
    //         '#arrow', 
    //     ], {
    //         scale: 0,
    //         duration: 2,
    //         ease:'power4.inOut',
    //         delay: 3,
    //     });
    // }, []);

  return (
    <section id='home'>
      <div className='bg-zinc-950 rounded-xl'>
      <Navbar />
        <div className='header w-full h-[30vh] p-5 flex items-center'>
          <div className='header-left-col w-2/3'>
              <div className='item relative text-7xl font-semibold text-violet-800'>
                <h1 className='font-space'>Frontend</h1>
                <h1 className='font-space'>Developer</h1>
              </div>
          </div>

          <div className='header-right-col w-2/3'>
            <div id='play-wrapper' className='relative w-full h-[80px] bg-violet-900 flex justify-start items-center rounded-3xl p-2'>
              <div id='play-btn' className='w-[70px] h-[70px] rounded-full flex justify-center items-center bg-zinc-950 text-lime-500'>
                <FaPlay />
              </div>
            </div>

            <div id='pattern' className='flex justify-center gap-2 p-3 text-stone-100 opacity-[0.2]'>
              <GiPolarStar />
              <GiPolarStar />
              <GiPolarStar />
            </div>

            <div id='copy' className='text-stone-100'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, quidem porro voluptatem ratione itaque alias veritatis eaque nobis, molestias hic quas eos ipsum voluptatibus.</p>
            </div>
          </div>
        </div>

          <div className='btn-container w-full p-2 flex justify-between items-center mt-2'>
            <div id='btns' className='flex justify-center items-center gap-4 p-4 text-stone-100'>
              <div className='btn border border-lime-400 mr-1 px-8 py-1 rounded-xl font-medium cursor-pointer'>
                <span>projects 👀</span>
              </div>
              <div className='btn border border-lime-400 mr-1 px-8 py-1 rounded-xl font-medium cursor-pointer'>
                <a href={Resume} download>resume 📄</a>
              </div>
            </div>

            <div className='divider w-[70%] p-4'>
              <div id='hr' className='w-full h-[2px] bg-lime-500'></div>
            </div>
          </div>

          <div className='hero relative w-[95%] h-[60vh] flex justify-end items-start m-auto border border-violet-700 rounded-xl'>
            <Spline scene="https://prod.spline.design/Y-viCDafQAAkobas/scene.splinecode" />
          </div>

          <div id='hero-wrapper' className='absolute w-0 h-full bg-lime-500'>
            <div id='arrow' className='absolute w-24 h-24 bg-zinc-950 flex border-2 border-lime-400 rounded-full justify-center items-center text-center text-lime-400 text-lg' style={{top: '-20em', right: '-60em', transform: 'rotate(20deg)'}}>
              {/* <FaArrowUp /> */}
              <span>play with this</span>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero;