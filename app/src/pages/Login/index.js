import React from "react";
import Button from "../../components/Button";
import {
  ContainerStyled,
  FormStyled,
  InputStyled
} from "../../styles/components";

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
