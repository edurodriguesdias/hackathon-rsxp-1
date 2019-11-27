import React, { useMemo, useState } from "react";
import PictureIcon from "../../assets/picture.svg";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import {
  ContainerStyled,
  FileAreaStyled,
  FormStyled,
  InputStyled
} from "../../styles/components";

export default function SignSchoolPage({ navigation }) {
  const [thumbnail, setThumbnail] = useState(null);
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  return (
    <ContainerStyled>
      <BackButton />
      <FormStyled>
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
        <InputStyled type="text" placeholder="nome" />
        <InputStyled type="text" placeholder="cnpj" />
        <InputStyled type="tel" placeholder="telefone" />
        <InputStyled type="mail" placeholder="e-mail" />
        <InputStyled type="text" placeholder="endereço" />
        <InputStyled type="tel" placeholder="numero" />
        <InputStyled type="text" placeholder="bairro" />
        <InputStyled type="text" placeholder="cidade" />
        <InputStyled type="text" placeholder="uf" maxLength="2" />
        <InputStyled type="tel" placeholder="cep" />
        <Button text="cadastrar" />
      </FormStyled>
    </ContainerStyled>
  );
}
