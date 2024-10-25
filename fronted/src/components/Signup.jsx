import React from 'react'
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

import Login from './Login'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors},

  } = useForm()

  const onSubmit = (data)=>  console.log(data);
  
  return (
    <div className='flex  item-center justify-center mt-20  '>

<div  className="w-[600px]">
  <div className="modal-box">

    
 
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to='/' className="btn btn-circle btn-md btn-ghost absolute right-2 top-2">Close</Link>
      </form>
<h3 className='font-bold text-lg'>Sign Up</h3>
{/* name */}

<div className='mt-4 space-y-2 '>
  <span>Name</span>
  <br/>
  <input type="text" className='w-80 px-3 border rounded-md outline-none py-1' placeholder='Enter your name here' {...register("name",{required : true})}/>
  {errors.password && <span>This field is required </span>}
</div>
 
 {/* email */}

      <div className='mt-4 space-y-2'> 
        <span>Email</span>
        <br />
        <input type='email' className='w-80 px-3 border rounded-md outline-none py-1  ' placeholder='Enter your email'{...register("password",{required : true})} />
        {errors.password && <span>This field is required </span>}
      </div>

      {/* password */}
  
  <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br/>
    <input type='text' className='w-80 px-3 border rounded-md outline-none py-1' placeholder='Enter your password' {...register("password",{required : true})}/>
    {errors.password && <span>This field is required </span>} </div>

    {/* button */}

    <div className='flex justify-around mt-3'>
      <button  type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' >signup</button>
      <p>Already register? <button  className='underline text-blue-500 cursor-pointer' onClick={()=> document.getElementById('my_modal_3').showModal()}>Login</button>
      <Login />
      </p>
    </div>

    </div>

</div>
    </div>
  )
}

export default Signup