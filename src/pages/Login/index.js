import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,
  TextLink,
} from "../../styles/components";
function LoginPage({ history }) {
  toast.configure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) {
      return false;
    }

    if (!email && !password) {
      toast.warn("preencha com seu e-mail e senha antes de continuar");
      return false;
    }
    if (!email) {
      toast.warn("preencha com seu e-mail  antes de continuar");
      return false;
    }
    if (!password) {
      toast.warn("preencha com suasenha antes de continuar");
      return false;
    }

    setLoading(true);
    const { data } = await api.post("/sessions", {
      email,
      password
    });

    localStorage.setItem("rsxp:token", data.token);

    if (data.error) {
      toast.error(data.error);
      setLoading(false)
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

  async function goView(){
      history.push("/student");
  }

  return (
    <ContainerStyled logoCenter={true}>
      <FormStyled onSubmit={handleSubmit} marginTop="10%">
        <InputStyled
          type="email"
          placeholder="e-mail *"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <InputStyled
          type="password"
          placeholder="senha *"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button text="acessar" loading={loading} />

        <TextLink onClick={() => goView()}>
          Aluno clique aqui para efetuar seu cadastro! =)
        </TextLink>
      </FormStyled>
    </ContainerStyled>
  );
}

export default LoginPage;
