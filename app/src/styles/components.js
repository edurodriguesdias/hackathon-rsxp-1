import styled from "styled-components";
import { colors } from "../styles/colors";

export const ContainerStyled = styled.div`
  display: flex;
  width: 80vw;
  min-height: 80vh;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.light};
  border-radius: 20px;
  margin: 10vh auto;
  overflow-y: auto;
  padding-bottom: 5vh;
`;
export const InputStyled = styled.input`
  width: 40%;
  display: inline-block;
  color: red;
  border: 0;
  background: transparent;
  border-bottom: 2px solid #cecece;
  color: ${colors.primary};
  font-size: 2rem;
  margin-top: 5vh;
  text-align: center;

  &::placeholder {
    color: ${colors.gray};
  }
`;

export const TitleLits = styled.h2`
  font-size: 24px;
  margin-top: 22px;
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
