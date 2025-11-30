import React from 'react';
import * as S from './styles/CreatorDetailPage.style';

const CreatorBanner = ({ creator }) => {
  return (
    <S.Banner>
      <S.ProfileImage src={creator.image} alt={creator.name} />
      <S.CreatorName>{creator.name}</S.CreatorName>
      
      {/* ✅ [수정] 데이터 구조 변경 반영 (job -> description) */}
      <S.CreatorJob>
        {creator.description}
      </S.CreatorJob>

      {/* (선택사항) 플랫폼 정보가 있다면 보여주기 */}
      {creator.platforms && (
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
          활동 플랫폼: {creator.platforms.join(', ')} (팔로워 {creator.followers})
        </div>
      )}
    </S.Banner>
  );
};

export default CreatorBanner;