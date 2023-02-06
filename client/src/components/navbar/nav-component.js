import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./searchbar";
import BurgerMenu from "../icons/burger-menu";
import CloseIcon from "../icons/close-icon";
import "../styles.scss";
import MenuList from "./menuList";
import MainLogo from "../icons/logo";
export default function NavComponent() {
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshow(!show);
  };

  return (
    <div className=" bg-[#003554]  ">
      <nav className="2xl:container 2xl:mx-auto sm:py-0 sm:px-7 py-2 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between sm:justify-evenly items-center  ">
          <div className=" sm:flex flex-row items-center space-x-4">
            <Link to="/">
              <div className=" hidden sm:block ">
                <MainLogo width={75} height={75} />
              </div>
              <div className=" sm:hidden">
                <MainLogo width={60} height={60} />
              </div>
            </Link>
          </div>
          <Link to="/">
            <p className=" text-[#dc4100] text-2xl mx-2 font-semibold hidden xl:block ">
              Wall Desk
            </p>
          </Link>
          <div className=" grow space-x-3 items-center  mx-4">
            <Searchbar />
          </div>
          <div className="hidden sm:flex flex-row space-x-4">
            <div className="flex items-center">
              <MenuList styles={"hidden md:flex"} />
              {/* <div className="hidden md:flex">
                <ThemeSwitch />
              </div> */}
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
          <div className="flex min-[260px]:flex-row flex-col items-center justify-left mx-20 sm:mx-20 ">
            <Link to="/">
              <p className="text-[#dc4100] text-2xl mx-2 font-semibold ">
                Wall Desk
              </p>
            </Link>
          </div>
          <div className="">
            <div className="flex items-center justify-start mx-20  ">
              <MenuList styles={""} handle={setshow} />
            </div>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}
