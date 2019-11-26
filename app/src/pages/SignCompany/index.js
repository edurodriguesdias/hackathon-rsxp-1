import React from "react";
import Button from "../../components/Button";
import {
  ContainerStyled,
  FormStyled,
  InputStyled
} from "../../styles/components";

export default function SignCompanyPage({ navigation }) {
  return (
    <ContainerStyled>
      <FormStyled>
        <InputStyled type="text" placeholder="nome" />
        <InputStyled type="text" placeholder="cnpj" />
        <InputStyled type="tel" placeholder="telefone" />
        <InputStyled type="mail" placeholder="e-mail" />
        <InputStyled type="text" placeholder="endereço" />
        <InputStyled type="text" placeholder="bairro" />
        <InputStyled type="text" placeholder="cidade" />
        <InputStyled type="text" placeholder="uf" maxLength="2" />
        <InputStyled type="tel" placeholder="cep" />
        <Button text="cadastrar" />
      </FormStyled>
    </ContainerStyled>
  );
}
