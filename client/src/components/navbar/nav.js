import React, { useEffect, useState } from "react";
import "../styles.scss";
import NavComponent from "./nav-component";
export default function MainNav() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const positions = window.pageYOffset;
    setPosition(positions);
  };
  return (
    <>
      {/* <div className="">
        <NavComponent />
      </div> */}
      {/* <div
        className={` ${
          position < 16 ? "hidden" : "block"
        } fixed w-full top-0 z-20  shadow-md  shadow-[#0582ca] ${
          position > 92 ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out `}
      >
        <NavComponent />
      </div> */}
      {/* <div className="">
        <h6 className=" m-2 text-xl ">hello: {position} </h6>
      </div> */}

      <div
        className={`${position > 78 ? "opacity-0" : ""} ${
          position > 88
            ? "opacity-100 fixed w-full top-0 z-20  shadow-md  shadow-[#0582ca]"
            : ""
        } transition-all duration-500 ease-in-out `}
      >
        <NavComponent />
      </div>
    </>
  );
}
