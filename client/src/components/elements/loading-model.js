import React from "react";
import "../styles.scss";
import LoaderWithLogo from "./loader-with-logo";
export default function LoadingModel(props) {
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
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed items-center justify-center">
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
                  <div className=" h-[1px] w-full bg-black m-6 block md:hidden " />
                  <div className="flex flex-col items-center justify-center p-2 min-w-[100px] ">
                    <div className="">
                      <LoaderWithLogo />
                    </div>
                    <div className=" text-center ">
                      <span className=" text-xl text-slate-800 font-semibold ">
                        Download commencing shortly
                      </span>
                    </div>
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
