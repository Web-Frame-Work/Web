import styled from "styled-components";


export const Card = styled.div`
  user-select: none;
  width: 260px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0; /* 슬라이드에서 줄어들지 않음 */
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
  background: #fafafa;
`;

export const InfoBox = styled.div`
  padding: 12px 16px;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Discount = styled.span`
  color: #e63946;
  font-weight: 500;
  font-size: 14px;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 15px;
`;
