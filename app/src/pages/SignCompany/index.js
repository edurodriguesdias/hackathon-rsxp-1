import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import PictureIcon from "../../assets/picture.svg";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import api from "../../services/api";
import {
  ContainerStyled,
  FileAreaStyled,
  FormStyled,
  InputStyled
} from "../../styles/components";

export default function SignSchoolPage({ history }) {
  toast.configure();

  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setMail] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const { data } = await api.post("/companies", {
      thumbnail,
      name,
      cnpj,
      phone,
      email,
      street,
      number,
      district,
      city,
      state,
      zip_code
    });

    if (data.error) {
      setLoading(false);
      toast.error(data.error);
      return false;
    }
    toast.sucess("cadastro realizado com sucesso");
    history.push("/login");
  }

  return (
    <ContainerStyled>
      <BackButton />
      <FormStyled onSubmit={handleSubmit}>
        <FileAreaStyled style={{ backgroundImage: `url(${preview})` }}>
          <img
            src={PictureIcon}
            alt="Imagem"
            className={thumbnail ? "has-thumbnail" : ""}
          />
          <input
            type="file"
            onChange={event => setThumbnail(event.target.files[0])}
          />
        </FileAreaStyled>
        <InputStyled
          type="text"
          placeholder="nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="cnpj"
          value={cnpj}
          onChange={event => setCnpj(event.target.value)}
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
          onChange={event => setZip_code(event.target.value)}
        />
        <Button text="cadastrar" loading={loading} />
      </FormStyled>
    </ContainerStyled>
  );
}
