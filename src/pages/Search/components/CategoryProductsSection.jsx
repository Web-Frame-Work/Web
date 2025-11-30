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

import { getProductRatingInfo, creators } from '../../../mocks/setListData';

const CategoryProductsSection = ({ products }) => {
  return (
    <>
      <SectionTitle>제품 카테고리 검색</SectionTitle>

      <ProductList>
        {products.map((p) => {
          const ratingInfo = getProductRatingInfo(p.id);

          const creator = creators.find((c) => c.id === p.creatorId);

          return (
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
                    ⭐ {ratingInfo.average} <span className="bar">|</span>
                    리뷰 {ratingInfo.count.toLocaleString()}
                  </ProductRatingRow>

                  <UsedCreatorRow>
                    <UsedCreatorLabel>
                      <span>📷</span>
                      <span>사용한 크리에이터</span>
                    </UsedCreatorLabel>

                    <UsedCreatorNameRow>
                      <UsedCreatorChip>
                        <span className="icon">{creator?.icon || '👤'}</span>
                        <span>{creator?.name || '알 수 없음'}</span>
                        <span className="category">
                          {Array.isArray(creator?.category)
                            ? creator.category.join(', ')
                            : creator?.category}
                        </span>
                      </UsedCreatorChip>
                    </UsedCreatorNameRow>
                  </UsedCreatorRow>
                </ProductContent>
              </ProductTopRow>

              <ProductBottomRow>
                <DetailButton>제품 상세보기</DetailButton>
              </ProductBottomRow>
            </ProductCard>
          );
        })}
      </ProductList>
    </>
  );
};

export default CategoryProductsSection;
