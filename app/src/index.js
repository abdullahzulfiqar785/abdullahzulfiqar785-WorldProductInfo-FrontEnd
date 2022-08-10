import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.css";
import "./sub-main.css";
import reportWebVitals from "./reportWebVitals";
// import "font-awesome/fonts";
import "font-awesome/css/font-awesome.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
