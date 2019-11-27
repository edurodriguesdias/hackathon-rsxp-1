import React, { useState } from "react";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FormStyled,
  InputStyled,
  TitleLits
} from "../../styles/components";

export default function SignSchoolPage({ history }) {
  toast.configure();

  const whiteList = [];
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("E.E Miguel Roque");
  const [phone, setPhone] = useState("(11) 5011-3071");
  const [email, setMail] = useState("contato@miguelroque.com.br");
  const [street, setStreet] = useState("R. Domiciano Leite Ribeiro");
  const [number, setNumber] = useState("455");
  const [district, setDistrict] = useState("Jabaquara");
  const [city, setCity] = useState("São Paulo");
  const [state, setState] = useState("SP");
  const [zip_code, setZipCode] = useState("04317-000");

  async function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      name,
      phone,
      email,
      street,
      number,
      district,
      city,
      state,
      zip_code
    };

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key] && whiteList.indexOf(key) === -1) {
          toast.warn(`todos os campos com '*' são obrigatórios`);
          return false;
        }
      }
    }

    setLoading(true);
    const { data } = await api.post("/schools", obj);

    if (data.error) {
      setLoading(false);
      toast.error(data.error);
      return false;
    }
    toast.success("cadastro realizado com sucesso");
    history.goBack();
  }
  return (
    <ContainerStyled>
      <BackButton route="/admin/dashboard" />
      <FormStyled onSubmit={handleSubmit}>
        <TitleLits align="center">cadastro da escola</TitleLits>
        <InputStyled
          type="text"
          placeholder="nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <InputStyled
          type="tel"
          placeholder="telefone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <InputStyled
          type="mail"
          placeholder="e-mail"
          value={email}
          onChange={event => setMail(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="endereço"
          value={street}
          onChange={event => setStreet(event.target.value)}
        />
        <InputStyled
          type="tel"
          placeholder="numero"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="bairro"
          value={district}
          onChange={event => setDistrict(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="cidade"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="uf"
          maxLength="2"
          value={state}
          onChange={event => setState(event.target.value)}
        />
        <InputStyled
          type="tel"
          placeholder="cep"
          value={zip_code}
          onChange={event => setZipCode(event.target.value)}
        />
        <Button text="cadastrar" loading={loading} />
      </FormStyled>
    </ContainerStyled>
  );
}
