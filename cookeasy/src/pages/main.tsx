import { createRoot } from "react-dom/client";
import App from "../pages/App";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
