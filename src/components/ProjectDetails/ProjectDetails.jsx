import React, { useRef } from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from '../ProjectDetails/data.js'; 
import { motion, useScroll, useSpring } from 'framer-motion';

const ProjectDetails = () => {
  const ProjectRef = useRef(null);
  const { scrollYProgress } = useScroll({target: ProjectRef, offset: ["end end", "start start"]});
  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30});

  return (
    <section ref={ProjectRef} className='relative'>
      <div className='sticky top-0 left-0 flex flex-col items-center justify-center text-center text-zinc-950 mt-10 pt-3 bg-[#f5f5f4bd] backdrop:filter backdrop-blur-sm rounded-md'>
        <h1 className='text-6xl font-extrabold font-T1Korium tracking-wider'>Projects</h1>
        <motion.div style={{ scaleX }} className='w-[95%] h-[2px] bg-violet-700 rounded-sm mt-3'></motion.div>
      </div>
     
      <div id='project-details' className='mt-4 mb-4 p-12 gap-16 flex flex-col'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title} 
            categories={project.categories}
            desc={project.desc}
            tags={project.tags}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;