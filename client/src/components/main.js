import React from "react";
import { AppRouter } from "../app-router";
import AppProvider from "../context/provider";

export default function Main() {
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const [position, setPosition] = useState(0);
  // const handleScroll = () => {
  //   setPosition(window.pageYOffset);
  // };
  return (
    <div>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}
