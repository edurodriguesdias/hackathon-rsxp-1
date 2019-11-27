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
export default function DashboardCompanyPage({ navigation }) {
  const [schools, setSchools] = useState([]);
  async function searchScool() {
    // event.preventDefault();
    const { data } = await api.get("/schools ");
    setSchools(data);
  }
  searchScool();

  return (
    <DivList>
      <BackButton />
      {/* <TestStyled>DashboardSchool</TestStyled> */}
      <TitleLits>Escolas</TitleLits>
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
