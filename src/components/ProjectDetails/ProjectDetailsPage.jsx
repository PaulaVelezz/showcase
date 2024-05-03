import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import IMGBanner from '../../assets/Mp1.webp';
import img1 from '../../assets/Login.png';

const ProjectDetailsPage = () => {
    const { title } = useParams();
  return (
    <>
    <Navbar />
    <section className='w-full h-screen flex flex-col justify-center items-center gap-6'>
        <div className='w-full'>
            <span className='bg-lime-400 rounded-md ml-5 italic'>tuki/tags/#</span>
            <h1 className='text-8xl font-space font-extrabold text-center'>{title}</h1>
            <div className='mt-6 w-full h-[3px] bg-lime-400'></div>
            <p className='text-xl'>Desarrollo de una plataforma de gestión educativa con el fin de optimizar los procesos de comunicación y seguimiento entre la institución y docentes con estudiantes. Brindando transparencia, comodidad e inmediatez a los usuarios.</p>
        </div>

        <div className='w-full'>
            <h2 className='text-6xl italic font-space font-extrabold text-center'>Product Overview</h2>
            <div className='mt-6 w-full h-[3px] bg-lime-400'></div>
            <p>Desafios del proyecto y soluciones </p>

            {/* <div className="grid grid-cols-4 grid-rows-5 gap-4">
                <div className="row-span-4 border border-red-600"><img src={img1} alt="" className='h-[500px]'/></div>
                <div className="col-start-1 row-start-5 border border-red-600">2</div>
                <div className="row-span-4 col-start-2 row-start-2 border border-red-600"><img src={img1} alt="" className='h-[500px]'/></div>
                <div className="col-start-2 row-start-1 border border-red-600">Cuenta con una sección de notificaciones filtradas por curso y generales de toda la institución.</div>
                <div className="row-span-4 col-start-3 row-start-1 border border-red-600"><img src={img1} alt="" className='h-[500px]'/></div>
                <div className="col-start-3 row-start-5 border border-red-600">Una sección de actividades de la institución, junto con unos modales para la autorización de permisos.</div>
                <div className="col-start-4 row-start-1 border border-red-600">7</div>
                <div className="row-span-4 col-start-4 row-start-2 border border-red-600"><img src={img1} alt="" className='h-[500px]'/></div>
            </div> */}
        </div>

        <div className='w-full bg-slate-50 overflow-hidden'>
            <img src={IMGBanner} alt="" />
        </div>
    </section> 
    <Contact />
    <Footer />
    </>
  )
}

export default ProjectDetailsPage;