import React from "react";
import Carousel from "../elements/carousel/carousel";

import logo from "../../assets/logo-color.png";
import { ImageComponents } from "../images/images.componets";
import Footer from "./footer";
import LoadMore from "../elements/loadmore";
export default function Landing() {
  return (
    <div>
      <Carousel />
      <ImageComponents />
      <Footer />
    </div>
  );
}
