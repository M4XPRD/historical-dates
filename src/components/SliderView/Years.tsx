import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 6rem;

  font-family: var(--font-family);
  font-size: var(--fs-l);
  font-weight: var(--fw-bold);

  margin-right: 1.5rem;
  margin-bottom: 137px;
  margin-top: 96px;
`;

const YearFrom = styled.div`
  color: var(--colour-date-from);
  letter-spacing: -0.02em;
`;

const YearTo = styled.div`
  color: var(--colour-date-to);
  letter-spacing: -0.02em;
`;

const CurrentYears = () => (
  <Wrapper>
    <YearFrom>2015</YearFrom>
    <YearTo>2022</YearTo>
  </Wrapper>
);

export default CurrentYears;
