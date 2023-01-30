import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-no-bg.png";
import Searchbar from "./searchbar";
import BurgerMenu from "../icons/burger-menu";
import CloseIcon from "../icons/close-icon";
import "../styles.scss";
import MenuList from "./menuList";
import MainLogo, { mainLogo } from "../icons/logo";
import NavComponent from "./nav-component";
export default function MainNav() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [show, setshow] = useState(false);
  const [position, setPosition] = useState(0);
  const myRef = useRef(null);
  const handleClick = () => {
    setshow(!show);
  };

  const handleScroll = () => {
    const positions = window.pageYOffset;
    setPosition(positions);
  };
  return (
    <>
      <div className="">
        <NavComponent />
      </div>
      <div
        className={`fixed w-full top-0 z-20  shadow-md  shadow-[#0582ca] ${
          position > 92 ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out `}
      >
        <NavComponent />
      </div>
      {/* <div className="">
        <h6 className=" m-2 text-xl ">hello: {position} </h6>
      </div> */}
    </>
  );
}
