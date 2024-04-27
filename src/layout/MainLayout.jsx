import React from 'react'
// import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Aboutt from '../components/About/Aboutt';



const MainLayout = () => {
  return (
    <div className='w-full'>
    {/* <Navbar /> */}
    <Hero />
    <Aboutt />
    <Services />
    <Projects />
    <ProjectDetails />
    <Contact />
    <Footer />
    </div>
  )
}

export default MainLayout;