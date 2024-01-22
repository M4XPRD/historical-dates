import styled from 'styled-components';
import Frame from './components/Frame';
import Content from './components/Content';

const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: baseline;
    justify-content: center;

    background-color: var(--colour-background);
    height: 100svh;

    user-select: none;
  `;

const App = () => (
  <Wrapper>
    <Frame />
    <Content />
  </Wrapper>
);

export default App;
