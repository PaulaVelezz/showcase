import React, { useEffect, useState } from 'react';
import styles from '../Pixel/page.module.css';

const Pixel = () => {
    const [windowsWidth, setWindowsWidth] = useState(0);

    useEffect(() => {
        setWindowsWidth(window.innerWidth);
    }, []);

    const getBlocks = () => {
        const blockSize = windowsWidth * 0.05;
        const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
          return [...Array(nbOfBlocks).keys()].map((_, index) => {
            return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
        })
    }

    const colorize = (element) => {
        element.style.backgroundColor = 'rgb(124 58 237)';
        setTimeout(() => {
            element.style.backgroundColor = 'transparent';
        }, 300)
    }
  
    return (
    <div className={styles.container}>
        <div className={styles.grid}>
            {
                windowsWidth > 0 && [ ...Array(20).keys()].map( (_, index) => {
                    return <div key={index} className={styles.column}>
                        {
                            getBlocks()
                        }
                    </div>
                })
            }  
        </div>
    </div>
  );
};

export default Pixel;