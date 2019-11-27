import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FormStyled,
  InputStyled
} from "../../styles/components";
function LoginPage({ history }) {
  toast.configure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const { data } = await api.post("/sessions", {
      email,
      password
    });

    localStorage.setItem("rsxp:token", data.token);

    if (data.error) {
      toast.error(data.error);
      return false;
    }

    toast.info(`olá, ${data.user.name}`);
    if (data.user.type == 1) {
      //admin
      history.push("/admin/dashboard");
    } else {
      history.push("/company/dashboard");
    }
  }

  return (
    <ContainerStyled logoCenter={true}>
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
