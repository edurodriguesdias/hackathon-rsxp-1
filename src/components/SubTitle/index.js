import PropTypes from "prop-types";
import React from "react";
import { DescriptionStyled } from "./styles";
function SubTitle({ text }) {
  return <DescriptionStyled>{text}</DescriptionStyled>;
}

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default SubTitle;
