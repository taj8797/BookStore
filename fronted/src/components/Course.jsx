import React from 'react'
import Cards from './Cards';
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

function Course() {
  return (

    <>
    <div className='max-w-screen-2xl mx-auto container md:p-20 px-4'>


  <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl font-semibold md:text-4xl'> We have designed to have you <span className='text-pink-500'>here</span> </h1>

    <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat culpa animi, quos temporibus magni ducimus aperiam sequi maiores placeat neque non minima eveniet ipsa a magnam possimus alias voluptatum iure Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat culpa animi, quos temporibus magni ducimus aperiam sequi maiores placeat neque non minima eveniet ipsa a magnam possimus alias voluptatum iure.</p>

<Link to='/'>
    <button className='bg-pink-500 text-center text-2xl mt-20 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
    </Link>
  </div>
 

<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

  {
    list.map((item)=> ( 
    <Cards item={item} id={item.id} />

     
    ))
   
  }
</div>

    </div>

    </>
  )
}

export default Course