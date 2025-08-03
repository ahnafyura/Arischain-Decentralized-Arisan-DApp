import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes.jsx";
import { ArisanProvider } from "./context/ArisanContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ArisanProvider>
        <AppRoutes />
      </ArisanProvider>
    </BrowserRouter>
  </StrictMode>
);
