import React from 'react';
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hero from '../components/Hero/Hero';

const Home = () => {
  const gradRef = useRef(null);
  const comp = useRef(null);

  useEffect(() => {
    const handleMouseGrad = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseX = Math.round((e.pageX / windowWidth) * 100);
      const mouseY = Math.round((e.pageY / windowHeight) * 100);

      if (gradRef) {
        gradRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        gradRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
    }
  };

  document.addEventListener("mousemove", handleMouseGrad);
  return () => {
    document.removeEventListener("mousemove", handleMouseGrad);
  };
}, [gradRef]);


  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.2,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to (["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("#home", {
        opacity: 0,
        duration: 0.5,
      })
    }, comp);

    return () => context.revert();
  }, []);
  
  return (
    <div className="relative" ref={comp}>
      <div id="intro-slider" ref={gradRef} className="h-screen w-full flex flex-col gap-16 tracking-tighter p-10 absolute top-0 left-0 font-space z-10 text-stone-300">
        <h1 id="title-1" className="text-8xl"> Hi there, I'm <span className='font-T1Korium tracking-wide'> Paula </span></h1>
        <h1 id="title-2" className="text-8xl"> Welcome to my portfolio</h1>
        <h1 id="title-3" className="text-8xl"> 2024. </h1>
      </div>
    
      <Hero />
    </div>
  )
}

export default Home;