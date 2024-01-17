import styled from 'styled-components';
import Title from './Title';
import CurrentYears from './Years';
import SliderButtons from './SliderButtons';
import Events from './Events';

const Wrapper = styled.main`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 76%;
  height: 100%;
`;

const Content = () => (
  <Wrapper>
    <Title />
    <CurrentYears />
    <SliderButtons />
    <Events />
  </Wrapper>
);

export default Content;
