import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "../carousel/carousel.css";

import "@splidejs/splide/css";

export default function Carousel() {
  const info = [
    "Slidasasdasde1",
    "slide2",
    "slide2",
    "slide3",
    "slide4",
    "slide5",
    "slide6",
  ];
  return (
    <div>
      {/* <div className="container mx-auto px-4 ">
        <Splide
          options={{
            fixedWidth: "300px",
            perPage: "4",
            type: "loop",
            objectfit: "cover",
          }}
        >
          {info.map((data) => (
            <SplideSlide>{data}</SplideSlide>
          ))}
        </Splide>
      </div> */}
      <div className=" mx-auto px-4 h-14 w-fill ">
        <Splide
          hasTrack={false}
          options={{
            perPage: "4",
            type: "loop",
          }}
        >
          <div className=" custom-wrapper mx-8 mb-5 mt-12">
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>

            <SplideTrack>
              {info.map((data) => (
                <SplideSlide>
                  <div className=" h-16 m-1">
                    <div className="border border-gray-200 rounded-md w-full p-[10px] hover:bg-green-300 duration-700 transition ">
                      <h5 className=" text-center ">{data}</h5>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows mx-4 text-slate-800  ">
              <button className="splide__arrow--prev absolute top-3 left-4 ">
                <h6 className=" text-2xl text-gray-500">{"<"}</h6>
              </button>
              <button className=" splide__arrow--next absolute top-3 right-4 ">
                <h6 className=" text-2xl text-gray-500">{">"}</h6>
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </div>
      </div >
   
  )
}














