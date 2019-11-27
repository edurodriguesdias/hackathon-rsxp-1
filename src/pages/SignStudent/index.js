import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import Buttton from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,
  TitleLits
} from "../../styles/components";
import { BoxCompaniesStyled, SelectStyled } from "./styles";

function SignStudentPage({ history }) {
  async function getCompanies() {
    let { data } = await api.get("/companies");
    setCompanies(data);
  }
  async function getSchools() {
    let { data } = await api.get("/schools");
    setSchools(data);
  }
  useEffect(() => {
    getCompanies();
    getSchools();
  }, []);

  const [companies, setCompanies] = useState([]);
  const [schools, setSchools] = useState([]);
  // setCompanies(data);
  console.log("companies", companies);
  return (
    <ContainerStyled>
      <BackButton />

      <FormStyled>
        <TitleLits align="center">cadastro do aluno</TitleLits>
        <InputStyled type="text" placeholder="nome*" />
        <InputStyled type="tel" placeholder="telefone*" />
        <InputStyled type="tel" placeholder="data de nascimento*" />
        <InputStyled type="mail" placeholder="e-mail*" />
        <InputStyled type="text" placeholder="endereço*" />
        <InputStyled type="tel" placeholder="numero*" />
        <InputStyled type="text" placeholder="bairro*" />
        <InputStyled type="text" placeholder="cidade*" />
        <InputStyled type="text" placeholder="uf*" maxLength="2" />
        <InputStyled type="tel" placeholder="cep*" />
        <InputStyled type="text" placeholder="escolaridade*" />
        <SelectStyled>
          <option value="">Selecione uma escola *</option>
          {schools.map(obj => (
            <option>{obj.name}</option>
          ))}
        </SelectStyled>
        <BoxCompaniesStyled>
          {companies.map((obj, indice) => (
            <img key={indice} src={obj.logo.url} alt={obj.name} />
          ))}
        </BoxCompaniesStyled>
        <InputStyled type="text" placeholder="sugira uma empresa" />
        <Buttton text="cadastrar" />
      </FormStyled>
    </ContainerStyled>
  );
}
export default SignStudentPage;
