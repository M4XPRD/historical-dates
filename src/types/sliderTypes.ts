export type CategoriesMapping = {
  [key: number | string]: string,
};

export type SlidersData = {
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

export type TimelineProps = {
  years: number[],
  category: string[],
};

export type DatesAndCategoriesProps = {
  firstYear: number,
  lastYear: number,
  currentCategoryID: number,
  handleNewCategoryID: (newCategoryID: number) => void,
};

export type YearsProps = Pick<DatesAndCategoriesProps, 'firstYear' | 'lastYear'>;

export type CategorySelectionProps = Omit<DatesAndCategoriesProps, 'firstYear' | 'lastYear'>;

export type SliderButtonsProps = {
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
