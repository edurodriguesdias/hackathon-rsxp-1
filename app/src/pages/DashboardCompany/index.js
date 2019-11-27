import React from "react";
import { TestStyled } from "./styles";
import emailIcon from '../../assets/e-mail-envelope.png';
import { TitleLits,UlList, LiList, DivList,TextListBold,LabelList,TextList,DivRow,DivCol,DivCol20} from "../../styles/components";
export default function DashboardCompanyPage({ navigation }) {
  return (
      <DivList>
           {/* <TestStyled>DashboardSchool</TestStyled> */}
           <TitleLits>Escolas</TitleLits>
           <UlList>
             <LiList>
               <DivRow>
                  <DivCol>
              
                  <TextListBold>Nome Escola</TextListBold>
                  <TextList>Alameda das Araras, 23 Barueri</TextList>
                  <TextList>(11) 94785-5605</TextList>
                  <TextList>escola@teste.com.br</TextList>
                 
                  </DivCol>
                
                  <DivCol20>
                    <LabelList>Alunos</LabelList>
                    <TextListBold>23</TextListBold>
                  </DivCol20>
                
                </DivRow>
             </LiList>
           </UlList>

           <UlList>
             <LiList>
               <DivRow>
                  <DivCol>
              
                  <TextListBold>Nome Escola</TextListBold>
                  <TextList>Alameda das Araras, 23 Barueri</TextList>
                  <TextList>(11) 94785-5605</TextList>
                  <TextList>escola@teste.com.br</TextList>
                 
                  </DivCol>
                
                  <DivCol20>
                    <LabelList>Alunos</LabelList>
                    <TextListBold>23</TextListBold>
                  </DivCol20>
                
                </DivRow>
             </LiList>
           </UlList>


      </DivList> 
      // School:
      // v
      // {
      //     "name": "ITB Brasílio Flores de Azevedo",
      //     "phone": "(11) 4199-4220",
      //     "mail": "contato@itb.com.br",
      //     "street": "R. Interna Grupo Bandeirante",
      //     "number": 138,
      //     "district": "Jardim Belval",
      //     "city": "Barueri",
      //     "state": "São Paulo",
      //     "zip_code": "Barueri"
      // }
    );
}
  