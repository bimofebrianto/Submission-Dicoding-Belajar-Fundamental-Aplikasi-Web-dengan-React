import React from "react";
import PropType from "prop-types";

const Input = ({ placeholder, backgroundColor, color, padding, width, margin, ...rest }) => {
  return (
    <>
      <input
        style={{
          padding: padding,
          width: width,
          backgroundColor: backgroundColor,
          color: color,
          border: `5px solid ${color}`,
          margin: margin,
        }}
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

Input.protoType = {
  width: PropType.string,
  margin: PropType.string,
  placeholder: PropType.string,
  backgroundColor: PropType.string,
  color: PropType.string,
  padding: PropType.string,
  rest: PropType.object,
};

export default Input;
