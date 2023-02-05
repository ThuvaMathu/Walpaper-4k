import React from "react";
import Carousel from "../elements/carousel/carousel";
import { DemoImage } from "../images/demo-image";

import { ImageComponents } from "../images/images.componets";
import Footer from "./footer";
export default function Landing() {
  return (
    <div>
      <Carousel />
      {/* <ImageComponents /> */}
      <DemoImage />
      <Footer />
    </div>
  );
}
