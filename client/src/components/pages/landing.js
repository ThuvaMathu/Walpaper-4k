import React from "react";
import Carousel from "../elements/carousel/carousel";

import logo from "../../assets/logo-color.png";
import { ImagesConatainers } from "../../containers/images/images.container";
export default function Landing() {
  return (
    <div>
      <Carousel />
      <ImagesConatainers />
    </div>
  );
}
