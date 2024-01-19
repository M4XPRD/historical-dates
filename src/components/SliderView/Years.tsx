import styled from 'styled-components';
import { YearsTypes } from '../../types/sliderTypes';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  font-family: var(--font-family);
  font-size: var(--fs-l);
  font-weight: var(--fw-bold);

  max-height: 160px;
  padding-right: 5px;
`;

const YearFrom = styled.div`
  color: var(--colour-date-from);
  letter-spacing: -0.02em;
`;

const YearTo = styled.div`
  color: var(--colour-date-to);
  letter-spacing: -0.02em;
`;

const Years = ({ firstYear, lastYear }: YearsTypes) => (
  <Wrapper>
    <YearFrom>{firstYear}</YearFrom>
    <YearTo>{lastYear}</YearTo>
  </Wrapper>
);

export default Years;
