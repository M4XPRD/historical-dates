import styled from 'styled-components';

export const Wrapper = styled.section`
  box-sizing: border-box;

  display: flex;
  align-self: flex-start;
  flex-direction: row;

  width: 100%;
  height: 150px;

  padding-left: 80px;
  padding-right: 80px;
`;

export const EventWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 400px;

  cursor: pointer;
`;

export const CurrentYear = styled.div`
  font-family: var(--font-family-secondary);
  font-size: var(--fs-s);
  font-weight: var(--fw-standart);
  color: var(--colour-small-date);
`;

export const Paragraph = styled.p`
  font-family: var(--font-family);
  font-size: var(--fs-xs);
  font-weight: var(--fw-standart);
  color: var(--colour-main);
`;
