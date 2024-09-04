import React, { useRef, useState } from 'react';
import { LuArrowDownRightSquare } from "react-icons/lu";
import { PopupButton } from "react-calendly";
import Footer from '../components/Footer/Footer.jsx';
import { Link } from 'react-router-dom';
// import InitialAnimation from '../helpers/InitialAnimation.jsx';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";


const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const fullName = formRef.current.querySelector('input[name="user_name"]').value;
    const subject = formRef.current.querySelector('input[name="subject"]').value;
    const email = formRef.current.querySelector('input[name="user_email"]').value;
    const message = formRef.current.querySelector('textarea[name="message"]').value;

    if (!fullName || !subject || !email || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

    emailjs
      .sendForm('service_0waqz27', 'template_epi3ve5', formRef.current, {
        publicKey: '34SgYJtSIFmk9gc7V',
      })
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false);
        },
      );
  };


  return (
    <>
    <section className="bg-zinc-950">
      <div className='pl-6 pt-10 text-stone-100'>
        <Link to='/' className='px-2 py-1 border-2 border-violet-500 rounded-lg'>Back to 🏡</Link>
      </div>
      
      <motion.div 
       initial={{ x: -100 }}
       animate={{ x: 0 }}
       transition={{ duration: 0.5, ease: 'easeInOut' }}
       className="container px-6 py-12 mx-auto"
       >
        <div className='md:w-3/5'>
          <p className="font-medium text-lime-500 dark:text-lime-400">Contact me</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Let's get in touch!</h1>
          <p className="mt-3 md:text-xl text-gray-500 dark:text-gray-400">Do you have a question, idea, or project that needs assistance? Feel free to reach out to me using the form or connect with me through my social media channels.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className='flex flex-row items-center justify-center gap-3 text-xl rounded-xl border border-violet-700'>
                <PopupButton 
                  className='text-stone-100 h-min p-2'
                  url="https://calendly.com/velezpaula-a" 
                  rootElement={document.getElementById("root")}
                  text="Book a meeting"
                />
                <LuArrowDownRightSquare style={{color: '#6d28d9', fontSize: '1.8rem'}}/>
            </div>

            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-700'>
              <a href="mailto:velezpaula.a@gmail.com" className='text-stone-100 items-center text-center flex flex-row justify-center w-full gap-2 p-2'>
                Send a message
                <LuArrowDownRightSquare style={{color: '#6d28d9', fontSize: '1.8rem'}}/>
              </a>
            </div>

            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-700'>
              <a href="https://linkedin.com/in/paula-velez/" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2'>
                Connect on LinkedIn
                <LuArrowDownRightSquare style={{color: '#6d28d9', fontSize: '1.8rem'}}/>
              </a>
            </div>

            <div className='flex items-center gap-3 text-xl rounded-xl border border-violet-700'>
              <a href="https://github.com/PaulaVelezz" className='text-stone-100 items-center flex flex-row justify-center w-full gap-2 p-2'>
                Connect on Github
                <LuArrowDownRightSquare style={{color: '#6d28d9', fontSize: '1.8rem'}}/>
              </a>
            </div>
          </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-violet-800 md:p-8">
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full name</label>
                          <input required type="text" placeholder="Write your full name here" name="user_name" className="block w-full px-5 py-2.5 mt-2 text-zinc-950 placeholder-zinc-700 bg-stone-200 border border-gray-200 rounded-lg focus:border-lime-400 dark:focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Subject</label>
                          <input required type="text" placeholder="Write your subject here" name="subject" className="block w-full px-5 py-2.5 mt-2 text-zinc-950 placeholder-zinc-700 bg-stone-200 border border-gray-200 rounded-lg focus:border-lime-400 dark:focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                      <input required type="email" placeholder="Write your email here" name="user_email" className="block w-full px-5 py-2.5 mt-2 text-zinc-950 placeholder-zinc-700 bg-stone-200 border border-gray-200 rounded-lg focus:border-lime-400 dark:focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                      <textarea required name="message" placeholder="Write your message/project details here" className="block w-full h-32 px-5 py-2.5 mt-2 text-zinc-950 placeholder-zinc-700 border border-gray-200 rounded-lg md:h-56 bg-stone-200 focus:border-lime-400 dark:focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                    </div>

                    <button type="submit" value="Send" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-500 rounded-lg hover:bg-lime-600">
                      Submit message
                    </button>
                    <div className='text-center pt-2'>
                      {error && <span className='text-red-700'>*Something went wrong, please try again.</span>} 
                      {success && <span className='text-stone-200'>*Message sent successfully. Soon I'll get back to you.</span>}
                    </div>
                </form>
            </div>
        </div>
      </motion.div>
      
    </section>

    <Footer />
    </>
  )
}

export default Contact;