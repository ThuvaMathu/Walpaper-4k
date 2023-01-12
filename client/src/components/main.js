import React from "react";
import { AppRouter } from "./app-router";
import Carousel from "./elements/carousel/carousel";
import MainNav from "./navbar/nav";

export default function Main() {
  return (
    <div>
      <MainNav />
      <Carousel/>
      <AppRouter />
      
    </div>
  );
}
