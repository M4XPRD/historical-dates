import verticalColouredBar from '../../../assets/vertical-coloured-bar.svg';
import { Wrapper, VerticalColouredBar, TitleText } from './Title.styled';

const Title = () => (
  <Wrapper>
    <VerticalColouredBar src={verticalColouredBar} />
    <TitleText>Исторические даты</TitleText>
  </Wrapper>
);

export default Title;
