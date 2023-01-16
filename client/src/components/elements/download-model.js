import React,{useState} from "react";
import CloseIcon from "../icons/close-icon";
import ImgSkelton from "../icons/img-skelton";
import logo from "../../assets/logo-no-bg.png";
import { Button } from "@mui/material";

export default function DownloadModel(props) {
  const [selectedsize, setSelectedSize] = useState();
  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleDownloadSlelectedSize = () => {
    const blob1 = new Blob([selectedsize], { type: "multipart/form-data" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob1);
    const filename = selectedsize;
    link.download = filename;
    link.click();
  
  };
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
                    <h5 class="text-md font-bold m-2">Download option goes here</h5>

                    <div class="flex items-center m-3">
    <input checked id="default-radio-1" type="radio" value={props.imageData?.src?.original} name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300"  onChange={(value)=>handleChange(value)}></input>
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Original  <span className="text-gray-500"> 4480 x 6720 </span></label>
</div>
<hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div class="flex items-center m-3">
    <input  id="default-radio-2" type="radio" value={props.imageData?.src?.large} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(value)=>handleChange(value)}></input>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large  <span className="text-gray-500"> 1920 x 2880 </span></label>
</div>
<hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div class="flex items-center m-3">
    <input  id="default-radio-3" type="radio" value={props.imageData?.src?.medium} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(value)=>handleChange(value)}></input>
    <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium  <span className="text-gray-500"> 1280 x 1920 </span></label>
</div>
<hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div class="flex items-center m-3">
    <input  id="default-radio-4" type="radio"value={props.imageData?.src?.small} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" onChange={(value)=>handleChange(value)}></input>
    <label for="default-radio-4" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Small  <span className="text-gray-500"> 640 x 960 </span></label>
</div>

<div class="flex items-center m-3">
<button type="button" onClick={()=>handleDownloadSlelectedSize()} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download a Selected Size</button>

     
      </div>
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
