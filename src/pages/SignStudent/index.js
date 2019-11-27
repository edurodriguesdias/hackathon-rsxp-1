import React from "react";
import BackButton from "../../components/BackButton";
import Buttton from "../../components/Button";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,
  TitleLits
} from "../../styles/components";

export default function SignStudentPage({ navigation }) {
  return (
    <ContainerStyled>
      <BackButton />

      <FormStyled>
        <TitleLits align="center">cadastro do aluno</TitleLits>
        <InputStyled type="text" placeholder="nome" />
        <InputStyled type="tel" placeholder="telefone" />
        <InputStyled type="tel" placeholder="data de nascimento" />
        <InputStyled type="mail" placeholder="e-mail" />
        <InputStyled type="text" placeholder="endereço" />
        <InputStyled type="tel" placeholder="numero" />
        <InputStyled type="text" placeholder="bairro" />
        <InputStyled type="text" placeholder="cidade" />
        <InputStyled type="text" placeholder="uf" maxLength="2" />
        <InputStyled type="tel" placeholder="cep" />
        <InputStyled type="text" placeholder="escolaridade" />
        <Buttton text="cadastrar" />
      </FormStyled>
    </ContainerStyled>
  );
}
