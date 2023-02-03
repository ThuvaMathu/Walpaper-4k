import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CloseIcon from "../icons/close-icon";
import logo from "../../assets/logo-no-bg.png";
import DownloadOption from "./download-option";
import "../styles.scss";
export default function LoadingModel(props) {
  const [bgColor, setBgColor] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const scrollT = useRef();

  return (
    <>
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
            <div className="bg-white rounded-md shadow fixed items-center justify-center overflow-scroll">
              <div className=" flex items-center justify-center p-5 w-full">
                <div className=" flex  flex-col-reverse md:flex-row items-center justify-around">
                  <div className="flex flex-col items-center justify-center p-2 text-center  bg-slate-200 ">
                    <img
                      src={props.imageData?.src?.tiny}
                      alt={props.imageData?.alt}
                      className=" h-36 w-36 rounded-full m-3"
                    />
                    <span className=" text-md ">
                      {" "}
                      please give credit to the
                      <br className=" md:hidden " />
                      photographe/artist:
                    </span>
                    <span className=" text-lg font-semibold text-[#006494] ">
                      {props.imageData?.photographer}
                    </span>
                  </div>

                  <div className=" h-60 w-[1px] bg-black m-6 hidden md:block " />
                  <div className="flex items-center justify-center p-2">
                    world
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
