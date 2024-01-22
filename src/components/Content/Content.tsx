import styled from 'styled-components';
import Title from './Title';
import Years from './Years';
import SliderButtons from './SliderButtons';
import Events from './Events';
import useSlider from '../../hooks/useSlider';
import slidersData, { categoriesMapping } from '../../utils/slidersData';
import formatSlidersCount from '../../utils/formatSlidersCount';

const Wrapper = styled.main`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 76%;
  height: 100%;
`;

const Content = () => {
  const {
    currentSlide,
    currentCategoryID,
    handleNextSlide,
    handlePreviousSlide,
    handleNewCategoryID,
  } = useSlider();

  const currentSlideData = slidersData[currentSlide - 1];

  const slidersLength = slidersData.length;
  const totalSliders = formatSlidersCount(slidersLength);
  const formattedCurrentSlide = formatSlidersCount(currentSlide);

  const { years, categories } = currentSlideData;
  const categoryKey = categoriesMapping[currentCategoryID] as 'movies' | 'literature' | 'science' | 'music' | 'sport' | 'theater';
  const category = categories[categoryKey];

  const [firstYear] = years;
  const lastYear = years[years.length - 1];

  return (
    <Wrapper>
      <Title />
      <Years
        firstYear={firstYear}
        lastYear={lastYear}
        currentCategoryID={currentCategoryID}
        handleNewCategoryID={handleNewCategoryID}
      />
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
