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
     <div className='flex flex-col gap-4 w-full max-w-md'>
 <input 
   type="email" 
   placeholder='Your email address' 
   className='bg-black rounded-md w-full h-12 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none'
 />
 <textarea 
   placeholder='Your message' 
   rows={6}
   className='bg-black rounded-md w-full px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none resize-vertical'
 />
 <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md'>
   Send Message
 </button>
</div>
      <Meteors number={20}/>
    </div>
   
  )
}

export default page