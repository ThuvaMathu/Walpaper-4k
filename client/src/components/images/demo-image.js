import React, { useEffect, useState } from "react";

import DownloadModel from "../elements/download-model";
import { useProvider } from "../../context/provider";
import LoadMore from "../elements/loadmore";
import { demoResult } from "../../services/demo-results";

export const DemoImage = () => {
  const { imageRes, headerValue } = useProvider();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const handleClickOpen = (dataValue) => {
    setData(dataValue);
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };
  const [showModal, setShowModal] = useState(false);
  const handleModel = (param) => {
    setData(param.data);
    setShowModal(param.status);
  };

  const handleDownload = (image) => {
    fetch(image?.src?.original, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${image?.alt}.png`);
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [selectedsize, setSelectedSize] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = (event) => {
    setOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
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
    handleMenuClose();
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold m-2 capitalize  ">{headerValue}</h1>
      <div className="gap-4 columns-1  md:columns-3">
        {demoResult.photos.map((imagedata, index) => (
          <div
            className="relative  group"
            key={index}
            // onClick={() => handleClickOpen(imagedata)}
            onClick={() => handleModel({ data: imagedata, status: true })}
          >
            <a onClick={() => handleClickOpen(imagedata)}>
              <div className="px-2 py-4">
                <img
                  className="w-[480px] h-auto rounded-[5px]"
                  src={imagedata?.src?.large}
                />
              </div>
            </a>
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                    fill="#000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
                    fill="#000"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={`${showModal ? "block" : " hidden "}`}>
        <DownloadModel handle={handleModel} imageData={data} />
      </div>
    </div>
  );
};
