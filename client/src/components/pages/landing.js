import React from "react";
import Carousel from "../elements/carousel/carousel";

import { ImageComponents } from "../images/images.componets";
import Footer from "./footer";
export default function Landing() {
  return (
    <div>
      <Carousel />
      <ImageComponents />
      <Footer />
    </div>
  );
}
