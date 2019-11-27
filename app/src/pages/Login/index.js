import React, { useState } from "react";
import Button from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FormStyled,
  InputStyled
} from "../../styles/components";
function LoginPage({ history }) {
  const [email, setEmail] = useState("admin@mail.com");
  const [password, setPassword] = useState("1234567");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const { data } = await api.post("/sessions", {
      email,
      password
    });

    localStorage.setItem("rsxp:token", data.token);
    history.push("/company/dashboard");
  }

  return (
    <ContainerStyled aqui>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <InputStyled
          type="password"
          placeholder="senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button text="acessar" loading={loading} />
      </FormStyled>
    </ContainerStyled>
  );
}

export default LoginPage;
