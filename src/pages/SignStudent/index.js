import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";
import Buttton from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,

  TitleLits
} from "../../styles/components";
import { BoxCompaniesStyled ,  ImageStyled,SelectStyled} from "./styles";

function SignStudentPage({ history }) {
  toast.configure();
  async function getCompanies() {
    let { data } = await api.get("/companies");
    setCompanies(data);
  }
  async function getSchools() {
    let { data } = await api.get("/schools");
    setSchools(data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    toast.success("cadastro realizado com sucesso");
    history.goBack();
  }
  useEffect(() => {
    getCompanies();
    getSchools();
  }, []);

  const [companies, setCompanies] = useState([]);
  const [schools, setSchools] = useState([]);
  const [companyActive, setCompanyActive] = useState([]);
  // setCompanies(data);
  console.log("companies", companies);
  return (
    <ContainerStyled>
      <BackButton />

      <FormStyled onSubmit={handleSubmit}>
        <TitleLits align="center">cadastro do aluno</TitleLits>
        <InputStyled type="text" placeholder="nome*" value="Marcos Vinicius Ricardo"  />
        <InputStyled type="tel" placeholder="telefone*" value="11999982424" />
        <InputStyled type="tel" placeholder="data de nascimento*" value="02/08/2004" />
        <InputStyled type="mail" placeholder="e-mail*" value="marcos@gmail.com.br"/>
        <InputStyled type="text" placeholder="endereço*" value="Rua Saturno" />
        <InputStyled type="tel" placeholder="numero*" value="233"/>
        <InputStyled type="text" placeholder="bairro*" value="Jardim Silveira"/>
        <InputStyled type="text" placeholder="cidade*" value="Jandira" />
        <InputStyled type="text" placeholder="uf*" maxLength="2" value="SP" />
        <InputStyled type="tel" placeholder="cep*" value="064455560" />
        <InputStyled type="text" placeholder="escolaridade*" value="Ensino médio"/>
        <SelectStyled>
          <option value="">selecione sua escola *</option>
          {schools.map(obj => (
            <option>{obj.name}</option>
          ))}
        </SelectStyled>
        <BoxCompaniesStyled>
          {companies.map((obj, indice) => (
            <ImageStyled key={indice} src={obj.logo.url} alt={obj.name} onClick={() => setCompanyActive(obj.id)} active={obj.id == companyActive} />
          ))}
        </BoxCompaniesStyled>
        <InputStyled type="text" placeholder="sugira uma empresa" />
        <Buttton text="cadastrar" />
      </FormStyled>
    </ContainerStyled>
  );
}
export default SignStudentPage;
