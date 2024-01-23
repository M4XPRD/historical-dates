import { DatesAndCategoriesProps } from '../../../types/sliderTypes';
import CategorySelection from '../CategorySelection/CategorySelection';
import Years from '../Years/Years';
import Wrapper from './DatesAndCategories.styled';

const DatesAndCategories = ({
  firstYear,
  lastYear,
  currentCategoryID,
  handleNewCategoryID,
}: DatesAndCategoriesProps) => (
  <Wrapper>
    <Years
      firstYear={firstYear}
      lastYear={lastYear}
    />
    <CategorySelection
      currentCategoryID={currentCategoryID}
      handleNewCategoryID={handleNewCategoryID}
    />
  </Wrapper>
);

export default DatesAndCategories;
