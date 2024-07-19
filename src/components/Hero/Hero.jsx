import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../Navbar/Navbar';
import Resume from '/(ENG)_CV_ Paula Velez_Frontend Developer.pdf';
import { Link } from 'react-router-dom';
import InitialAnimation from '../../helpers/InitialAnimation.jsx';

const Hero = () => {

  return (
    <section id='home'> 
      <div className='bg-zinc-950 rounded-3xl'>
        <Navbar />
        <div className='h-screen rounded-2xl overflow-hidden relative'> 
          <Spline scene="https://prod.spline.design/HMDwFMbI9n2pgl1N/scene.splinecode" />
          
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <InitialAnimation>
              <h1 className='text-8xl tracking-wide font-bold font-T1Korium text-lime-400 text-center'>FRONTEND DEVELOPER</h1>
              <div id='hr' className='w-full h-[2px] bg-violet-700 mt-6'></div>

              <div className='btn-container w-full p-2 flex justify-center items-center mt-2'>
                <div id='btns' className='flex justify-center items-center gap-4 p-4 text-stone-100'>
                  <Link to='/contact' className='border border-violet-700 mr-1 px-5 py-1 rounded-xl font-medium cursor-pointer flex items-center gap-1 hover:bg-violet-700 bg-violet-700 backdrop:filter backdrop-blur-md bg-opacity-10'>
                    Contact now
                    <svg stroke="currentColor" color="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 17 17 7"></path><path d="M7 7 17 7 17 17"></path></svg>
                  </Link>
                  <div className='btn border border-violet-700 mr-1 px-8 py-1 rounded-xl font-medium cursor-pointer'>
                    <a href={Resume} target="_blank">View resume </a>
                  </div>
                </div>
              </div>
              </InitialAnimation>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;