import React, { useEffect, useRef } from 'react';
import styles from '../Showcase/Showcase.module.css';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from '../../assets/01.webp';
import image2 from '../../assets/02.webp';
import image3 from '../../assets/03.webp';
import image4 from '../../assets/04.webp';
import image5 from '../../assets/05.webp';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    let partShow = useRef();
    let viewMoreRef = useRef();
    let ourWorkTxtDivRef = useRef();
    let ourWorkTxtRef = useRef();
    let ourRef = useRef();
    let workRef = useRef();
    let scrollImgRef = useRef();

    useEffect(() => {
        let context = gsap.context(() => {
            let tl7 = gsap.timeline({
                scrollTrigger: {
                    trigger: partShow,
                    start: "50% 50%",
                    end: "300% 50%",
                    pin: true,
                    scrub: 1
                },
            });

            tl7
            .to(viewMoreRef,{bottom:"7%"})
            .to(ourWorkTxtDivRef, {height:"60vh"}, 'height')
            .to(ourWorkTxtRef, {height:"60vh"}, 'height')
            .to(ourRef, {left:"0%"}, 'height')
            .to(workRef, {right:"0%"}, 'height')
            .to(scrollImgRef, {marginTop:"-300%"});
        });
        
        return () => {
            context.revert();
        }
    }, []);

  return (
    <section className='flex justify-center items-center'>
        <div ref={(el) => (partShow = el)} className={styles.partShow}> 
            <div ref={(el) => (ourWorkTxtRef = el)} className={styles.ourWorkTxt}>
                <h1 ref={(el) => (ourRef = el)} id={styles.our}>Show</h1>
                <h1 ref={(el) => (workRef = el)} id={styles.work}>case</h1>
            </div>
            <div ref={(el) => (ourWorkTxtDivRef = el)} className={styles.ourWorkTxtDiv}> 
                <div className={styles.scrollWork}>
                    <div ref={(el) => (scrollImgRef = el)} className={styles.scrollImg}>
                    <img src={image1} alt="showcase" />
                    <img src={image2} alt="showcase" />
                    <img src={image3} alt="showcase" />
                    <img src={image4} alt="showcase" />
                    <img src={image5} alt="showcase" />
                    </div>
                </div>
            </div>
        </div>
        <button ref={(el) => (viewMoreRef = el)} id={styles.viewMore}>View More</button>
    </section>
  )
}

export default Showcase;