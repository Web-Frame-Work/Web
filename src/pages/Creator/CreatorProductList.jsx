import React from 'react';
import * as S from './styles/CreatorDetailPage.style';
import CreatorProductCard from './CreatorProductCard'; // 같은 폴더에서 불러옴

const CreatorProductList = ({ products }) => {
  return (
    <S.ContentWrapper>
      <S.SectionTitle>사용 및 추천 제품 ({products.length})</S.SectionTitle>

      <S.ProductGrid>
        {products.map((product) => (
          <CreatorProductCard key={product.id} product={product} />
        ))}
      </S.ProductGrid>
    </S.ContentWrapper>
  );
};

export default CreatorProductList;