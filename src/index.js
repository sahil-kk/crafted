import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { ThemeProvider } from "@material-tailwind/react";

// ✅ Import BrowserRouter
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router> {/* ✅ Wrap App in Router */}
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);