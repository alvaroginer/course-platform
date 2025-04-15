import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { StyleGuide } from "./styleguide/StyleGuide.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Route path="/" element={<App />}></Route>
    <Route path="/styleguide" element={<StyleGuide />} />
  </BrowserRouter>
);
