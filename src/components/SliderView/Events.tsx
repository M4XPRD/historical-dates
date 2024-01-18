import styled from 'styled-components';
import { EventsTypes } from '../../types/sliderTypes';

const Wrapper = styled.section`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 80px;

  width: 100%;

  margin-left: 80px;
`;

const EventWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-height: 135px;
`;

const CurrentYear = styled.div`
  font-family: var(--font-family-secondary);
  font-size: var(--fs-s);
  font-weight: var(--fw-standart);
  color: var(--colour-small-date);
`;

const Paragraph = styled.p`
  font-family: var(--font-family);
  font-size: var(--fs-xs);
  font-weight: var(--fw-standart);
  color: var(--colour-main);
`;

const Events = ({ years, category }: EventsTypes) => (
  <Wrapper>
    {years.map((year: number, index: number) => (
      <EventWrapper key={years.indexOf(year)}>
        <CurrentYear key={year}>{year}</CurrentYear>
        <Paragraph key={category[index]}>{category[index]}</Paragraph>
      </EventWrapper>
    ))}
  </Wrapper>
);

export default Events;
