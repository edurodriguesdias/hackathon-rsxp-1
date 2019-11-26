import PropTypes from "prop-types";
import React from "react";
import { ButtonContentStyled, ButtonStyled } from "./styles";

function Button({ text, handler }) {
  return (
    <ButtonContentStyled>
      <ButtonStyled onClick={handler}>{text}</ButtonStyled>
    </ButtonContentStyled>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func
};

export default Button;
