import { ReactNode } from 'react';

export type ProviderProps = {
  children: ReactNode,
};

export type SliderContextTypes = {
  currentSlide: number,
  currentCategory: string,
  handleNewCategory: (newCategory: string) => void,
  handleNextSlide: () => void,
  handlePreviousSlide: () => void,
};
