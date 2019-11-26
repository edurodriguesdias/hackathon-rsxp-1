import React from "react";
import Button from "../../components/Button";
import { ContainerStyled, InputStyled } from "../../styles/components";
import { FormStyled } from "./styles";
export default function LoginPage({ navigation }) {
  return (
    <ContainerStyled>
      <FormStyled>
        <InputStyled type="email" placeholder="digite aqui seu e-mail" />
        <InputStyled type="password" placeholder="digite aqui sua senha" />
        <Button text="acessar" />
      </FormStyled>
    </ContainerStyled>
  );
}
