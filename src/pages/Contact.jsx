import React from 'react';
import { LuArrowDownRightSquare } from "react-icons/lu";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-zinc-950">
      <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium text-lime-500 dark:text-lime-400">Contact us</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Chat to our friendly team</h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">We love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-800'>
              <a href="https://calendly.com/tuki" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                Book a videocall
                <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
              </a>
            </div>

            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-800'>
              <a href="https://calendly.com/tuki" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                Book a videocall
                <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
              </a>
            </div>

            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-800'>
              <a href="https://calendly.com/tuki" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                Book a videocall
                <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
              </a>
            </div>

            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-800'>
              <a href="https://calendly.com/tuki" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2 rounded-xl'>
                Book a videocall
                <LuArrowDownRightSquare style={{color: '#4c1788', fontSize: '2rem'}}/>
              </a>
            </div>
          </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-violet-900 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-lime-400 dark:focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-500 rounded-lg hover:bg-lime-400 focus:outline-none focus:ring focus:ring-lime-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;