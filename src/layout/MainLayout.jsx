import React, { lazy, Suspense, useEffect, useState} from 'react';
import { motion } from 'framer-motion';

const Hero = lazy(() => import('../components/Hero/Hero'));
const Aboutt = lazy(() => import('../components/About/Aboutt'));
const Projects = lazy(() => import ('../components/Projects/Projects'));
const ProjectDetails = lazy(() => import ('../components/ProjectDetails/ProjectDetails'));
const Contact = lazy(() => import ('../components/Contact/Contact'));
const Footer = lazy(() => import ('../components/Footer/Footer'));
const Services = lazy(() => import ('../components/Services/Services'));
const Marquee = lazy(() => import ('../components/Marquee/Marquee'));
// const AnotherMarquee = lazy(() => import ('../components/Marquee/AnotherMarquee'));
const Certifications = lazy(() => import ('../components/Certifications/Certifications'));
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const MainLayout = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + Math.random() * 10;
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='w-full bg-stone-100'>
      <Suspense fallback={
        <div className='w-full flex flex-col gap-2 items-center justify-center h-screen bg-zinc-950'>
          <span className='text-4xl font-extrabold tracking-wider font-space text-stone-100'>Loading...</span>
          <motion.div
           initial={{ width: 0 }}
           animate={{ width: `${progress}%` }}
           transition={{ duration: 0.1 }}
           className='h-[2px] bg-violet-700 rounded-md'
          />
        </div>
        }>
        <Hero />
        <Aboutt />
        <Services />
        <Marquee />
        <Projects />
        {/* <AnotherMarquee /> */}
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