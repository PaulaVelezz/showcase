import React from 'react';
import { TbArrowBigUpLine } from "react-icons/tb";

const Footer = () => {
  return (
    <div className= 'bg-zinc-950 text-sm text-stone-200 font-semibold flex flex-col sm:flex-row items-center gap-5 justify-between w-full py-10 px-4 border-t-2 border-zinc-800'>
      <div className=''>
        <p>Designed and Developed by Paula Velez &#169; 2024 </p>
      </div>
      <div>
        <p>Thanks for your visit 👋</p>
      </div>
      <div className='flex items-center py-1 px-4 text-base border border-dashed border-zinc-400 rounded-xl'>
        <a className='flex justify-center items-center gap-2' href="#home">Back to the top <TbArrowBigUpLine className='animate-bounce' /></a>
      </div>
    </div>
  )
}

export default Footer;