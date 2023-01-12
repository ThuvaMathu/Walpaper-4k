import React from "react";
import { AppRouter } from "../app-router";

import MainNav from "./navbar/nav";

export default function Main() {
  return (
    <div>
      <MainNav />
      <AppRouter />
    </div>
  );
}
