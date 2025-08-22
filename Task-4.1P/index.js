import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Get the root element from public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside #root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
