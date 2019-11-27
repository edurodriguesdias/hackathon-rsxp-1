import styled, { css } from "styled-components";
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
  padding: 10px 15px;
  border: 0;
  color: ${colors.light};
  transition: background-color 0.5s;
  min-width: 125px;
  width: 125px;
  min-height: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  ${({ loading }) => {
    loading &&
      css`
        background-color: ${colors.primary};
      `;
  }}

  svg {
    width: 100%;
    height: 40px;
    position: absolute;
    left: 6px;

    top: 10px;
  }

  &:hover {
    background-color: ${colors.primary};
    transition: background-color 0.5s;
  }
`;
