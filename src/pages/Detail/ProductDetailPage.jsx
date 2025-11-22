import React, { useState, useEffect } from 'react';
// 공통 컴포넌트 SearchBar 불러오기
import SearchBar from '../Common/SearchBar'; 

import { productData, defaultReviews, recommendedCreators } from '../../mocks/setListData'; 
import * as S from './styles/ProductDetailPage.style';

import ProductInfo from './ProductInfo';
import CreatorSection from './CreatorSection';
import ReviewSection from './ReviewSection';

const ProductDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [reviews, setReviews] = useState([]);
  
  // [수정됨] 변수명을 'reviewStorageKey'로 통일했습니다.
  const reviewStorageKey = `reviews-${productData.id}`;
  const WISHLIST_KEY = 'my-wishlist';

  // 1. 초기 데이터 로드 (리뷰 & 찜 상태 확인)
  useEffect(() => {   
    // (1) 리뷰 불러오기
    const storedReviews = localStorage.getItem(reviewStorageKey);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      setReviews(defaultReviews);
    }

    // (2) 찜 상태 확인하기
    const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    if (wishlist.includes(productData.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [reviewStorageKey]); // 의존성 배열도 reviewStorageKey로 수정

  // 2. 찜하기 버튼 클릭 핸들러
  const handleLikeClick = () => {
    let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];

    if (isLiked) {
      wishlist = wishlist.filter((id) => id !== productData.id);
      setIsLiked(false);
      alert('찜 목록에서 삭제되었습니다.');
    } else {
      wishlist.push(productData.id);
      setIsLiked(true);
      alert('찜 목록에 추가되었습니다! ❤️');
    }
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  };

  // 3. 리뷰 등록 핸들러
  const handleSubmitReview = (newReviewText, newReviewRating) => {
    if (newReviewText.trim() === '') {
      alert('리뷰 내용을 입력해주세요.');
      return false; 
    }

    const nextUserNumber = reviews.length + 1;

    const newReview = {
      id: Date.now(),
      user: `user${nextUserNumber}`, 
      date: new Date().toLocaleDateString(),
      text: newReviewText,
      rating: newReviewRating,
    };
    
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews); 
    // [수정됨] 여기도 reviewStorageKey 사용
    localStorage.setItem(reviewStorageKey, JSON.stringify(updatedReviews)); 
    return true; 
  };

  // 4. 검색 핸들러
  const handleSearch = (query) => {
    console.log(`검색 요청: ${query}`);
    alert(`'${query}' 검색 결과 페이지로 이동합니다.`); 
  };

  // 🔥 [실제 별점 평균 계산 로직] 🔥
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0; 
    
    const totalScore = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = totalScore / reviews.length;
    
    return Number(average.toFixed(1)); 
  };

  // 🔥 [계산된 데이터를 반영한 새로운 객체] 🔥
  const currentProductData = {
    ...productData, 
    rating: calculateAverageRating(), // '진짜' 평점
    reviewCount: reviews.length,      // '진짜' 리뷰 개수
  };

  return (
    <S.PageContainer>
      <SearchBar onSearch={handleSearch} />

      <S.MainContent>
        <ProductInfo
          productData={currentProductData} // 계산된 데이터 전달
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
        />
      </S.MainContent>

      <S.Divider />

      <CreatorSection creators={recommendedCreators} />

      <S.Divider />

      <ReviewSection
        reviews={reviews} 
        onSubmitReview={handleSubmitReview} 
      />
    </S.PageContainer>
  );
};

export default ProductDetailPage;