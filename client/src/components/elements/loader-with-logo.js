import React from "react";
import CircleLoader from "../icons/circle-loader";
import LogoNoCircleImg from "../../assets/logo-no-bg-no-circle.png";

export default function LoaderWithLogo() {
  return (
    <div>
      <div className=" flex justify-center items-center  ">
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
