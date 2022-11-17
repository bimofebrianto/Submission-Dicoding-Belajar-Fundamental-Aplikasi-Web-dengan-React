import React from "react";
import PropType from "prop-types";

const Jarak = ({ width, height }) => {
  return <div style={{ width: width, height: height }}></div>;
};

Jarak.protoType = {
  width: PropType.string,
  height: PropType.string,
};
export default Jarak;
