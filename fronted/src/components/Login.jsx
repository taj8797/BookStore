





import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form';

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors},

  } = useForm()

  const onSubmit = (data)=>  console.log(data);
  
  return (
    <div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">

    
 
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-circle btn-md btn-ghost absolute right-2 top-2">Close</button>
      </form>
<h3 className='font-bold text-lg'>Login</h3>
 
 {/* email */}

      <div className='mt-4 space-y-2'> 
        <span>Email</span>
        <br />
        <input type='email' className='w-80 px-3 border rounded-md outline-none py-1  ' placeholder='Enter your email' {...register("email",{required : true})}/>
        {errors.email && <span>This is field is required</span>}
      </div>

      {/* password */}
  
  <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br/>
    <input type='text' className='w-80 px-3 border rounded-md outline-none py-1' placeholder='Enter your password' {...register("password",{required : true})}/>
    <br/>
    {errors.password && <span>This field is required </span>} </div>

    {/* button */}

    <div className='flex justify-around mt-3'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
      <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
    </div>

    </div>

</dialog>
    </div>
  )
}
