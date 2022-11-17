import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
  <div className="container-loading">
    <ReactLoading type={"spinningBubbles"} color={"#5cb8e4"} height={180} width={100} />
  </div>
);
export default Loading;
