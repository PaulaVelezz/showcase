import React from 'react';
import { LuArrowDownRightSquare } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center gap-10 p-10 justify-start overflow-visible w-full bg-zinc-950'>
        <h1 className='text-7xl font-extrabold font-space text-stone-100'>Let's connect</h1>
        {/* svg  */}
        <div className='flex items-start flex-col gap-4 justify-start overflow-hidden p-0 relative w-[97%]'>
            <span className='bg-violet-800 h-[2px] overflow-hidden relative w-full' ></span>
        </div>

        <div className='items-center flex flex-row gap-10 justify-center overflow-hidden w-[97%] h-min'>
            <div className='items-center flex flex-col justify-between p-4 w-52 h-48 rounded-xl border border-violet-800'>
                <div className='place-items-start text-3xl w-full'>
                    <IoCalendarNumberOutline style={{color: '#f7f7f7'}} />
                </div>
                
                <div className='flex items-center gap-3 text-xl'>
                    <a href="https://calendly.com/tuki" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                        Book a videocall
                        <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
                    </a>
                </div>
            </div>

            <div className='items-center flex flex-col justify-between p-4 w-52 h-48 rounded-xl border border-violet-800'>
                <div className='place-items-start text-3xl w-full'>
                    <IoIosMail style={{color: '#f7f7f7'}} />
                </div>
                
                <div className='flex items-center gap-3 text-xl'>
                    <a href="mailto:velezpaula.a@gmail.com" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                        Send a message
                        <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
                    </a>
                </div>
            </div>

            <div className='items-center flex flex-col justify-between p-4 w-52 h-48 rounded-xl border border-violet-800'>
                <div className='place-items-start text-3xl w-full'>
                    <FaLinkedin style={{color: '#f7f7f7'}} />
                </div>
                
                <div className='flex items-center gap-3 text-xl'>
                    <a href="https://linkedin.com/in/paula-velez/" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                        Connect on LinkedIn
                        <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
                    </a>
                </div>
            </div>

            <div className='items-center flex flex-col justify-between p-4 w-52 h-48 rounded-xl border border-violet-800'>
                <div className='place-items-start text-3xl w-full'>
                    <FaGithub style={{color: '#f7f7f7'}} />
                </div>
                
                <div className='flex items-center gap-3 text-xl'>
                    <a href="https://github.com/PaulaVelezz" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                        Connect on Github
                        <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;