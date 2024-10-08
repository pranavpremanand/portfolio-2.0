import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SpinnerContextProvider } from "./components/Contexts/SpinnerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpinnerContextProvider>
        <App />
      </SpinnerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
