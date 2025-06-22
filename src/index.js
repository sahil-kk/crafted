import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

// ✅ Add these:
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider> {/* ✅ Required for useTheme() */}
            <App />
        </ThemeProvider>
    </React.StrictMode>
);