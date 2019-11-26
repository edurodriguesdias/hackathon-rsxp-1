import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    font-family: 'Open Sans';
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
      background: #4F4F4F;
      border-radius: 100px;
  }

  html,body,#root{
    height:100%;
    width:100%;
    overflow-y:hidden;
    overflow-y:hidden;
    position: relative;
  }
`;
