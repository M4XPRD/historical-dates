import styled from 'styled-components';
import Frame from './components/Frame';

const Wrapper = styled.main`
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
  </Wrapper>
);

export default App;
