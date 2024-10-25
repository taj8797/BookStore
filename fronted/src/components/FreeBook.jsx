import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function FreeBook() {
  const filterData =list.filter((data)=>{
     return data.category==="Free"
  })
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4 '>
      <h1 className='font-bold text-xl pb-2'>Free Offered Book</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos sed similique ea, dolorum mollitia nemo aut ex error aliquid laborum qui ullam architecto quibusdam officia, consequatur quo dicta maxime!</p>
    </div>
    <div >
    <Slider {...settings}>
      {filterData.length >0 ?(
       filterData.map((item)=>(
      
      <Cards item={item} key={item.id} />
       ))
      ) : (
        <p>No free book available</p>
      )}
      </Slider>
    </div>
    </>
  )
}

export default FreeBook