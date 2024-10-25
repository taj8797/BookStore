import React from 'react'



function Cards({item}) {
  if(!item){
    console.error('item prop is undefined or null')
    return null;
  }

  
  return (
<>
<div>
<div className="card bg-base-100 w-92 shadow-xl mt-3 p-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-whtie">
  <figure>
    <img src={item.image} alt={item.name || 'Story Book'} />
 
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer px-4 py -2 rounded-full border border-[2px] hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
</div>


</>
  )
}

export default Cards