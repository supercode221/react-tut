import React from "react";

const Button = ({ btnName, btnCss }) => {
  return (
    <button type="button" className={btnCss}>
      {btnName}
    </button>
  );
};

export default Button;
