import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/all";
import styles from './Projects.module.css';
import IMG1 from '../../assets/01.webp';
import IMG2 from '../../assets/02.webp';
import IMG3 from '../../assets/03.webp';
import IMG4 from '../../assets/04.webp';
import IMG5 from '../../assets/05.webp';

const Projects = () => {
    let Part7Ref = useRef(null);
    let DemoRef = useRef(null);
    let OurWorkRef = useRef(null);
    let OurTextRef = useRef(null);
    let OurRef = useRef(null);
    let OurWork = useRef(null);
    let ScrollRef = useRef(null);
  
    useEffect(() => {
      let ctx7 = gsap.context(() => {
        let tl7 = gsap.timeline({
          scrollTrigger: {
            trigger: Part7Ref,
            start: "50% 50%",
            end: "300% 50%",
            scrub: 1,
            pin: true,
            // markers: true,
          },
        });
  
        tl7
          .to(DemoRef, { bottom: "7%" })
          .to(OurTextRef, { height: "60vh" }, "height")
          .to(OurWorkRef, { height: "60vh" }, "height")
          .to(OurRef, { left: "0%" }, "height")
          .to(OurWork, { right: "0%" }, "height")
          .to(ScrollRef, { marginTop: "-300%" });
      });
  
      return () => ctx7.revert();
    }, []);
  return (
    <section className={styles.part7} ref={(el) => (Part7Ref = el)}>
        <div className={styles.ourWorkTxt} ref={(el) => (OurWorkRef = el)}>
            <h1 className={styles.our} ref={(el) => (OurRef = el)}>Selected</h1>
            <h1 className={styles.work} ref={(el) => (OurWork = el)}>Works</h1>
        </div>
        <div className={styles.ourWorkTxtDiv} ref={(el) => (OurTextRef = el)}>
            <div className={styles.scrollWork}>
                <div className={styles.scrollImg} ref={(el) => (ScrollRef = el)}>
                    <img src={IMG1} alt="showcase" style={{width: "100%"}} />
                    <img src={IMG2} alt="showcase"  style={{width: "100%"}} />
                    <img src={IMG3} alt="showcase"  style={{width: "100%"}}/>
                    <img src={IMG4} alt="showcase"  style={{width: "100%"}}/>
                    <img src={IMG5} alt="showcase"  style={{width: "100%"}}/>
                    <img src={IMG1} alt="showcase"  style={{width: "100%"}}/>
                    <img src={IMG2} alt="showcase"  style={{width: "100%"}}/>
                </div>
            </div>
        </div>
        <button className={styles.demo} ref={(el) => (DemoRef = el)}>
            Ver más proyectos
        </button>
  </section>
);
}

export default Projects;