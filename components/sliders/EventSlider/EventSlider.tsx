import { FC } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

//const [like, setLike] = useState(false);

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: [
    {
      img: string;
      title: string;
      description: string;
      url: string;
      votes: string;
      id: string;
    },
    {
      img: string;
      title: string;
      description: string;
      url: string;
      votes: string;
      id: string;
    },
    {
      img: string;
      title: string;
      description: string;
      url: string;
      votes: string;
      id: string;
    }
  ];
  like?: boolean;
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle, events }) => {
  return (
    <div className="pt-10 pb-10">
      <div className="pb-6">
        <h2 className="app-title-2 pb-1">{title}</h2>
        <p className="app-subtitle-2 text-app-grayDark text-sm">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
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
          {events?.map((e) => (
            <SwiperSlide
              key={e.url}
              className={
                'bg-white max-w-[300px] min-w-[300px] h-[450px] ml-1 rounded-3xl shadow-app-card relative'
              }
            >
                <Link href={`/events/${e.id.toString()}`}>
                  
              <img
                className="rounded-t-3xl h-[201px] w-full"
                src={e.img}
                alt="Game shop"
                />
                  </Link>
              <div>
                <h3 className="app-title-3 text-center p-4 ">{e.title}</h3>

                <span className="absolute top-[180px] right-3">
                  <LikeButton />
                </span>
                <Link href={`/events/${e.id.toString()}`}>

                
                <p className="text-xs text-app-grayDark text-justify pl-9">
                  {e.description}
                </p>
                <a
                  href={e.url}
                  className="text-app-blue app-texto-2 pt-1 pb-1 pl-9 "
                  >
                  {e.url}
                </a>

                <div className="flex p-3 pb-9 justify-center">
                  <User_icon />
                  <p className="app-texto-2 pl-2 pr-2">{e.votes} votes</p>
                </div>
                </Link>
              </div>
              
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import LikeButton from '../../assets/svg/LikeButton';
import User_icon from '../../assets/svg/User_icon';
import Link from 'next/link';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
