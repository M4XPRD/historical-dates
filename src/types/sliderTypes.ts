export type CategoriesMapping = {
  [key: number | string]: string,
};

export type SliderData = {
  years: number[];
  categories: {
    movies: string[];
    literature: string[];
    science: string[];
    music: string[];
    sport: string[];
    theater: string[];
  };
};

export type EventsTypes = {
  years: number[],
  category: string[],
};

export type YearsTypes = {
  firstYear: number,
  lastYear: number,
  currentCategoryID: number,
  handleNewCategoryID: (newCategoryID: number) => void,
};

export type SliderButtonsTypes = {
  currentSlide: number,
  handleNextSlide: () => void,
  handlePreviousSlide: () => void,
  slidersLength: number,
  formattedCurrentSlide: string,
  totalSliders: string,
};
export type DotProps = {
  id: number,
  $position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  transform: {
    hoverTransform: string;
  };
};
