import styled from 'styled-components';
import slidersData from '../../utils/slidersData';
import formatSlidersCount from '../../utils/formatSlidersCount';
import useSlider from '../../hooks/useSlider';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 20px;

  margin-bottom: 56px;
  margin-left: 80px;

  font-family: var(--font-family);
  color: var(--colour-main);
`;

const CurrentSlider = styled.div`
  font-size: var(--fs-xxs);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, .1);
  background-color: transparent;

  cursor: pointer;
`;

const SliderButtons = () => {
  const { currentSlide, handleNextSlide, handlePreviousSlide } = useSlider();
  const slidersLength = slidersData.length;
  const totalSliders = formatSlidersCount(slidersData.length);
  const formattedCurrentSlide = formatSlidersCount(currentSlide);

  return (
    <Wrapper>
      <CurrentSlider>
        {`${formattedCurrentSlide}/${totalSliders}`}
      </CurrentSlider>
      <ButtonsWrapper>
        <Button type="button" onClick={handlePreviousSlide} disabled={currentSlide < slidersLength} />
        <Button type="button" onClick={handleNextSlide} disabled={currentSlide >= slidersLength} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default SliderButtons;
