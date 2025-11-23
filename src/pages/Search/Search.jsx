import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Common/SearchBar';
import { searchCreators, searchProducts } from '../../mocks/setListData';
import { PageWrapper } from './styles/Search.styles';
import SearchTabs from './components/SearchTabs';
import CreatorSection from './components/CreatorSection';
import CreatorProductsSection from './components/CreatorProductsSection';
import CategoryProductsSection from './components/CategoryProductsSection';

const Search = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState('creator');
  const [creatorCategory, setCreatorCategory] = useState('전체');
  const [productCategory, setProductCategory] = useState('전체');

  const handleSearch = (keyword) => {
    if (!keyword.trim()) return;
    navigate(`/search?query=${encodeURIComponent(keyword)}`);
  };

  const usedCreator = searchCreators[0];

  return (
    <PageWrapper>
      <SearchBar onSearch={handleSearch} />

      <SearchTabs
        mode={mode}
        onChangeMode={setMode}
        creatorCategory={creatorCategory}
        onChangeCreatorCategory={setCreatorCategory}
        productCategory={productCategory}
        onChangeProductCategory={setProductCategory}
      />

      {mode === 'creator' && <CreatorSection creator={searchCreators[0]} />}

      {mode === 'creator' ? (
        <CreatorProductsSection products={searchProducts} />
      ) : (
        <CategoryProductsSection
          products={searchProducts}
          usedCreator={usedCreator}
        />
      )}
    </PageWrapper>
  );
};

export default Search;
