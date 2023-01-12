import React, { useEffect, useState } from "react";
import { AppRouter } from "./app-router";
import Carousel from "./elements/carousel/carousel";
import MainNav from "./navbar/nav";

export default function Main() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [position, setPosition] = useState(0);
  const handleScroll = () => {
    setPosition(window.pageYOffset);
  };
  return (
    <div>
      <MainNav />
      <AppRouter />
    </div>
  );
}
