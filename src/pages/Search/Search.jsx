import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from '../Common/SearchBar';
import { searchCreators, searchProducts } from '../../mocks/setListData';
import { PageWrapper } from './styles/Search.styles';
import SearchTabs from './components/SearchTabs';
import CreatorSection from './components/CreatorSection';
import CreatorProductsSection from './components/CreatorProductsSection';
import CategoryProductsSection from './components/CategoryProductsSection';

const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // URL 에서 검색어 가져오기 (?query=xxx)
  const keyword = (params.get('query') || '').trim();

  const [mode, setMode] = useState('creator');
  const [creatorCategory, setCreatorCategory] = useState('전체');
  const [productCategory, setProductCategory] = useState('전체');

  /*
  const handleSearch = (keyword) => {
    if (!keyword.trim()) return;
    navigate(`/search?query=${encodeURIComponent(keyword)}`);
  };
  
  const usedCreator = searchCreators[0];
  */

  const handleSearch = (nextKeyword) => {
    const q = nextKeyword.trim();
    if (!q) return;
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  // =========================================
  // 1) 검색어를 기준으로 크리에이터 / 제품 필터링
  // =========================================
  const creatorResults = useMemo(() => {
    if (!keyword) return searchCreators;

    const lower = keyword.toLowerCase();

    return searchCreators.filter((c) => {
      const nameMatch = c.name?.toLowerCase().includes(lower);
      const categoryMatch = c.category?.toLowerCase?.().includes?.(lower);

      return nameMatch || categoryMatch;
    });
  }, [keyword]);

  const productResults = useMemo(() => {
    if (!keyword) return searchProducts;

    const lower = keyword.toLowerCase();

    return searchProducts.filter((p) => {
      const nameMatch = p.name?.toLowerCase().includes(lower);
      const categoryMatch = p.category?.toLowerCase?.().includes?.(lower);

      return nameMatch || categoryMatch;
    });
  }, [keyword]);

  // =========================================
  // 2) 검색어가 바뀔 때 모드 자동 결정
  //    - 크리에이터 매치가 있으면 creator 모드
  //    - 없고 제품만 있으면 category 모드
  // =========================================
  useEffect(() => {
    if (!keyword) {
      setMode('creator');
      return;
    }

    if (creatorResults.length > 0) {
      setMode('creator');
    } else if (productResults.length > 0) {
      setMode('category');
    } else {
      setMode('creator');
    }

    // 검색어 바뀌면 카테고리 선택은 다시 "전체"로 초기화
    setCreatorCategory('전체');
    setProductCategory('전체');
  }, [keyword, creatorResults.length, productResults.length]);

  // =========================================
  // 3) 탭 아래 카테고리 버튼에 따른 2차 필터링
  // =========================================
  const filteredCreatorsByCategory = useMemo(() => {
    if (creatorCategory === '전체') return creatorResults;

    return creatorResults.filter((c) => c.category === creatorCategory);
  }, [creatorResults, creatorCategory]);

  const filteredProductsByCategory = useMemo(() => {
    if (productCategory === '전체') return productResults;

    return productResults.filter((p) => p.category === productCategory);
  }, [productResults, productCategory]);

  // 한 명 대표 크리에이터 (있으면 첫 번째)
  const usedCreator = filteredCreatorsByCategory[0] || creatorResults[0];


  return (
    <PageWrapper>
      <SearchBar onSearch={handleSearch} defaultQuery={keyword}/>

      <SearchTabs
        mode={mode}
        onChangeMode={setMode}
        creatorCategory={creatorCategory}
        onChangeCreatorCategory={setCreatorCategory}
        productCategory={productCategory}
        onChangeProductCategory={setProductCategory}
      />

      {/*
      {mode === 'creator' && <CreatorSection creator={searchCreators[0]} />}

      {mode === 'creator' ? (
        <CreatorProductsSection products={searchProducts} />
      ) : (
        <CategoryProductsSection
          products={searchProducts}
          usedCreator={usedCreator}
        />
      )}
      */}

      {/* 크리에이터 모드일 때 상단에 선택된(또는 첫 번째) 크리에이터 표시 */}
      {mode === 'creator' && usedCreator && (
        <CreatorSection creator={usedCreator} />
      )}

      {/* 하단 추천/검색 결과 영역 */}
      {mode === 'creator' ? (
        // 크리에이터 모드일 때: 해당 크리에이터와 관련된 상품 리스트
        <CreatorProductsSection products={filteredProductsByCategory} />
      ) : (
        // 카테고리(상품) 모드일 때: 카테고리별 상품 리스트
        <CategoryProductsSection
          products={filteredProductsByCategory}
          usedCreator={usedCreator}
        />
      )}
    </PageWrapper>
  );
};

export default Search;
