import React from 'react';
import IMGP from '../../assets/prueba.jpg';

const ProjectDetails = () => {
  return (
    <div className='p-12 bg-violet-800 gap-10 flex flex-col'>
        <article className='place-content-center items-center flex flex-col w-full p-10 rounded-2xl bg-stone-100'>
            <div className='place-items-start justify-between items-start flex flex-row h-min overflow-visible p-0 w-full'>
                <div className='place-items-start justify-between items-start self-stretch flex flex-col overflow-visible h-auto p-4 '>
                <div className='place-items-start items-start flex flex-col gap-6 overflow-visible  w-full h-auto text-zinc-950'>
                   <h2 className='text-4xl font-bold'>titulo</h2>
                    <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='flex flex-row flex-wrap max-w-xl gap-1'>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>HTML</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>CSS</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>JavaScript</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>React.js</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>Next.js</span>
                </div>
                <div className='flex w-full justify-center text-lg font-semibold rounded-xl border border-violet-800 p-2 cursor-pointer hover:bg-violet-800 hover:text-stone-50'>
                    <a href="#"> full project </a>
                </div>
                </div>

                <div className='place-content-center items-center flex flex-row gap-2 overflow-visible w-1/2'>
                    <img src={IMGP} alt="detail" />
                </div>
            </div>
        </article>

        <article className='place-content-center items-center flex flex-col w-full p-10 rounded-2xl bg-stone-100'>
            <div className='place-items-start justify-between items-start flex flex-row h-min overflow-visible p-0 w-full'>
                <div className='place-items-start justify-between items-start self-stretch flex flex-col overflow-visible h-auto p-4 '>
                <div className='place-items-start items-start flex flex-col gap-6 overflow-visible w-full h-auto text-zinc-950'>
                   <h2 className='text-4xl font-bold'>titulo</h2>
                    <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='flex flex-row flex-wrap max-w-xl gap-1'>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>HTML</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>CSS</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>JavaScript</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>React.js</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>Next.js</span>
                </div>
                <div className='flex w-full justify-center text-lg font-semibold rounded-xl border border-violet-800 p-2 cursor-pointer hover:bg-violet-800 hover:text-stone-50'>
                    <a href="#"> full project </a>
                </div>
                </div>

                <div className='place-content-center items-center flex flex-row gap-2 overflow-visible w-1/2'>
                    <img src={IMGP} alt="detail" />
                </div>
            </div>
        </article>

        <article className='place-content-center items-center flex flex-col w-full p-10 rounded-2xl bg-stone-100'>
            <div className='place-items-start justify-between items-start flex flex-row h-min overflow-visible p-0 w-full'>
                <div className='place-items-start justify-between items-start self-stretch flex flex-col overflow-visible h-auto p-4 '>
                <div className='place-items-start items-start flex flex-col gap-6 overflow-visible w-full h-auto text-zinc-950'>
                   <h2 className='text-4xl font-bold'>titulo</h2>
                    <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='flex flex-row flex-wrap max-w-xl gap-1'>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>HTML</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>CSS</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>JavaScript</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>React.js</span>
                    <span className='inline-flex px-3 py-1 text-xs font-light rounded-lg bg-zinc-900 text-stone-100'>Next.js</span>
                </div>
                <div className='flex w-full justify-center text-lg font-semibold rounded-xl border border-violet-800 p-2 cursor-pointer hover:bg-violet-800 hover:text-stone-50'>
                    <a href="#"> full project </a>
                </div>
                </div>

                <div className='place-content-center items-center flex flex-row gap-2 overflow-visible w-1/2'>
                    <img src={IMGP} alt="detail" />
                </div>
            </div>
        </article>
    </div>
  )
}

export default ProjectDetails;