import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CloseIcon from "../icons/close-icon";
import logo from "../../assets/logo-no-bg.png";
import DownloadOption from "./download-option";
import "../styles.scss";
import LoadingModel from "./loading-model";
export default function DownloadModel(props) {
  // console.log(props.imageData?.avg_color, "color");
  const [bgColor, setBgColor] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const scrollT = useRef();

  useEffect(() => {
    if (bgColor !== null || bgColor !== undefined) {
      setBgColor(props.imageData?.avg_color);
    } else {
      setBgColor("azure");
    }
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(false);
    }
    return () => {
      setBgColor("");
    };
  }, [props, bgColor]);

  useLayoutEffect(() => {
    switchTheme();
  });

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const switchTheme = () => {
    if (showInfo) {
      scrollT.current.classList.remove("hidden");
      scrollT.current.classList.add("block");
      scrollT.current.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollT.current.classList.add("hidden");
      scrollT.current.classList.remove("block");
    }
  };
  const handleModel = (param) => {
    setShowLoadModal(param);
  };
  async function shareImage() {
    setIsShare(true);
    const response = await fetch(props.imageData?.src?.original);
    const blob = await response.blob();
    const filesArray = [
      new File([blob], "meme.jpg", {
        type: "image/jpeg",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
    setIsShare(false);
  }

  const showData = (title, data) => (
    <p className=" ml-2 ">
      <span className=" font-medium "> {title}: </span>{" "}
      {props.imageData?.[data]}
    </p>
  );
  const imageInfo = (
    <div ref={scrollT} className=" hidden p-3 relative">
      <div className=" absolute top-2 right-2 ">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="focus:outline-none"
        >
          <CloseIcon show={true} />
        </button>
      </div>
      <div className=" flex justify-center items-start flex-col ml-3 ">
        <h1 className=" text-lg font-semibold ">Image info</h1>
        {showData("id", "id")}
        {showData("name", "alt")}
        {showData("name", "width")}
        {showData("name", "height")}
        <h1 className=" text-lg font-semibold ">Author info</h1>
        {showData("Photographer_id", "photographer_id")}
        {showData("Photographer", "photographer")}
        <a
          className=" ml-2 p-1 px-2 mt-2 border rounded-md shadow-sm bg-[#0582ca] cursor-pointer text-white  "
          href={props.imageData?.photographer_url}
          target="_blank"
        >
          learn more
        </a>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <div
          id="popup"
          className="z-50 fixed w-full h-full flex justify-center items-center inset-0"
        >
          <div
            onClick={() => {
              props.handle(false);
              setShowInfo(false);
            }}
            className="w-full h-full bg-gray-900/50 z-0 absolute inset-0"
          />
          <div className="mx-auto container ">
            <div className="flex items-center justify-center h-full w-full">
              <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-11/12 md:w-11/12 lg:w-3/4 2xl:w-3/4">
                <div
                  className={` rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-6 py-3 flex items-center justify-between`}
                  style={{ backgroundColor: bgColor + "90" }}
                >
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
                    onClick={() => {
                      props.handle(false);
                      setShowInfo(false);
                    }}
                    className="focus:outline-none"
                  >
                    <CloseIcon show={true} />
                  </button>
                </div>
                <div className="px-4 md:px-10 pt-2 md:pt-2 md:pb-4 pb-7 ">
                  <div className="max-h-[460px]  overflow-y-auto scrollbar-hide">
                    <div className="flex flex-col lg:flex-row w-full h-full  items-center  rounded bg-white shadow  ">
                      <div className="w-full h-full lg:w-3/4 dark:bg-gray-800 p-2">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-full p-2  rounded-md flex items-center justify-center">
                            {/* <ImgSkelton /> */}
                            <img
                              className="  max-h-96 "
                              src={props.imageData?.src?.large}
                              alt="original"
                            />
                          </div>{" "}
                        </div>
                      </div>
                      <div className="w-[80%] m-6 lg:w-1/4 h-auto dark:border-gray-700  border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">
                        <h5 className="text-md font-bold m-2 text-center">
                          Download option
                        </h5>
                        <DownloadOption
                          handle={handleModel}
                          imageData={props.imageData}
                        />
                      </div>
                    </div>
                    <div className=" w-full justify-center items-center flex mt-4 shadow-sm ">
                      {" "}
                      <div
                        className={`
                         flex flex-col justify-left w-full rounded-md truncate h-full  transition-all ease-in-out duration-500`}
                        style={{ backgroundColor: bgColor + "20" }}
                      >
                        {imageInfo}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-end my-4">
                    {isMobile && (
                      <button
                        onClick={shareImage}
                        className="px-4 mx-2 py-2 w-24 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                      >
                        {isShare ? "Loading..." : "Share"}
                      </button>
                    )}

                    <button
                      className="px-4 py-2 mx-2 w-24 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                      onClick={() => handleInfo()}
                    >
                      <p className=" hidden sm:block ">
                        {" "}
                        {showInfo ? "close info" : "More Info"}
                      </p>
                      <p className="  sm:hidden font-extrabold ">•••</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${showLoadModal ? "block" : " hidden "}`}>
          <LoadingModel handle={handleModel} imageData={props.imageData} />
        </div>
      </div>
    </>
  );
}
