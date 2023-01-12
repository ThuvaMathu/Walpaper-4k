import React from 'react'
import { Splide, SplideTrack, SplideSlide, } from '@splidejs/react-splide';
import '../carousel/carousel.css';

import "@splidejs/splide/css";

export default function Carousel() {
  const info = ["Slide1", "slide2", "slide2","slide3" ,"slide4" ,"slide5","slide6",   ]
  return (
    <div>
      <div className="container mx-auto px-4 ">

        <Splide options={{fixedWidth:"300px",
        perPage:"4",
        type   : 'loop',
        objectfit: "cover",  
            objectfit: "cover",
        objectfit: "cover",  
            objectfit: "cover",
        objectfit: "cover",  
      }}
         
          
         
        
        
       >
        {info.map((data) => (

          <SplideSlide> <div className="  ">
            {data}
          </div></SplideSlide>
        ))}


      </Splide>

    </div>
      </div >
   
  )
}














