import Image from 'next/image';
import { FC, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Heart } from '../../assets/svg/Heart';

interface IEventCard {
  title: string;
  short_description: string;
  url: string;
  votes: number;
  image: string;
}

export const EventCard: FC<IEventCard> = ({
  title,
  short_description,
  url,
  votes,
  image,
}) => {
  const [iActive, setIsActive] = useState(false);

  return (
    <div className="w-[299px] min-h-[454px] shadow-app-card rounded-[20px] my-2 mx-1">
      <div className="relative w-[299px] h-[239px] ">
        <Image
          src={image}
          alt="image event"
          fill
          style={{ objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
        />
      </div>
      <div className="px-6 py-4 flex flex-col gap-4 relative">
        <div>
          <h3 className="app-title-3 pb-2 truncate">{title}</h3>
          <div className="relative  max-h-[60px] min-h-[60px] overflow-hidden">
            <p className="app-text-1 z-0">{short_description}</p>
            <p className="block absolute z-10 w-full h-full top-0 right-0 text-gradient"></p>
          </div>
        </div>
        <div className="flex-col flex gap-3">
          <a className="text-app-blue font-medium" href="">
            {url}
          </a>
          <p className="flex items-center gap-2 text-app-blacklight font-medium">
            <BiUser />
            <span>{votes} votos</span>
          </p>
        </div>
        <div>
          <Heart
            isActive={iActive}
            onClick={() => setIsActive((prev) => !prev)}
            className={
              'cursor-pointer transition-all duration-500 hover:scale-105 absolute right-3 -top-7'
            }
          />
        </div>
      </div>
    </div>
  );
};
