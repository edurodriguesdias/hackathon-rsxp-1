import styled,{css} from "styled-components";
import { colors } from "../../styles/colors";

export const SelectStyled = styled.select`
  width: 40%;
  display: inline-block;
  color: red;
  border: 0;
  background: transparent;
  border-bottom: 3px solid ${colors.gray};
  color: ${colors.gray};
  font-size: 2rem;
  margin-top: 5vh;
  text-align: center;
  transition: border-bottom 1s;
`;

export const BoxCompaniesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
`;

export const ImageStyled = styled.img`
background :  ${colors.gray};
margin: 5px;
width:10%;
height:auto;
text-align: center;
font-size: 1.5em;
border:3px solid ${colors.light};
${props => (
  props.active && css`
    border:3px solid ${colors.secondary};
  `
)}
`;


