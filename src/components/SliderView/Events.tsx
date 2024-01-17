import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 80px;
`;

const EventWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

const Events = () => (
  <Wrapper>
    <EventWrapper>
      <CurrentYear>2015</CurrentYear>
      <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Paragraph>
    </EventWrapper>
  </Wrapper>
);

export default Events;
