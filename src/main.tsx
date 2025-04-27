import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./About";
import Serdica from "./Serdica";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      {" "}
      {}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/serdica" element={<Serdica />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
