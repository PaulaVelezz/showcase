import React from 'react';
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import LOGO from '../../assets/logo.webp';

const Footer = () => {
  return (
    <div className= 'bg-violet-800 flex flex-row items-center justify-between w-full p-5 border rounded-t-3xl'>
        <div className='font-semibold'>
          <p>2024 Copyrighted &#169;</p>
        </div>
        <div>
          <img src={LOGO} alt="logo" style={{width: '150px'}} />
        </div>
        <div className='flex items-center gap-2 font-semibold'>
          <a href="#home">Go back to top</a>
          <TbArrowBigUpLinesFilled className='animate-bounce' />
        </div>
    </div>
  )
}

export default Footer;