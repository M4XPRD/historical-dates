import styled from 'styled-components';
import Frame from './components/Frame/Frame';
import AppContent from './components/Content/AppContent/AppContent';

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
    <AppContent />
  </Wrapper>
);

export default App;
