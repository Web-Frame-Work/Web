import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

// ✅ 화면 전체 폭으로 검색바가 확장되게
const FullWidthSection = styled.section`
  width: 100vw; /* 브라우저 전체 너비 */
  margin-left: calc(-50vw + 50%); /* 중앙정렬 깨기 */
  padding: 20px 80px 0 80px; /* 상단, 좌우 여백 */
  text-align: left;
  box-sizing: border-box;
`;

const Home = () => {
  const handleSearch = (query) => {
    console.log("검색어:", query);
  };

  return (
    <FullWidthSection>
      <SearchBar onSearch={handleSearch} />
    </FullWidthSection>
  );
};

export default Home;
