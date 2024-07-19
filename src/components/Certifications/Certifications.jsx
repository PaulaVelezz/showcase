import React from 'react';
import C1 from '../../assets/c1.webp';
import C2 from '../../assets/c2.webp';
import C3 from '../../assets/c3.webp';
import C4 from '../../assets/c4.webp';
import C5 from '../../assets/c5.webp';
import C6 from '../../assets/c6.webp';
import Certificate from './Certificate';

const CertificatesData = [
    {
        id: 1,
        firstTitle: 'Certificado Intermedio',
        secondTitle: 'Desarrollador Fullstack',
        image: C1,
    },
    {
        id: 2,
        firstTitle: 'Certificado Experiencia',
        secondTitle: 'Desarrollador Frontend',
        image: C3,
    },
    {
        id: 3,
        firstTitle: 'Certificado Intermedio',
        secondTitle: 'Programador',
        image: C2,
    },
    {
        id: 4,
        firstTitle: 'Certificado',
        secondTitle: 'React.js',
        image: C4,
    },
    {
        id: 5,
        firstTitle: 'Certificado',
        secondTitle: 'Javascript',
        image: C6,
    },
    {
        id: 6,
        firstTitle: 'Certificado',
        secondTitle: 'Diseño Web',
        image: C5,
    },
];

const Certifications = () => {
  return (
    <section className='bg-zinc-950 rounded-t-2xl rounded-b-2xl p-10 flex flex-col justify-center items-center'>
        <h1 className='w-full mb-14 text-7xl font-extrabold tracking-wider font-T1Korium text-stone-200'>Certifications</h1>
        <div className='w-[90%]'>
       
            {
                CertificatesData.map( certificate => {
                    return <Certificate certificate={certificate} />
                })
            }
        </div>
    </section>
  )
}

export default Certifications;