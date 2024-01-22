import { ReactNode } from 'react';

export type ProviderProps = {
  children: ReactNode,
};

export type SliderContextTypes = {
  currentSlide: number,
  currentCategoryID: number,
  handleNewCategoryID: (newCategoryID: number) => void,
  handleNextSlide: () => void,
  handlePreviousSlide: () => void,
};
