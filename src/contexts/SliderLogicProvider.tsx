import { useMemo, useState } from 'react';
import { ProviderProps } from '../types/contextTypes';
import SliderLogicContext from './SliderLogicContext';

const SliderLogicProvider = ({ children }: ProviderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [currentCategory, setCurrentCategory] = useState<string>('movies');

  const handleNextSlide = () => {
    setCurrentSlide((current) => current + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((current) => current - 1);
  };

  const handleNewCategory = (newCategory: string) => {
    setCurrentCategory(newCategory);
  };

  const providedData = useMemo(
    () => ({
      currentSlide,
      currentCategory,
      handleNewCategory,
      handleNextSlide,
      handlePreviousSlide,
    }),
    [
      currentSlide,
      currentCategory,
      handleNewCategory,
      handleNextSlide,
      handlePreviousSlide,
    ],
  );

  return (
    <SliderLogicContext.Provider value={providedData}>
      {children}
    </SliderLogicContext.Provider>
  );
};

export default SliderLogicProvider;
