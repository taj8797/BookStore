import React from 'react'

function Contactus() {
  return (
    <div className='text-center justify-center mt-20'>
      <h2 className='font-bold text-xl'>Contact Us</h2>
         <div className='mt-2 space-y-3'>
        <span>Name</span>
        <input type="text" className='w-80 px-3 py-1 ml-3 border rounded-md outline-none'  placeholder='Enter your name here '/>
        </div>

        <div className='mt-2 space-y-3'>
        <span>Email</span>
        <input type="text" className='w-80 px-3 py-1 ml-3 border rounded-md outline-none'  placeholder='Enter your email here '/>
        </div>

        <div className='mt-2  space-y-3 '>
        <p>Message</p>
        
        <textarea type="" className='w-80 px-3 py-4 ml-3 border rounded-md outline-none'  placeholder='type your message'/>
        </div>
    </div>
  )
}

export default Contactus