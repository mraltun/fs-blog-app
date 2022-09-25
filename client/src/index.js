import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBK8wh_TdcDY8WgBMR5hNYz90QVnrOok5M",
  authDomain: "fs-blog-app.firebaseapp.com",
  projectId: "fs-blog-app",
  storageBucket: "fs-blog-app.appspot.com",
  messagingSenderId: "526669963893",
  appId: "1:526669963893:web:0a2e637962fc39a5448e3c",
};

const app = initializeApp(firebaseConfig);

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
