import Title from '../Title/Title';
import SliderButtons from '../SliderButtons/SliderButtons';
import Timeline from '../Timeline/Timeline';
import useSliderLogic from '../../../hooks/useSliderLogic';
import DatesAndCategories from '../DatesAndCategories/DatesAndCategories';
import Wrapper from './AppContent.styled';
import useSliderData from '../../../hooks/useSliderData';

const AppContent = () => {
  const {
    currentSlide,
    currentCategoryID,
    handleNextSlide,
    handlePreviousSlide,
    handleNewCategoryID,
  } = useSliderLogic();

  const {
    slidersLength,
    totalSliders,
    formattedCurrentSlide,
    category,
    years,
    startingYear,
    endingYear,
  } = useSliderData(currentSlide, currentCategoryID);

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
