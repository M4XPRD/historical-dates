import styled from 'styled-components';
import Frame from './components/SliderView/Frame';
import Content from './components/SliderView/Content';

const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    
    /* background-color: #FFFFFF; */
    background-color: whitesmoke;
    height: 100svh;
  `;

const App = () => (
  <Wrapper>
    <Frame />
    <Content />
  </Wrapper>
);

export default App;
