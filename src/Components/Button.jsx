import React from "react";

const Button = (props) => {
  const { children, style } = props;
  return (
    <div>
      <button style={style ? style : { background: "red" }}>{children}</button>
    </div>
  );
};

export default Button;
