import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

import SearchBar from '../Common/SearchBar'; 

import { allProducts, defaultReviews, recommendedCreators } from '../../mocks/setListData'; 
import * as S from './styles/ProductDetailPage.style';

import ProductInfo from './ProductInfo';
import CreatorSection from './CreatorSection';
import ReviewSection from './ReviewSection';

const ProductDetailPage = () => {
  const { id } = useParams(); 
  
  const targetProduct = allProducts.find((item) => item.id === Number(id));

  if (!targetProduct) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>존재하지 않는 상품입니다.</div>;
  }

  const [isLiked, setIsLiked] = useState(false);
  const [reviews, setReviews] = useState([]);
  
  const reviewStorageKey = `reviews-${targetProduct.id}`;
  const WISHLIST_KEY = 'my-wishlist';

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedReviews = localStorage.getItem(reviewStorageKey);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      setReviews(defaultReviews);
    }

    const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    if (wishlist.includes(targetProduct.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [id, reviewStorageKey]); 

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
    localStorage.setItem(reviewStorageKey, JSON.stringify(updatedReviews)); 
    return true; 
  };

  const handleSearch = (query) => {
    console.log(`검색 요청: ${query}`);
    alert(`'${query}' 검색 결과 페이지로 이동합니다.`); 
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return targetProduct.rating; 
    
    const totalScore = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = totalScore / reviews.length;
    return Number(average.toFixed(1)); 
  };

  const currentProductData = {
    ...targetProduct, 
    rating: calculateAverageRating(), 
    reviews: reviews.length,          
    imageUrl: targetProduct.image     
  };

  return (
    <S.PageContainer>
      <SearchBar onSearch={handleSearch} />

      <S.MainContent>
        <ProductInfo
          productData={currentProductData} 
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