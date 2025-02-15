import React from "react";

const Button = ({ btnName, btnCss, btnType }) => {
  return (
    <button type={btnType} className={btnCss}>
      {btnName}
    </button>
  );
};

export default Button;
