import React, { useState } from "react";
import DownloadModel from "./download-model";

export default function TestModel() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = (e) => {
    console.log(e);
    setShowModal(e);
  };
  return (
    <div>
      <div className=" flex justify-center items-center h-[100vh]  bg-blue-400 ">
        <button
          className=" bg-red-400 h-20 w-32 "
          onClick={() => handleClose(true)}
        >
          hello world
        </button>
        <div className={`${showModal ? "block" : " hidden "}`}>
          <DownloadModel handle={handleClose} />
        </div>
      </div>
    </div>
  );
}
