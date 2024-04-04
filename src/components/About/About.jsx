import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const phrase = "Hi there! 👋 I'm Paula, and I'm a frontend developer based in Argentina 🌎. I'm passionate about transforming ideas into visually captivating digital experiences 👀. And for that a calm mindset, a collaborative approach, and effective communication are key to my process. I enjoy working closely with clients, designers, and fellow developers to ensure that every project is a harmonious blend of creativity and functionality 🤜💫🤛. In my free time I am researching at the intersection between generative art and creative coding 🎨. And right now i'm looking for a job offer, open for collaborations long and short term.";


const AboutIntro = () => {
    let refs = useRef([]);
    const container = useRef(null);
    const body = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    });
  };

  const splitWords = (phrase) => {
    let body = [];

    phrase.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p className='text-4xl font-space font-bold m-0 mr-5 tracking-wide' key={word + "_" + i}>{letters}</p>)
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];

    word.split('').forEach((letter, i) => {
      letters.push(<span className='opacity-30' key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    });

    return letters;
  };

  return (
    <main className='flex flex-col items-start p-5 mt-6'>
        <h2 className='text-2xl font-bold'>About </h2>
      <section ref={container} className='flex h-screen items-end justify-center mt-[0vh] mb-[45vh]'>
      <div ref={body} className='flex w-[80%] flex-wrap'>
        {
          splitWords(phrase)
        }
      </div>
      </section>
    </main>
  )
}

export default AboutIntro;