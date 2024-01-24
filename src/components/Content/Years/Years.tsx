import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/all';
import { YearsProps } from '../../../types/sliderTypes';
import { YearsWrapper, YearFrom, YearTo } from './Years.styled';
import useSliderLogic from '../../../hooks/useSliderLogic';
import slidersData from '../../../utils/slidersData';

const Years = ({ startingYear, endingYear }: YearsProps) => {
  gsap.registerPlugin(TextPlugin);
  const { currentSlide } = useSliderLogic();
  const yearsFromRef = useRef(null);
  const yearsToRef = useRef(null);

  useEffect(() => {
    const { years } = slidersData[currentSlide - 1];
    const [updatedYearFrom] = years;
    const updatedYearTo = years[years.length - 1];

    gsap.to(yearsFromRef.current, {
      duration: 0.3,
      text: String(updatedYearFrom),
      ease: 'none',
    });

    gsap.to(yearsToRef.current, {
      duration: 0.3,
      text: String(updatedYearTo),
      ease: 'none',
    });
  }, [currentSlide]);

  return (
    <YearsWrapper>
      <YearFrom ref={yearsFromRef}>{startingYear}</YearFrom>
      <YearTo ref={yearsToRef}>{endingYear}</YearTo>
    </YearsWrapper>
  );
};

export default Years;

/*

      gsap.to(dotsContainerRef.current, {
        rotation: `+=${angleToRotate}`,
        duration: 0.5,
        ease: 'power2.inOut',
        onStart: () => {
          handleNewCategoryID(id);
          updateDotsAngles(angleToRotate);
        },
      });

*/
