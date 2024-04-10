import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutIntro from '../components/About/About';
import Projects from '../components/Projects/Projects';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
  return (
    <div className='w-full min-h-screen'>
    <Navbar />
    <Hero />
    <AboutIntro />
    <Projects />
    <ProjectDetails />
    <Contact />
    <Footer />
    </div>
  )
}

export default MainLayout;