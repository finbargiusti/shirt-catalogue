import React from "react";
import loadingGif from "./loading.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingWrapper">
      <img src={loadingGif} />
    </div>
  );
};

export default Loading;
