import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutIntro from '../components/About/About';
import Projects from '../components/Projects/Projects';


const MainLayout = () => {
  return (
    <div className='w-full min-h-screen'>
    <Navbar />
    <Hero />
    <AboutIntro />
    <Projects />
    </div>
  )
}

export default MainLayout;