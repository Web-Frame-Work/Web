import {
  SectionTitle,
  ProductList,
  ProductCard,
  ProductTopRow,
  ProductImageBox,
  ProductContent,
  ProductName,
  ProductDescription,
  ProductDiscountPriceRow,
  ProductRatingRow,
  UsedCreatorRow,
  UsedCreatorLabel,
  UsedCreatorNameRow,
  UsedCreatorChip,
  ProductBottomRow,
  DetailButton,
} from '../styles/CategoryProductsSection.styles';

const CategoryProductsSection = ({ products, usedCreator }) => {
  return (
    <>
      <SectionTitle>추천 제품 8</SectionTitle>

      <ProductList>
        {products.map((p) => (
          <ProductCard key={p.id}>
            <ProductTopRow>
              <ProductImageBox>
                <img src={p.image} alt={p.name} />
              </ProductImageBox>

              <ProductContent>
                <ProductName>{p.name}</ProductName>

                <ProductDescription>{p.description}</ProductDescription>

                <ProductDiscountPriceRow>
                  <span className="discount">{p.discount}%</span>
                  <span>₩{p.price.toLocaleString()}</span>
                </ProductDiscountPriceRow>

                <ProductRatingRow>
                  ⭐ {p.rating}
                  <span className="bar">|</span>
                  리뷰 {p.reviews.toLocaleString()}
                </ProductRatingRow>

                <UsedCreatorRow>
                  <UsedCreatorLabel>
                    <span>📷</span>
                    <span>사용한 크리에이터</span>
                  </UsedCreatorLabel>

                  <UsedCreatorNameRow>
                    <UsedCreatorChip>
                      <span className="icon">{usedCreator.icon}</span>
                      <span>{usedCreator.name}</span>
                      <span className="category">{usedCreator.category}</span>
                    </UsedCreatorChip>
                  </UsedCreatorNameRow>
                </UsedCreatorRow>
              </ProductContent>
            </ProductTopRow>

            <ProductBottomRow>
              <DetailButton>제품 상세보기</DetailButton>
            </ProductBottomRow>
          </ProductCard>
        ))}
      </ProductList>
    </>
  );
};

export default CategoryProductsSection;
