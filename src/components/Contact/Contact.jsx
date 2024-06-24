import React from 'react';
import { LuArrowDownRightSquare } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";

const Contact = () => {
    const text = "I'd love to hear from you and explore collaboration, answer your questions or discuss a new project.".split(" ");

  return (
    <section id='contact' className='flex flex-col w-full h-screen justify-center items-center gap-10 p-4 bg-zinc-950 rounded-t-2xl'>
        <h1 className='text-7xl font-extrabold tracking-wider font-T1Korium text-stone-100'>Let's get in touch!</h1>
        <div className='flex gap-1'>
            {text.map((word, index) => (
                <motion.p
                    key={index}
                    className='text-stone-100 text-2xl'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: index / 10, }}
                    viewport={{ once: true }}
                >
                    {word}{" "}
                </motion.p>
            ))}
        </div>
        
        <div className='flex items-start flex-col gap-4 justify-start overflow-hidden p-0 relative w-[97%]'>
            <span className='bg-violet-800 h-[2px] overflow-hidden relative w-full' ></span>
        </div>

        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
            <div className='items-center flex flex-col justify-between p-4 w-52 h-48 rounded-xl border border-violet-800'>
                <div className='place-items-start text-3xl w-full'>
                    <IoCalendarNumberOutline style={{color: '#f7f7f7'}} />
                </div>
                
                <div className='flex items-center gap-3 text-xl'>
                    <PopupButton 
                        className='text-stone-100 text-left flex flex-row w-full gap-2 p-2 rounded-xl'
                        url="https://calendly.com/velezpaula-a" 
                        rootElement={document.getElementById("root")}
                        text="Book a meeting!"
                    />
                    <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
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