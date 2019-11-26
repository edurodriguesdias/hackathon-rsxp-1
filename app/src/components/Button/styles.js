import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ButtonStyled = styled.button`
  color: ${colors.dark};
  font-size: 2vh;
  font-weight: 600;
  border-radius: 6px;
  height: 6vh;
  width: 100%;
  padding: 1vh;
`;
