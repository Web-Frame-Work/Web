import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './styles/CreatorDetailPage.style';

// 데이터 임포트
import { dummyCreators, dummyProducts, creatorRecommendedProducts } from '../../mocks/setListData';

// 컴포넌트 임포트 (같은 폴더에 있으므로 ./ 경로 사용)
import SearchBar from '../Common/SearchBar'; 
import CreatorBanner from './CreatorBanner';
import CreatorProductList from './CreatorProductList';

const CreatorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 상태 관리
  const [creator, setCreator] = useState(null);
  const [products, setProducts] = useState([]);

  // 데이터 로직
  useEffect(() => {
    const currentId = Number(id);
    
    const foundCreator = dummyCreators.find(c => c.id === currentId);
    setCreator(foundCreator);

    const productIds = creatorRecommendedProducts[currentId] || [];
    const relatedProducts = dummyProducts.filter(p => productIds.includes(p.id));
    setProducts(relatedProducts);

  }, [id]);

  const handleSearch = (query) => {
    console.log("검색어:", query);
  };

  if (!creator) return <div>Loading...</div>;

  return (
    <S.Container>
      {/* 1. 검색창 */}
      <SearchBar onSearch={handleSearch} />

      {/* 2. 뒤로가기 */}
      <S.HeaderNav onClick={() => navigate(-1)}>
        ← 목록으로
      </S.HeaderNav>

      {/* 3. 배너 영역 (분리된 컴포넌트) */}
      <CreatorBanner creator={creator} />

      {/* 4. 상품 리스트 영역 (분리된 컴포넌트) */}
      <CreatorProductList products={products} />
      
    </S.Container>
  );
};

export default CreatorDetailPage;