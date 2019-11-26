import React from "react";
import Buttton from "../../components/Button";
import { ContainerStyled } from "../../styles/components";
import { TestStyled } from "./styles";

export default function SignStudentPage({ navigation }) {
  return (
    <ContainerStyled>
      <TestStyled>SignStudent</TestStyled>
      <Buttton text="ola" />
    </ContainerStyled>
  );
}
