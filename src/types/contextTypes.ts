import { ReactNode } from 'react';

export type ProviderProps = {
  children: ReactNode,
};

export type SliderContextTypes = {
  currentSlide: number,
  currentCategory: string,
  currentCategoryID: number,
  handleNewCategory: (newCategory: string) => void,
  handleNewCategoryID: (newCategoryID: number) => void,
  handleNextSlide: () => void,
  handlePreviousSlide: () => void,
};
