import React from "react";
import Carousel from "../elements/carousel/carousel";

import logo from "../../assets/logo-color.png";
import { ImageComponents } from "../images/images.componets";
export default function Landing() {
  return (
    <div>
      <Carousel />
      <ImageComponents />
    </div>
  );
}
