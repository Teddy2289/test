import React from "react";
import { Buttons } from "../../styles/Button/Button.styled";

function Button({ text, onClick, type }) {
  return (
    <Buttons  onClick={onClick} type={type}>
      {text}
    </Buttons>
  );
}

export default Button;
