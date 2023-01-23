import React from "react";

export default function LoadMore() {
  return (
    <div className=" flex justify-center items-center ">
      <button
        type="button"
        className=" shadow-md rounded-md px-[10%] py-2 text-lg hover:bg-[#fe5e01] ease-linear hover:text-white duration-300 transition hover:scale-105  "
      >
        Load more...
      </button>
      {/* <div className="border border-gray-300 rounded-md px-10 py-2 hover:bg-[#fe5e01] ease-linear hover:text-white duration-300 transition ">
        Load more...
      </div> */}
    </div>
  );
}
