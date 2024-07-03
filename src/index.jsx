import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
			<BrowserRouter basename="/testDashboard/">
				<h1 className="hidden">test</h1>
				<App />
			</BrowserRouter>
			<ToastContainer />
	</React.StrictMode>
);
