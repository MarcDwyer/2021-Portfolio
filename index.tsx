import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import App from "./src/App";
import { ImageUrls } from "./src/app_data/urls";
import "./index.scss";
console.log("is this live");
ReactDOM.render(
  <>
    <Helmet>
      <title>Marc's portfolio</title>
      <meta property="og:image" content={ImageUrls.myProfile} />
    </Helmet>
    <App />
  </>,
  document.getElementById("root")
);
