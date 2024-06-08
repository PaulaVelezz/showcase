import React from 'react'
// import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Aboutt from '../components/About/Aboutt';
// import Home from '../pages/Home';
import Marquee from '../components/Marquee/Marquee';


const MainLayout = () => {
  return (
    <div className='w-full bg-gradient-to-b from-transparent to-violet-800'>
    {/* <Navbar /> */}
    {/* <Home /> */}
    <Hero />
    <Aboutt />
    <Services />
    <Marquee />
    <Projects />
    <ProjectDetails />
    <Contact />
    <Footer />
    </div>
  )
}

export default MainLayout;