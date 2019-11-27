import React, { useState,useEffect } from "react";
import BackButton from "../../components/BackButton";
import IconScholl from "../../assets/school.png"
import IconCompany from "../../assets/factory.png"
import api from "../../services/api";
import SubTitle from "../../components/SubTitle";
import {
  DivCol,
  DivCol20,
  DivList,
  DivRow,
  LabelList,
  LiList,
  TextList,
  TextListBold,
  TitleLits,
  UlList,
  ButtonMenu,
} from "../../styles/components";
export default function DashboardAdminPage({ navigation,history }) {
  
  const [schools, setSchools] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [type, setType] = useState('Escolas');

  
  useEffect( ()=>{
    async function getData(){
      if(type == "Escolas"){
        const { data } = await api.get("/schools ");
        setSchools(data);
      }else{
        const { data } = await api.get("/schools ");
        setCompanies([])
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
      <ButtonMenu onClick={() => goView('Escolas')}>
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
                <TextList>{school.phone}</TextList>
                <TextList>
                  <a href="mailto:{school.mail}">{school.email}</a>
                </TextList>
              </DivCol>

              <DivCol20>
                <LabelList>Alunos</LabelList>
                <TextListBold>23</TextListBold>
              </DivCol20>
            </DivRow>
          </LiList>
        ))}
        </>
        }

{type == "Empresas" &&
<>
        {companies.map((school,indice) => (
          <LiList key={indice}>
            <DivRow>
              <DivCol>
                <TextListBold>{school.name}</TextListBold>
                <TextList>
                  {school.street}, {school.number} - {school.city}/{" "}
                  {school.state}
                </TextList>
                <TextList>{school.phone}</TextList>
                <TextList>
                  <a href="mailto:{school.mail}">{school.email}</a>
                </TextList>
              </DivCol>

              <DivCol20>
                <LabelList>Alunos</LabelList>
                <TextListBold>23</TextListBold>
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
