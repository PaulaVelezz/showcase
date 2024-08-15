import React from 'react';
import Certificate from './Certificate';

const CertificatesData = [
    {
        id: 1,
        firstTitle: 'Certificado Intermedio',
        secondTitle: 'Desarrollador Fullstack',
        image: 'https://i.postimg.cc/0NgSVvPZ/c2.webp',
    },
    {
        id: 2,
        firstTitle: 'Certificado Experiencia',
        secondTitle: 'Desarrollador Frontend',
        image: 'https://i.postimg.cc/DzdS5bCy/c3.webp',
    },
    {
        id: 3,
        firstTitle: 'Certificado Intermedio',
        secondTitle: 'Programador',
        image: 'https://i.postimg.cc/4xGZP2jV/c1.webp',
    },
    {
        id: 4,
        firstTitle: 'Certificado',
        secondTitle: 'React.js',
        image: 'https://i.postimg.cc/jjXjyY5D/c4.webp',
    },
    {
        id: 5,
        firstTitle: 'Certificado',
        secondTitle: 'Javascript',
        image: 'https://i.postimg.cc/mDggwpz8/c6.webp',
    },
    {
        id: 6,
        firstTitle: 'Certificado',
        secondTitle: 'Diseño Web',
        image: 'https://i.postimg.cc/RhjCvMPD/c5.webp',
    },
];

const Certifications = () => {
  return (
    <section className='bg-zinc-950 rounded-t-2xl rounded-b-2xl p-10 flex flex-col justify-center items-center'>
        <h1 className='w-full mb-14 text-7xl font-extrabold tracking-wider font-T1Korium text-stone-200'>Certifications</h1>
        <div className='w-[90%]'>
       
            {
                CertificatesData.map( certificate => {
                    return <Certificate key={certificate.id} certificate={certificate} />
                })
            }
        </div>
    </section>
  )
}

export default Certifications;