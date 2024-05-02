import React from 'react';
import IMGP1 from '../../assets/Mp1.webp';
import IMGP2 from '../../assets/Mp2.webp';
import IMGP3 from '../../assets/Mp3.webp';
import ProjectCard from './ProjectCard.jsx';

const ProjectDetails = () => {
  return (
    <div id='project-details' className='p-12 bg-violet-800 gap-16 flex flex-col'>
        <ProjectCard
            title={'EduClass'}
            desc={'Desarrollo de una plataforma de gestión educativa con el fin de optimizar los procesos de comunicación y seguimiento entre la institución y docentes con estudiantes. Brindando transparencia, comodidad e inmediatez a los usuarios.'}
            tags={['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite.js' , 'NextUI', 'Tailwind']}
            img={IMGP1}
        />

        <ProjectCard
            title={'Reparame'}
            desc={'Desarrollo de una WebApp que conecta a prestadores de servicios con clientes en tiempo real, ofreciendo soluciones rápidas a problemas del hogar. '}
            tags={['HTML', 'CSS', 'TypeScript', 'React.js', 'Next.js', 'Tailwind', 'DaisyUI']}
            img={IMGP2}
        />

        <ProjectCard
            title={'Learn With Me'}
            desc={'Desarrollo de una plataforma de aprendizaje virtual, con contenido adaptado según el tipo de aprendizaje cognitivo del usuario. Brindando una experiencia de aprendizaje altamente interactiva y personalizada.'}
            tags={['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind']}
            img={IMGP3}
        />
    </div>
  );
}

export default ProjectDetails;