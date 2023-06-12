import React from "react";
import { Buttons } from "../../styles/Button/Button.styled";

function Button({ text, onClick, type, className }) {
  return (
    <Buttons className={className} onClick={onClick} type={type}>
      {text}
    </Buttons>
  );
}

export default Button;
