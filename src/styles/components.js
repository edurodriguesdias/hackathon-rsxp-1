import styled, { css } from "styled-components";
import logo from "../assets/logo.png";
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
  position: relative;

  &:before {
    content: "";
    width: 200px;
    height: 200px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;

    top: 0vw;
    z-index: 9999;
  }

  ${props =>
    props.logoCenter
      ? css`
          &:before {
            left: auto;
            right: auto;
          }
        `
      : css`
          &:before {
            left: 10px;
          }
        `};
`;
export const InputStyled = styled.input`
  width: 40%;
  display: inline-block;
  color: red;
  border: 0;
  background: transparent;
  border-bottom: 3px solid ${colors.gray};
  color: ${colors.primary};
  font-size: 2rem;
  margin-top: 5vh;
  text-align: center;
  transition: border-bottom 1s;

  &::placeholder {
    color: ${colors.gray};
  }

  &:focus {
    border-bottom: 3px solid ${colors.primary};
    transition: border-bottom 1s;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop};
`;

export const FileAreaStyled = styled.label`
  display: flex;
  justify-content: center;
  border: 1px solid ${colors.gray};
  width: 10vw;
  height: 10vw;
  border-radius: 20px;
  margin-top: 5vh;
  padding: 2vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    border: 1px solid ${colors.secondary};
  }
  .has-thumbnail {
    display: none;
  }

  img {
    width: 50px;
    height: 50px;
  }

  input {
    display: none;
  }
`;

export const TitleLits = styled.h2`
  font-size: 3.5rem;
  margin-top: 22px;
  margin-bottom: 22px;
  width: 100%;
  height: auto;
  color: ${colors.primary};
  text-align: ${({ align }) => align};
`;

export const UlList = styled.ul`
  width: 100%;
  height: auto;
`;

export const LiList = styled.li`
  width: 100%;
  height: auto;
  list-style-type: none;
  border-top: 1px solid #ccc;
  padding: 16px 0 16px 0;
`;

export const DivList = styled.div`
  padding: 25px 16px;
  width: 80vw;
  min-height: 90%;
  margin: 0 auto;
  max-width: 1200px;
  background-color: ${colors.light};
  border-radius: 20px 20px 0 0;
  margin-top: 10vh;
`;

export const LabelList = styled.p`
  font-size: 1rem;
  color: ${colors.darkGray};
`;

export const TextListBold = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  span {
    cursor: pointer;
  }
  span:hover {
    color: ${colors.secondary};
  }
`;

export const TextList = styled.p`
  color: ${colors.darkGray};
  font-size: 1.5rem;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 30px;
    height: 30px;
  }
`;
export const DivCol20 = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const ButtonMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: ${colors.primary};
  position: fixed;
  right: 3%;
  bottom: 5%;
  border-radius: 50px;
  margin-bottom: ${({ margin }) => margin};
  opacity: 0.5;
  cursor: pointer;
  p {
    display: none;
  }
  img {
    width: 40px;
    height: 40px;
  }
  &:hover {
    opacity: 1;
    width: 300px;
    align-items: left;
  }
  &:hover img {
    position: absolute;
    left: 80%;
  }
  &:hover p {
    position: absolute;
    display: inline-block;
    right: 30%;
    color: ${colors.light};
  }
`;

export const TextLink = styled.div`
  color: ${colors.blackGray};
  text-align: center;
  margin-top: 3%;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${colors.secondary};
  }
`;
