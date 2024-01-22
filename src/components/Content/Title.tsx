import styled from 'styled-components';
import verticalColouredBar from '../../assets/vertical-coloured-bar.svg';

const Wrapper = styled.section`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 78px;

  margin-top: 61px;
`;

const VerticalColouredBar = styled.img`
  height: 120px;
`;

const TitleText = styled.div`
  max-width: 353px;
  max-height: 134px;

  line-height: 67px;
  font-family: var(--font-family);
  font-size: var(--fs-m);
  font-weight: var(--fw-bold);
  color: var(--colour-main);

  @media (max-width: 1500px) {
    font-size: calc(var(--fs-m) - 0.5rem);
    max-width: 300px;
  }

  @media (max-width: 1300px) {
    font-size: calc(var(--fs-m) - 1rem);
    max-width: 300px;
  }
`;

const Title = () => (
  <Wrapper>
    <VerticalColouredBar src={verticalColouredBar} />
    <TitleText>Исторические даты</TitleText>
  </Wrapper>
);

export default Title;
