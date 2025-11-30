import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { products, productsReviews, creators } from '../../mocks/setListData'; 

import * as S from './styles/ProductDetailPage.style';
import ProductInfo from './ProductInfo';
import CreatorSection from './CreatorSection';
import ReviewSection from './ReviewSection';

const ProductDetailPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  
  const targetProduct = products.find((item) => item.id === Number(id));

  if (!targetProduct) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>존재하지 않는 상품입니다.</div>;
  }

  const [isLiked, setIsLiked] = useState(false);
  const [reviews, setReviews] = useState([]);
  
  const reviewStorageKey = `reviews-${targetProduct.id}`;
  const WISHLIST_KEY = 'my-wishlist';

  // 2. 초기 데이터 로드
  useEffect(() => {
    window.scrollTo(0, 0);

    const storedReviewsJSON = localStorage.getItem(reviewStorageKey);
    const defaultProductReviews = productsReviews.filter(r => r.productId === targetProduct.id);

    if (storedReviewsJSON) {
      try {
        const parsedReviews = JSON.parse(storedReviewsJSON);
        const isDataValid = Array.isArray(parsedReviews) && 
                            parsedReviews.every(r => r.nickname && r.comment);

        if (isDataValid) {
          setReviews(parsedReviews);
        } else {
          console.warn("⚠️ 리뷰 데이터 초기화됨 (구버전 포맷)");
          setReviews(defaultProductReviews);
          localStorage.setItem(reviewStorageKey, JSON.stringify(defaultProductReviews));
        }
      } catch (e) {
        setReviews(defaultProductReviews);
      }
    } else {
      setReviews(defaultProductReviews);
    }

    const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    if (wishlist.includes(targetProduct.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [id, reviewStorageKey, targetProduct.id]); 

  // 3. 찜하기 핸들러
  const handleLikeClick = () => {
    let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    if (isLiked) {
      wishlist = wishlist.filter((itemId) => itemId !== targetProduct.id);
      setIsLiked(false);
      alert('찜 목록에서 삭제되었습니다.');
    } else {
      wishlist.push(targetProduct.id);
      setIsLiked(true);
      alert('찜 목록에 추가되었습니다! ❤️');
    }
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  };

  // 4. 리뷰 등록 핸들러
  const handleSubmitReview = (newReviewText, newReviewRating, newReviewNickname) => {
    if (newReviewText.trim() === '' || newReviewNickname.trim() === '') {
      alert('닉네임과 내용을 모두 입력해주세요.');
      return false; 
    }

    const nextUserNumber = reviews.length + 1;
    const newReview = {
      productId: targetProduct.id, 
      id: Date.now(),
      nickname: newReviewNickname, 
      createdAt: new Date().toLocaleDateString(), 
      comment: newReviewText, 
      rating: newReviewRating,
    };
    
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews); 
    localStorage.setItem(reviewStorageKey, JSON.stringify(updatedReviews)); 
    return true; 
  };

  // 6. 목록으로 돌아가기 핸들러
  const goToCreatorList = () => {
    navigate('/search'); 
  };

  const goToProductList = () => {
    navigate(`/search?keyword=${encodeURIComponent(targetProduct.category)}`);
  };

  // 7. 평점 계산 로직
  const calculateAverageRating = () => {
    if (!reviews || reviews.length === 0) return 0;
    const totalScore = reviews.reduce((sum, review) => {
      const score = Number(review.rating);
      return sum + (isNaN(score) ? 0 : score);
    }, 0);
    const average = totalScore / reviews.length;
    return Number(average.toFixed(1)); 
  };

  // 8. 데이터 매핑
  const currentProductData = {
    ...targetProduct, 
    rating: calculateAverageRating(), 
    reviews: reviews.length,          
    imageUrl: targetProduct.image     
  };

  // --- 크리에이터 섹션 로직 ---
  const recommender = creators.find(c => c.id === targetProduct.creatorId);
  const recommenderList = recommender ? [recommender] : [];

  const relatedCreators = creators.filter(c => {
    if (c.id === targetProduct.creatorId) return false;
    if (Array.isArray(c.category)) {
      return c.category.includes(targetProduct.category);
    }
    return c.category === targetProduct.category;
  });

  return (
    <S.PageContainer>

      {/* 목록으로 가기 버튼 */}
      <S.NavContainer>
        <S.ListButton onClick={goToCreatorList}>
          👥 크리에이터 찾아보기
        </S.ListButton>
        <S.ListButton onClick={goToProductList}>
          📦 제품 찾아보기
        </S.ListButton>
      </S.NavContainer>

      <S.MainContent>
        <ProductInfo
          productData={currentProductData} 
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
        />
      </S.MainContent>

      <S.Divider />

      {recommenderList.length > 0 && (
        <CreatorSection 
          title="이 제품을 추천한 크리에이터" 
          creators={recommenderList} 
        />
      )}

      {relatedCreators.length > 0 && (
        <>
          <S.Divider />
          <CreatorSection 
            title={`'${targetProduct.category}' 관련 크리에이터`} 
            creators={relatedCreators} 
          />
        </>
      )}

      <S.Divider />

      <ReviewSection
        reviews={reviews} 
        onSubmitReview={handleSubmitReview} 
      />
    </S.PageContainer>
  );
};

export default ProductDetailPage;