import React, { useState } from "react";
import { Search } from "lucide-react";
import * as S from "./styles/SearchBar.style"; 

const SearchBar = ({ onSearch }) => {
  // 검색어 입력할 때마다 상태 관리하여 query에 실시간 반영
  const [query, setQuery] = useState("");

  // 검색창에서 검색어를 입력하고 제출할 때 호출되는 함수 
  // onSearch 콜백 함수를 통해 부모 컴포넌트로 검색어 전달 
  // 공백만 입력된 경우는 무시
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>크리에이픽</S.Title>
      <S.Form onSubmit={handleSearch}>
        <S.Input
          placeholder="크리에이터 또는 제품 카테고리 입력"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <S.Button type="submit" aria-label="검색">
          <Search size={20} />
        </S.Button>
      </S.Form>
      <S.Divider />
    </S.Wrapper>
  );
};

export default SearchBar;
