import React, { useLayoutEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useProvider } from "../../../context/provider";
import Arrow from "../../icons/arrow";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import useWindowDimensions from "../../../services/get-dimention";

export default function Carousel() {
  const { setheaderValue } = useProvider();
  const [slidesToShow, setslidesToShow] = useState();

  const { width } = useWindowDimensions();
  useLayoutEffect(() => {
    if (width < 768) {
      setslidesToShow(3);
    } else if (width < 976) {
      setslidesToShow(4);
    } else {
      setslidesToShow(6);
    }
  }, [width]);
  const datas = [
    "Walpaper",
    "Natures",
    "Flower",
    "Breadcrumbs",
    "4K Walpaper",
    "Hd Images",
    "Car",
    "Ilustate",
    "Abstract",
    "Birds",
    "Animation",
    "Animals",
    "Architectures",
  ];
  return (
    <div className="relative flex justify-center px-6 ">
      {/* <div className=" mx-1 sm:m-4 px-1 sm:px-8 h-14 mb-10 relative  ">
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
          <div className=" mx-8 mb-32 mt-12">
            <SplideTrack>
              {datas.map((data, index) => (
                <SplideSlide key={index}>
                  <div
                    className=" h-8 m-1 mt-3 hover:cursor-pointer "
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
              <button className="splide__arrow--prev absolute top-0 left-0 h-10 sm:h-14 w-10  ">
                <Arrow className="sm:w-16 sm:h-16 h-10 w-10 mt-2 sm:mt-0   " />
              </button>
              <button className="splide__arrow--next absolute top-0 right-0 h-10 sm:h-14 w-10 bg   ">
                <Arrow className="sm:w-16 sm:h-16 h-10 w-10 mt-2 sm:mt-0     " />
              </button>
            </div>
          </div>
        </Splide>
      </div> */}

      <div className=" my-10 h-10 overflow-x-clip w-11/12  ">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={datas.length}
          visibleSlides={slidesToShow}
          infinite={true}
          isIntrinsicHeight={true}
          dragEnabled={false}
          touchEnabled={datas.length > 1}
        >
          <Slider>
            {datas.map((data, index) => (
              <Slide index={index} key={index}>
                <div
                  className=" h-8 m-1 hover:cursor-pointer "
                  onClick={() => setheaderValue(data)}
                >
                  <div className="border border-gray-300 rounded-md px-3 sm:px-6 py-2 hover:bg-[#f98541] hover:text-white duration-500 transition-all hover:scale-110 ease-in-out ">
                    <h5 className=" text-center font-medium truncate text-sm sm:text-md ">
                      {data}
                    </h5>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>

          {datas.length > 1 && (
            <div>
              <div className=" absolute top-9 left-0 md:left-3  bg-white-500/50 w-12 ">
                <ButtonBack>
                  <div className=" rotate-180 ">
                    <Arrow className=" h-14 w-14" />
                  </div>
                </ButtonBack>
              </div>
              <div className=" absolute top-9 right-0 md:right-3 w-14 bg-white-500/50 ">
                <ButtonNext>
                  <div>
                    <Arrow className=" h-14 w-14  " />
                  </div>
                </ButtonNext>
              </div>
            </div>
          )}
        </CarouselProvider>
      </div>
    </div>
  );
}
