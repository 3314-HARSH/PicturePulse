import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Appv1 from "./App-v1";
// import Appv2 from "./App-v2";
// import Appv3 from "./App-v3";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={2} />
    <StarRating
      maxRating={5}
      message={["terrible", "bad", "okey", "good", "Awesome"]}
      color="red"
      size="100"
    />
    <StarRating /> */}
  </React.StrictMode>
);
