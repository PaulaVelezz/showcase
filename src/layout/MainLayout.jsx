import React, { lazy, Suspense} from 'react';

const Hero = lazy(() => import('../components/Hero/Hero'));
const Aboutt = lazy(() => import('../components/About/Aboutt'));
const Projects = lazy(() => import ('../components/Projects/Projects'));
const ProjectDetails = lazy(() => import ('../components/ProjectDetails/ProjectDetails'));
const Contact = lazy(() => import ('../components/Contact/Contact'));
const Footer = lazy(() => import ('../components/Footer/Footer'));
const Services = lazy(() => import ('../components/Services/Services'));
const Marquee = lazy(() => import ('../components/Marquee/Marquee'));
const AnotherMarquee = lazy(() => import ('../components/Marquee/AnotherMarquee'));
const Certifications = lazy(() => import ('../components/Certifications/Certifications'));
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const MainLayout = () => {
  return (
    <div className='w-full bg-stone-100'>
    <Suspense fallback={<div className='w-full h-screen bg-zinc-950 text-stone-200'>Loading...</div>}>
      <Hero />
      <Aboutt />
      <Services />
      <Marquee />
      <Projects />
      <AnotherMarquee />
      <ProjectDetails />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
    </div>
  )
}

export default MainLayout;