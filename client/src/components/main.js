import React, { useEffect, useState } from "react";
import { AppRouter } from "./app-router";
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
      <div
        className={` ${
          position > 100
            ? "fixed w-full top-0 z-50 transition ease-in-out duration-500 opacity-100 shadow-gray-200 shadow-md"
            : "opacity-0"
        }`}
      >
        <MainNav />
      </div>
      <div
        className={` ${
          position < 100
            ? "opacity-100 absolute w-full top-0 z-50"
            : "opacity-0"
        }`}
      >
        <MainNav />
      </div>
      <AppRouter />
    </div>
  );
}
