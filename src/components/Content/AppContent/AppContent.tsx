import Title from '../Title/Title';
import SliderButtons from '../SliderButtons/SliderButtons';
import Timeline from '../Timeline/Timeline';
import useSliderLogic from '../../../hooks/useSliderLogic';
import slidersData, { categoriesMapping } from '../../../utils/slidersData';
import formatSlidersCount from '../../../utils/formatSlidersCount';
import DatesAndCategories from '../DatesAndCategories/DatesAndCategories';
import Wrapper from './AppContent.styled';
import { CategoryKeys } from '../../../types/sliderTypes';

const AppContent = () => {
  const {
    currentSlide,
    currentCategoryID,
    handleNextSlide,
    handlePreviousSlide,
    handleNewCategoryID,
  } = useSliderLogic();

  const currentSlideData = slidersData[currentSlide - 1];

  const slidersLength = slidersData.length;
  const totalSliders = formatSlidersCount(slidersLength);
  const formattedCurrentSlide = formatSlidersCount(currentSlide);

  const { years, categories, period } = currentSlideData;
  const categoryKey = categoriesMapping[currentCategoryID] as CategoryKeys;
  const category = categories[categoryKey];

  const { startingYear, endingYear } = period;

  return (
    <Wrapper>
      <Title />
      <DatesAndCategories
        startingYear={startingYear}
        endingYear={endingYear}
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
      <Timeline years={years} category={category} />
    </Wrapper>
  );
};

export default AppContent;
