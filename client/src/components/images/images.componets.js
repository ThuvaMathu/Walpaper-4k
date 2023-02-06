import React, { useEffect, useState } from "react";
import DownloadModel from "../elements/download-model";
import { useProvider } from "../../context/provider";
import LoadMore from "../elements/loadmore";
import { demoResult } from "../../services/demo-results";
import { commonUrl } from "../../services/config";
import LoaderWithLogo from "../elements/loader-with-logo";

export const ImageComponents = () => {
  const { headerValue } = useProvider();
  const [imageData, setImageData] = useState([]);
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [pageValue, setPageValue] = useState(1);
  const [tempReq, setTempReq] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getImage();
  }, [headerValue]);

  const handleClickOpen = (dataValue) => {
    setData(dataValue);
  };

  const handleModel = (param) => {
    setData(param.data);
    setShowModal(param.status);
  };

  const getImage = () => {
    setIsLoading(true);
    var tempPage = pageValue;
    if (tempReq !== headerValue) {
      tempPage = 1;
      setImageData([]);
      setTempReq(headerValue);
    }
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reqData: headerValue, reqPage: tempPage }),
    };
    fetch(`${commonUrl}/searchimage`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.total_results > 0) {
          setPageValue(tempPage + 1);
          imageData.push(response);
          if (tempReq !== headerValue) {
            setImageData([response]);
          } else {
            imageData.push(response);
          }
        } else {
          console.log(response, "no data");
        }
      })

      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err, "error from client");
      });
  };
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-xl font-bold m-2 capitalize sm:text-3xl md:text-4xl ">
        {headerValue}
      </h1>
      <div className="">
        {imageData.map((imageArray, index) => (
          <div key={index} className="">
            <div className="gap-4 columns-1  md:columns-3">
              {imageArray.photos.map((imagedata, index) => (
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
                      alt={imagedata?.alt}
                    />
                  </div>
                  <div className="absolute px-4 text-start text-lg text-white bottom-8 opacity-0 group-hover:opacity-100">
                    {imagedata.photographer}
                  </div>
                  <div className="absolute  px-4 text-end text-lg text-white bottom-8 right-2 opacity-0 group-hover:opacity-100">
                    <button
                      type="button"
                      className="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center"
                      onClick={
                        () => {}
                        // handleDownload(imagedata)
                      }
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
            <hr className=" h-[0.08rem] bg-slate-200 w-full my-6 " />
          </div>
        ))}
      </div>
      {isLoading ? (
        <div className=" flex justify-center items-center text-center ">
          {/* <CircleLoader width={100} height={100} /> */}
          <LoaderWithLogo />
        </div>
      ) : imageData.length > 0 ? (
        <LoadMore getImg={getImage} />
      ) : (
        <div className=" flex justify-center items-center text-center ">
          <span className=" text-lg ">
            No result found for{" "}
            <span className=" capitalize font-semibold text-[#f98541] ">
              {headerValue}
            </span>
            <br />
            Try somethig else{" "}
          </span>
        </div>
      )}

      <div className={`${showModal ? "block" : " hidden "} mt-3`}>
        <DownloadModel handle={handleModel} imageData={data} />
      </div>
    </div>
  );
};
