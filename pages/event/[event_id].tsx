import Image from 'next/image';
import { BiUser } from 'react-icons/bi';
import { ActionButton } from '../../components/buttons/ActionButton';
import { MessageCard } from '../../components/cards/message-card/MessageCard';
import { Layout } from '../../components/layout/Layout';
import CategoryMenu from '../../components/navigation/category-menu/CategoryMenu';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { useWindowSize } from '../../lib/hooks/useWindowSize';
import { NextPageWithLayout } from '../page';

export const EventDetailPage: NextPageWithLayout = () => {
  const windowSize = useWindowSize();
  return (
    <div>
      <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] app-banner">
        <CategoryMenu />
      </div>
      <div className="md:py-12">
        <div className="grid md:grid-cols-2 md:gap-12">
          <div className="flex flex-col h-[380px] justify-center gap-8">
            <div>
              <h1 className="app-title-1 pb-3">Concierto de Lady Gaga</h1>
              <p className="app-text-1">
                El concierto con la temática de Lady gaga en Las Vegas. El
                concierto con la temática de Lady gaga en Las Vegas.El concierto
                con la temática.
              </p>
            </div>
            <div>
              <a className="text-app-blue font-medium" href="#">
                ladygaga.com
              </a>
              <p className="flex items-center gap-2 text-app-blacklight font-medium">
                <BiUser />
                <span>1243 votos</span>
              </p>
            </div>
            {windowSize.width && windowSize.width > 700 && (
              <ActionButton className="!rounded-3xl">Votar</ActionButton>
            )}
          </div>
          <div className="flex items-center justify-center pb-12 md:pb-0">
            <Image
              src={'/mock-event-image.png'}
              alt=""
              width={540}
              height={380}
            />
          </div>
          {windowSize.width && windowSize.width <= 700 && (
            <ActionButton className="!rounded-3xl">Votar</ActionButton>
          )}
        </div>
      </div>
      <div className="py-8">
        <MessageCard />
      </div>
      <div className="py-6 md:py-12">
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

EventDetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default EventDetailPage;
