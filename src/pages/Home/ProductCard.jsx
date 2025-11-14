import React from "react";
import * as S from "./styles/ProductCard.style";

const ProductCard = ({ name, price, discount, image }) => {
  return (
    <S.Card>
      <S.Image src={image} alt={name} />

      <S.InfoBox>
        <S.Name>{name}</S.Name>

        <S.PriceRow>
          <S.Discount>{discount}%</S.Discount>
          <S.Price>₩{price.toLocaleString()}</S.Price>
        </S.PriceRow>
      </S.InfoBox>
    </S.Card>
  );
};

export default ProductCard;
