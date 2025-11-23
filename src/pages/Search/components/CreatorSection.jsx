import {
  SectionTitle,
  CreatorBox,
  CreatorIcon,
  CreatorInfo,
} from '../styles/CreatorSection.styles';

const CreatorSection = ({ creator }) => {
  if (!creator) return null;

  return (
    <>
      <SectionTitle>크리에이터 1</SectionTitle>

      <CreatorBox>
        <CreatorIcon>{creator.icon}</CreatorIcon>
        <CreatorInfo>
          <span>{creator.name}</span>
          <span>{creator.category}</span>
          <span>{creator.followers}</span>
        </CreatorInfo>
      </CreatorBox>
    </>
  );
};

export default CreatorSection;
