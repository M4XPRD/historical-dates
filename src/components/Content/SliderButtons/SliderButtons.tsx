import { SliderButtonsProps } from '../../../types/sliderTypes';
import arrow from '../../../assets/button-arrow.svg';
import mobileArrow from '../../../assets/button-arrow-mobile.svg';
import {
  Wrapper,
  CurrentSlider,
  ButtonsWrapper,
  Button,
  ButtonArrow,
} from './SliderButtons.styled';
import useScreenSize from '../../../hooks/useScreenSize';

const SliderButtons = ({
  currentSlide,
  handleNextSlide,
  handlePreviousSlide,
  slidersLength,
  formattedCurrentSlide,
  totalSliders,
}: SliderButtonsProps) => {
  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      <CurrentSlider>{`${formattedCurrentSlide}/${totalSliders}`}</CurrentSlider>
      <ButtonsWrapper>
        <Button
          type="button"
          onClick={handlePreviousSlide}
          disabled={currentSlide === 1}
        >
          <ButtonArrow src={screenSize.width > 767 ? arrow : mobileArrow} />
        </Button>
        <Button
          type="button"
          onClick={handleNextSlide}
          disabled={currentSlide >= slidersLength}
        >
          <ButtonArrow src={screenSize.width > 767 ? arrow : mobileArrow} style={{ transform: 'rotate(180deg)' }} />
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default SliderButtons;
