import styled from 'styled-components';

export const YearsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  padding-right: 5px;
  padding-bottom: 15px;

  font-size: var(--fs-xl);
  color: var(--colour-date-from);
  letter-spacing: -0.02em;
  max-height: 160px;

  z-index: 0;

  @media (max-width: 1700px) {
    gap: 3rem;
  }

  @media (max-width: 1400px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    font-size: var(--fs-l);
  }
`;

export const YearFrom = styled.div`
  display: flex;
  align-items: center;
  max-height: 160px;

  color: var(--colour-date-from);
`;

export const YearTo = styled.div`
  display: flex;
  align-items: center;
  max-height: 160px;

  color: var(--colour-date-to);
`;
