import React,{useState} from "react";
import { TestStyled } from "./styles";
import emailIcon from '../../assets/e-mail-envelope.png';
import api from "../../services/api";
import { TitleLits,UlList, LiList, DivList,TextListBold,LabelList,TextList,DivRow,DivCol,DivCol20} from "../../styles/components";
export default function DashboardCompanyPage({ navigation }) {
  const [schools,setSchools] = useState([]);
  async function searchScool() {
    // event.preventDefault();
    const { data } = await api.get("/schools ");
    setSchools(data);
    
  }
  searchScool();
  


  return (
      <DivList>
           {/* <TestStyled>DashboardSchool</TestStyled> */}
           <TitleLits>Escolas</TitleLits>
           <UlList>
           {schools.map(school =>
             <LiList>
               <DivRow>
                  <DivCol>
              
                  <TextListBold>{school.name}</TextListBold>
                  <TextList>{school.street}, {school.number} - {school.city}/ {school.state}</TextList>
                  <TextList>{school.phone}</TextList>
                  <TextList><a href="mailto:{school.email}" >{school.email}</a></TextList>
                 
                  </DivCol>
                
                  <DivCol20>
                    <LabelList>Alunos</LabelList>
                    <TextListBold>23</TextListBold>
                  </DivCol20>
                
                </DivRow>
             </LiList>
              )}
           </UlList>


      </DivList> 
      // School:
      // v
   
    );
}
  