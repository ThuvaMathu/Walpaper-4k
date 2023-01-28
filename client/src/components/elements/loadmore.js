import React, { useState } from "react";
import { useProvider } from "../../context/provider";
import { commonUrl } from "../../services/config";

export default function LoadMore(props) {
  const { isLoading } = useProvider();

  // const getImage = () => {
  //   setIsLoading(true);
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ reqData: headerValue, reqPage: pageValue }),
  //   };
  //   fetch(`${commonUrl}/searchimage`, options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response, "data");

  //       if (response.total_results > 0) {
  //         console.log("loadmore.. i am working");
  //         setPageValue(pageValue + 1);
  //         setImageRes((oldArray) => [oldArray, ...response.photos]);
  //         setIsLoading(false);
  //       } else {
  //         console.log(response, "no data");
  //       }
  //     })
  //     .catch((err) => console.error(err, "error from client"));
  // };
  const loader = (
    <div className="loader-container p-2">
      <span className="circle circle-1"></span>
      <span className="circle circle-2"></span>
      <span className="circle circle-3"></span>
      <span className="circle circle-4"></span>
      <span className="circle circle-5"></span>
      <span className="circle circle-6"></span>
    </div>
  );
  const loadText = (
    <div className=" p-2 ">
      <span className=" text-lg ">Load more ...</span>
    </div>
  );
  return (
    <div className=" flex justify-center items-center ">
      <button
        type="button"
        className=" shadow-md rounded-md w-full max-w-md  text-lg mx-10 hover:bg-[#f98541] ease-linear hover:text-white duration-300 transition hover:scale-105  "
        onClick={() => props.getImg()}
      >
        {isLoading ? loader : loadText}
      </button>
    </div>
  );
}
