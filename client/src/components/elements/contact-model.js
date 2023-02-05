import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CloseIcon from "../icons/close-icon";
import logo from "../../assets/logo-no-bg.png";
import DownloadOption from "./download-option";
import "../styles.scss";
import LoaderWithLogo from "./loader-with-logo";
import Tick from "../icons/tick";
export default function ContactModel(props) {
  const tickRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      tickRef.current.classList.remove("translate-y-[-25px]");
      tickRef.current.classList.remove("opacity-0");
    }, 300);
  }, []);
  return (
    <>
      <div
        id="popup"
        className="z-50 fixed w-full h-full flex justify-center items-center inset-0"
      >
        <div
          onClick={() => {
            props.handle(false);
          }}
          className="w-full h-full bg-gray-900/50 z-0 absolute inset-0"
        />
        <div className="mx-auto container ">
          <div className="flex items-center justify-center h-full w-full ">
            <div className="bg-white rounded-md shadow  items-center justify-center m-5 relative">
              <div
                className=" top-0 right-0 absolute p-2"
                onClick={() => {
                  props.handle(false);
                }}
              >
                <CloseIcon show={true} />
              </div>
              <div className=" flex flex-col items-center justify-around p-10 w-full">
                <div className="flex  items-center justify-center p-2 text-center relative">
                  <div
                    ref={tickRef}
                    className=" top-0 right-0 transition-all duration-500  ease-linear translate-y-[-25px] opacity-0"
                  >
                    <Tick width={80} height={80} />
                  </div>
                </div>
                <span className=" text-xl font-bold text-[#006494] ">
                  Thank You!
                </span>
                <span className=" text-lg text-center   ">
                  Your submission has been received.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
