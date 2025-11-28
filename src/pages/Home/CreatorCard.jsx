import * as S from "./styles/CreatorCard.style";

const CreatorCard = ({ image, name, category, rank }) => {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={image} alt={name} />
        <S.Rank>{rank}</S.Rank>  {/* 전달받은 랭크 표시 */}
      </S.ImageWrapper>

      <S.InfoBox>
        <S.Name>{name}</S.Name>
        <S.Category>{Array.isArray(category) ? category.join(" / ") : category}</S.Category>
      </S.InfoBox>
    </S.Card>
  );
};

export default CreatorCard;
