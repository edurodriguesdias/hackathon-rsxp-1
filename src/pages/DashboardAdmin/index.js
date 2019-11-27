import React, { useEffect, useState } from "react";
import IconCompany from "../../assets/factory.png";
import IconScholl from "../../assets/school.png";
import BackButton from "../../components/BackButton";
import SubTitle from "../../components/SubTitle";
import api from "../../services/api";
import { ButtonMenu, DivCol, DivCol20, DivList, DivRow, LabelList, LiList, TextList, TextListBold, TitleLits, UlList } from "../../styles/components";
export default function DashboardAdminPage({ navigation,history }) {
  
  const [schools, setSchools] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [type, setType] = useState('Escolas');
  var data = [];
  
  useEffect( ()=>{
    async function getData(){
      if(type == "Escolas"){
        // const { data } = await api.get("/schools ");
        // setSchools(data);

        data = [{
          "name": "EMEF José Luiz Pinto",
          "street": "Rua Cassiano Ricardo",
          "number": "77",
          "city" : "São Roque",
          "state" : "São Paulo",
          "numbers" : "1",
        },
        {
          "name": "EMEF Iracema Villaça",
          "street": "Rua Santa Virginia",
          "number": "66",
          "city" : "São Roque",
          "state" : "São Paulo",
          "numbers" : "1",
        }]
        setSchools(data);
      }else{

        data = [{
          "name": "Globo",
          "numbers" : "1",
        },
        {
          "name": "LinkApi",
          "numbers" : "1",
        }]
        // const { data } = await api.get("/schools ");
        setCompanies(data)

        
      }
    }
    

    getData()
    
  },[type]);

  async function goView(page){
    if(page == "Empresas"){
      history.push("/company");
    }else{
      history.push("/school");
    }
  }

  return (
    <DivList>
      <BackButton/>
      <ButtonMenu onClick={() => goView('Escolas')} margin="80px">
          <p>Cadastro de Escolas</p>
          <img src={IconScholl}/>
      </ButtonMenu>
      <ButtonMenu onClick={() => goView('Empresas')}>
        <img src={IconCompany}/>
        <p>Cadastro de Empresas</p>
      </ButtonMenu>
      {/* <TestStyled>DashboardSchool</TestStyled> */}
      <TextListBold> <span onClick={() => setType('Escolas')}>Escolas</span> / <span onClick={() => setType('Empresas')}>Empresas</span></TextListBold>
      <TitleLits>{type}</TitleLits>
      {type == "Escolas" &&
        <>
        <SubTitle text="segue abaixo uma listagem de escolas não cadastradas que possuem alunos interessados em participar na plataforma" />
        </>
      }
      {type == "Empresas" &&
        <>
        <SubTitle text="segue abaixo uma listagem de empresas não cadastradas que alunos demonstraram interesse" />
        </>
      }
      <UlList>
        {type == "Escolas" &&
        <>
        {schools.map((school,indice) => (
          <LiList key={indice}>
            <DivRow>
              <DivCol>
                <TextListBold>{school.name}</TextListBold>
                <TextList>
                  {school.street}, {school.number} - {school.city}/{" "}
                  {school.state}
                </TextList>
                {/* <TextList>{school.phone}</TextList>
                <TextList>
                  <a href="mailto:{school.mail}">{school.email}</a>
                </TextList> */}
              </DivCol>

              <DivCol20>
                <LabelList>Alunos</LabelList>
                <TextListBold>{school.numbers}</TextListBold>
              </DivCol20>
            </DivRow>
          </LiList>
        ))}
        </>
        }

{type == "Empresas" &&
<>
        {companies.map((company,indice) => (
          <LiList key={indice}>
            <DivRow>
              <DivCol>
                <TextListBold>{company.name}</TextListBold>
              </DivCol>

              <DivCol20>
                <LabelList>Alunos</LabelList>
                <TextListBold>{company.numbers}</TextListBold>
              </DivCol20>
            </DivRow>
          </LiList>
        ))}
        </>
        }
      </UlList>
      
    </DivList>

    // School:
    // 
  );
}
