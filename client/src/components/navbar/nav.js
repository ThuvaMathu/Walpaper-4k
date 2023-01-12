import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo-no-bg.png";
import Searchbar from "../elements/searchbar";
import BurgerMenu from "../icons/burger-menu";
import CloseIcon from "../icons/close-icon";
import "../styles.scss";
import MenuList from "./menuList";
export default function MainNav() {
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshow(!show);
  };
  return (
    <div className=" bg-red-50">
      <nav className="2xl:container 2xl:mx-auto sm:py-4 sm:px-7 py-4 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between sm:justify-evenly items-center  ">
          <div className=" sm:flex flex-row items-center space-x-6">
            <img
              className="img-responsive w-14 sm:w-20"
              src={logo}
              alt="logo"
            />
          </div>
          <p className="text-rose-700 text-2xl mx-2 font-semibold hidden xl:block ">
            Wall Desk
          </p>
          <div className=" grow space-x-3 items-center  mx-4">
            <Searchbar />
          </div>
          <div className="hidden sm:flex flex-row space-x-4">
            <div className="flex items-center">
              <MenuList styles={"hidden md:flex"} />
            </div>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => handleClick()}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center md:hidden cursor-pointer`}
          >
            <BurgerMenu show={show} />
            <CloseIcon show={show} />
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          className={`${
            show ? "max-h-60 mt-4" : "max-h-0"
          } md:hidden  mx-auto truncate transition-all ease-in-out duration-700`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <p className="text-rose-700 text-2xl mx-2 font-semibold  ">
              Wall Desk
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <div className="flex items-center justify-center  ">
              <MenuList styles={""} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
