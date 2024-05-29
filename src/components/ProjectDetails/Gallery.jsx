import React, { useRef, useState } from 'react';
import img1 from '../../assets/01.webp';
import img2 from '../../assets/02.webp';
import img3 from '../../assets/03.webp';
import img4 from '../../assets/04.webp';
import img5 from '../../assets/05.webp';

const GallerySlider = () => {
    const images = [ img1, img2, img3, img4, img5 ];
    const sliderContainer = useRef(null);
    const cardsContainer = useRef(null);
    const [pressed, setPressed] = useState(false);
    const startPoint = useRef(0);
    const sliderContainerX = useRef(0);

    const handleMouseDown = (event) => {
        setPressed(true);
        startPoint.current = event.pageX - cardsContainer.current.offsetLeft;
        sliderContainer.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (event) => {
        if (!pressed) return;
        event.preventDefault();
        sliderContainerX.current = event.pageX;
        
        cardsContainer.current.style.left = `${
            sliderContainerX.current - startPoint.current
        }px`;

        checkBoundaries();
    };
    const checkBoundaries = () => {
        let outer = "";
        let inner = "";
        let slider = sliderContainer.current;
        let cardsSlider = cardsContainer.current;

        if (slider) {
            outer = slider.getBoundingClientRect();
        }

        if (cardsSlider) {
            inner = cardsSlider.getBoundingClientRect();
        }

        if (parseInt(cardsContainer.current.style.left) > 0) {
            cardsContainer.current.style.left = 0;
        } else if (inner.right < outer.right) {
            cardsContainer.current.style.left = `-${inner.width - outer.width}px`;
        }
    };

    return (
        <div 
            onMouseDown={handleMouseDown} 
            onMouseEnter={() => {
                sliderContainer.current.style.cursor = 'grab';
            }}
            onMouseUp={() => {
                sliderContainer.current.style.cursor = 'grab';
                setPressed(false);
            }}
            onMouseLeave={() => (sliderContainer.current.style.cursor = 'default')}
            onMouseMove = {handleMouseMove}
            ref={sliderContainer}
            className='slider absolute w-[90%] h-[210px] left-[10%] top-[20%] overflow-hidden rounded-md'
        >
            <div ref={cardsContainer} className='inner flex items-center flex-row h-full w-[150%] absolute top-0 left-0'>
                {images.map((image, index) => (
                    <div className='w-96 h-72 mr-4 rounded-md hover:shadow-lg hover:shadow-zinc-900 transition-shadow duration-300 ease-in-out'>
                        <img key={index} className="object-cover h-full rounded-md" src={image} alt=""/>
                    </div>   
                ))}
            </div>
        </div>
    );
};

const Gallery = () => {
    return (
        <main className=''>
            <h2 className='pl-4 pt-4 text-5xl text-stone-100 font-bold'>Gallery</h2>
            <div className="relative grid place-content-center w-full h-96">
                <GallerySlider />
            </div>
        </main>
    );
};

export default Gallery;