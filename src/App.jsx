import { useState } from 'react'


import './App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <>
<div className='sliderParent'>
      <Slider {...settings}>
    {
      data.map((item,index)=>{
     
         return( 
         <div className='itemSliderMAIN'>
           <p> {item.name}</p>
          </div>
          )
        
      })
    }
    </Slider>
      </div>
    </>
  )
  
}

export default App
