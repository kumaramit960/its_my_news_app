import React from "react";
import loding from "./loding.gif";

function Spiner() {
  return (
    <div className="text-center">
      <img src={loding} alt="loding" />
    </div>
  );
}

export default Spiner;
