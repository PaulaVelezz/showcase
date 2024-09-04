import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import projects from '../ProjectDetails/data.js';
import { FaGithubSquare } from "react-icons/fa";


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
        return <div className='w-full flex items-center justify-center h-screen text-zinc-100 bg-zinc-950'> <span className='text-4xl font-extrabold tracking-wider font-space text-stone-100'>Loading...</span></div>
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

                   <div className='border border-dashed border-zinc-800 rounded-2xl m-4 p-4'> 
                        <div className='flex flex-col justify-center gap-2 p-6'>
                            <div className='flex p-4 text-xl'>
                                <h3 className='font-semibold'>Overview:</h3>
                                <p className='ml-4'>These are some of the notable features that were designed and developed to provide innovative tailored solutions.</p>
                            </div>
                            
                            <div className='flex flex-col p-4 gap-4'>
                                {project.features.map((feature, index) => (
                                    <div key={index} className='mb-2'>
                                        <span className='text-xl font-semibold'>{feature.title}</span>
                                        <p className='text-lg mt-2 ml-10'>{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-row gap-10 ml-10'>
                            <div className='p-4 text-xl font-semibold'>
                                <p>Stack:</p>
                            </div>
                            <div className='flex flex-row flex-wrap gap-4 text-xl p-4 overflow-hidden'>
                                {project.tags.map ((tag, index) => (
                                    <span key={index} className='inline-flex px-3 py-1 text-sm font-light rounded-md bg-zinc-900 text-stone-100'>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <button className='border border-dashed border-zinc-800 rounded-xl py-2 px-6 font-medium text-base cursor-pointer hover:bg-lime-400'>
                                <a href={project.URL} target="_blank" className='flex flex-row gap-3 justify-center items-center'><FaGithubSquare /> Github Repository</a>
                            </button>
                        </div>
                    </div> 
                </div>

                <div className='w-full bg-stone-950 rounded-2xl p-5 mt-5'>
                    <Suspense fallback={<div className='bg-zinc-950 text-stone-200'>Loading...</div>}>
                        <HorizontalGallery project={project} />
                    </Suspense>
                </div>
                
                <div className='mt-6 w-full h-[3px] bg-lime-400'></div>

                
                <div className='w-full h-48 justify-between items-center flex p-6 mb-6'>
                    {currentProjectIndex !== null && (
                       <div  
                            onClick={handlePrevProject}
                            disabled={currentProjectIndex === 0}
                            className='cursor-pointer text-left'
                        >
                            <span className='text-violet-700 font-bold'>
                                PREVIOUS CASE
                            </span> 
                            <h2 className='md:text-2xl font-bold'>{project.title}</h2> 
                        </div>
                    )}

                    <span>
                        <Link to='/' className='text-base font-bold text-zinc-700 cursor-pointer hover:text-zinc-950'>BACK TO HOME</Link>
                    </span>

                    {currentProjectIndex !== null && currentProjectIndex < projects.length - 1 && (
                    <div 
                        onClick={handleNextProject}
                        className='cursor-pointer text-right'
                    >
                        <span className='text-violet-700 font-bold'>
                           NEXT CASE
                        </span>
                        <h2 className='md:text-2xl font-bold'> {projects[currentProjectIndex + 1].title}</h2>
                    </div>
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