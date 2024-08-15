import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, categories, desc, tags, img }) => {
  return (
    <motion.article className='place-content-center items-center flex flex-col w-full p-9 rounded-xl bg-zinc-950'
        initial={{y: 100}} 
        whileInView={{y: 0}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        viewport={{once: true}}
    >
        <div className='flex flex-col h-min gap-4 overflow-visible p-0 w-full sm:items-center md:flex-col md:justify-center md:items-center lg:flex-row lg:place-items-start'>
            <div className='place-content-center items-center flex flex-row gap-2 overflow-hidden md:w-full md:h-[350px] lg:h-full'>
                <div className='overflow-hidden'>
                    <img src={img} alt="detail"/>
                </div>
            </div>

            <div className='md:place-items-center lg:place-items-start justify-between self-stretch flex flex-col overflow-visible h-auto w-full p-2 md:w-full'>
                <div className='place-items-start items-start flex flex-col gap-6 overflow-visible w-full h-auto text-stone-100'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-4 p-1'>
                            { categories && categories.map((category, index) => (
                                <span key={index} className='p-1 text-xs lg:text-sm md:text-xs font-semibold rounded-md bg-lime-400 text-zinc-800'>{category}</span>
                            ))}
                        </div>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</h2>
                    </div>
                    <p className='text-base md:text-lg lg:text-xl'>{desc}</p>

                    <div className='flex flex-row flex-wrap max-w-xl gap-1'>
                        {tags.map((tag, index) => (
                            <span key={index} className='inline-flex px-3 py-1 text-xs md:px-2 lg:text-sm md:text-xs font-light rounded-md bg-zinc-800 text-stone-50'>{tag}</span>
                        ))}
                    </div>

                    <div className='flex w-full justify-center text-lg font-semibold rounded-md text-stone-100 bg-violet-800 border border-violet-800 p-2 cursor-pointer hover:bg-violet-900'>
                        <Link to={`/project/${title}`}> full project </Link>
                    </div>
                </div>
            </div>
        </div>
    </motion.article>
  )
}

export default ProjectCard; 