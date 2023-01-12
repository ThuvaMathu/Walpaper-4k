import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Upload from "./components/pages/upload";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
