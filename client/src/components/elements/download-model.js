import React from "react";
import CloseIcon from "../icons/close-icon";
import ImgSkelton from "../icons/img-skelton";
import logo from "../../assets/logo-no-bg.png";

export default function DownloadModel(props) {
  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div
          onClick={() => props.handle(false)}
          className="w-full h-full bg-gray-900/50 z-0 absolute inset-0"
        />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-11/12 md:w-11/12 lg:w-3/4 2xl:w-3/4">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <img
                  className="img-responsive w-10 sm:w-16"
                  src={logo}
                  alt="logo"
                />
                <div>
                  <p className="text-base font-semibold">
                    Author: {props.imageData?.photographer}
                  </p>
                </div>
                <button
                  onClick={() => props.handle(false)}
                  className="focus:outline-none"
                >
                  <CloseIcon show={true} />
                </button>
              </div>
              <div className="px-4 md:px-10 pt-2 md:pt-2 md:pb-4 pb-7">
                <div className="flex flex-col lg:flex-row w-full items-center  rounded bg-white shadow">
                  <div className="w-full h-full lg:w-3/4 dark:bg-gray-800 p-2">
                    <div className="flex items-center justify-center">
                      <div className="w-full p-2  rounded-md flex items-center justify-center">
                        {/* <ImgSkelton /> */}
                        <img
                          className="  max-h-96 "
                          src={props.imageData?.src?.large}
                          alt="original"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">
                    <h5>Download option goes here</h5>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <button
                    onclick="popuphandler(false)"
                    className="px-4 py-2 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Share
                  </button>
                  <button className="px-4 py-2 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                    <p className=" hidden sm:block "> More Info</p>
                    <p className="  sm:hidden font-extrabold ">•••</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
