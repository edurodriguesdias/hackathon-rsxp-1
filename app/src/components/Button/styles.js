import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ButtonContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
`;

export const ButtonStyled = styled.button`
  background-color: ${colors.secondary};
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 5px;
  padding: 10px 20px;
  border: 0;
  color: ${colors.light};
`;
