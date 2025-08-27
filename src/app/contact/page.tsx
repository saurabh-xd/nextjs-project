import { Meteors } from '@/components/ui/meteors'
import { div } from 'motion/react-client'
import React from 'react'

function page() {
  return (
    
    <div className='bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-10'>
      
      <div className='flex justify-center items-center flex-col mt-30'>
        <h2 className='text-4xl md:text-7xl 
        font-bold bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-neutral-400'>Contact Us</h2>
        <p className='font-normal text-base md:text-lg 
        text-neutral-300 max-w-lg mx-auto mt-8'>  We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
      </div>
      <div className='flex flex-col gap-4'> 
        <input type="email" placeholder='Your email address' className='bg-black rounded-md w-185 h-10'/>
        <textarea name="" id="" placeholder='Your message' className='bg-black h-55'></textarea>
      </div>
      <Meteors number={20}/>
    </div>
   
  )
}

export default page