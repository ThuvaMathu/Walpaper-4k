import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Carousel() {
  const datas = [
    "Walpaper",
    "Natures",
    "Flower",
    "Breadcrumbs",
    "4K Walpaper",
    "Hd Images",
    "car",
  ];
  return (
    <div>
      <div className=" mx-2 sm:m-4 px-4 h-14 mb-10  ">
        <Splide
          hasTrack={false}
          options={{
            perMove: 1,
            fixedWidth: "auto",
            fixedHeight: "5rem",
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
              {datas.map((data, index) => (
                <SplideSlide key={index}>
                  <div className=" h-14 m-1">
                    <div className="border border-gray-300 rounded-md px-6 py-2 hover:bg-[#ffbb00] hover:text-white duration-300 transition ">
                      <h5 className=" text-center font-medium truncate text-md ">
                        {data}
                      </h5>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows mx-2 text-slate-800  ">
              <button className="splide__arrow--prev absolute top-0 left-0 h-14  ">
                <h6 className=" text-2xl text-gray-500 font-semibold text-left shadow-[10px_0px_50px_30px_rgba(255,255,255,0.8)]">
                  {"<"}
                </h6>
              </button>
              <button className="splide__arrow--next absolute top-0 right- h-14  ">
                <h6 className=" text-2xl text-gray-500 font-semibold text-right shadow-[-10px_0px_50px_30px_rgba(255,255,255,0.8)] ">
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
