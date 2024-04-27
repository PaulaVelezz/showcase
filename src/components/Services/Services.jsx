import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG1 from '../../assets/img001.jpg';
import IMG2 from '../../assets/img002.jpg';
import IMG3 from '../../assets/img035.jpg';

gsap.registerPlugin(ScrollTrigger);


const servicesData = [
    {
        img: IMG2,
        title: 'UI Design',
        desc: 'Design services are focused on transforming the essence of your brand into a visually appealing and intuitive online presence.',
    },
    {
        img: IMG1,
        title: 'Web Development',
        desc: 'Through my expertise in web development, I can transform your vision into a custom-coded solution. Delivering excelent performance, clean, accessible, responsive, interactive and user-friendly websites.',
    },
    {
        img: IMG3,
        title: 'UI Copywriting',
        desc: ' lorem ipsum dolor sit amet consectetur adipisicing elit amet.',
    },
];


const Services = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const cards = gsap.utils.toArray('#card');
    
        cards.forEach((card, index) => {
          const tween = gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: () => `top bottom-=100`,
              end: () => `top top+=40`,
              scrub: true,
            },
            ease: "none",
            scale: 1 - (cards.length - index) * 0.09,
          });
        });
    
        let scrollFunc = ScrollTrigger.getScrollFunc(window);
        let lastScrollPosition;
    
        ScrollTrigger.addEventListener("refreshInit", () => {
          lastScrollPosition = scrollFunc();
          scrollFunc(0);
        });
    
        ScrollTrigger.addEventListener("refresh", () => scrollFunc(lastScrollPosition));
      }, []);

  return (
    <section id='services' className='bg-zinc-950 rounded-xl p-10 mb-5'>
        <h1 className='mb-20 text-7xl font-extrabold font-space text-stone-200'>Servicios</h1>
        <div id='container' className='flex justify-center'>
            <div id='cards' className='w-[80%]'>
                {servicesData.map(({ img, title, desc }, index) => (
                    <div key={index} ref={(ref) => (cardsRef.current[index] = ref)} className={`sticky h-[320px] w-full flex justify-between items-center p-9 gap-10 mb-12 text-xl text-stone-200 rounded-lg bg-violet-700 border border-lime-500 ${index < 3 ? 'top-5' : 'top-60'}`}>
                        <div className='overflow-hidden rounded-lg w-96 h-44'>
                            <img src={img} alt="img"/>
                        </div>
                       
                        <div className='w-3/4 gap-6 p-3 flex flex-col text-stone-200'>
                            <h2 className='text-4xl font-bold font-space text-lime-400'>{title}</h2>
                            <p>{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div id='container2' className='w-full h-[400px]'> </div>
    </section>
  )
}

export default Services;