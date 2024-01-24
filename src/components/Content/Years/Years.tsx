import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/all';
import { YearsProps } from '../../../types/sliderTypes';
import { YearsWrapper, YearFrom, YearTo } from './Years.styled';
import useSliderLogic from '../../../hooks/useSliderLogic';
import useSliderData from '../../../hooks/useSliderData';

const Years = ({ startingYear, endingYear }: YearsProps) => {
  gsap.registerPlugin(TextPlugin);
  const { currentSlide, previousSlide, currentCategoryID } = useSliderLogic();
  const previousSlideData = useSliderData(previousSlide, currentCategoryID);

  const previousStartingYear = previousSlideData.startingYear;
  const previousEndingYear = previousSlideData.endingYear;

  const startingYearRef = useRef(null);
  const endingYearRef = useRef(null);

  useEffect(() => {
    gsap.to(startingYearRef.current, {
      duration: 0.3,
      text: String(startingYear),
      ease: 'none',
    });

    gsap.to(endingYearRef.current, {
      duration: 0.3,
      text: String(endingYear),
      ease: 'none',
    });
  }, [currentSlide]);

  return (
    <YearsWrapper>
      <YearFrom ref={startingYearRef}>{previousStartingYear}</YearFrom>
      <YearTo ref={endingYearRef}>{previousEndingYear}</YearTo>
    </YearsWrapper>
  );
};

export default Years;
