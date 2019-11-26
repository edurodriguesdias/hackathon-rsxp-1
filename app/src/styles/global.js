import { createGlobalStyle } from "styled-components";
import { colors } from "../styles/colors";
export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    font-size:100%;
    font-style: normal;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased !important;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: ${colors.dark};
      border-radius: 100px;
  }

  html,body,#root{
    height:100%;
    width:100%;
    overflow-y:hidden;
    overflow-y:hidden;
    position: relative;
  }
  body{
    background: rgb(131,58,180);
    background: linear-gradient(152deg,  rgb(131,58,180) 45%, rgba(252,176,69,1) 100%);
  }
`;
