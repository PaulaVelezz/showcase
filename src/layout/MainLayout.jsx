import React from 'react'
// import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Aboutt from '../components/About/Aboutt';
import Marquee from '../components/Marquee/Marquee';
import AnotherMarquee from '../components/Marquee/AnotherMarquee';


const MainLayout = () => {
  return (
    <div className='w-full bg-stone-100'>
    {/* bg-gradient-to-b from-transparent to-violet-800 */}
    {/* <Navbar /> */}
    <Hero />
    <Aboutt />
    <Services />
    <Marquee />
    <Projects />
    <AnotherMarquee />
    <ProjectDetails />
    <Contact />
    <Footer />
    </div>
  )
}

export default MainLayout;