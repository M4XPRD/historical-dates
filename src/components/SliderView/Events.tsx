import styled from 'styled-components';
import slidersData from '../../utils/slidersData';
import useSlider from '../../hooks/useSlider';

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

const Events = () => {
  const { currentSlide, currentCategory } = useSlider();
  const currentSlideData = slidersData[currentSlide - 1];
  const { years, categories } = currentSlideData;

  const category = categories[currentCategory as keyof typeof categories];

  return (
    <Wrapper>
      {years.map((year: number, index: number) => (
        <EventWrapper key={years.indexOf(year)}>
          <CurrentYear key={year}>{year}</CurrentYear>
          <Paragraph key={category[index]}>{category[index]}</Paragraph>
        </EventWrapper>
      ))}
    </Wrapper>
  );
};

export default Events;
