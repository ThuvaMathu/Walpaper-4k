import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
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
      <div className=" mx-10 px-4 h-14 mb-10  ">
        <Splide
          hasTrack={false}
          options={{
            perMove: 1,
            fixedWidth: "14rem",
            fixedHeight: "6rem",
            type: "loop",
            rewind: true,
            pagination: false,
          }}
        >
          <div className=" custom-wrapper mx-8 mb-32 mt-12">
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>

            <SplideTrack>
              {info.map((data) => (
                <SplideSlide>
                  <div className=" h-16 m-1">
                    <div className="border border-gray-300 rounded-md  p-[10px] hover:bg-green-300 duration-700 transition ">
                      <h5 className=" text-center ">{data}</h5>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows mx-4 text-slate-800  ">
              <button className="splide__arrow--prev absolute top-0 left-0 h-14  ">
                <h6 className=" text-2xl text-gray-500 font-semibold text-left shadow-[10px_0px_50px_50px_rgba(255,255,255,0.8)]">
                  {"<"}
                </h6>
              </button>
              <button className="splide__arrow--next absolute top-0 right- h-14  ">
                <h6 className=" text-2xl text-gray-500 font-semibold text-right shadow-[-10px_0px_50px_50px_rgba(255,255,255,0.8)]">
                  {">"}
                </h6>
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </div>
  );
}
