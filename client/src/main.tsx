import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
