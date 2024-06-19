import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../Navbar/Navbar';
import Resume from '/(ENG)_CV_ Paula Velez_Frontend Developer.pdf';

const Hero = () => {

  return (
    <section id='home'>
      <div className='bg-zinc-950 rounded-3xl'>
        <Navbar />
        <div className='h-screen rounded-2xl overflow-hidden relative'> 
          {/* <Spline scene="https://prod.spline.design/HMDwFMbI9n2pgl1N/scene.splinecode" /> */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <h1 className='text-8xl tracking-wide font-bold font-T1Korium text-lime-400 text-center'>FRONTEND DEVELOPER</h1>
              <div id='hr' className='w-full h-[2px] bg-violet-600 mt-6'></div>

              <div className='btn-container w-full p-2 flex justify-center items-center mt-2'>
                <div id='btns' className='flex justify-center items-center gap-4 p-4 text-stone-100'>
                  <div className='btn border border-violet-500 mr-1 px-8 py-1 rounded-xl font-medium cursor-pointer'>
                    <span>projects 👀</span>
                  </div>
                  <div className='btn border border-violet-500 mr-1 px-8 py-1 rounded-xl font-medium cursor-pointer'>
                    <a href={Resume} download>resume 📄</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;