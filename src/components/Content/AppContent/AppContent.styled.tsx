import styled from 'styled-components';

const Wrapper = styled.main`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 76%;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;

    justify-content: space-around;

    & > :nth-child(3) {
      order: 2;
    }
    & > :nth-child(4) {
      order: 1;
    }
  }
`;

export default Wrapper;
