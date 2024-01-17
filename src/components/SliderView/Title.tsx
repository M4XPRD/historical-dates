import styled from 'styled-components';
import verticalColouredBar from '../../assets/vertical-coloured-bar.svg';

const Wrapper = styled.section`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 78px;
`;

const VerticalColouredBar = styled.img`
  height: 120px;
`;

const TitleText = styled.div`
  max-width: 353px;
  font-family: var(--font-family);
  font-size: var(--fs-m);
  font-weight: var(--fw-bold);
  color: var(--colour-main);
`;

const Title = () => (
  <Wrapper>
    <VerticalColouredBar src={verticalColouredBar} />
    <TitleText>Исторические даты</TitleText>
  </Wrapper>
);

export default Title;
