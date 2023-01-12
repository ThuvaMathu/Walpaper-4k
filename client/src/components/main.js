import React from "react";
import { ImagesConatainers } from "../containers/images/images.container";
import Carousel from "./elements/carousel/carousel";
import Landing from "./landing";

export default function Main() {
  return (
    <div>
      <Landing />
      <Carousel/>
      <ImagesConatainers/>
    </div>
  );
}
