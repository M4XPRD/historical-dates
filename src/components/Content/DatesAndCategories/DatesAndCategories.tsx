import { DatesAndCategoriesProps } from '../../../types/sliderTypes';
import CategorySelection from '../CategorySelection/CategorySelection';
import Years from '../Years/Years';
import Wrapper from './DatesAndCategories.styled';

const DatesAndCategories = ({
  startingYear,
  endingYear,
  currentCategoryID,
  handleNewCategoryID,
}: DatesAndCategoriesProps) => (
  <Wrapper>
    <Years startingYear={startingYear} endingYear={endingYear} />
    <CategorySelection
      currentCategoryID={currentCategoryID}
      handleNewCategoryID={handleNewCategoryID}
    />
  </Wrapper>
);

export default DatesAndCategories;
