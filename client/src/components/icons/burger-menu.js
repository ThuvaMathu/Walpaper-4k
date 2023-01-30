import React from "react";

export default function BurgerMenu(props) {
  return (
    <div>
      <svg
        className={`${props.show ? "hidden" : ""} fill-[#dc4100] `}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className=" transform duration-150"
          d="M4 6H20"
          stroke="#dc4100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="#dc4100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className=" transform duration-150"
          d="M4 18H20"
          stroke="#dc4100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
