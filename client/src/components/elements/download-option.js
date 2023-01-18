import React, { useState } from "react";

export default function DownloadOption(props) {
  const [selectedsize, setSelectedSize] = useState();

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleDownloadSlelectedSize = () => {
    const blob1 = new Blob([selectedsize], { type: "multipart/form-data" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob1);
    const filename = selectedsize;
    link.download = filename;
    link.click();
  };
  return (
    <div>
      <div className="flex items-center m-3">
        <input
          checked
          id="default-radio-1"
          type="radio"
          value={props.imageData?.src?.original}
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300"
          onChange={(value) => handleChange(value)}
        ></input>
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Original <span className="text-gray-500"> 4480 x 6720 </span>
        </label>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center m-3">
        <input
          id="default-radio-2"
          type="radio"
          value={props.imageData?.src?.large}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          onChange={(value) => handleChange(value)}
        ></input>
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Large <span className="text-gray-500"> 1920 x 2880 </span>
        </label>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center m-3">
        <input
          id="default-radio-3"
          type="radio"
          value={props.imageData?.src?.medium}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          onChange={(value) => handleChange(value)}
        ></input>
        <label
          htmlFor="default-radio-3"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Medium <span className="text-gray-500"> 1280 x 1920 </span>
        </label>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center m-3">
        <input
          id="default-radio-4"
          type="radio"
          value={props.imageData?.src?.small}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          onChange={(value) => handleChange(value)}
        ></input>
        <label
          htmlFor="default-radio-4"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Small <span className="text-gray-500"> 640 x 960 </span>
        </label>
      </div>

      <div className="flex items-center m-3">
        <button
          type="button"
          onClick={() => handleDownloadSlelectedSize()}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Download
        </button>
      </div>
    </div>
  );
}
