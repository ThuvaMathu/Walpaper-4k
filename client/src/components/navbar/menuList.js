import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function MenuList(props) {
  return (
    <div>
      <ul
        //   className="hidden md:flex items-center h-full"
        className={`${props.styles} items-center h-full`}
      >
        <li className="cursor-pointer h-full w-full flex items-center mx-5 my-2">
          <div className="group">
            <Link to="/about">
              <p className="text-lg hover:text-[#dc4100] text-rose-500 whitespace-nowrap tracking-normal transition-all duration-200 ease-in-out font-semibold">
                About us
              </p>
            </Link>
            <hr className="h-1 bg-rose-500 max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out" />
          </div>
        </li>
        <li className="cursor-pointer h-full w-full flex items-center mx-5 my-2">
          <div className="group ">
            <Link to="/contact">
              <p className="text-lg  hover:text-[#dc4100] text-rose-500 tracking-normal transition-all duration-200 ease-in-out font-semibold">
                Contact
              </p>
            </Link>
            <hr className="h-1 bg-rose-500 max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out" />
          </div>
        </li>
        <li className="cursor-pointer h-full w-full flex items-center mx-5 my-2">
          <div className="group ">
            <Link to="/upload">
              <p className="text-lg  hover:text-[#dc4100] text-rose-500 tracking-normal transition-all duration-200 ease-in-out font-semibold">
                Upload
              </p>
            </Link>
            <hr className="h-1 bg-rose-500 max-w-0 group-hover:max-w-full transition-all duration-500 ease-in-out " />
          </div>
        </li>
      </ul>
    </div>
  );
}
