import React from "react";
import { Buttons } from "../../styles/Button/Button.styled";

// dans cette funtion on passe en parametre les props suivant: text,onClick,type,className
function Button({ text, onClick, type, className }) {
  return (
    // Utilisation du composant styled "Buttons" provenant de "Button.styled.js"
    <Buttons className={className} onClick={onClick} type={type}>
      {text}
    </Buttons>
  );
}

export default Button;
