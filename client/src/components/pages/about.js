import React from "react";
import Footer from "./footer";
import about from "../../assets/about.jpg";
import credit from "../../assets/credit.jpg";
import pxels from "../../assets/pxels.png";
import QuoteIcon from "../icons/quote";

export default function About() {
  return (
    <div>
      <div className="text-gray-600 font-common ">
        <h1 className=" mt-4 mb-2 text-center sm:text-3xl text-2xl font-medium title-font text-gray-900">
          About Us
        </h1>

        <div className="m-2">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center bg-slate-50">
            <div className=" lg:max-w-lg lg:w-80 md:w-1/2 w-4/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={about}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-10 flex flex-col md:items-start  items-center text-justify ">
              <p className=" leading-relaxed">
                Greetings and welcome to Wallpaper Desk, the perfect place for
                finding top-notch, cost-free wallpapers. Our team of
                enthusiastic students, dedicated to design and development,
                established this website in 2022. To provide you with a
                consistent and organized experience, we incorporated an API that
                fetches images and data from another source using the Pexels
                API. Through this API, our website can retrieve and display a
                wide range of content, such as various wallpaper images and
                details on their resolution and size.
              </p>
            </div>
          </div>
        </div>
        <h1 className=" mt-4 mb-2 text-center sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Credits
        </h1>
        <div className=" m-2">
          <div className="container mx-auto flex px-5 py-10 md:flex-row-reverse flex-col items-center justify-center bg-slate-100">
            <div className=" lg:max-w-lg lg:w-80 md:w-1/2 w-4/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={credit}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-10 flex flex-col md:items-start  items-center text-justify md:mr-14 ">
              <p className=" leading-relaxed">
                Properly crediting contributors typically entails acknowledging
                the photographers or artists responsible for creating the images
                utilized as wallpapers. When utilizing Wall Desk's images on a
                commercial website or project, it's crucial to attribute the
                source correctly. In certain instances, personal use may not
                necessitate appropriate attribution. For more information about
                licensing, please{" "}
                <a
                  href="https://www.pexels.com/license/"
                  target="_blank"
                  className=" text-orange-500 active:text-red-500 "
                >
                  click here
                </a>{" "}
                to visit Pexels.
              </p>
            </div>
          </div>
        </div>
        <h1 className=" mt-4 mb-2 text-center sm:text-3xl text-2xl font-medium title-font text-gray-900">
          API Provider
        </h1>
        <div className="m-2">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center  bg-slate-200">
            <a href="https://api@pexels.com" target={"_blank"}>
              <div className="lg:max-w-lg lg:w-80 md:w-1/2 w-4/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={pxels}
                />
              </div>
            </a>
            <div className="lg:flex-grow md:w-1/2 lg:pl-14 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
              <p className="mb-8 leading-relaxed">Pexels API</p>
              <div className=" flex flex-row space-x-2 ">
                <QuoteIcon className=" w-6 h-6 -mt-3 stroke-rose-500 fill-[#003554] " />
                <p className="mb-8 leading-relaxed">
                  We extend our gratitude to Pexels for offering free APIs that
                  enable us to showcase our talents and skills.
                  <br />
                </p>
              </div>
              {/* <p className="mb-8 leading-relaxed">
                {" "}
                You can contact the API owners directly by visiting their
                personal websites at:
                <br />
                <a
                  href="https://api@pexels.com"
                  target={"_blank"}
                  rel="noreferrer"
                  className=" text-sky-600"
                >
                  api@pexels.com
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
