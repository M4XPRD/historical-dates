import styled from 'styled-components';
import Title from './Title';
import CurrentYears from './Years';
import SliderButtons from './SliderButtons';
import Events from './Events';
import useSlider from '../../hooks/useSlider';
import slidersData from '../../utils/slidersData';
import formatSlidersCount from '../../utils/formatSlidersCount';

const Wrapper = styled.main`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76%;
  height: 100%;
`;

const Content = () => {
  const {
    currentSlide,
    currentCategory,
    handleNextSlide,
    handlePreviousSlide,
  } = useSlider();

  const currentSlideData = slidersData[currentSlide - 1];

  const slidersLength = slidersData.length;
  const totalSliders = formatSlidersCount(slidersLength);
  const formattedCurrentSlide = formatSlidersCount(currentSlide);

  const { years, categories } = currentSlideData;
  const category = categories[currentCategory as keyof typeof categories];

  const [firstYear] = years;
  const lastYear = years[years.length - 1];

  return (
    <Wrapper>
      <Title />
      <CurrentYears firstYear={firstYear} lastYear={lastYear} />
      <SliderButtons
        currentSlide={currentSlide}
        handleNextSlide={handleNextSlide}
        handlePreviousSlide={handlePreviousSlide}
        slidersLength={slidersLength}
        formattedCurrentSlide={formattedCurrentSlide}
        totalSliders={totalSliders}
      />
      <Events years={years} category={category} />
    </Wrapper>
  );
};

export default Content;
