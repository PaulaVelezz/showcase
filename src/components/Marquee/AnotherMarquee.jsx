import React, { useRef } from 'react';
import img1 from '../../assets/Mp4.webp';
import img2 from '../../assets/Mp2.webp';
import { motion, useScroll, useTransform } from 'framer-motion';

const Texto = ({ src }) => {
    return (
        <div className='flex gap-5 p-2 items-center'>
            <p className='text-[7.3vh] font-semibold ml-1 tracking-wide'>Showcase</p>
            <span className='relative h-[7.3vh] w-[5vw] rounded-md overflow-hidden'> 
                <img className='object-cover' src={src} alt="marquee image" />
            </span>
        </div>
    );
};

const Slider = ({ src, left, progress, direction }) => {
    let dir = direction === 'left' ? -1 : 1;
    const x = useTransform(progress, [0,1], [-200 * dir, 200 * dir]);

    return (
        <motion.div style={{ left, x }} className='relative flex white-space-nowrap'>
            <Texto src={src} />
            <Texto src={src} />
            <Texto src={src} />
            <Texto src={src} />
            <Texto src={src} />
            <Texto src={src} />
        </motion.div>
    )
};

const AnotherMarquee = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section className='overflow-hidden bg-lime-400 mt-11 text-zinc-950'>
            <div ref={containerRef}>
                <Slider src={img1} left="-17%" progress={ scrollYProgress } direction={'right'} />
                <Slider src={img2} left="-25%" progress={ scrollYProgress } direction={'left'}/>
            </div>
        </section>
    );
};

export default AnotherMarquee;