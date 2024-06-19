import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG1 from '../../assets/icon1.webp';
import IMG2 from '../../assets/icon2.webp';
import IMG3 from '../../assets/icon5.webp';

gsap.registerPlugin(ScrollTrigger);


const servicesData = [
    {
        img: IMG2,
        title: 'UI Design',
        desc: 'Design services are focus on translating your brand essence into a visually appealing and user-friendly online presence. This means creating a design that effectively connects with your target audience.',
    },
    {
        img: IMG1,
        title: 'Web Development',
        desc: 'Through my expertise in web development, I can transform your vision into a custom-coded solution. Delivering excelent performance, clean, accessible, responsive, interactive and user-friendly websites that showcase your brand effectively.',
    },
    {
        img: IMG3,
        title: 'UI Copywriting',
        desc: 'With a keen eye for detail and a way with words, I specialize in crafting compelling UI copy that resonates with your audience. From engaging headlines to clear call-to-actions, I ensure that every word enhances the user experience and drives action.',
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
    <section id='services' className='bg-zinc-950 rounded-t-2xl p-10'>
        <h1 className='mb-20 text-7xl font-extrabold tracking-wide font-T1Korium text-stone-200'>Services</h1>
        <div id='container' className='flex justify-center'>
            <div id='cards' className='lg:w-[90%] md:w-[90%] w-[90%]'>
                {servicesData.map(({ img, title, desc }, index) => (
                    <div key={index} ref={(ref) => (cardsRef.current[index] = ref)} className={`sticky max-w-md mx-auto mb-12 text-stone-200 rounded-lg bg-violet-700 border border-lime-500 shadow-md overflow-hidden md:p-8 md:max-w-4xl ${index < 3 ? 'top-5' : 'top-60'}`}>
                        <div className="md:flex items-center gap-4">
                            <div className="md:shrink-0 rounded-lg">
                                <img className="h-48 w-full object-cover bg-zinc-950 rounded-lg md:h-48 md:w-52" src={img} alt="services" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-space text-lime-400">{title}</h2>
                                <p className="mt-4 text-base md:text-lg lg:text-xl text-stone-200">{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services;