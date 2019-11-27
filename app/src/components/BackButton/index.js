import React from "react";
import BackIcon from "../../assets/backbutton.svg";
import { IconStyled } from "./styles";

function BackButton() {
  return (
    <IconStyled>
      <img src={BackIcon} />
    </IconStyled>
  );
}

export default BackButton;
