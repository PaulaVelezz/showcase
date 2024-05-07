import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Gallery from './Gallery';
import projects from '../ProjectDetails/data.js';

const ProjectDetailsPage = () => {
    const { title } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const projectData = projects.find((project) => project.title === title);
        setProject(projectData);
    }, [title]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
    <>
        <Navbar />
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className=''>
                <div className='w-full bg-center bg-cover h-96' style={{ backgroundImage: `url(${project.BGimg})`}}>
                    <span className='bg-lime-400 rounded-md ml-5 italic z-10'>{project.categories}</span>
                    <h1 className='text-8xl font-space font-extrabold text-center text-lime-400 p-10 z-10'>{title}</h1>
                </div>
               
                <div className='mt-2 w-full h-[3px] bg-lime-400'></div>
                <p className='text-xl p-10 tracking-wide'>{project.pageDesc}</p>
            </div>

            <div className='w-full mt-6'>
                <h2 className='text-6xl italic font-space font-extrabold text-center'>Product Overview</h2>
                <div className='mt-6 w-full h-[3px] bg-lime-400'></div>
                
                <div className='flex flex-row gap-10 p-10'>
                    <div className='p-4 text-xl font-semibold'>
                        <p>Overview:</p>
                    </div>
                    <div className='flex flex-col gap-4 text-xl p-4'>
                        <p>Estas son algunas de las funcionalidades destacables que fueron diseñadas y desarrolladas por el equipo para brindar soluciones innovadoras. </p>
                        <ul className='list-decimal ml-5'>
                            {project.bullets.map((bullet, index) => (
                                <li key={index} className='mb-2'>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row gap-10 p-10'>
                    <div className='p-4 text-xl font-semibold'>
                        <p>Stack:</p>
                    </div>
                    <div className='flex flex-row gap-4 text-xl p-4'>
                        {project.tags.map ((tag, index) => (
                            <span key={index} className='inline-flex px-3 py-1 text-sm font-light rounded-md bg-zinc-900 text-stone-100'>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <Gallery />
            </div>
        </section> 
        <Contact />
        <Footer />
    </>
  )
}

export default ProjectDetailsPage;