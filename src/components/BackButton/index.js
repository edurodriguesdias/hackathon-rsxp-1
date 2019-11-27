import React from "react";
import { withRouter } from "react-router-dom";
import BackIcon from "../../assets/backbutton.svg";
import { IconStyled } from "./styles";

function BackButton({ history }) {
  async function back() {
    history.goBack();
  }
  return (
    <IconStyled onClick={back}>
      <img src={BackIcon} />
    </IconStyled>
  );
}

export default withRouter(BackButton);
