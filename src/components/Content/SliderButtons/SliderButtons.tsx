import { SliderButtonsProps } from '../../../types/sliderTypes';
import arrow from '../../../assets/button-arrow.svg';
import {
  Wrapper,
  CurrentSlider,
  ButtonsWrapper,
  Button,
  ButtonArrow,
} from './SliderButtons.styled';

const SliderButtons = ({
  currentSlide,
  handleNextSlide,
  handlePreviousSlide,
  slidersLength,
  formattedCurrentSlide,
  totalSliders,
}: SliderButtonsProps) => (
  <Wrapper>
    <CurrentSlider>{`${formattedCurrentSlide}/${totalSliders}`}</CurrentSlider>
    <ButtonsWrapper>
      <Button
        type="button"
        onClick={handlePreviousSlide}
        disabled={currentSlide === 1}
      >
        <ButtonArrow src={arrow} />
      </Button>
      <Button
        type="button"
        onClick={handleNextSlide}
        disabled={currentSlide >= slidersLength}
      >
        <ButtonArrow src={arrow} style={{ transform: 'rotate(180deg)' }} />
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default SliderButtons;
