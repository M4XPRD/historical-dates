import styled from 'styled-components';
import { SliderButtonsTypes } from '../../types/sliderTypes';
import arrow from '../../assets/button-arrow.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 20px;

  margin-left: 80px;
  /* margin-bottom: 56px;
  margin-top: 137px; */

  font-family: var(--font-family);
  color: var(--colour-main);

  z-index: 1;
`;

const CurrentSlider = styled.div`
  font-size: var(--fs-xxs);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ButtonArrow = styled.img`
  opacity: 1;
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
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

const SliderButtons = ({
  currentSlide,
  handleNextSlide,
  handlePreviousSlide,
  slidersLength,
  formattedCurrentSlide,
  totalSliders,
}: SliderButtonsTypes) => (
  <Wrapper>
    <CurrentSlider>
      {`${formattedCurrentSlide}/${totalSliders}`}
    </CurrentSlider>
    <ButtonsWrapper>
      <Button type="button" onClick={handlePreviousSlide} disabled={currentSlide < slidersLength}>
        <ButtonArrow src={arrow} />
      </Button>
      <Button type="button" onClick={handleNextSlide} disabled={currentSlide >= slidersLength}>
        <ButtonArrow src={arrow} style={{ transform: 'rotate(180deg)' }} />
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default SliderButtons;
