import { MessageCard } from '../../components/cards/message-card/MessageCard';
import { Layout } from '../../components/layout/Layout';
import CategoryMenu from '../../components/navigation/category-menu/CategoryMenu';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className='app-banner bg-[url("/mock-category.png")] bg-cover bg-center -mt-4'>
        <div className=" flex items-center justify-start app-container min-h-[204px]">
          <div>
            <h1 className="app-title-1 text-app-yellow">Marcas y Tiendas</h1>
            <p className="app-subtitle-1 text-white">
              Descubre las marcas y tiendas que la gente quiere cerca
            </p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <CategoryMenu />
      </div>
      <div className="py-6 md:py-12">
        <EventSlider
          title="Populares en Lima"
          subtitle="Lo que las personas piden más"
          events={eventsMock}
        />
      </div>
      <div className="py-6 md:py-12">
        <EventSlider
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrías colaborar"
          events={eventsMock}
        />
      </div>
      <div className="py-8">
        <MessageCard />
      </div>
      <div className="py-12">
        <EventSlider
          events={eventsMock}
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
        />
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
