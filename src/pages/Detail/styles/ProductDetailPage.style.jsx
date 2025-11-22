import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  background-color: #ffffff;
  font-family: 'Pretendard', sans-serif;
`;

// Header, Logo 삭제됨

export const MainContent = styled.div`
  display: flex;
  gap: 32px;
  /* 검색창 아래 간격 추가 */
  margin-top: 32px; 
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 16px 0;
`;