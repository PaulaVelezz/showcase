import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectCard = ({ title, categories, desc, tags, img }) => {
  return (
    <article className='place-content-center items-center flex flex-col w-full p-9 rounded-xl bg-stone-100'>
        <div className='place-items-start justify-between items-start flex flex-row h-min overflow-visible p-0 w-full'>
            <div className='place-items-start justify-between items-start self-stretch flex flex-col overflow-visible h-auto w-1/2 p-4'>
                <div className='place-items-start items-start flex flex-col gap-6 overflow-visible w-full h-auto text-zinc-950'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-4 p-1'>
                            { categories && categories.map((category, index) => (
                                <span className='p-1 text-xs font-semibold rounded-md bg-lime-400 text-zinc-950'>{category}</span>
                            ))}
                        </div>
                        <h2 className='text-4xl font-bold'>{title}</h2>
                    </div>
                    <p className='text-lg '>{desc}</p>
                </div>

                <div className='flex flex-row flex-wrap max-w-xl gap-1'>
                    {tags.map((tag, index) => (
                        <span className='inline-flex px-3 py-1 text-xs font-light rounded-md bg-zinc-900 text-stone-100'>{tag}</span>
                    ))}
                </div>
                
                <div className='flex w-10/12 justify-center text-lg font-semibold rounded-md border border-violet-800 p-2 cursor-pointer hover:bg-violet-800 hover:text-stone-50'>
                    <Link to={`/project/${title}`}> full project </Link>
                </div>
            </div>

            <div className='place-content-center items-center flex flex-row gap-2 overflow-hidden w-1/2 p-4'>
                <div className='relative overflow-hidden rounded-md'>
                    <img src={img} alt="detail" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='transition-transform transform-gpu hover:scale-110'/>
                </div>
            </div>
            
        </div>
    </article>
  )
}

export default ProjectCard; 