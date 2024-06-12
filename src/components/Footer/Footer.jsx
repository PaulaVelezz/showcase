import React from 'react';
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className= 'bg-violet-800 flex flex-row items-center justify-between w-full p-2'>
      <div className='font-bold'>
          <p>&#169; 2024 -<span className='font-T1Korium font-normal text-xl tracking-wide'> PAULA VELEZ</span></p>
      </div>
      <div className='font-semibold'>
        <p>Thanks for visiting 👋 </p>
      </div>
      <div className='flex items-center py-1 px-4 text-base font-semibold border border-zinc-900 rounded-full'>
        <a className='flex justify-center items-center gap-2' href="#home">Back to the top <TbArrowBigUpLinesFilled className='animate-bounce' /></a>
      </div>
    </div>
  )
}

export default Footer;