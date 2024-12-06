import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BookContextProvider from "./context/BookContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BookContextProvider>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </BookContextProvider>
);