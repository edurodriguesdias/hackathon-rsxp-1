import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

require("dotenv").config();

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
