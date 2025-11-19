// src/pages/Home/styles/CreatorCard.style.jsx
import styled from "styled-components";

export const Card = styled.div`
  user-select: none;
  width: 260px;  
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0; /* 슬라이드에서 줄어들지 않음 */
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Rank = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin: 40px auto 0 auto;
  display: block;
  margin-bottom: 20px;
`;

export const InfoBox = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eee;
  margin-top: 5px; /* 이미지와 선 사이 간격 */
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 450;
  margin-bottom: 4px;
`;

export const Category = styled.div`
  font-size: 14px;
  color: #6b7280;
`;
