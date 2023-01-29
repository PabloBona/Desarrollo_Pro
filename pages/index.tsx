import Logo from '../components/assets/logo/Logo';
import Button from '../components/buttons/Button';
import { MessageCard } from '../components/cards/message-card/MessageCard';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { Event } from '../lib/interfaces/Event.interface';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className="flex items-center justify-center gap-2">
            <Button>Marcas y tiendas</Button>
            <Button>Artistas y conciertos</Button>
            <Button>Torneos</Button>
          </div>
        </div>
      </div>
      {/* SLIDERS SECTION */}
      <div className="py-12">
        <EventSlider
          events={eventsMock}
          title="Populares en Lima"
          subtitle="Lo que las personas piden más"
        />
      </div>
      <div className="py-12">
        <EventSlider
          events={eventsMock}
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrías colaborar"
        />
      </div>
      <div className="py-12">
        <MessageCard />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

const eventsMock: Event[] = [
  {
    title: 'Concierto de Lady Gaga',
    short_description:
      'El concierto con la temática de Lady gaga en Las Vegas. El concierto con la temática de Lady gaga en Las Vegas.El concierto con la temática.',
    votes: 99203,
    url: 'ladygaga.com',
    image: '/mock-event-image.png',
  },
  {
    title: 'Tienda de ropa femenina ZARA',
    short_description:
      'Tienda de ropa para todos los gustos de grandes y chiquitos',
    votes: 99203,
    url: 'ladygaga.com',
    image: '/mock-event-image.png',
  },
  {
    title: 'Concierto de BTS',
    short_description: 'Grupo de música coreano',
    votes: 99203,
    url: 'ladygaga.com',
    image: '/mock-event-image.png',
  },
];
