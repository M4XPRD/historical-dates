import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 20px;

  margin-left: 80px;

  font-family: var(--font-family);
  color: var(--colour-main);

  z-index: 1;
`;

export const CurrentSlider = styled.div`
  font-size: var(--fs-xxs);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ButtonArrow = styled.img`
  opacity: 1;
  transition: opacity 0.3s ease;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, .1);
  background-color: transparent;

  cursor: pointer;

  &:disabled ${ButtonArrow} {
    opacity: 0.5;
  }

  &:hover {
    background-color: #FFFFFF;
  }
`;
