import styled from 'styled-components';
import { YearsTypes } from '../../types/sliderTypes';
import dotsPositionMapping from '../../utils/dotsPositionsMapping';
import { DotProps } from '../../types/dotPositionsTypes';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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

  z-index: 0;
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
  box-sizing: border-box;

  width: 500px;
  height: 500px;

  border: 1px solid rgba(66, 86, 122, 0.2);
  border-radius: 50%;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  border-bottom: 1px solid rgba(66, 86, 122, 0.1);
  top: 50%;
  right: 0;
`;

const DotsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Dot = styled.div<DotProps>`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 6px;
  height: 6px;
  background-color: var(--colour-main);
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  ${({ position }) => position};

  &.active,
  &:hover {
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    background-color: var(--colour-background);
    border: 1px solid var(--colour-dot);
    ${({ transform }) => `transform: ${transform.hoverTransform};`}

    &:after {
      color: var(--colour-main);
      font-size: var(--fs-xs);
      content: ${({ id }) => `"${id}"`};
    }
  }
`;

const Years = ({ firstYear, lastYear }: YearsTypes) => (
  <Wrapper>
    <YearsWrapper>
      <YearFrom>{firstYear}</YearFrom>
      <YearTo>{lastYear}</YearTo>
    </YearsWrapper>
    <EllipseWrapper>
      <Ellipse>
        <DotsContainer>
          {dotsPositionMapping.map(({ id, position, transform }) => (
            <Dot
              key={id}
              id={id}
              position={position}
              transform={transform}
              className={id === 3 ? 'active' : ''}
            />
          ))}
        </DotsContainer>
        <Line />
      </Ellipse>
    </EllipseWrapper>
  </Wrapper>
);

export default Years;
