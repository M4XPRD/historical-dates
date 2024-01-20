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
`;

const YearsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  padding-right: 5px;
  padding-bottom: 15px;

  color: var(--colour-date-from);
  letter-spacing: -0.02em;
  max-height: 160px;

  z-index: 10;
`;

const YearFrom = styled.div`
  display: flex;
  align-items: center;
  max-height: 160px;
  color: var(--colour-date-from);
`;

const YearTo = styled.div`
  display: flex;
  align-items: center;
  max-height: 160px;
  color: var(--colour-date-to);
`;

const EllipseWrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  width: 76%;
`;

const Ellipse = styled.div`
  width: 500px;
  height: 500px;

  border: 1px solid rgba(66, 86, 122, .2);
  border-radius: 50%;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  border-bottom: 1px solid rgba(66, 86, 122, .1);
  top: 50%;
  right: 0;
`;

const Years = ({ firstYear, lastYear }: YearsTypes) => (
  <Wrapper>
    <YearsWrapper>
      <YearFrom>{firstYear}</YearFrom>
      <YearTo>{lastYear}</YearTo>
    </YearsWrapper>
    <EllipseWrapper>
      <Ellipse>
        <Line />
      </Ellipse>
    </EllipseWrapper>
  </Wrapper>
);

export default Years;
