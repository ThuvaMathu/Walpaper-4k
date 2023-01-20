import React, { useState, useEffect } from "react";
import { ImageComponents } from "./images.componets";
import { demoResult } from "../../services/demo-results";
import { useProvider } from "../../context/provider";

export const ImagesConatainers = () => {
  // const [images, setImages] = useState([]);
  const { imageRes, headerValue } = useProvider();

  // const fetchImagesList = async () => {
  //   const response = await demoResult;
  //   setImages(response.photos);
  // };
  // useEffect(() => {
  //   fetchImagesList();
  // }, [images]);
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <div>
      <ImageComponents imagesList={imageRes} title={toTitleCase(headerValue)} />
    </div>
  );
};
