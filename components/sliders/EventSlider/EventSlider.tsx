import { FC } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Event } from '../../../lib/interfaces/Event.interface';
import { EventCard } from '../../cards/event-card/EventCard';
interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: Event[];
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle, events }) => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="app-title-2 pb-1">{title}</h2>
        <p className="app-subtitle-2">{subtitle}</p>
      </div>
      <div>
        <Swiper
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard
                image={event.image}
                short_description={event.short_description}
                url={event.url}
                title={event.title}
                votes={event.votes}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
