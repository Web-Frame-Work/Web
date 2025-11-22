import React from 'react';
import * as S from './styles/CreatorSection.style';

const CreatorSection = ({ creators }) => {
  return (
    <S.CreatorSectionWrapper>
      <S.SectionTitle>이 제품을 추천한 크리에이터</S.SectionTitle>
      <S.CreatorList>
        {creators.map((creator) => (
          <S.CreatorProfile key={creator.name}>
            <S.CreatorImage src={creator.imageUrl} alt={creator.name} />
            <S.CreatorName>{creator.name}</S.CreatorName>
          </S.CreatorProfile>
        ))}
      </S.CreatorList>
    </S.CreatorSectionWrapper>
  );
};

export default CreatorSection;