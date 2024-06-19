import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import projects from '../ProjectDetails/data.js';
const HorizontalGallery  =  lazy(() => import('./HorizontalGallery.jsx'));

const ProjectDetailsPage = () => {
    const { title } = useParams();
    const [project, setProject] = useState(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const projectData = projects.find((project) => project.title === title);
        setProject(projectData);
        const index = projects.findIndex((project) => project.title === title);
        setCurrentProjectIndex(index);
    }, [title]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const handleNextProject = () => {
        if (currentProjectIndex !== null && currentProjectIndex < projects.length - 1) {
            const nextIndex = currentProjectIndex + 1;
            const nextProject = projects[nextIndex];

            navigate(`/project/${nextProject.title}`);
        }
    };

    const handlePrevProject = () => {
        if (currentProjectIndex !== null && currentProjectIndex > 0) {
            const prevIndex = currentProjectIndex - 1;
            const prevProject = projects[prevIndex];

            navigate(`/project/${prevProject.title}`);
        }
    };

    return (
    <>
        <Navbar />
        <main className='bg-stone-100'>
            <section className='w-full h-full flex flex-col justify-center items-center'>
                <div>
                    <div className='w-full bg-center bg-cover h-96 rounded-b-2xl' style={{ backgroundImage: `url(${project.BGimg})`}}>
                        <span className='bg-lime-400 rounded-md italic text-sm font-semibold text-zinc-800 p-1 z-10 ml-5'>{project.categories}</span>
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
                            <p>These are some of the notable features that were designed and developed by the team to provide innovative solutions.</p>
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

                <div className='w-full bg-stone-950 rounded-2xl p-5 mt-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HorizontalGallery project={project} />
                    </Suspense>
                </div>

                <div className='w-full h-32 justify-between items-center flex mb-4 mt-4 p-6'>
                    {currentProjectIndex !== null && (
                        <button 
                            onClick={handlePrevProject}
                            disabled={currentProjectIndex === 0}
                            className='border border-zinc-600 text-base rounded-xl py-2 px-6 font-normal cursor-pointer hover:bg-lime-400'
                        >
                            PREVIOUS CASE
                        </button>   
                    )}

                    <span>
                    <Link to='/' className='text-base font-normal cursor-pointer hover:underline'>Back to home</Link>
                    </span>

                    {currentProjectIndex !== null && currentProjectIndex < projects.length - 1 && (
                        <button
                            onClick={handleNextProject}
                            className='border border-zinc-600 text-base rounded-xl py-2 px-7 font-normal cursor-pointer hover:bg-lime-400'
                        >
                           NEXT CASE
                        </button>
                    )}
                </div>
            </section> 
            <Contact />
            <Footer />
        </main>
    </>
  )
}

export default ProjectDetailsPage;