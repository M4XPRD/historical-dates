import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
} from 'swiper/modules';
import { TimelineProps } from '../../../types/sliderTypes';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Wrapper, EventWrapper, CurrentYear, Paragraph,
} from './Timeline.styled';

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
