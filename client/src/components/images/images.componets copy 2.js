import React, { useEffect, useState } from "react";
import DownloadModel from "../elements/download-model";
import { useProvider } from "../../context/provider";
import LoadMore from "../elements/loadmore";
import { demoResult } from "../../services/demo-results";

export const ImageComponents = () => {
  const { imageRes, headerValue } = useProvider();
  const [imageData, setImageData] = useState(demoResult.photos);
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(imageRes, imageRes == null, "data");
    if (imageRes.length > 0) {
      setImageData(imageRes);
    }
  }, [imageRes]);

  const handleClickOpen = (dataValue) => {
    setData(dataValue);
  };

  const handleModel = (param) => {
    setData(param.data);
    setShowModal(param.status);
  };
  const handleDownload = (image) => {
    const blob1 = new Blob([image?.src?.original], {
      type: "multipart/form-data",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob1);
    const filename = image?.src?.original;
    link.download = filename;
    link.click();
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-xl font-bold m-2 capitalize sm:text-3xl md:text-4xl ">
        {headerValue}
      </h1>
      <div className="gap-4 columns-1  md:columns-3">
        {imageData.map((imagedata, index) => (
          <div
            className="relative  group"
            key={index}
            // onClick={() => handleClickOpen(imagedata)}
            onClick={() => handleModel({ data: imagedata, status: true })}
          >
            <div
              className="px-2 py-4"
              onClick={() => handleClickOpen(imagedata)}
            >
              <img
                className="w-[480px] h-auto rounded-[5px]"
                src={imagedata?.src?.large}
                alt={imageData?.alt}
              />
            </div>
            <div className="absolute px-4 text-start text-lg text-white bottom-8 opacity-0 group-hover:opacity-100">
              {imagedata.photographer}
            </div>
            <div className="absolute  px-4 text-end text-lg text-white bottom-8 right-2 opacity-0 group-hover:opacity-100">
              <button
                type="button"
                className="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center"
                onClick={() => handleDownload(imagedata)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                    fill="#000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
                    fill="#000"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <LoadMore />
      <div className={`${showModal ? "block" : " hidden "}`}>
        <DownloadModel handle={handleModel} imageData={data} />
      </div>
    </div>
  );
};