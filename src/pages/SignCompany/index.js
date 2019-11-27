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
  InputStyled,
  TitleLits
} from "../../styles/components";

export default function SignSchoolPage({ history }) {
  toast.configure();

  const whiteList = ["thumbnail"];
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("rocketseat");
  const [cnpj, setCnpj] = useState("17.830.029/0001-01");
  const [phone, setPhone] = useState("(11) 4929-2812");
  const [email, setMail] = useState("oi@rocketseat.com.br");
  const [street, setStreet] = useState(
    "Residencial Acalanto - R. Guilherme Gemballa"
  );
  const [number, setNumber] = useState("260");
  const [district, setDistrict] = useState("Jardim América");
  const [city, setCity] = useState("Rio do Sul");
  const [state, setState] = useState("SC");
  const [zip_code, setZip_code] = useState("89160-188");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const obj = {
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
    const { data } = await api.post("/companies", obj);

    if (data.error) {
      setLoading(false);
      toast.error(data.error);
      return false;
    }
    toast.success("cadastro realizado com sucesso");
    history.goBack();
  }

  return (
    <ContainerStyled logoCenter={false}>
      <BackButton />
      <FormStyled onSubmit={handleSubmit}>
        <TitleLits align="center">cadastro de empresa</TitleLits>
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
          placeholder="nome *"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="cnpj *"
          value={cnpj}
          onChange={event => setCnpj(event.target.value)}
        />
        <InputStyled
          type="tel"
          placeholder="telefone *"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <InputStyled
          type="mail"
          placeholder="e-mail *"
          value={email}
          onChange={event => setMail(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="endereço *"
          value={street}
          onChange={event => setStreet(event.target.value)}
        />
        <InputStyled
          type="tel"
          placeholder="numero *"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="bairro *"
          value={district}
          onChange={event => setDistrict(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="cidade *"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="uf *"
          maxLength="2"
          value={state}
          onChange={event => setState(event.target.value)}
        />
        <InputStyled
          type="tel"
          placeholder="cep *"
          value={zip_code}
          onChange={event => setZip_code(event.target.value)}
        />
        <Button text="cadastrar" loading={loading} />
      </FormStyled>
    </ContainerStyled>
  );
}
