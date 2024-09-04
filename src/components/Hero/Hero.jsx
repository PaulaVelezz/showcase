import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ResumeEN from '/CV_Paula_Velez_ Frontend_Developer_(ENG).pdf';
import ResumeES from '/CV_Paula_Velez_ Desarrollador_Frontend_(ESP).pdf';
import { Link } from 'react-router-dom';
import InitialAnimation from '../../helpers/InitialAnimation.jsx';
import Spline from '@splinetool/react-spline';

const Hero = () => {

  const [showResume, setShowResume] = useState(false);

  return (
    <section id='home'> 
      <div className='bg-zinc-950 rounded-3xl'>
        <Navbar />
        <div className='h-screen rounded-2xl overflow-hidden relative'> 
          <div>
            <Spline scene="https://prod.spline.design/xLQqERh8mo9bAVrp/scene.splinecode" />
          </div>
          
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <InitialAnimation>
              <h1 className='text-7xl lg:text-8xl tracking-wide font-bold font-T1Korium text-lime-400 text-center'>FRONTEND DEVELOPER</h1>
              <div id='hr' className='w-full h-[2px] bg-violet-700 mt-6'></div>

              <div className='btn-container w-full p-2 flex justify-center items-center mt-2'>
                <div id='btns' className='flex justify-center items-center gap-4 p-4 text-stone-100 font-medium'>
                  <div className='py-1 px-1 border border-violet-700 hover:bg-violet-700 bg-violet-700 backdrop:filter backdrop-blur-md bg-opacity-10 rounded-xl'>
                    <Link to='/contact' className='ml-1 cursor-pointer flex items-center gap-1'>
                      Contact now
                      <svg stroke="currentColor" color="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 17 17 7"></path><path d="M7 7 17 7 17 17"></path></svg>
                    </Link>
                  </div>
                 

                  <div className='border border-violet-700 mr-1 px-8 py-1 rounded-xl font-medium cursor-pointer relative bg-violet-700 bg-opacity-10 backdrop:filter backdrop-blur-md'>
                    <button onClick={() => setShowResume(!showResume)} className='w-full text-left flex justify-center items-center' aria-label="View resume">
                      Resume 
                      <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                    </button>

                    <ul className={`mt-1 absolute ${showResume ? 'block' : 'hidden'}`}>
                      <li className='mt-2 bg-zinc-950'>
                        <a href={ResumeES} target="_blank" className='block py-2 px-6 hover:border border-lime-400 rounded-xl' aria-label="View resume in Spanish">Español</a>
                      </li>
                      <li className='bg-zinc-950'>
                        <a href={ResumeEN} target="_blank" className='block py-2 px-6 hover:border border-lime-400 rounded-xl' aria-label="View resume in English">English</a>
                      </li>
                    </ul>
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