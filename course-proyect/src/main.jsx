import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { StyleGuide } from "./styleguide/StyleGuide.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/styleguide" element={<StyleGuide />} />
    </Routes>
  </BrowserRouter>
);
