import React, { useState } from 'react';

const testimonial = [
  {
    id: 1,
    name: "Coworker 1",
    position: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    desc: "I'm currently building this section. Soon I will be adding the testimonials.", 
  },
  {
    id: 2,
    name: "Coworker 2",
    position: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    desc: "I'm currently building this section. Soon I will be adding the testimonials.",
  },
  {
    id: 3,
    name: "Coworker 3",
    position: "UX/UI Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    desc: "I'm currently building this section. Soon I will be adding the testimonials.",
  },
];

const Testimonials = () => {
  const [cardCurrentIndex , setCardCurrentIndex] = useState(0);

  const handleNext = () => {
    setCardCurrentIndex((cardCurrentIndex + 1) % testimonial.length);
  };

  const handlePrevious = () => {
    setCardCurrentIndex((cardCurrentIndex - 1 + testimonial.length) % testimonial.length);
  };

  const currentTestimonial = testimonial[cardCurrentIndex];

  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <h1 className='mb-4 text-7xl font-extrabold tracking-wider font-T1Korium text-zinc-950'>Testimonials from Coworkers</h1>
      <p className='mb-6 font-semibold text-xl'>Here are a few kind words people say about my work and collaborations</p>

      <figure key={currentTestimonial.id} className='bg-[#6d28d9] text-left font-medium text-stone-100 rounded-2xl p-12 max-w-4xl'>
        <blockquote>
          <h4 className='text-2xl'>&quot;{currentTestimonial.desc}&quot;</h4>
        </blockquote>

        <figcaption className='flex flex-row justify-between items-center mt-5'>    
          <div className='text-zinc-950 text-base flex items-center gap-6'>
            <img src={currentTestimonial.image} className='h-[100px] w-[100px] rounded-full border-2 border-lime-500' alt="user" />
            <div className=''>
              <h3>{currentTestimonial.name}</h3>
              <span>{currentTestimonial.position}</span>
            </div>
          </div>
            
          <div className='flex flex-row gap-4 mt-5'>
            <button className='h-14 w-14 rounded-full bg-zinc-950 border-2 border-lime-400' onClick={handlePrevious} disabled={cardCurrentIndex === 0}>👈</button>
            <button className='h-14 w-14 rounded-full bg-zinc-950 border-2 border-lime-400' onClick={handleNext} disabled={cardCurrentIndex === testimonial.length - 1}>👉</button>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Testimonials;