// src/pages/Home/CreatorCard.jsx
import React from "react";
import * as S from "./styles/CreatorCard.style";

const CreatorCard = ({ name, category, rank, image }) => {
  return (
    <S.Card>
      <S.Rank>{rank}</S.Rank>

      <S.Image src={image} alt={name} />

      <S.InfoBox>
        <S.Name>{name}</S.Name>
        <S.Category>{category}</S.Category>
      </S.InfoBox>
    </S.Card>
  );
};

export default CreatorCard;
