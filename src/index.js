import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

// Import custom google fonts
// Dosis
import "./Assets/fonts/Dosis/Dosis-Light.ttf";
import "./Assets/fonts/Dosis/Dosis-Regular.ttf";
import "./Assets/fonts/Dosis/Dosis-Bold.ttf";
// Lato
import "./Assets/fonts/Lato/Lato-Light.ttf";
import "./Assets/fonts/Lato/Lato-LightItalic.ttf";
import "./Assets/fonts/Lato/Lato-Regular.ttf";
import "./Assets/fonts/Lato/Lato-Italic.ttf";
import "./Assets/fonts/Lato/Lato-Bold.ttf";
import "./Assets/fonts/Lato/Lato-BoldItalic.ttf";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
