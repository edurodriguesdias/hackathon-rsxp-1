import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import api from "../../services/api";
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
  UlList
} from "../../styles/components";
export default function DashboardAdminPage({ navigation }) {
  
  const [schools, setSchools] = useState([]);
  const [type, setType] = useState([]);
  
 
  async function searchScool(selected) {
    // event.preventDefault();
    const { data } = await api.get("/schools");
    setType(selected);
    setSchools(data);
  }
  

  searchScool('Escolas');

  // setType('Escola');
 function selectType(selected) {
    console.log(selected)
  
    searchScool(selected);
    // event.preventDefault();
    // const { data } = await api.get("/schools ");
    // setSchools(data);
  }


  return (
    <DivList>
      <BackButton />
      {/* <TestStyled>DashboardSchool</TestStyled> */}
      <TextListBold> <a onClick={event => selectType('Escolas')}>Escolas</a> / <a onClick={event => selectType('Empresas')}>Empresas</a></TextListBold>
      <TitleLits>{type}</TitleLits>
      <UlList>
        {schools.map(school => (
          <LiList>
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
      </UlList>
    </DivList>
    // School:
    // v
  );
}
