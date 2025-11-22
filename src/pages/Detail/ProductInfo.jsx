import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import * as S from './styles/ProductInfo.style';

const ProductInfo = ({ productData, isLiked, onLikeClick }) => {
  
  // 공유하기 핸들러
  const handleShareClick = async () => {
    const currentUrl = window.location.href; // 현재 페이지 주소 가져오기

    try {
      // 1. 모바일 등 '공유하기' 메뉴가 지원되는 브라우저인지 확인 (Web Share API)
      if (navigator.share) {
        await navigator.share({
          title: productData.name, // 상품명
          text: '이 상품 한번 확인해보세요!', // 공유 메시지
          url: currentUrl, // 링크
        });
      } else {
        // 2. PC 등 공유 메뉴가 없으면 -> 클립보드에 링크 복사
        await navigator.clipboard.writeText(currentUrl);
        alert('상품 링크가 복사되었습니다!');
      }
    } catch (error) {
      // 사용자가 공유 창을 닫거나 취소했을 때 에러 무시
      console.log('공유 취소');
    }
  };

  const renderStars = (score) => {
    // 별 5개를 만듭니다.
    return Array.from({ length: 5 }, (_, index) => {
      const starIndex = index + 1; // 1, 2, 3, 4, 5번째 별
      let fillPercentage = 0;

      if (score >= starIndex) {
        // 현재 별보다 점수가 크면 -> 100% 채움 (예: 점수 4.5일 때 1,2,3,4번째 별)
        fillPercentage = 100;
      } else if (score > index) {
        // 현재 별에 걸쳐있는 소수점 점수면 -> 소수점 비율만큼 채 움 (예: 점수 4.5일 때 5번째 별은 50%)
        fillPercentage = (score - index) * 100;
      } else {
        // 점수가 현재 별보다 작으면 -> 0% (빈 별)
        fillPercentage = 0;
      }

      return (
        <S.DynamicStar key={index} $percent={fillPercentage}>
          ★
        </S.DynamicStar>
      );
    });
  };

  return (
    <> 
      <S.ProductImageWrapper> 
        <S.ProductImage src={productData.imageUrl} alt={productData.name} />
      </S.ProductImageWrapper>
      
      <S.InfoContainer>
        <S.InfoTop>
          <S.Category>{productData.category}</S.Category>
          <S.Icons>
            <S.IconButton onClick={handleShareClick}>
              <Share2 size={24} color="#555" />
            </S.IconButton>
            
            <S.IconButton onClick={onLikeClick}>
              <Heart 
                size={24} 
                color={isLiked ? "#ff4d4f" : "#ccc"} 
                fill={isLiked ? "#ff4d4f" : "none"} 
              />
            </S.IconButton>
          </S.Icons>
        </S.InfoTop>
        
        <S.Title>{productData.name}</S.Title>
        
        <S.Rating>
          {/* 새로 만든 렌더링 함수 적용 */}
          <S.Stars>{renderStars(productData.rating)}</S.Stars>
          <S.RatingText>{productData.rating} / 5.0 ({productData.reviewCount})</S.RatingText>
        </S.Rating>

        <S.PriceInfo>
          <S.Price>
            <span className="discount">{productData.discountRate}</span>
            <span className="final-price">{productData.price}</span>
          </S.Price>
          <span className="original-price">{productData.originalPrice}</span>
        </S.PriceInfo>

        <S.BuyButton href="#">구매하기</S.BuyButton>
      </S.InfoContainer>
    </>
  );
};

export default ProductInfo;