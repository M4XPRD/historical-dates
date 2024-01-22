import styled from 'styled-components';
import { DatesAndCategoriesProps } from '../../types/sliderTypes';
import CategorySelection from './CategorySelection';
import Years from './Years';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-size: var(--fs-l);
  font-weight: var(--fw-bold);

  max-height: 160px;
  
  @media (max-width: 1700px) {
    font-size: calc(var(--fs-l) - 1rem);
  }

  @media (max-width: 1400px) {
    font-size: calc(var(--fs-l) - 2rem);
  }

  @media (max-width: 1200px) {
    font-size: calc(var(--fs-l) - 3.5rem);
  }

  @media (max-width: 1000px) {
    font-size: calc(var(--fs-l) - 5rem);
  }
`;

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
