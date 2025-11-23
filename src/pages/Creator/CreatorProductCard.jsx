import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles/CreatorDetailPage.style';

const CreatorProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <S.ProductCard>
      <S.ProductImageWrapper>
        <S.ProductImage src={product.image} alt={product.name} />
      </S.ProductImageWrapper>

      <S.ProductInfo>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>₩{product.price.toLocaleString()}</S.ProductPrice>
        <S.RatingBox>
          {/* 별점랑 댓글수는 임시값으로 표시 */}
          <span className="star">★ 4.8</span>
          <span className="count">(1,234)</span>
        </S.RatingBox>

        <S.DetailButton onClick={() => navigate(`/detail/${product.id}`)}>
          제품 상세 페이지
        </S.DetailButton>
      </S.ProductInfo>
    </S.ProductCard>
  );
};

export default CreatorProductCard;