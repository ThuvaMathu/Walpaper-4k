import React from "react";

export default function CloseIcon(props) {
  return (
    <div>
      <svg
        className={`${props.show ? "block" : "hidden"}`}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#dc4100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#dc4100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
