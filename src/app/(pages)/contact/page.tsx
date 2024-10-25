import React, { Fragment } from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

function Contact({let}) {
  return (
    <Fragment>
      <div className='w-screen h-screen bg-white text-black'>
        <h3 className='pt-32 pl-48 font-bold text-5xl'>Lets work together</h3>
        <p className='pt-20 pr-[680px] text-center font-semibold text-xl'>I will offer you the best of me, <br /> while keeping myself upto date to any <br /> any new technologies coming up in future.</p>
        <ol className='flex flex-row pt-14 pl-64'>
          <li><FaGithub className='size-12 mr-10 '/></li>
          <li><FaInstagram className='size-12 mr-10'/></li>
          <li><FaLinkedin className='size-12 mr-10 hover:text-blue-900'/></li>
          <li><FaFacebook className='size-12 hover:text-blue-500'/></li>    
        </ol>
      </div>
        <div className='absolute h-[91vh] w-[40vw] bg-white text-black top-[68px] right-0 '>
          <input type="text" placeholder='Name' className='bg-gray-300 text-black h-12 w-[440px] mt-10 mb-10 ml-20 mr-20 text-center font-semibold text-xl'/>
          <input type="email" placeholder='Email' className='bg-gray-300 text-black h-12 w-[440px]  mb-10 ml-20 mr-20 text-center font-semibold text-xl'/>
          <input type="tel" placeholder='Phone' className='bg-gray-300 text-black h-12 w-[440px]  mb-10 ml-20 mr-20 text-center font-semibold text-xl'/>
          <input type="text" placeholder='Message...' className='bg-gray-300 text-black h-48 w-[440px]  mb-10 ml-20 mr-20 text-center font-semibold text-xl'/>
          <Button className='ml-20 hover:bg-white hover:text-black hover:border-black hover:border-2'>Submit</Button>
        </div>
      
    </Fragment>
  )
}

export default Contact;