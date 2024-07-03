import React from 'react';
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className= 'bg-zinc-950 text-sm text-stone-200 font-semibold flex flex-row items-center justify-between w-full py-5 px-4 border-t-2 border-zinc-800'>
      <div>
        <p>Designed and Developed by Paula Velez &#169; 2024 </p>
      </div>
      <div>
        <p>Thanks for visiting 👋 </p>
      </div>
      <div className='flex items-center py-1 px-4 text-base border border-zinc-800 rounded-full'>
        <a className='flex justify-center items-center gap-2' href="#home">Back to the top <TbArrowBigUpLinesFilled className='animate-bounce' /></a>
      </div>
    </div>
  )
}

export default Footer;