import { createContext } from 'react';
import { SliderContextTypes } from '../types/contextTypes';

const defaultValues = {
  currentSlide: 1,
  currentCategory: 'movies',
  handleNewCategory: () => {},
  handleNextSlide: () => {},
  handlePreviousSlide: () => {},
};

const SliderLogicContext = createContext<SliderContextTypes>(defaultValues);

export default SliderLogicContext;
