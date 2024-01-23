import { YearsProps } from '../../../types/sliderTypes';
import { YearsWrapper, YearFrom, YearTo } from './Years.styled';

const Years = ({ firstYear, lastYear }: YearsProps) => (
  <YearsWrapper>
    <YearFrom>{firstYear}</YearFrom>
    <YearTo>{lastYear}</YearTo>
  </YearsWrapper>
);

export default Years;
