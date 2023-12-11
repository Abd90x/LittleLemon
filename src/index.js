import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReservContextProvider } from "./Service/ReservContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReservContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReservContextProvider>
);
