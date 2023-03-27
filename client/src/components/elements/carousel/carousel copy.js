import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useProvider } from "../../../context/provider";
import Arrow from "../../icons/arrow";

export default function Carousel() {
  const { setheaderValue } = useProvider();

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
      <div className=" mx-1 sm:m-4 px-1 sm:px-4 h-14 mb-10  ">
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
            <SplideTrack>
              {datas.map((data, index) => (
                <SplideSlide key={index}>
                  <div
                    className=" h-8 m-1 hover:cursor-pointer "
                    onClick={() => setheaderValue(data)}
                  >
                    <div className="border border-gray-300 rounded-md px-3 sm:px-6 py-1 sm:py-2 hover:bg-[#f98541] hover:text-white duration-500 transition-all hover:scale-110 ease-in-out ">
                      <h5 className=" text-center font-medium truncate text-sm sm:text-md ">
                        {data}
                      </h5>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows mx-2 text-slate-800  ">
              <button className="splide__arrow--prev absolute top-0 left-0 h-10 sm:h-14  ">
                <h6 className=" text-2xl text-gray-500 font-semibold text-left shadow-[10px_0px_50px_30px_rgba(255,255,255,0.8)]">
                  {"<"}
                </h6>
              </button>
              <button className="splide__arrow--next absolute top-0 right- h-10 sm:h-14  ">
                <Arrow className="sm:w-16 sm:h-16 h-10 w-10  " />
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </div>
  );
}
