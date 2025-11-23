import React from 'react';
import * as S from './styles/CreatorDetailPage.style';

const CreatorBanner = ({ creator }) => {
  return (
    <S.Banner>
      <S.ProfileImage src={creator.image} alt={creator.name} />
      <S.CreatorName>{creator.name}</S.CreatorName>
      <S.CreatorJob>
        {creator.job || `${creator.category} 크리에이터`}
      </S.CreatorJob>
    </S.Banner>
  );
};

export default CreatorBanner;