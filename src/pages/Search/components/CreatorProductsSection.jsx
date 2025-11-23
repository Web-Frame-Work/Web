import {
  SectionTitle,
  ProductGrid,
  ProductCard,
  ProductImageBox,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductRating,
} from '../styles/CreatorProductsSection.styles';

const CreatorProductsSection = ({ products }) => {
  return (
    <>
      <SectionTitle>추천 제품 8</SectionTitle>

      <ProductGrid>
        {products.map((p) => (
          <ProductCard key={p.id}>
            <ProductImageBox>
              <img src={p.image} alt={p.name} />
            </ProductImageBox>

            <ProductInfo>
              <ProductName>{p.name}</ProductName>

              <ProductPrice>
                <span className="discount">{p.discount}%</span>
                <span>₩{p.price.toLocaleString()}</span>
              </ProductPrice>

              <ProductRating>
                ⭐ {p.rating} ({p.reviews.toLocaleString()})
              </ProductRating>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </>
  );
};

export default CreatorProductsSection;
