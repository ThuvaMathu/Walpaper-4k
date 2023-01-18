import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Upload from "./components/pages/upload";
import MainNav from "./components/navbar/nav";

export const AppRouter = () => (
  <>
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>
);
