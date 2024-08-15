import React, { useEffect, useRef, useState } from 'react';
import PROFILE from '../../assets/profilee.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import { motion, useScroll } from 'framer-motion';


const Aboutt = () => {
    const profile = useRef(null);
    
    const aboutRef = useRef(null);
    const header = useRef(null);
    const aboutBody = useRef(null);
    
    useEffect(() => {
        ScrollTrigger.create({
            trigger: aboutRef.current,
            start: 'top 400px',
            animation: gsap
                .timeline()
                .to(header.current, {
                    opacity: 1,
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.25
                }, 0)
                .to(aboutBody.current, {
                    opacity: 1,
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.25
                }, 0.2),

            toggleActions: 'play none none none',
        });

        ScrollTrigger.refresh();
    }, [aboutRef]);

  return (
    <section ref={aboutRef} className='p-4 mt-4 mb-4'>
        <div className='mt-10 mb-10 p-4 gap-2 flex flex-col items-start md:flex-row'>
            <motion.div 
                ref={profile}
                className='justify-center flex-shrink-0 flex top-28 overflow-hidden rounded-md md:sticky md:w-1/2'
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{  type: 'tween', ease: 'easeOut', duration: 1, delay: 0.5 }}
            >
                <img src={PROFILE}
                width={"100%"}
                height={"auto"}
                loading="lazy"
                className='hidden object-cover object-center rounded-lg border-2 border-violet-700 md:w-64 md:h-auto md:block sm:hidden'
                alt="profile" />
            </motion.div>

            <div className='top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2'>
                <div className='w-full font-space pl-4 pr-9'>
                    <h1 ref={header} className='text-6xl font-extrabold mb-4 font-T1Korium'>About</h1>
                    <p className='translate-y-10 text-body-1 2xl:text-4xl' ref={aboutBody}>
                        Hi there! &#128075;&#127996; Nice to meet you! I'm Paula, and I'm a frontend developer based in Argentina &#127758;. I'm passionate about transforming ideas into visually captivating digital experiences or effective solutions. And to achieve that a calm mindset, a collaborative approach, and effective communication are key to my process.
                        <br></br>
                        <br></br>
                        I enjoy working closely with clients, designers, and developers to ensure that every project is a harmonious blend of creativity and functionality. 
                        <br></br> &#129308;&#127996;
                        💫&#129307;&#127996;
                        <br></br>
                        <br></br>
                        Right now, I'm open to job opportunities for both remote and non-remote positions where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience feel free to contact me.
                        <br></br>
                        <br></br>
                    </p>
                    <ul className='flex text-xl gap-4'>
                        <li><a href="https://github.com/PaulaVelezz" aria-label='GitHub'><FaGithubSquare /></a></li>
                        <li><a href="https://www.linkedin.com/in/paula-velez/" aria-label='LinkedIn'><FaLinkedin /></a></li>
                        <li><a href="mailto:velezpaula.a@gmail.com" aria-label='Email'><ImMail /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Aboutt;