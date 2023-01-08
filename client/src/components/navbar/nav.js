import React, { useState } from "react";
import logo from "../../assets/logo-no-bg.png";
import Searchbar from "../elements/searchbar";
import BurgerMenu from "../icons/burger-menu";
import CloseIcon from "../icons/close-icon";
export default function MainNav() {
  const [show, setshow] = useState(false);

  return (
    <div className=" bg-red-50  ">
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between sm:justify-evenly items-center  ">
          <div className=" sm:flex flex-row items-center space-x-6">
            <img
              className="img-responsive w-14 sm:w-24"
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
              <ul className="hidden md:flex items-center h-full">
                <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out">
                  Dashboard
                </li>
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out">
                  Products
                </li>
                <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-gray-800 mr-10 tracking-normal transition duration-150 ease-in-out">
                  Performance
                </li>
              </ul>
            </div>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center md:hidden cursor-pointer`}
          >
            <BurgerMenu show={show} />
            <CloseIcon show={show} />
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} md:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <p className="text-rose-700 text-2xl mx-2 font-semibold  ">
              Wall Desk
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <div className="flex items-center justify-center  ">
              <ul className="items-center h-full t  ">
                <li className="cursor-pointer h-full flex items-center  text-indigo-700 tracking-normal transition duration-150 ease-in-out text-md ">
                  Dashboard
                </li>
                <li className="cursor-pointer h-full flex items-center text-md hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out ">
                  Products
                </li>
                <li className="cursor-pointer h-full flex items-center text-md hover:text-indigo-700 text-gray-800  tracking-normal transition duration-150 ease-in-out">
                  Performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
