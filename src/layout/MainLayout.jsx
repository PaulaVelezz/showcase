import React, { lazy, Suspense} from 'react';
// import Navbar from '../components/Navbar/Navbar';
const Hero = lazy(() => import('../components/Hero/Hero'));
const Aboutt = lazy(() => import('../components/About/Aboutt'));
const Projects = lazy(() => import ('../components/Projects/Projects'));
const ProjectDetails = lazy(() => import ('../components/ProjectDetails/ProjectDetails'));
const Contact = lazy(() => import ('../components/Contact/Contact'));
const Footer = lazy(() => import ('../components/Footer/Footer'));
const Services = lazy(() => import ('../components/Services/Services'));
const Marquee = lazy(() => import ('../components/Marquee/Marquee'));
const AnotherMarquee = lazy(() => import ('../components/Marquee/AnotherMarquee'));


const MainLayout = () => {
  return (
    <div className='w-full bg-stone-100'>
    {/* bg-gradient-to-b from-transparent to-violet-800 */}
    {/* <Navbar /> */}
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Aboutt />
      <Services />
      <Marquee />
      <Projects />
      <AnotherMarquee />
      <ProjectDetails />
      <Contact />
      <Footer />
    </Suspense>
    </div>
  )
}

export default MainLayout;