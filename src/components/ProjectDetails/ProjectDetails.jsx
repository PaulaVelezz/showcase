import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from '../ProjectDetails/data.js'; 

const ProjectDetails = () => {

  return (
    <div id='project-details' className='p-12 bg-violet-800 gap-16 flex flex-col'>
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
  );
};

export default ProjectDetails;