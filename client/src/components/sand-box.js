import React from "react";
import CircleLoader from "./icons/circle-loader";
import LogoNoCircle from "./icons/logo-no-circle";
import LogoNoCircleImg from "../assets/logo-no-bg-no-circle.png";

export default function SandBox() {
  return (
    <div className="">
      <div className=" flex justify-center items-center h-screen bg-slate-800 relative ">
        <div className="  ">
          <CircleLoader width={100} height={100} />
        </div>
        <div className=" absolute">
          <img className=" w-[120px] mb-6" src={LogoNoCircleImg} />
        </div>
      </div>
    </div>
  );
}
