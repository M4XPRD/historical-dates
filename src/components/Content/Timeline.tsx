import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
} from 'swiper/modules';
import { TimelineProps } from '../../types/sliderTypes';
import 'swiper/css';
import 'swiper/css/navigation';

const Wrapper = styled.section`
  box-sizing: border-box;

  display: flex;
  align-self: flex-start;
  flex-direction: row;

  width: 100%;
  height: 135px;

  padding-left: 80px;
  padding-right: 80px;
`;

const EventWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 400px;

  cursor: pointer;
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

const Timeline = ({ years, category }: TimelineProps) => (
  <Wrapper>
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
    >
      {years.map((year: number, index: number) => (
        <SwiperSlide key={`${years}_${years.indexOf(year)}`}>
          <EventWrapper key={years.indexOf(year)}>
            <CurrentYear key={year}>{year}</CurrentYear>
            <Paragraph key={category[index]}>{category[index]}</Paragraph>
          </EventWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);

export default Timeline;
