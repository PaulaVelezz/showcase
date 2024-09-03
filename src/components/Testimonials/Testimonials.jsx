import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const testimonial = [
  {
    id: 1,
    name: "Coworker 1",
    position: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    desc: "I'm currently building this section. Soon I will be adding the testimonials.", 
    linkedIn: "https://www.linkedin.com/",
  },
  {
    id: 2,
    name: "Coworker 2",
    position: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    desc: "I'm currently building this section. Soon I will be adding the testimonials.",
    linkedIn: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "Coworker 3",
    position: "UX/UI Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    desc: "I'm currently building this section. Soon I will be adding the testimonials.",
    linkedIn: "https://www.linkedin.com/",
  },
];

const Testimonials = () => {

  return (
    <section className='flex flex-col justify-center px-6 mt-16 mb-16'>
      <h1 className='mb-4 text-7xl font-extrabold tracking-wider font-T1Korium text-zinc-950'>Testimonials</h1>
      <p className='mb-6 font-semibold text-xl'>Here are a few kind words people say about my work and collaborations</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {testimonial.map((testimonialItem, index) => (
          <figure key={index} className='border border-b-[7px] rounded-2xl border-violet-700 max-w-md p-6'>
            <figcaption className='grid grid-cols-4 gap-4 place-items-center p-4'>    
                <img className='rounded-2xl border border-r-[6px] border-b-[6px] border-violet-700' src={testimonialItem.image} alt="coworker" />
                <div className='col-span-2 text-left'>
                  <h3 className='text-lg font-semibold'>{testimonialItem.name}</h3>
                  <p className='text-base font-medium text-zinc-700'>{testimonialItem.position}</p>
                </div>
                <div className="text-2xl hover:text-lime-600">
                  <a href={testimonialItem.linkedIn}><FaLinkedin /> </a>
                </div>
            </figcaption>

            <div className='bg-lime-500 h-[2px]'></div>

            <blockquote className='text-sm pt-4'>
              <p>{testimonialItem.desc}</p>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;