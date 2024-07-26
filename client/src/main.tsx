import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import "./style/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
