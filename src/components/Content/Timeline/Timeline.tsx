import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TimelineProps } from '../../../types/sliderTypes';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Wrapper,
  EventWrapper,
  CurrentYear,
  Paragraph,
} from './Timeline.styled';
import useScreenSize from '../../../hooks/useScreenSize';

const Timeline = ({ years, category }: TimelineProps) => {
  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={screenSize.width < 900 ? 2 : 3}
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
};

export default Timeline;
