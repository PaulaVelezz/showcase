import React, { useEffect, useRef } from 'react';
import PROFILE from '../../assets/ascii.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';


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
            <div className='justify-center flex-shrink-0 flex top-28 overflow-hidden rounded-md md:sticky md:w-1/2'>
                <img src={PROFILE}
                ref={profile}
                width={"100%"}
                height={"auto"}
                loading="lazy"
                className='hidden object-cover object-center rounded-lg border-2 border-violet-700 md:w-64 md:h-auto md:block sm:hidden'
                alt="profile" />
            </div>

            <div className='top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2'>
                <div className='w-full font-space pl-4 pr-9'>
                    <h1 ref={header} className='text-6xl font-extrabold mb-4 font-T1Korium'>About</h1>
                    <p className='translate-y-10 text-body-1 2xl:text-4xl' ref={aboutBody}>
                        Hi there! 👋 I'm Paula, and I'm a frontend developer based in Argentina 🌎. I'm passionate about transforming ideas into visually captivating digital experiences. And for that a calm mindset, a collaborative approach, and effective communication are key to my process.
                        <br></br>
                        <br></br>
                        I enjoy working closely with clients, designers, and developers to ensure that every project is a harmonious blend of creativity and functionality 🤜💫🤛. 
                        <br></br>
                        <br></br>
                        Right now i'm looking for a job offer, open for collaborations long and short term. Feel free to contact me.
                        <br></br>
                        <br></br>
                    </p>
                    <ul className='flex gap-4'>
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