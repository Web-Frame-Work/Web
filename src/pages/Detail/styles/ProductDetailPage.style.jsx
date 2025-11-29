import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  background-color: #ffffff;
  font-family: 'Pretendard', sans-serif;
`;

// 버튼 컨테이너에 gap 추가
export const NavContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 12px; /* 버튼 사이 간격 */
`;

// 버튼 디자인 다듬기
export const ListButton = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px; /* 둥근 모서리 조금 줄임 */
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* 살짝 그림자 추가 */

  &:hover {
    background-color: #f8f9fa;
    color: #333;
    border-color: #bbb;
    transform: translateY(-1px); /* 마우스 올리면 살짝 위로 */
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 32px;
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