import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Root from "./root";
ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);
